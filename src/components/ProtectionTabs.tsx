'use client';

import React, { useState } from 'react';
import AwarenessTab from './protection-tabs/AwarenessTab';
import ToolsTab from './protection-tabs/ToolsTab';
import ResponsibilityTab from './protection-tabs/ResponsibilityTab';
import { useTranslations } from 'next-intl';

// Icons
const IconBrain = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
);

const IconTools = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const IconHandshake = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

type TabType = 'awareness' | 'tools' | 'responsibility';

export default function ProtectionTabs() {
    const t = useTranslations('protection');
    const [activeTab, setActiveTab] = useState<TabType>('awareness');

    const tabs = [
        { id: 'awareness' as TabType, label: t('tabs.awareness'), icon: IconBrain },
        { id: 'tools' as TabType, label: t('tabs.tools'), icon: IconTools },
        { id: 'responsibility' as TabType, label: t('tabs.responsibility'), icon: IconHandshake }
    ];

    return (
        <div className="w-full max-w-7xl mx-auto">
            {/* Tab Navigation */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
                {/* Desktop Tabs */}
                <div className="hidden md:flex border-b border-gray-100">
                    {tabs.map((tab) => {
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex-1 px-6 py-5 text-center font-bold text-base transition-all duration-300 relative group ${isActive
                                    ? 'text-[#1E8C4E] bg-green-50/50'
                                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                                    }`}
                            >
                                <div className="flex flex-col items-center justify-center gap-2">
                                    <div className={`p-2 rounded-full transition-all ${isActive ? 'bg-green-100 text-[#1E8C4E]' : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200 group-hover:text-gray-600'}`}>
                                        <tab.icon />
                                    </div>
                                    <span>{tab.label}</span>
                                </div>
                                {isActive && (
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#1E8C4E] rounded-t-full mx-8"></div>
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Mobile Dropdown */}
                <div className="md:hidden p-4">
                    <select
                        value={activeTab}
                        onChange={(e) => setActiveTab(e.target.value as TabType)}
                        className="w-full px-4 py-3 text-base font-bold text-gray-900 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1E8C4E] focus:border-[#1E8C4E] outline-none"
                    >
                        {tabs.map((tab) => (
                            <option key={tab.id} value={tab.id}>
                                {tab.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Tab Content */}
            <div className="animate-fade-in min-h-[600px]">
                {activeTab === 'awareness' && <AwarenessTab />}
                {activeTab === 'tools' && <ToolsTab />}
                {activeTab === 'responsibility' && <ResponsibilityTab />}
            </div>
        </div>
    );
}
