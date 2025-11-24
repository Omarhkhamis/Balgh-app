import { Metadata } from 'next';
import AppHeader from '@/components/AppHeader';

export const metadata: Metadata = {
    title: "الرصد والتبليغات | بلّغ",
    description: "منصة آمنة للإبلاغ عن خطاب الكراهية - بلاغك اليوم يحمي مجتمعنا غدًا",
};

export default function MonitoringPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <AppHeader />

            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold text-gray-900 mb-6">
                            📡 مركز الرصد والتبليغات
                        </h1>
                        <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-4">
                            نوفّر للمستخدمين <strong>منصة بسيطة وآمنة</strong> للإبلاغ عن المحتوى الذي يتضمن خطاب كراهية أو تحريضًا على العنف.
                        </p>
                        <div className="bg-green-50 border-r-4 border-green-600 p-6 rounded-xl max-w-2xl mx-auto mt-8">
                            <p className="text-2xl font-bold text-gray-900">
                                "بلاغك اليوم… يحمي مجتمعنا غدًا"
                            </p>
                        </div>
                    </div>

                    {/* Why Report */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">لماذا التبليغ؟</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-blue-50 p-6 rounded-xl">
                                <div className="text-4xl mb-3">🔍</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">رصد مبكر</h3>
                                <p className="text-gray-700">يساعد في رصد الاتجاهات الخطرة مبكرًا</p>
                            </div>
                            <div className="bg-green-50 p-6 rounded-xl">
                                <div className="text-4xl mb-3">🛡️</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">دعم المتضررين</h3>
                                <p className="text-gray-700">حماية الأفراد والجماعات المستهدفة</p>
                            </div>
                            <div className="bg-purple-50 p-6 rounded-xl">
                                <div className="text-4xl mb-3">⚖️</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">مسار قانوني</h3>
                                <p className="text-gray-700">تحويل المحتوى الخطير للجهات المختصة</p>
                            </div>
                        </div>
                    </div>

                    {/* Reporting Form Info */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-8">نموذج التبليغ</h2>
                        <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                            <p className="text-lg text-gray-700 mb-6">
                                نوفّر نموذجًا مبسّطًا يمكن تعبئته خلال <strong>دقيقة واحدة</strong>، يشمل الحقول التالية:
                            </p>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 mt-1">✓</span>
                                    <span>رابط المنشور أو لقطة شاشة</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 mt-1">✓</span>
                                    <span>نص المحتوى أو وصفه</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 mt-1">✓</span>
                                    <span>اسم المنصة (فيسبوك، تيك توك، تلغرام، إلخ)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 mt-1">✓</span>
                                    <span>الفئة المستهدفة بخطاب الكراهية</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 mt-1">✓</span>
                                    <span>سبب التبليغ وملاحظات اختيارية</span>
                                </li>
                            </ul>
                            <div className="mt-8 text-center">
                                <a href="/" className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-md hover:shadow-lg">
                                    ابدأ التبليغ الآن
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* What Happens After */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-8">ماذا يحدث بعد إرسال البلاغ؟</h2>
                        <div className="space-y-6">
                            {[
                                { step: 1, title: 'الاستلام والتأكد', desc: 'يتأكد فريقنا من كون المحتوى عامًا وأن الرابط صالح', color: 'blue' },
                                { step: 2, title: 'التصنيف الأولي', desc: 'يُسجل البلاغ في قاعدة بيانات ويُصنّف حسب نوع الخطاب والفئة المستهدفة', color: 'green' },
                                { step: 3, title: 'التحليل العميق', desc: 'محلّل بشري يقيّم السياق ودرجة الخطورة', color: 'purple' },
                                { step: 4, title: 'دمج في قاعدة المعرفة', desc: 'تُستخدم البيانات المجهولة لتحسين النموذج وإصدار تقارير', color: 'orange' },
                                { step: 5, title: 'المسار القانوني (اختياري)', desc: 'في حالات الخطورة الشديدة، يُحوّل لمحامٍ مختص', color: 'red' }
                            ].map((item) => (
                                <div key={item.step} className="flex gap-6 items-start">
                                    <div className={`flex-shrink-0 w-12 h-12 bg-${item.color}-600 text-white rounded-full flex items-center justify-center font-bold text-xl`}>
                                        {item.step}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                        <p className="text-gray-700">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Types of Reports */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-8">أنواع البلاغات التي نتعامل معها</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">🚨 خطاب كراهية</h3>
                                <ul className="space-y-2 text-gray-700 text-sm">
                                    <li>• الإهانات الجماعية</li>
                                    <li>• التجريد من الإنسانية</li>
                                    <li>• الشتائم الطائفية والمناطقية</li>
                                    <li>• التحريض على العنف/الإقصاء</li>
                                </ul>
                            </div>
                            <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">⚠️ تحريض خطير</h3>
                                <ul className="space-y-2 text-gray-700 text-sm">
                                    <li>• الدعوة إلى الإبادة</li>
                                    <li>• التهديدات المباشرة</li>
                                    <li>• استخدام صور/فيديوهات للإذلال</li>
                                    <li>• محتوى مضلل تحريضي</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Privacy */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-8">حماية خصوصية المبلّغ</h2>
                        <div className="bg-green-50 border-r-4 border-green-600 p-8 rounded-xl">
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 text-xl">✓</span>
                                    <span>عدم تخزين معلومات تعريفية إلا بموافقة</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 text-xl">✓</span>
                                    <span>عدم مشاركة بيانات دون إذن</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 text-xl">✓</span>
                                    <span>تشفير البيانات الحساسة</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 text-xl">✓</span>
                                    <span>الامتناع عن التعامل مع الرسائل الخاصة</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Who Can Report */}
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">من يمكنه التبليغ؟</h2>
                        <div className="bg-gradient-to-r from-blue-50 to-green-50 p-10 rounded-3xl text-center">
                            <p className="text-xl text-gray-800 mb-6">
                                <strong>كل شخص</strong> يشاهد محتوى عدوانيًا أو تحريضيًا:
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                {['أفراد', 'ناشطون', 'باحثون', 'منظمات مجتمع مدني', 'جهات إعلامية', 'فرق حماية'].map((group) => (
                                    <span key={group} className="bg-white px-6 py-3 rounded-full shadow-md font-semibold text-gray-800">
                                        {group}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer id="contact" className="bg-gray-900 text-white py-12">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h3 className="text-2xl font-bold mb-4">اتصل بنا</h3>
                    <p className="text-gray-400 mb-6">للاستفسارات والشراكات والإبلاغ عن المحتوى</p>
                    <div className="flex justify-center gap-6">
                        <a href="mailto:info@balagh.org" className="text-green-400 hover:text-green-300 transition-colors">
                            info@balagh.org
                        </a>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500 text-sm">
                        © 2024 مبادرة مكافحة خطاب العنف والكراهية - جميع الحقوق محفوظة
                    </div>
                </div>
            </footer>
        </div>
    );
}
