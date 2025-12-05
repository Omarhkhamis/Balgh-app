'use client';

import React, { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import HateSpeechTab from './legal-tabs/HateSpeechTab';
import DocumentationTab from './legal-tabs/DocumentationTab';
import LawsTab from './legal-tabs/LawsTab';
import ReportingTab from './legal-tabs/ReportingTab';
import FAQTab from './legal-tabs/FAQTab';

// Icons
const IconScale = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
);

const IconCamera = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const IconScroll = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const IconSend = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
);

const IconQuestion = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

interface Tab {
    id: string;
    label: string;
    icon: React.ComponentType;
    component: React.ComponentType;
}

export default function LegalTabs() {
    const [activeTab, setActiveTab] = useState<string>('hate-speech');
    const t = useTranslations('legal.tabs');

    const tabs: Tab[] = useMemo(() => [
        { id: 'hate-speech', label: t('hateSpeech'), icon: IconScale, component: HateSpeechTab },
        { id: 'documentation', label: t('documentation'), icon: IconCamera, component: DocumentationTab },
        { id: 'laws', label: t('laws'), icon: IconScroll, component: LawsTab },
        { id: 'reporting', label: t('reporting'), icon: IconSend, component: ReportingTab },
        { id: 'faq', label: t('faq'), icon: IconQuestion, component: FAQTab }
    ], [t]);

    const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || HateSpeechTab;

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
                        onChange={(e) => setActiveTab(e.target.value)}
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
            <div className="animate-fade-in min-h-[500px]">
                <ActiveComponent />
            </div>
        </div>
    );
}
