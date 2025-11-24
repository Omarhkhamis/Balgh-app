import { Metadata } from 'next';
import AppHeader from '@/components/AppHeader';

export const metadata: Metadata = {
    title: "القسم القانوني | بلّغ",
    description: "من الرصد إلى العدالة - خطوات قانونية لحماية مجتمعاتنا",
};

export default function LegalPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <AppHeader />

            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold text-gray-900 mb-6">
                            ⚖️ القسم القانوني
                        </h1>
                        <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                            يربط القسم القانوني بين <strong>الرصد الرقمي</strong> وتحليل خطاب الكراهية من جهة، وبين <strong>الإجراءات القانونية</strong> التي يمكن اتخاذها لحماية الأفراد والجماعات من جهة أخرى.
                        </p>
                        <div className="bg-green-50 border-r-4 border-green-600 p-6 rounded-xl max-w-2xl mx-auto mt-8">
                            <p className="text-2xl font-bold text-gray-900">
                                "من الرصد إلى العدالة: خطوات قانونية لحماية مجتمعاتنا"
                            </p>
                        </div>
                    </div>

                    {/* Why Legal Work */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-8">لماذا نعمل قانونيًا؟</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-blue-50 p-6 rounded-xl">
                                <div className="text-4xl mb-3">🚨</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">منع التصعيد</h3>
                                <p className="text-gray-700">خطاب الكراهية يمكن أن يتحول إلى تهديد مباشر وعنف</p>
                            </div>
                            <div className="bg-green-50 p-6 rounded-xl">
                                <div className="text-4xl mb-3">🛡️</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">دعم المبلّغين</h3>
                                <p className="text-gray-700">مساعدة المتضررين في اتخاذ خطوات قانونية</p>
                            </div>
                            <div className="bg-purple-50 p-6 rounded-xl">
                                <div className="text-4xl mb-3">⚖️</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">عدم الإفلات من العقاب</h3>
                                <p className="text-gray-700">تعزيز ثقافة المساءلة القانونية</p>
                            </div>
                        </div>
                    </div>

                    {/* Legal Framework */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-8">الإطار القانوني</h2>
                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">📜 القوانين السورية</h3>
                                <p className="text-gray-700">قوانين التحريض والإهانة والتشهير</p>
                            </div>
                            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">🌍 قوانين الدول المضيفة</h3>
                                <p className="text-gray-700">بلجيكا، ألمانيا، فرنسا، السويد، تركيا، هولندا</p>
                            </div>
                            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">🌐 القوانين والاتفاقيات الدولية</h3>
                                <p className="text-gray-700">اتفاقيات حقوق الإنسان ومكافحة التمييز</p>
                            </div>
                            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">📱 سياسات المنصات الرقمية</h3>
                                <p className="text-gray-700">معايير فيسبوك، تيك توك، يوتيوب، تلغرام</p>
                            </div>
                        </div>
                    </div>

                    {/* Process */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-8">ماذا نفعل عند استلام بلاغ عالي الخطورة؟</h2>
                        <div className="space-y-6">
                            {[
                                { step: 1, title: 'المراجعة القانونية', desc: 'يُحوَّل البلاغ إلى فريق قانوني متخصص' },
                                { step: 2, title: 'تقييم الحالة', desc: 'يقيّم المحامي بنية التحريض وخطورته' },
                                { step: 3, title: 'إعداد ملف قانوني', desc: 'توثيق كامل للحالة مع الأدلة' },
                                { step: 4, title: 'التواصل مع المُبلِّغ', desc: 'معرفة رغبته في المتابعة القانونية' },
                                { step: 5, title: 'تقديم الشكوى', desc: 'تقديم الشكوى للجهات المختصة' }
                            ].map((item) => (
                                <div key={item.step} className="flex gap-6 items-start">
                                    <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
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

                    {/* What Can Be Legal Case */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-8">ما الذي يمكن اعتباره قضية قانونية؟</h2>
                        <div className="bg-green-50 border-r-4 border-green-600 p-8 rounded-xl">
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 text-xl">✓</span>
                                    <span><strong>تهديد مباشر بالقتل</strong> أو الأذى الجسدي</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 text-xl">✓</span>
                                    <span><strong>دعوة إلى الإبادة</strong> أو العنف الجماعي</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 text-xl">✓</span>
                                    <span><strong>تضليل مقصود</strong> يؤذي فئة معينة</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 text-xl">✓</span>
                                    <span><strong>نشر بيانات شخصية</strong> بقصد الإساءة (Doxxing)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 text-xl">✓</span>
                                    <span><strong>استخدام صور لأفراد</strong> بهدف إهانتهم</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* What We Don't Cover */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-8">ماذا لا يغطيه القسم القانوني؟</h2>
                        <div className="bg-red-50 border-r-4 border-red-600 p-8 rounded-xl">
                            <p className="text-lg text-gray-800 mb-4 font-semibold">لضمان النزاهة، لا نتابع قانونيًا:</p>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 text-xl">✗</span>
                                    <span>خلافات شخصية غير متعلقة بالكراهية</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 text-xl">✗</span>
                                    <span>شتائم فردية غير تحريضية</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 text-xl">✗</span>
                                    <span>محتوى غير علني أو من رسائل خاصة</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 text-xl">✗</span>
                                    <span>بلاغات بلا دليل أو رابط موثوق</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Support for Reporters */}
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">دعم المبلّغين</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-blue-50 p-8 rounded-xl">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">ما نوفره:</h3>
                                <ul className="space-y-3 text-gray-700">
                                    <li>• استشارة قانونية أولية</li>
                                    <li>• توجيه حول تقديم الشكاوى</li>
                                    <li>• شرح الحقوق القانونية</li>
                                    <li>• توضيح المخاطر المحتملة</li>
                                </ul>
                            </div>
                            <div className="bg-yellow-50 p-8 rounded-xl border border-yellow-300">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">ملاحظة مهمة:</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    <strong>لا نقدّم تمثيلًا قانونيًا مباشرًا</strong>، بل نربطكم بمحامين وشركاء مختصين يمكنهم متابعة القضية.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Transparency */}
                    <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 p-10 rounded-3xl text-center">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">لماذا نُظهر هذه التفاصيل؟</h3>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            لأن <strong>الشفافية القانونية تعزز ثقة المستخدمين</strong>، وتمكّن الباحثين من فهم آلية تحويل الرصد إلى مساءلة، والمنظمات من الاعتماد على بيانات موثوقة، والأفراد من معرفة حقوقهم وحدود الحماية القانونية.
                        </p>
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
