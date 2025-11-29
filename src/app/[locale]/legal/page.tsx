'use client';

import AppHeader from '../../../components/AppHeader';
import LegalTabs from '../../../components/LegalTabs';

export default function LegalPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <AppHeader />

            {/* Hero Section */}
            <section className="py-16 bg-white border-b border-gray-200">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                        ⚖️ الحماية القانونية
                    </h1>
                    <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-medium">
                        يوضح هذا القسم الإطار القانوني لخطاب الكراهية في دول متعددة. الهدف هو مساعدة المستخدمين على فهم حقوقهم، ومعرفة الجهات الرسمية المختصة باستقبال البلاغات، والتمييز بين ما يُعد خطابًا مخالفًا للقانون وما يدخل ضمن حرية التعبير.
                    </p>
                </div>
            </section>

            {/* Tabbed Content */}
            <main className="py-12">
                <LegalTabs />
            </main>
        </div>
    );
}
