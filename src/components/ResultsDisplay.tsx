'use client';

import React, { useRef, useState } from 'react';
import { AnalysisResult } from '@/lib/report-generator';
import FeedbackModal from '@/components/FeedbackModal';
import { COUNTRY_LEGAL_DATA } from '@/lib/countryReportingData';
import { useTranslations } from 'next-intl';



const SUPPORTED_COUNTRIES = [
    "Syria", "Germany", "Turkey", "France", "USA", "UK", "Canada",
    "Netherlands", "Sweden", "Austria", "Belgium", "Switzerland", "Spain"
];

const SYRIAN_GROUPS = [
    "العرب",
    "الأكراد",
    "التركمان",
    "السريان الآشوريين",
    "الأرمن",
    "الشركس",
    "السنة",
    "العلويون",
    "المسيحيون",
    "الدروز",
    "الشيعة",
    "الإسماعيليون",
    "الإيزيديون",
    "الأقليات بشكل عام",
    "النساء",
    "النازحون",
    "اللاجئون"
];

export default function ResultsDisplay({ result }: { result: AnalysisResult }) {
    const t = useTranslations('results');
    const tFeedback = useTranslations('feedback');
    const [reportMode, setReportMode] = useState<'self' | 'initiative' | null>(null);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [legalReport, setLegalReport] = useState("");
    const [isGeneratingReport, setIsGeneratingReport] = useState(false);
    const reportRef = useRef<HTMLTextAreaElement>(null);

    // Initiative form fields
    const [postLink, setPostLink] = useState("");
    const [reporterCountry, setReporterCountry] = useState("");
    const [targetGroup, setTargetGroup] = useState("");

    // Feedback modal state
    const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);


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
                    reasoning_ar: result.reasoning_ar || result.rationale || '',
                    severity_score: result.severity_score,
                    legal_citation: result.legal_citation
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to generate report');
            }

            if (data.report) {
                setLegalReport(data.report);
            }
        } catch (error: any) {
            console.error('Error generating report:', error);
            alert(error.message || t('reportError') || 'حدث خطأ أثناء استخراج التقرير. يرجى المحاولة مرة أخرى.');
        } finally {
            setIsGeneratingReport(false);
        }
    };

    const handleInitiativeSubmit = async () => {
        if (!postLink || !reporterCountry || !targetGroup) {
            alert(t('fillAllFields'));
            return;
        }

        try {
            const response = await fetch('/api/log-analysis', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    text: result.text || '',
                    text: result.text || '',
                    classification: result.classification,
                    severity_score: result.severity_score,
                    risk_level: result.risk_level,
                    reasoning_ar: result.reasoning_ar,
                    image_description: result.image_description,
                    post_link: postLink,
                    reporter_country: reporterCountry,
                    target_group: targetGroup,
                    timestamp: new Date().toISOString()
                })
            });

            if (response.ok) {
                alert(t('reportSuccess'));
                setPostLink('');
                setReporterCountry('');
                setTargetGroup('');
            }
        } catch (error) {
            console.error('Error submitting report:', error);
            alert(t('reportError'));
        }
    };

    const copyReport = () => {
        if (reportRef.current) {
            reportRef.current.select();
            document.execCommand('copy');
            alert(t('copyReport'));
        }
    };

    const getCategoryLabel = (category: string) => {
        switch (category) {
            case 'Hate Speech':
            case 'Incitement to Violence':
            case 'خطاب كراهية':
                return t('categories.hate_speech');
            case 'Harassment':
                return t('categories.harassment');
            case 'Safe':
            case 'محتوى غير كاره':
                return t('categories.safe');
            default: return t('categories.safe');
        }
    };

    const getRiskColor = (riskLevel: string) => {
        switch (riskLevel) {
            case 'Critical':
            case 'High':
            case 'عالٍ':
                return 'text-red-600 bg-red-50 border-red-200';
            case 'Medium':
            case 'متوسط':
                return 'text-orange-600 bg-orange-50 border-orange-200';
            default:
                return 'text-green-600 bg-green-50 border-green-200';
        }
    };

    const getRiskLabel = (riskLevel: string) => {
        switch (riskLevel) {
            case 'Critical': return t('risk.high');
            case 'High':
            case 'عالٍ':
                return t('risk.high');
            case 'Medium':
            case 'متوسط':
                return t('risk.medium');
            case 'Low':
            case 'منخفض':
                return t('risk.low');
            default: return t('risk.low');
        }
    };

    const shouldShowReporting = result.risk_level === 'High' ||
        result.risk_level === 'Critical' ||
        result.risk_level === 'Medium' ||
        result.risk_level === 'عالٍ' ||
        result.risk_level === 'متوسط';

    // Parse scores from string "X/Y" to number for display logic if needed, or just display as string
    const intensityDisplay = result.scores?.intensity || "0/10";
    const vulnerabilityDisplay = result.scores?.vulnerability || "0/5";
    const contextDisplay = result.scores?.context || "0/4";

    // Helper to extract number for color logic
    const getScoreNum = (scoreStr: string) => parseInt(scoreStr?.split('/')[0] || "0");

    const intensityNum = getScoreNum(intensityDisplay);
    const vulnerabilityNum = getScoreNum(vulnerabilityDisplay);
    const contextNum = getScoreNum(contextDisplay);

    return (
        <div className="w-full max-w-4xl mx-auto mt-12 animate-fade-in-up">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                {/* Results Section */}
                <div className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t('title')}</h2>

                    {/* Main Result Cards */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className={`rounded-xl p-6 text-center border-2 ${getRiskColor(result.risk_level)}`}>
                            <div className="text-sm mb-2">{t('classification')}</div>
                            <div className="text-2xl font-bold">
                                {getCategoryLabel(result.classification)}
                            </div>
                        </div>
                        <div className={`rounded-xl p-6 text-center border-2 ${getRiskColor(result.risk_level)}`}>
                            <div className="text-sm mb-2">{t('riskLevel')}</div>
                            <div className="text-2xl font-bold">
                                {getRiskLabel(result.risk_level)}
                            </div>
                        </div>
                    </div>



                    {/* Determinants Section */}
                    {(result.target_group || (result.detected_markers && result.detected_markers.length > 0)) && (
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 mb-6">
                            <h3 className="font-bold text-gray-900 mb-4 text-center">{t('detectedDeterminants')}</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                {result.target_group && (
                                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                                        <div className="text-xs text-gray-500 mb-2">{t('targetGroupLabel')}</div>
                                        <div className="text-lg font-bold text-purple-700">
                                            {/* Display the target group directly as it comes from the API (Arabic) */}
                                            {result.target_group}
                                        </div>
                                    </div>
                                )}
                                {result.detected_markers && result.detected_markers.length > 0 && (
                                    <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                                        <div className="text-xs text-gray-500 mb-2">{t('intentSignal')}</div>
                                        <div className="flex flex-wrap gap-2 justify-center">
                                            {result.detected_markers.map((marker, idx) => (
                                                <span key={idx} className="px-2 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-bold">
                                                    {marker}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Detailed Analysis */}
                    <div className="bg-gray-50 rounded-xl p-6">
                        <h3 className="font-bold text-gray-900 mb-3">{t('reasoning')}</h3>
                        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                            {result.rationale || result.reasoning_ar}
                        </p>
                    </div>

                    {/* Compact Feedback Section */}
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-4">
                        <div className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-2 flex-1">
                                <span className="text-2xl">💡</span>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">{tFeedback('title')}</h4>
                                    <p className="text-xs text-gray-600">{tFeedback('description')}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsFeedbackModalOpen(true)}
                                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-all shadow-sm hover:shadow-md text-sm whitespace-nowrap"
                            >
                                {t('feedbackButton')}
                            </button>
                        </div>
                    </div>

                    {/* Share Button */}
                    <div className="mt-6">
                        <button
                            onClick={() => {
                                const shareText = `🔍 نتيجة تحليل خطاب الكراهية\n\n📊 التصنيف: ${getCategoryLabel(result.classification)}\n⚠️ مستوى الخطر: ${getRiskLabel(result.risk_level)}\n📈 الحدة: ${result.severity_score || '0'}/10\n📍 الاستضعاف: ${result.scores?.vulnerability || '0'}/5\n🌍 السياق: ${result.scores?.context || '0'}/4\n\n✍️ التحليل:\n${(result.reasoning_ar || result.rationale || '').substring(0, 200)}...\n\n🔗 مبادرة بلاغ لمكافحة خطاب الكراهية`;

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
                            <span className="text-lg">{t('share')}</span>
                        </button>
                        <p className="text-xs text-gray-500 text-center mt-2">
                            {t('shareDesc')}
                        </p>
                    </div>
                </div>

                {/* Reporting Section - Only show if risk is Medium, High, or Critical */}
                {shouldShowReporting && (
                    <div className="p-8 bg-gray-50 border-t-4 border-red-500">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{t('reportingScreen')}</h3>

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
                                    <span className="text-xl">{t('reportSelf')}</span>
                                    <span className="text-sm opacity-90">{t('reportSelfDesc')}</span>
                                </button>
                                <button
                                    onClick={() => setReportMode('initiative')}
                                    className="bg-gradient-to-br from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-8 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl flex flex-col items-center gap-3"
                                >
                                    <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span className="text-xl">{t('reportInitiative')}</span>
                                    <span className="text-sm opacity-90">{t('reportInitiativeDesc')}</span>
                                </button>
                            </div>
                        )}

                        {/* Self Report Mode */}
                        {reportMode === 'self' && (
                            <div className="bg-white rounded-xl p-6 shadow-lg">
                                <div className="flex justify-between items-center mb-6">
                                    <h4 className="text-xl font-bold text-gray-900">{t('reportSelf')}</h4>
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
                                            {t('selectCountry')}
                                        </label>
                                        <select
                                            value={selectedCountry}
                                            onChange={(e) => setSelectedCountry(e.target.value)}
                                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                                        >
                                            <option value="">{t('selectCountry')}</option>
                                            {SUPPORTED_COUNTRIES.map(c => (
                                                <option key={c} value={c}>{c}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {selectedCountry && COUNTRY_LEGAL_DATA[selectedCountry] && (
                                        <>
                                            {/* Compact Legal Info Card */}
                                            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-200 rounded-xl p-5 shadow-sm">
                                                {/* Header */}
                                                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-indigo-200">
                                                    <span className="text-3xl">{COUNTRY_LEGAL_DATA[selectedCountry].flag}</span>
                                                    <div className="flex-1">
                                                        <h5 className="font-bold text-indigo-900 text-base">{t('legalInfo')}</h5>
                                                        <p className="text-xs text-indigo-600">{COUNTRY_LEGAL_DATA[selectedCountry].countryNameAr}</p>
                                                    </div>
                                                </div>

                                                {/* Compact Content in 2 Columns */}
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    {/* Left: Laws */}
                                                    <div className="bg-white bg-opacity-70 p-3 rounded-lg">
                                                        <h6 className="font-bold text-indigo-900 mb-2 text-xs flex items-center gap-1">
                                                            <span>⚖️</span>
                                                            <span>{t('laws')}</span>
                                                        </h6>
                                                        <ul className="space-y-1">
                                                            {COUNTRY_LEGAL_DATA[selectedCountry].lawsAr.map((law, idx) => (
                                                                <li key={idx} className="text-indigo-800 text-xs leading-tight">
                                                                    • {law}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Right: Agencies */}
                                                    <div className="bg-white bg-opacity-70 p-3 rounded-lg">
                                                        <h6 className="font-bold text-indigo-900 mb-2 text-xs flex items-center gap-1">
                                                            <span>🏛️</span>
                                                            <span>{t('agencies')}</span>
                                                        </h6>
                                                        <div className="space-y-2">
                                                            {COUNTRY_LEGAL_DATA[selectedCountry].agencies.map((agency, idx) => (
                                                                <div key={idx} className="text-xs">
                                                                    <div className="font-semibold text-gray-900 mb-1">{agency.nameAr}</div>
                                                                    <a
                                                                        href={agency.website}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-1"
                                                                    >
                                                                        <span>🔗</span>
                                                                        <span>{t('directLink')}</span>
                                                                        <span>↗</span>
                                                                    </a>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Definition at bottom */}
                                                <div className="mt-3 pt-3 border-t border-indigo-100">
                                                    <p className="text-indigo-800 text-xs leading-relaxed italic">
                                                        💡 {COUNTRY_LEGAL_DATA[selectedCountry].definitionAr}
                                                    </p>
                                                </div>
                                            </div>

                                            <button
                                                onClick={handleGenerateReport}
                                                disabled={isGeneratingReport}
                                                className={`w-full py-4 rounded-lg font-bold text-white transition-all ${isGeneratingReport
                                                    ? 'bg-gray-300 cursor-not-allowed'
                                                    : 'bg-purple-600 hover:bg-purple-700 shadow-lg hover:shadow-xl'
                                                    }`}
                                            >
                                                {isGeneratingReport ? t('generating') : t('generateReport')}
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
                                                        {t('copyReport')}
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
                                    <h4 className="text-xl font-bold text-gray-900">{t('reportInitiative')}</h4>
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
                                            {t('postLink')}
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
                                            {t('reporterCountry')}
                                        </label>
                                        <select
                                            value={reporterCountry}
                                            onChange={(e) => setReporterCountry(e.target.value)}
                                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                                        >
                                            <option value="">{t('selectCountry')}</option>
                                            {SUPPORTED_COUNTRIES.map(c => (
                                                <option key={c} value={c}>{c}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">
                                            {t('targetGroup')}
                                        </label>
                                        <select
                                            value={targetGroup}
                                            onChange={(e) => setTargetGroup(e.target.value)}
                                            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                                        >
                                            <option value="">{t('targetGroup')}</option>
                                            {SYRIAN_GROUPS.map(g => (
                                                <option key={g} value={g}>{g}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <button
                                        onClick={handleInitiativeSubmit}
                                        className="w-full py-4 rounded-lg font-bold text-white bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl transition-all"
                                    >
                                        {t('submitReport')}
                                    </button>

                                    <p className="text-xs text-gray-500 text-center">
                                        {t('reviewMessage')}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Feedback Modal */}
            <FeedbackModal
                isOpen={isFeedbackModalOpen}
                onClose={() => setIsFeedbackModalOpen(false)}
                originalText={result.text || ''}
                aiClassification={result.classification}
                aiRiskLevel={result.risk_level}
                severityScore={result.severity_score || 0}
            />
        </div>
    );
}
