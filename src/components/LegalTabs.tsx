'use client';

import React, { useState } from 'react';
import HateSpeechTab from './legal-tabs/HateSpeechTab';
import DocumentationTab from './legal-tabs/DocumentationTab';
import LawsTab from './legal-tabs/LawsTab';
import ReportingTab from './legal-tabs/ReportingTab';
import FAQTab from './legal-tabs/FAQTab';

interface Tab {
    id: string;
    label: string;
    icon: string;
    component: React.ComponentType;
}

const tabs: Tab[] = [
    { id: 'hate-speech', label: 'خطاب الكراهية قانونياً', icon: '⚖️', component: HateSpeechTab },
    { id: 'documentation', label: 'كيف توثّق الجريمة؟', icon: '📸', component: DocumentationTab },
    { id: 'laws', label: 'القوانين المعمول بها', icon: '📜', component: LawsTab },
    { id: 'reporting', label: 'آلية التبليغ', icon: '📤', component: ReportingTab },
    { id: 'faq', label: 'أسئلة شائعة', icon: '❓', component: FAQTab }
];

export default function LegalTabs() {
    const [activeTab, setActiveTab] = useState<string>('hate-speech');

    const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || HateSpeechTab;

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8">
            {/* Tab Navigation */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden mb-8">
                {/* Desktop Tabs */}
                <div className="hidden md:flex border-b border-gray-200">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 px-6 py-4 text-center font-bold text-base transition-all duration-300 relative ${activeTab === tab.id
                                    ? 'bg-green-600 text-white'
                                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            <div className="flex items-center justify-center gap-2">
                                <span className="text-2xl">{tab.icon}</span>
                                <span>{tab.label}</span>
                            </div>
                            {activeTab === tab.id && (
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-700"></div>
                            )}
                        </button>
                    ))}
                </div>

                {/* Mobile Dropdown */}
                <div className="md:hidden border-b border-gray-200">
                    <select
                        value={activeTab}
                        onChange={(e) => setActiveTab(e.target.value)}
                        className="w-full px-4 py-4 text-base font-bold text-gray-700 bg-white border-0 focus:ring-2 focus:ring-green-500 rounded-none"
                    >
                        {tabs.map((tab) => (
                            <option key={tab.id} value={tab.id}>
                                {tab.icon} {tab.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Tab Content */}
            <div className="animate-fade-in">
                <ActiveComponent />
            </div>
        </div>
    );
}
