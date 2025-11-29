'use client';

import { useLocale } from 'next-intl';
import AppHeader from '../../../components/AppHeader';
import AppFooter from '../../../components/AppFooter';
import PageHero from '../../../components/PageHero';

export default function MethodologyPage() {
    const locale = useLocale();

    // English content
    if (locale === 'en') {
        return (
            <div className="min-h-screen bg-gray-50">
                <AppHeader />

                <PageHero
                    icon="🧭"
                    title="Our Methodology for Countering Hate Speech in the Syrian Digital Space"
                    subtitle="A layered approach integrating social analysis, legal accountability, and technological innovation"
                />

                <main className="container mx-auto px-4 py-16">

                    {/* Introduction */}
                    <div className="max-w-4xl mx-auto mb-16">
                        <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border-2 border-green-200 mb-8">
                            <p className="text-lg text-gray-800 leading-relaxed mb-6">
                                Our approach to combating hate speech and digital incitement is built on a <strong>layered methodology</strong> that integrates social analysis, legal accountability, and technological innovation. It is grounded in extensive field experience monitoring thousands of posts, processing user reports, and developing tools that directly respond to the needs of Syrians both inside the country and across the diaspora.
                            </p>
                        </div>

                        {/* Core Principle */}
                        <div className="bg-gradient-to-r from-green-600 to-blue-600 p-10 rounded-2xl text-white text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our methodology begins with a simple principle:</h2>
                            <p className="text-xl md:text-2xl leading-relaxed font-medium">
                                Hate speech is not a momentary expression—it is a <span className="text-yellow-300">process</span>. It begins with a word and can end in real-world harm. Addressing it requires understanding its mechanisms, analyzing the narratives that sustain it, and activating effective tools for prevention and accountability.
                            </p>
                        </div>

                        <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center">
                            To achieve this, our work is structured around <strong className="text-green-700">five interconnected pillars:</strong>
                        </p>
                    </div>

                    {/* The 5 Methodologies */}
                    <div className="max-w-5xl mx-auto space-y-8">

                        {/* Methodology 1 */}
                        <div className="bg-white rounded-2xl shadow-lg border-l-4 border-blue-500 p-8 hover:shadow-xl transition-shadow">
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                                    1
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-4">
                                        <h3 className="text-2xl font-bold text-gray-900">Continuous Monitoring of Digital Content</h3>
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold">Collection & Classification</span>
                                    </div>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        We systematically track online content, gather public reports, and categorize hate speech according to its type, severity, and the groups or individuals it targets.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Methodology 2 */}
                        <div className="bg-white rounded-2xl shadow-lg border-l-4 border-purple-500 p-8 hover:shadow-xl transition-shadow">
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                                    2
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-4">
                                        <h3 className="text-2xl font-bold text-gray-900">Narrative Deconstruction & Analysis</h3>
                                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-bold">Deep Understanding</span>
                                    </div>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        We identify the linguistic and conceptual structures that shape hate speech, examine how it operates, and extract the core narratives that drive its reproduction across digital spaces.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Methodology 3 */}
                        <div className="bg-white rounded-2xl shadow-lg border-l-4 border-green-500 p-8 hover:shadow-xl transition-shadow">
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                                    3
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-4">
                                        <h3 className="text-2xl font-bold text-gray-900">Legal Reporting & Accountability</h3>
                                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">Documentation & Action</span>
                                    </div>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        We prepare legal complaints in accordance with Syrian and international frameworks, document violations, and refer cases to relevant bodies through a collaborative legal network.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Methodology 4 */}
                        <div className="bg-white rounded-2xl shadow-lg border-l-4 border-indigo-500 p-8 hover:shadow-xl transition-shadow">
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                                    4
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-4">
                                        <h3 className="text-2xl font-bold text-gray-900">Development of AI-Based Tools</h3>
                                        <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-bold">Technical Innovation</span>
                                    </div>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        We build a Syrian-dialect language model capable of classifying hate speech, detecting harmful patterns, assessing levels of risk, and generating automated reports that support users and partners.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Methodology 5 */}
                        <div className="bg-white rounded-2xl shadow-lg border-l-4 border-orange-500 p-8 hover:shadow-xl transition-shadow">
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                                    5
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-4">
                                        <h3 className="text-2xl font-bold text-gray-900">Community Awareness & Digital Protection</h3>
                                        <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-bold">Empowerment</span>
                                    </div>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        We translate insights into training materials, awareness campaigns, and digital safety guides that help individuals distinguish between legitimate expression and harmful speech, while adopting safer online practices.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visual Flow */}
                    <div className="max-w-5xl mx-auto mt-16">
                        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
                            Our Integrated Process
                        </h2>
                        <div className="flex flex-wrap justify-center items-center gap-4">
                            <div className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-bold shadow-md">Monitor</div>
                            <span className="text-2xl text-gray-400">→</span>
                            <div className="bg-purple-100 text-purple-800 px-6 py-3 rounded-full font-bold shadow-md">Analyze</div>
                            <span className="text-2xl text-gray-400">→</span>
                            <div className="bg-green-100 text-green-800 px-6 py-3 rounded-full font-bold shadow-md">Report</div>
                            <span className="text-2xl text-gray-400">→</span>
                            <div className="bg-indigo-100 text-indigo-800 px-6 py-3 rounded-full font-bold shadow-md">Innovate</div>
                            <span className="text-2xl text-gray-400">→</span>
                            <div className="bg-orange-100 text-orange-800 px-6 py-3 rounded-full font-bold shadow-md">Educate</div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="max-w-4xl mx-auto mt-16 text-center bg-gradient-to-br from-green-50 to-blue-50 p-12 rounded-3xl border-2 border-green-200">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Use Our Tools</h3>
                        <p className="text-xl text-gray-700 mb-8">Analyze suspicious content or explore practical digital protection methods:</p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a href="/#analyze" className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105">
                                🔍 Start Analysis
                            </a>
                            <a href="/en/protection" className="inline-block bg-white text-green-700 border-2 border-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all">
                                🛡️ Digital Safety Guide
                            </a>
                        </div>
                    </div>
                </main>

                <AppFooter />
            </div>
        );
    }

    // Arabic content (default)
    return (
        <div className="min-h-screen bg-gray-50">
            <AppHeader />

            <PageHero
                icon="🧭"
                title="منهجيتنا في مواجهة خطاب الكراهية في الفضاء السوري"
                subtitle="منهجية متدرجة تدمج بين التحليل الاجتماعي، المساءلة القانونية، والابتكار التقني"
            />

            <main className="container mx-auto px-4 py-16">

                {/* Introduction */}
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border-2 border-green-200 mb-8">
                        <p className="text-lg text-gray-800 leading-relaxed mb-6">
                            تعتمد مبادرتنا في مكافحة خطاب الكراهية والعنف على <strong>منهجية متدرجة</strong>، تدمج بين التحليل الاجتماعي والتقني والقانوني، وتستند إلى خبرة عملية في الرصد داخل البيئة الرقمية السورية. هذه المنهجية ليست توصيفًا نظريًا، بل هي بنية عمل مطوّرة من خلال مراقبة آلاف المنشورات، التعامل مع عشرات البلاغات، وإنتاج أدوات تستجيب مباشرة لاحتياجات المستخدمين السوريين في الداخل والخارج.
                        </p>
                    </div>

                    {/* Core Premise */}
                    <div className="bg-gradient-to-r from-green-600 to-blue-600 p-10 rounded-2xl text-white text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">تنطلق منهجيتنا من مسلّمة بسيطة:</h2>
                        <p className="text-xl md:text-2xl leading-relaxed font-medium">
                            خطاب الكراهية ليس تعبيرًا عابرًا، بل <span className="text-yellow-300">عملية مركّبة</span> تبدأ بالكلمة وتنتهي بالفعل، ولا يمكن مواجهتها إلا بفهم آلياتها، وتحليل سردياتها، وتفعيل أدوات الردع والمعالجة.
                        </p>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center">
                        ولهذا، يتكون عملنا من <strong className="text-green-700">خمسة مسارات مترابطة:</strong>
                    </p>
                </div>

                {/* The 5 Methodologies */}
                <div className="max-w-5xl mx-auto space-y-8">

                    {/* Methodology 1 */}
                    <div className="bg-white rounded-2xl shadow-lg border-r-4 border-blue-500 p-8 hover:shadow-xl transition-shadow">
                        <div className="flex items-start gap-6">
                            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                                1
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <h3 className="text-2xl font-bold text-gray-900">الرصد المنتظم للمحتوى الرقمي</h3>
                                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold">الجمع والتصنيف</span>
                                </div>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    مراقبة المحتوى المتداول عبر المنصات الرقمية، وجمع البلاغات، وتصنيف الخطاب وفق طبيعته، ومخاطره، والمجموعات المستهدفة.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Methodology 2 */}
                    <div className="bg-white rounded-2xl shadow-lg border-r-4 border-purple-500 p-8 hover:shadow-xl transition-shadow">
                        <div className="flex items-start gap-6">
                            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                                2
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <h3 className="text-2xl font-bold text-gray-900">التحليل التفكيكي للسرديات</h3>
                                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-bold">الفهم العميق</span>
                                </div>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    تحديد البنى اللغوية والمفاهيمية التي يقوم عليها خطاب الكراهية، وفهم آلياته، واستخلاص السرديات الرئيسية التي يعيد إنتاجها.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Methodology 3 */}
                    <div className="bg-white rounded-2xl shadow-lg border-r-4 border-green-500 p-8 hover:shadow-xl transition-shadow">
                        <div className="flex items-start gap-6">
                            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                                3
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <h3 className="text-2xl font-bold text-gray-900">التبليغ القانوني والمتابعة</h3>
                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">المساءلة</span>
                                </div>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    صياغة البلاغات القانونية وفق الأطر السورية والدولية، وتوثيق الانتهاكات، وإحالتها إلى الجهات المختصة عبر شبكة قانونية متعاونة.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Methodology 4 */}
                    <div className="bg-white rounded-2xl shadow-lg border-r-4 border-indigo-500 p-8 hover:shadow-xl transition-shadow">
                        <div className="flex items-start gap-6">
                            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                                4
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <h3 className="text-2xl font-bold text-gray-900">تطوير أدوات الذكاء الاصطناعي</h3>
                                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-bold">التقنية</span>
                                </div>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    بناء نموذج لغوي قادر على تصنيف الخطاب باللهجة السورية، واكتشاف الأنماط الكارهة، وتقدير مستوى الخطورة، وتوليد تقارير مساعدة للمستخدمين.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Methodology 5 */}
                    <div className="bg-white rounded-2xl shadow-lg border-r-4 border-orange-500 p-8 hover:shadow-xl transition-shadow">
                        <div className="flex items-start gap-6">
                            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                                5
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <h3 className="text-2xl font-bold text-gray-900">تعزيز الوعي المجتمعي والحماية الرقمية</h3>
                                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-bold">التمكين</span>
                                </div>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    تحويل المعرفة إلى أدوات تدريب وتوعية، وتطوير مواد تعليمية تساعد الأفراد على التمييز بين الخطاب المشروع والخطاب المؤذي، واعتماد ممارسات رقمية آمنة.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Visual Flow */}
                <div className="max-w-5xl mx-auto mt-16">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
                        المسار المنهجي المتكامل
                    </h2>
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        <div className="bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-bold shadow-md">رصد</div>
                        <span className="text-2xl text-gray-400 hidden md:inline">→</span>
                        <div className="bg-purple-100 text-purple-800 px-6 py-3 rounded-full font-bold shadow-md">تحليل</div>
                        <span className="text-2xl text-gray-400 hidden md:inline">→</span>
                        <div className="bg-green-100 text-green-800 px-6 py-3 rounded-full font-bold shadow-md">تبليغ</div>
                        <span className="text-2xl text-gray-400 hidden md:inline">→</span>
                        <div className="bg-indigo-100 text-indigo-800 px-6 py-3 rounded-full font-bold shadow-md">تقنية</div>
                        <span className="text-2xl text-gray-400 hidden md:inline">→</span>
                        <div className="bg-orange-100 text-orange-800 px-6 py-3 rounded-full font-bold shadow-md">توعية</div>
                    </div>
                </div>

                {/* CTA */}
                <div className="max-w-4xl mx-auto mt-16 text-center bg-gradient-to-br from-green-50 to-blue-50 p-12 rounded-3xl border-2 border-green-200">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">استخدم أدواتنا</h3>
                    <p className="text-xl text-gray-700 mb-8">ابدأ بتحليل محتوى مشبوه أو تعرّف على آليات الحماية الرقمية</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a href="/#analyze" className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105">
                            🔍 ابدأ التحليل
                        </a>
                        <a href="/ar/protection" className="inline-block bg-white text-green-700 border-2 border-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all">
                            🛡️ دليل الحماية
                        </a>
                    </div>
                </div>
            </main>

            <AppFooter />
        </div>
    );
}
