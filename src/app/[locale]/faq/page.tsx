'use client';

import AppHeader from '../../../components/AppHeader';

export default function FAQPage() {
    const faqs = [
        {
            question: "ما هي مبادرة بلّغ؟",
            answer: "مبادرة بلّغ هي منصة تهدف إلى رصد ومكافحة خطاب العنف والكراهية في الفضاء الرقمي السوري، من خلال استخدام تقنيات الذكاء الاصطناعي والمراجعة البشرية."
        },
        {
            question: "كيف يتم تحليل النصوص؟",
            answer: "نستخدم نماذج ذكاء اصطناعي متطورة مدربة على اللهجات السورية والعربية لتحليل النصوص وتصنيفها، ثم يتم مراجعة النتائج الحرجة من قبل فريق بشري متخصص لضمان الدقة."
        },
        {
            question: "هل بياناتي آمنة عند استخدام الأداة؟",
            answer: "نعم، نحن نولي أهمية قصوى لخصوصية المستخدمين. لا نقوم بتخزين النصوص المدخلة لأغراض التحليل إلا إذا قام المستخدم بتقديم بلاغ رسمي."
        },
        {
            question: "كيف يمكنني التبليغ عن محتوى مسيء؟",
            answer: "يمكنك استخدام أداة التحليل في الصفحة الرئيسية، وإذا تم تصنيف المحتوى كخطاب كراهية أو عنف، سيظهر لك خيار لتقديم بلاغ رسمي أو إنشاء تقرير قانوني."
        },
        {
            question: "ما هي المعايير المستخدمة في التصنيف؟",
            answer: "نعتمد على المعايير الدولية لحقوق الإنسان والقوانين المحلية ذات الصلة، بالإضافة إلى مدونة سلوك خاصة تم تطويرها بالتعاون مع خبراء قانونيين وحقوقيين."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <AppHeader />
            <main className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        الأسئلة الشائعة
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        إجابات على أكثر الأسئلة تكراراً حول المبادرة وآلية عملها
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {faq.question}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
