import { Metadata } from 'next';
import AppHeader from '@/components/AppHeader';
import VisionSection from '@/components/VisionSection';

export const metadata: Metadata = {
    title: "رؤيتنا وأهدافنا | بلّغ",
    description: "رؤية ورسالة وأهداف مبادرة مكافحة خطاب العنف والكراهية",
};

export default function VisionPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <AppHeader />
            <VisionSection />

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
