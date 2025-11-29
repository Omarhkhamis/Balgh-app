'use client';

import React from 'react';

export default function ReportingTab() {
    return (
        <div className="space-y-12">
            {/* Inside Syria Section */}
            <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-r-4 border-green-600 pr-4">
                    🇸🇾 التبليغ داخل سوريا
                </h2>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                    <div className="mb-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">الجهة المختصة</h3>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                            <div className="flex items-center gap-4 mb-3">
                                <span className="text-4xl">⚖️</span>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900">النيابة العامة السورية</h4>
                                    <p className="text-gray-600">الجهة الرسمية لاستقبال البلاغات</p>
                                </div>
                            </div>
                            <div className="mt-4 space-y-2">
                                <p className="text-gray-700"><strong>الموقع:</strong> <a href="https://www.moj.gov.sy" target="_blank" className="text-green-600 hover:underline">www.moj.gov.sy</a></p>
                                <p className="text-gray-700"><strong>الطريقة:</strong> تقديم إخبار رسمي شخصياً أو عبر محامٍ</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-yellow-50 border-r-4 border-yellow-500 p-4 rounded-lg">
                        <p className="text-yellow-900 font-medium">
                            💡 <strong>نصيحة:</strong> احتفظ بنسخة من الإخبار ورقم القيد للمتابعة.
                        </p>
                    </div>
                </div>
            </section>

            {/* Outside Syria Section */}
            <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-r-4 border-green-600 pr-4">
                    🌍 التبليغ خارج سوريا (دول اللجوء)
                </h2>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                    <p className="text-lg text-gray-700 mb-6">
                        يمكنك التبليغ عن جرائم خطاب الكراهية في دولة إقامتك. راجع <strong className="text-green-600">تبويب &quot;القوانين المعمول بها&quot;</strong> للاطلاع على القوانين والجهات المختصة في كل دولة.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { country: 'ألمانيا', flag: '🇩🇪', agency: 'Online-Wache' },
                            { country: 'فرنسا', flag: '🇫🇷', agency: 'PHAROS' },
                            { country: 'السويد', flag: '🇸🇪', agency: 'Polisen' },
                            { country: 'بلجيكا', flag: '🇧🇪', agency: 'UNIA' },
                            { country: 'هولندا', flag: '🇳🇱', agency: 'Politie' },
                            { country: 'تركيا', flag: '🇹🇷', agency: 'CİMER' }
                        ].map((item, i) => (
                            <div key={i} className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-center">
                                <div className="text-3xl mb-2">{item.flag}</div>
                                <div className="font-bold text-gray-900">{item.country}</div>
                                <div className="text-sm text-gray-600">{item.agency}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Digital Platforms Section */}
            <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-r-4 border-green-600 pr-4">
                    📱 التبليغ عبر المنصات الرقمية
                </h2>
                <div className="grid md:grid-cols-4 gap-6">
                    {[
                        { name: 'Facebook', color: 'bg-blue-600', link: 'https://www.facebook.com/help/reportlinks' },
                        { name: 'TikTok', color: 'bg-black', link: 'https://www.tiktok.com/community-guidelines' },
                        { name: 'YouTube', color: 'bg-red-600', link: 'https://www.youtube.com/howyoutubeworks/policies/community-guidelines/' },
                        { name: 'Telegram', color: 'bg-blue-400', link: 'https://telegram.org/faq#q-there-s-illegal-content-on-telegram-how-do-i-take-it-down' }
                    ].map((platform) => (
                        <div key={platform.name} className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-md transition-shadow">
                            <div className={`w-12 h-12 ${platform.color} rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl`}>
                                {platform.name[0]}
                            </div>
                            <h3 className="font-bold text-gray-900 mb-4">{platform.name}</h3>
                            <a
                                href={platform.link}
                                target="_blank"
                                className="text-sm text-green-600 font-bold hover:underline"
                            >
                                مركز البلاغات ↗
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            {/* Workflow Section */}
            <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 border-r-4 border-green-600 pr-4">
                    🔄 كيف نتعامل مع البلاغات الخطرة؟
                </h2>
                <div className="grid md:grid-cols-4 gap-4">
                    {[
                        { step: '1', title: 'استلام البلاغ', icon: '📥' },
                        { step: '2', title: 'التحليل الآلي', icon: '🤖' },
                        { step: '3', title: 'المراجعة القانونية', icon: '⚖️' },
                        { step: '4', title: 'الإحالة للجهات المختصة', icon: '📤' }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-6 rounded-xl border border-gray-200 text-center relative">
                            <div className="text-4xl mb-4">{item.icon}</div>
                            <div className="text-sm text-green-600 font-bold mb-1">خطوة {item.step}</div>
                            <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                            {i < 3 && (
                                <div className="hidden md:block absolute top-1/2 -left-4 transform -translate-y-1/2 z-10">
                                    <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Limitations */}
            <section className="bg-gray-100 p-8 rounded-2xl border border-gray-200 flex items-start gap-4">
                <span className="text-4xl">⚠️</span>
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">حدود عمل مبادرة بَلِّغ</h3>
                    <p className="text-gray-700 leading-relaxed">
                        لا تقدم مبادرة بَلِّغ تمثيلًا قانونيًا مباشرًا. يقتصر دورنا على تحليل البلاغات، تقديم المشورة الأولية، وتوجيه الضحايا نحو الجهات المختصة والمحامين المعتمدين.
                    </p>
                </div>
            </section>
        </div>
    );
}
