import { Metadata } from 'next';
import AppHeader from '../../../components/AppHeader';

export const metadata: Metadata = {
    title: "البرامج والتدريب | بلّغ",
    description: "برامج تدريبية متخصصة لمكافحة خطاب الكراهية وحماية المجتمعات",
};

export default function TrainingPage() {
    const programs = [
        {
            icon: '🎓',
            title: 'برنامج مكافحة خطاب الكراهية',
            description: 'برنامج تدريبي شامل يعرّف بالمفاهيم الأساسية ومستويات الخطاب وتحليل الأمثلة الواقعية',
            duration: '3 أيام',
            target: 'ناشطون، منظمات مجتمع مدني',
            color: 'blue'
        },
        {
            icon: '📊',
            title: 'برنامج تحليل السرديات',
            description: 'مصمم للناشطين والصحفيين لفهم كيفية تشكّل السرديات الطائفية والمناطقية',
            duration: '2-3 أيام',
            target: 'صحفيون، باحثون',
            color: 'green'
        },
        {
            icon: '🛡️',
            title: 'الحماية الرقمية ومواجهة العنف الإلكتروني',
            description: 'برنامج عملي لحماية الشباب والناشطين من التنمر والاستهداف الطائفي',
            duration: 'يوم واحد',
            target: 'شباب، ناشطون',
            color: 'purple'
        },
        {
            icon: '🔍',
            title: 'تدريب الراصدين',
            description: 'برنامج متخصص لبناء فريق قادر على تفريغ البيانات وتصنيف المحتوى',
            duration: '5 أيام',
            target: 'راصدون، محللون',
            color: 'orange'
        },
        {
            icon: '✨',
            title: 'إنتاج خطاب بديل',
            description: 'برنامج مبتكر يُدرّب على صناعة محتوى إيجابي مضاد للكراهية',
            duration: '2-3 أيام',
            target: 'صناع محتوى، إعلاميون',
            color: 'pink'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <AppHeader />

            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold text-gray-900 mb-6">
                            🎓 التدريبات المتخصصة
                        </h1>
                        <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                            توفّر المبادرة <strong>برامج تدريبية متخصصة</strong> تهدف إلى تعزيز قدرات الأفراد والمنظمات السورية على فهم خطاب الكراهية ورصده والتعامل مع مخاطره.
                        </p>
                        <div className="bg-green-50 border-r-4 border-green-600 p-6 rounded-xl max-w-2xl mx-auto mt-8">
                            <p className="text-2xl font-bold text-gray-900">
                                &quot;نبني الوعي… نصنع الأمان… نحو مجتمعات سورية صامدة&quot;
                            </p>
                        </div>
                    </div>

                    {/* Programs */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">برامجنا التدريبية</h2>
                        <div className="space-y-8">
                            {programs.map((program, index) => (
                                <div key={index} className={`bg-gradient-to-br from-${program.color}-50 to-white p-8 rounded-2xl shadow-lg border border-${program.color}-200 hover:shadow-xl transition-all`}>
                                    <div className="flex items-start gap-6">
                                        <div className="text-6xl">{program.icon}</div>
                                        <div className="flex-1">
                                            <h3 className="text-3xl font-bold text-gray-900 mb-3">{program.title}</h3>
                                            <p className="text-lg text-gray-700 mb-4">{program.description}</p>
                                            <div className="flex gap-6 text-sm">
                                                <div className="flex items-center gap-2">
                                                    <span className="font-bold text-gray-900">⏱️ المدة:</span>
                                                    <span className="text-gray-700">{program.duration}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="font-bold text-gray-900">👥 الفئة المستهدفة:</span>
                                                    <span className="text-gray-700">{program.target}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Training Formats */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">أشكال التدريب</h2>
                        <div className="grid md:grid-cols-4 gap-6">
                            {[
                                { icon: '👥', title: 'وجهاً لوجه', desc: 'تدريب مباشر في قاعات' },
                                { icon: '💻', title: 'عبر الإنترنت', desc: 'جلسات تفاعلية أونلاين' },
                                { icon: '⚡', title: 'جلسات قصيرة', desc: 'ورش عمل مكثفة' },
                                { icon: '🎯', title: 'تدريب المدربين', desc: 'بناء قدرات المدربين' }
                            ].map((format, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center border border-gray-200">
                                    <div className="text-4xl mb-3">{format.icon}</div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{format.title}</h3>
                                    <p className="text-sm text-gray-600">{format.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Target Audience */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">الجمهور المستهدف</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { title: 'منظمات المجتمع المدني', items: ['فرق الحماية', 'المنظمات الإنسانية', 'مبادرات محلية'] },
                                { title: 'الإعلاميون والباحثون', items: ['صحفيون', 'باحثون', 'طلاب جامعات'] },
                                { title: 'الشباب والناشطون', items: ['مبادرات شبابية', 'ناشطون رقميون', 'قيادات مجتمعية'] }
                            ].map((group, index) => (
                                <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{group.title}</h3>
                                    <ul className="space-y-2">
                                        {group.items.map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-gray-700">
                                                <span className="text-green-600">✓</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Why Important */}
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">لماذا هذه البرامج مهمة؟</h2>
                        <div className="bg-gradient-to-r from-blue-50 to-green-50 p-10 rounded-3xl">
                            <ul className="space-y-4 text-lg text-gray-800">
                                <li className="flex items-start gap-3">
                                    <span className="text-green-600 text-2xl">✓</span>
                                    <span>جزء كبير من العنف في سوريا <strong>بدأ بالكلمة</strong></span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-600 text-2xl">✓</span>
                                    <span>التدريب يساعد على <strong>بناء وعي مجتمعي</strong></span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-600 text-2xl">✓</span>
                                    <span><strong>حماية الفئات المستهدفة</strong> من خطاب الكراهية</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <p className="text-gray-700 mb-4">
                                        ورشة عمل تفاعلية للصحفيين وصناع المحتوى حول كيفية تغطية النزاعات دون الانزلاق إلى لغة التحريض. تشمل تحليل حالات دراسية وتطبيق عملي على &quot;صحافة السلام&quot;.
                                    </p></li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-600 text-2xl">✓</span>
                                    <span>رفع قدرات المنظمات على <strong>التعامل مع الخطاب الضار</strong></span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-green-600 text-2xl">✓</span>
                                    <span>دعم <strong>التماسك الاجتماعي</strong> والعيش المشترك</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-16 text-center bg-gradient-to-r from-green-600 to-blue-600 p-10 rounded-3xl text-white">
                        <h3 className="text-3xl font-bold mb-4">هل أنت مهتم بالتدريب؟</h3>
                        <p className="text-xl mb-8">تواصل معنا لمعرفة المزيد عن برامجنا التدريبية</p>
                        <a href="#contact" className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg">
                            اتصل بنا
                        </a>
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
