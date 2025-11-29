import { Metadata } from 'next';
import AppHeader from '../../../components/AppHeader';
import ProtectionTabs from '../../../components/ProtectionTabs';

export const metadata: Metadata = {
    title: "الحماية الرقمية - مواجهة خطاب الكراهية | بَلِّغ",
    description: "دليل شامل لحماية نفسك من خطاب الكراهية في الفضاء الرقمي - المعرفة، الرصد، التبليغ",
};

export default function ProtectionPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <AppHeader />

            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            🛡️ الحماية الرقمية – كيف تحمي نفسك من خطاب الكراهية؟
                        </h1>
                        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                            يشهد الفضاء الرقمي تصاعدًا في الخطاب الطائفي والتحريضي، ويتحوّل المحتوى اليومي إلى أداة يُعاد عبرها تشكيل العلاقات بين المكوّنات والجماعات. هذا القسم هو دليل عملي يساعدك على مواجهة هذا الخطاب، وحماية نفسك ومحيطك، وفهم الآليات التي تجعل الكراهية تنتشر بسرعة أكبر من أي محتوى آخر.
                        </p>
                    </div>

                    {/* Tabbed Content */}
                    <ProtectionTabs />
                </div>
            </section>

            <footer className="bg-gray-900 text-white py-12">
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
