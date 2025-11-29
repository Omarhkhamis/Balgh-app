'use client';

import React from 'react';

export default function HatredTimeline() {
    const stages = [
        {
            number: 1,
            title: 'نزع الإنسانية والتمهيد',
            description: 'تُستخدم كلمات صغيرة لنزع الإنسانية من الآخر: "حشرات"، "جراثيم"، "خونة"... كلمات بسيطة لكنها تُعدّ الأرضية لتقبّل العنف.',
            color: 'red',
            icon: '⚠️'
        },
        {
            number: 2,
            title: 'التبرير الإعلامي',
            description: 'يُعاد تدوير هذه اللغة عبر صفحات إعلامية أو حسابات مؤثرة، فتتحول إلى خطاب "مشروع" أو "مقبول اجتماعيًا".',
            color: 'orange',
            icon: '📢'
        },
        {
            number: 3,
            title: 'الانتشار السريع والعدوى',
            description: 'تنتشر عبر وسوم، ميمات، فيديوهات قصيرة، وحسابات وهمية، فتصل إلى جمهور واسع يكررها دون وعي.',
            color: 'yellow',
            icon: '🔥'
        }
    ];

    return (
        <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute right-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-300 via-orange-300 to-yellow-300 transform translate-x-1/2"></div>

            {/* Stages */}
            <div className="space-y-8">
                {stages.map((stage, index) => (
                    <div
                        key={stage.number}
                        className={`relative flex items-center gap-6 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                            }`}
                    >
                        {/* Number Badge */}
                        <div className={`hidden md:flex absolute right-1/2 transform translate-x-1/2 w-16 h-16 rounded-full bg-${stage.color}-500 text-white items-center justify-center font-bold text-2xl shadow-lg z-10`}>
                            {stage.number}
                        </div>

                        {/* Content Card */}
                        <div className={`flex-1 bg-${stage.color}-50 p-6 rounded-2xl border-r-4 border-${stage.color}-500 hover:shadow-lg transition-shadow ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                            }`}>
                            <div className="flex items-start gap-4">
                                <span className="text-4xl flex-shrink-0">{stage.icon}</span>
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className={`md:hidden w-10 h-10 rounded-full bg-${stage.color}-500 text-white flex items-center justify-center font-bold`}>
                                            {stage.number}
                                        </span>
                                        <h4 className="text-xl font-bold text-gray-900">{stage.title}</h4>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed">{stage.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
