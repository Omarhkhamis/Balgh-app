import { Metadata } from 'next';
import AppHeader from '@/components/AppHeader';

export const metadata: Metadata = {
    title: "الحماية الرقمية | بلّغ",
    description: "درعك الرقمي يبدأ من هنا - حماية، وعي، أمان",
};

export default function ProtectionPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <AppHeader />

            <section className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold text-gray-900 mb-6">
                            🛡️ الحماية الرقمية
                        </h1>
                        <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                            في ظل انتشار مخاطر <strong>العنف الرقمي وخطاب الكراهية</strong> في الفضاء السوري، نقدم إرشادات عملية لحماية نفسك من التنمر الإلكتروني والاستهداف.
                        </p>
                        <div className="bg-green-50 border-r-4 border-green-600 p-6 rounded-xl max-w-2xl mx-auto mt-8">
                            <p className="text-2xl font-bold text-gray-900">
                                "درعك الرقمي يبدأ من هنا: حماية، وعي، أمان"
                            </p>
                        </div>
                    </div>

                    {/* Why Important */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-8">لماذا الحماية الرقمية مهمة؟</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">⚠️ المخاطر الشائعة</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• حملات تشهير وابتزاز</li>
                                    <li>• تداول محتوى عنيف</li>
                                    <li>• اختراق حسابات</li>
                                    <li>• استخدام بيانات شخصية بطريقة ضارة</li>
                                </ul>
                            </div>
                            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">✅ الحلول</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• تعلم أساسيات الأمان الرقمي</li>
                                    <li>• حماية حساباتك وبياناتك</li>
                                    <li>• معرفة كيفية التعامل مع التنمر</li>
                                    <li>• الإبلاغ عن المحتوى الضار</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Account Protection */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-8">نصائح أساسية لحماية الحسابات</h2>
                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-200">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">🔐 كلمات السر</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• استخدم كلمات مرور <strong>قوية ومعقدة</strong> (أحرف، أرقام، رموز)</li>
                                    <li>• <strong>لا تكرر</strong> نفس كلمة المرور على حسابات مختلفة</li>
                                    <li>• فعّل <strong>مدير كلمات المرور</strong> (مثل 1Password, Bitwarden)</li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-200">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">✅ التحقق بخطوتين (2FA)</h3>
                                <p className="text-gray-700 mb-3">فعّله على <strong>جميع حساباتك</strong>:</p>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• فيسبوك، تويتر، إنستغرام</li>
                                    <li>• البريد الإلكتروني (Gmail, Outlook)</li>
                                    <li>• واتساب، تلغرام</li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-200">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">📱 الأجهزة</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• لا تترك حساباتك مفتوحة على <strong>أجهزة مشتركة</strong></li>
                                    <li>• استخدم <strong>قفل الجهاز</strong> (رمز PIN أو بصمة)</li>
                                    <li>• سجّل الخروج من الحسابات بعد الاستخدام</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Dealing with Bullying */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-8">مواجهة التنمر والتحريض</h2>
                        <div className="bg-yellow-50 border-r-4 border-yellow-500 p-8 rounded-xl">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">خطوات أولية:</h3>
                            <ol className="space-y-3 text-gray-700 list-decimal list-inside">
                                <li><strong>لا ترد</strong> على المحتوى المسيء - الرد قد يزيد الموقف سوءًا</li>
                                <li><strong>التقط صورة شاشة</strong> للمحتوى كدليل</li>
                                <li><strong>بلّغ المنصة</strong> فورًا (فيسبوك، تيك توك، إلخ)</li>
                                <li><strong>أرسل بلاغًا لمنصتنا</strong> لتوثيق الحالة</li>
                                <li><strong>احظر المستخدم</strong> المسيء</li>
                            </ol>
                            <div className="mt-6 bg-white p-4 rounded-lg">
                                <p className="text-gray-800">
                                    💚 <strong>دعم نفسي واجتماعي:</strong> إذا تسبب المحتوى بأذى نفسي، تواصل مع فريق دعم نفسي اجتماعي
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Identity Protection */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-8">حماية الهوية الرقمية</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-red-50 p-6 rounded-xl">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">❌ تجنب</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• عرض أرقام هاتفك أو بريدك علنًا</li>
                                    <li>• مشاركة موقعك الجغرافي</li>
                                    <li>• نشر صور تحتوي على تفاصيل حساسة</li>
                                    <li>• قبول طلبات صداقة من مجهولين</li>
                                </ul>
                            </div>
                            <div className="bg-green-50 p-6 rounded-xl">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">✅ افعل</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• راجع إعدادات الخصوصية دوريًا</li>
                                    <li>• اجعل حساباتك خاصة إن أمكن</li>
                                    <li>• تحكم في من يمكنه رؤية منشوراتك</li>
                                    <li>• احذف البيانات القديمة غير الضرورية</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* WhatsApp/Telegram Safety */}
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-8">الأمان في واتساب وتلغرام</h2>
                        <div className="bg-blue-50 p-8 rounded-xl border border-blue-200">
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 text-xl">⚠️</span>
                                    <span>تجنب المجموعات غير المعروفة</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 text-xl">⚠️</span>
                                    <span>لا تضغط على روابط مشبوهة</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 text-xl">⚠️</span>
                                    <span>لا تشارك صورًا خاصة مع أشخاص لا تعرفهم</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 text-xl">⚠️</span>
                                    <span>فعّل التحقق بخطوتين على واتساب</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Fraud Protection */}
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-8">الحماية من الاحتيال والابتزاز</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-red-50 p-6 rounded-xl border border-red-300">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">🚨 علامات التحذير</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• حسابات تطلب المال</li>
                                    <li>• رسائل تدّعي أنها من منظمات</li>
                                    <li>• حسابات مجهولة تطلب صورًا شخصية</li>
                                    <li>• روابط غير موثوقة</li>
                                </ul>
                            </div>
                            <div className="bg-green-50 p-6 rounded-xl border border-green-300">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">✅ الإجراءات</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>• لا ترسل أموالًا أو صورًا</li>
                                    <li>• احظر المُبلِّغ فورًا</li>
                                    <li>• بلّغ المنصة</li>
                                    <li>• تواصل مع الجهات المختصة</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-green-600 p-10 rounded-3xl text-white">
                        <h3 className="text-3xl font-bold mb-4">هل تحتاج مساعدة؟</h3>
                        <p className="text-xl mb-8">تواصل معنا للحصول على دعم في حماية حساباتك</p>
                        <a href="#contact" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-lg">
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
