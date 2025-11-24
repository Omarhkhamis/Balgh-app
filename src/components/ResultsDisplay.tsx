'use client';

import React, { useRef, useState } from 'react';

interface ResultsDisplayProps {
    result: any;
}

const SUPPORTED_COUNTRIES = [
    "Syria", "Germany", "Turkey", "France", "USA", "UK", "Canada",
    "Netherlands", "Sweden", "Austria", "Belgium", "Switzerland", "Spain"
];

const SYRIAN_GROUPS = [
    "اللاجئون السوريون",
    "الأكراد",
    "العلويون",
    "السنة",
    "المسيحيون",
    "الدروز",
    "النساء",
    "الأطفال",
    "المعارضة السياسية",
    "النظام السوري",
    "أخرى"
];

export default function ResultsDisplay({ result }: ResultsDisplayProps) {
    const [reportMode, setReportMode] = useState<'self' | 'initiative' | null>(null);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [legalReport, setLegalReport] = useState("");
    const [isGeneratingReport, setIsGeneratingReport] = useState(false);
    const reportRef = useRef<HTMLTextAreaElement>(null);

    // Initiative form fields
    const [postLink, setPostLink] = useState("");
    const [reporterCountry, setReporterCountry] = useState("");
    const [targetGroup, setTargetGroup] = useState("");

    const handleGenerateReport = async () => {
        if (!selectedCountry) return;

        setIsGeneratingReport(true);
        try {
            const response = await fetch('/api/generate-report', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    jurisdiction: selectedCountry,
                    text: result.text || '',
                    reasoning_ar: result.reasoning_ar,
                    severity_score: result.severity_score,
                    legal_citation: result.legal_citation
                })
            });

            const data = await response.json();
            if (data.report) {
                setLegalReport(data.report);
            }
        } catch (error) {
            console.error('Error generating report:', error);
        } finally {
            setIsGeneratingReport(false);
        }
    };

    const handleInitiativeSubmit = async () => {
        if (!postLink || !reporterCountry || !targetGroup) {
            alert('الرجاء ملء جميع الحقول');
            return;
        }

        try {
            const response = await fetch('/api/log-analysis', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    text: result.text || '',
                    classification: result.classification,
                    severity_score: result.severity_score,
                    risk_level: result.risk_level,
                    reasoning_ar: result.reasoning_ar,
                    post_link: postLink,
                    reporter_country: reporterCountry,
                    target_group: targetGroup,
                    timestamp: new Date().toISOString()
                })
            });

            if (response.ok) {
                alert('تم إرسال البلاغ بنجاح! سنتواصل معك قريباً.');
                setPostLink('');
                setReporterCountry('');
                setTargetGroup('');
            }
        } catch (error) {
            console.error('Error submitting report:', error);
            alert('حدث خطأ أثناء إرسال البلاغ');
        }
    };

    const copyReport = () => {
        if (reportRef.current) {
            reportRef.current.select();
            document.execCommand('copy');
            alert('تم نسخ التقرير');
        }
    };

    const getCategoryLabel = (category: string) => {
        switch (category) {
            case 'Hate Speech': return 'خطاب كراهية';
            case 'Incitement to Violence': return 'تحريض على العنف';
            default: return 'آمن';
        }
    };

    const getRiskColor = (riskLevel: string) => {
        switch (riskLevel) {
            case 'Critical':
            case 'High':
                return 'text-red-600 bg-red-50 border-red-200';
            case 'Medium':
                return 'text-orange-600 bg-orange-50 border-orange-200';
            default:
                return 'text-green-600 bg-green-50 border-green-200';
        }
    };

    const getRiskLabel = (riskLevel: string) => {
        switch (riskLevel) {
            case 'Critical': return 'حرج';
            case 'High': return 'عالي';
            case 'Medium': return 'متوسط';
            default: return 'منخفض';
        }
    };

    const shouldShowReporting = result.risk_level === 'High' ||
        result.risk_level === 'Critical' ||
        result.risk_level === 'Medium';

    const severityPercent = Math.round((result.severity_score || 0) * 10);
    const vulnerabilityScore = result.vulnerability_score || 0;
    const contextScore = result.context_score || 0;

    return (
        <div className="w-full max-w-4xl mx-auto mt-12 animate-fade-in-up">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                {/* Results Section */}
                <div className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">نتيجة التحليل</h2>

                    {/* Main Result Cards */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className={`rounded-xl p-6 text-center border-2 ${getRiskColor(result.risk_level)}`}>
                            <div className="text-sm mb-2">التصنيف</div>
                            <div className="text-2xl font-bold">
                                {getCategoryLabel(result.classification)}
                            </div>
                        </div>
                        <div className={`rounded-xl p-6 text-center border-2 ${getRiskColor(result.risk_level)}`}>
                            <div className="text-sm mb-2">مستوى الخطر</div>
                            <div className="text-2xl font-bold">
                                {getRiskLabel(result.risk_level)}
                            </div>
                        </div>
                    </div>

                    {/* Scoring Criteria */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 mb-6">
                        <h3 className="font-bold text-gray-900 mb-4 text-center">معايير التقييم</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                                <div className="text-xs text-gray-500 mb-2">الحدة</div>
                                <div className={`text-2xl font-bold ${severityPercent > 70 ? 'text-red-600' :
                                    severityPercent > 40 ? 'text-orange-600' : 'text-green-600'
                                    }`}>
                                    {result.severity_score}/10
                                </div>
                            </div>
                            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                                <div className="text-xs text-gray-500 mb-2">الاستضعاف</div>
                                <div className={`text-2xl font-bold ${vulnerabilityScore >= 4 ? 'text-red-600' :
                                    vulnerabilityScore >= 3 ? 'text-orange-600' : 'text-green-600'
                                    }`}>
                                    {vulnerabilityScore}/5
                                </div>
                            </div>
                            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                                <div className="text-xs text-gray-500 mb-2">السياق</div>
                                <div className={`text-2xl font-bold ${contextScore >= 3 ? 'text-red-600' :
                                    contextScore >= 2 ? 'text-orange-600' : 'text-green-600'
                                    }`}>
                                    {contextScore}/4
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Detailed Analysis */}
                    <div className="bg-gray-50 rounded-xl p-6">
                        <h3 className="font-bold text-gray-900 mb-3">التحليل التفصيلي</h3>
                        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                            {result.reasoning_ar || result.reasoning}
                        </p>
                    </div>

                    {/* Share Button */}
                    <div className="mt-6">
                        <button
                            onClick={() => {
                                const shareText = `🔍 نتيجة تحليل خطاب الكراهية\n\n📊 التصنيف: ${getCategoryLabel(result.classification)}\n⚠️ مستوى الخطر: ${getRiskLabel(result.risk_level)}\n📈 الحدة: ${result.severity_score}/10\n📍 الاستضعاف: ${vulnerabilityScore}/5\n🌍 السياق: ${contextScore}/4\n\n✍️ التحليل:\n${(result.reasoning_ar || result.reasoning).substring(0, 200)}...\n\n🔗 مبادرة بلاغ لمكافحة خطاب الكراهية`;

                                if (navigator.share) {
                                    navigator.share({
                                        title: 'نتيجة تحليل خطاب الكراهية',
                                        text: shareText,
                                    }).catch(() => {
                                        // Fallback to clipboard
                                        navigator.clipboard.writeText(shareText);
                                        alert('تم نسخ النتيجة إلى الحافظة');
                                    });
                                } else {
                                    navigator.clipboard.writeText(shareText);
                                    alert('تم نسخ النتيجة إلى الحافظة. يمكنك مشاركتها الآن!');
                                }
                            }}
                            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                        >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                            </svg>
                            <span className="text-lg">مشاركة النتيجة</span>
                        </button>
                        <p className="text-xs text-gray-500 text-center mt-2">
                            شارك النتيجة على وسائل التواصل الاجتماعي أو انسخها للحافظة
                        </p>
                    </div>
                </div>

                {/* Reporting Section - Only show if risk is Medium, High, or Critical */}
                {shouldShowReporting && (
                    <div className="p-8 bg-gray-50 border-t-4 border-red-500">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">شاشة التبليغ</h3>

                        {/* Mode Selection */}
                        {!reportMode && (
                            <div className="grid md:grid-cols-2 gap-6">
                                <button
                                    onClick={() => setReportMode('self')}
                                    className="bg-gradient-to-br from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-8 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl flex flex-col items-center gap-3"
                                >
                                    <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-xl">بلغ بنفسك</span>
                                    <span className="text-sm opacity-90">تقرير مباشر للسلطات</span>
                                </button>
                                <button
                                    onClick={() => setReportMode('initiative')}
                                    className="bg-gradient-to-br from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-8 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl flex flex-col items-center gap-3"
                                >
                                    <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span className="text-xl">بلغ عبر المبادرة</span>
                                    <span className="text-sm opacity-90">نساعدك في التبليغ</span>
                                </button>
                            </div>
                        )}

                        {/* Self Report Mode */}
                        {reportMode === 'self' && (
                            <div className="bg-white rounded-xl p-6 shadow-lg">
                                <div className="flex justify-between items-center mb-6">
                                    <h4 className="text-xl font-bold text-gray-900">بلغ بنفسك</h4>
                                    <button
                                        onClick={() => setReportMode(null)}
                                        className="text-gray-500 hover:text-gray-700"
                                    >
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">
                                            اختر الدولة المتواجد فيها مطلق خطاب الكراهية
                                        </label>
                                        <select
                                            value={selectedCountry}
                                            onChange={(e) => setSelectedCountry(e.target.value)}
                                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                                        >
                                            <option value="">اختر الدولة</option>
                                            {SUPPORTED_COUNTRIES.map(c => (
                                                <option key={c} value={c}>{c}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {selectedCountry && (
                                        <>
                                            <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4">
                                                <h5 className="font-bold text-purple-900 mb-2">السند القانوني</h5>
                                                <p className="text-purple-800">
                                                    {selectedCountry === 'Syria' && 'المادة 287 من قانون العقوبات السوري'}
                                                    {selectedCountry === 'Germany' && 'NetzDG - Network Enforcement Act'}
                                                    {selectedCountry === 'Turkey' && 'TCK 216 - Turkish Penal Code'}
                                                    {selectedCountry === 'France' && 'Loi Avia - French Hate Speech Law'}
                                                    {!['Syria', 'Germany', 'Turkey', 'France'].includes(selectedCountry) && 'قوانين مكافحة خطاب الكراهية'}
                                                </p>
                                            </div>

                                            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                                                <h5 className="font-bold text-blue-900 mb-2">جهة التبليغ</h5>
                                                <p className="text-blue-800 mb-3">
                                                    {selectedCountry === 'Syria' && 'النيابة العامة السورية'}
                                                    {selectedCountry === 'Germany' && 'Federal Office of Justice (BfJ)'}
                                                    {selectedCountry === 'Turkey' && 'Turkish Prosecutor\'s Office'}
                                                    {selectedCountry === 'France' && 'PHAROS Platform'}
                                                    {!['Syria', 'Germany', 'Turkey', 'France'].includes(selectedCountry) && 'السلطات المختصة'}
                                                </p>
                                                <a
                                                    href="#"
                                                    className="text-blue-600 hover:text-blue-800 font-medium underline"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    رابط التبليغ المباشر ←
                                                </a>
                                            </div>

                                            <button
                                                onClick={handleGenerateReport}
                                                disabled={isGeneratingReport}
                                                className={`w-full py-4 rounded-lg font-bold text-white transition-all ${isGeneratingReport
                                                    ? 'bg-gray-300 cursor-not-allowed'
                                                    : 'bg-purple-600 hover:bg-purple-700 shadow-lg hover:shadow-xl'
                                                    }`}
                                            >
                                                {isGeneratingReport ? 'جاري إنشاء التقرير...' : 'استخراج تقرير قانوني'}
                                            </button>

                                            {legalReport && (
                                                <div className="animate-fade-in">
                                                    <textarea
                                                        ref={reportRef}
                                                        readOnly
                                                        value={legalReport}
                                                        className="w-full h-96 p-6 border-2 border-gray-300 rounded-lg font-serif text-base bg-white text-gray-900 leading-relaxed shadow-inner mb-4"
                                                        dir="rtl"
                                                    />
                                                    <button
                                                        onClick={copyReport}
                                                        className="w-full px-4 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-colors"
                                                    >
                                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                                        </svg>
                                                        نسخ التقرير
                                                    </button>
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Initiative Report Mode */}
                        {reportMode === 'initiative' && (
                            <div className="bg-white rounded-xl p-6 shadow-lg">
                                <div className="flex justify-between items-center mb-6">
                                    <h4 className="text-xl font-bold text-gray-900">بلغ عبر المبادرة</h4>
                                    <button
                                        onClick={() => setReportMode(null)}
                                        className="text-gray-500 hover:text-gray-700"
                                    >
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">
                                            رابط المنشور
                                        </label>
                                        <input
                                            type="url"
                                            value={postLink}
                                            onChange={(e) => setPostLink(e.target.value)}
                                            placeholder="https://..."
                                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">
                                            بلد المبلغ عنه
                                        </label>
                                        <select
                                            value={reporterCountry}
                                            onChange={(e) => setReporterCountry(e.target.value)}
                                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                                        >
                                            <option value="">اختر الدولة</option>
                                            {SUPPORTED_COUNTRIES.map(c => (
                                                <option key={c} value={c}>{c}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">
                                            ضد أي مجموعة الكراهية
                                        </label>
                                        <select
                                            value={targetGroup}
                                            onChange={(e) => setTargetGroup(e.target.value)}
                                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                                        >
                                            <option value="">اختر المجموعة</option>
                                            {SYRIAN_GROUPS.map(g => (
                                                <option key={g} value={g}>{g}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <button
                                        onClick={handleInitiativeSubmit}
                                        className="w-full py-4 rounded-lg font-bold text-white bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl transition-all"
                                    >
                                        إرسال البلاغ
                                    </button>

                                    <p className="text-xs text-gray-500 text-center">
                                        سيتم مراجعة بلاغك من قبل فريق المبادرة والتواصل معك في أقرب وقت
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
