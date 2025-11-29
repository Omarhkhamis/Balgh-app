'use client';

import React, { useState } from 'react';
import AwarenessTab from './protection-tabs/AwarenessTab';
import ToolsTab from './protection-tabs/ToolsTab';
import ResponsibilityTab from './protection-tabs/ResponsibilityTab';

type TabType = 'awareness' | 'tools' | 'responsibility';

export default function ProtectionTabs() {
    const [activeTab, setActiveTab] = useState<TabType>('awareness');

    const tabs = [
        { id: 'awareness' as TabType, label: '🧠 افهم وحلل', icon: '🧠', color: 'green' },
        { id: 'tools' as TabType, label: '⚙️ احمِ نفسك وبلغ', icon: '⚙️', color: 'blue' },
        { id: 'responsibility' as TabType, label: '🤝 تضامن وواجه', icon: '🤝', color: 'orange' }
    ];

    return (
        <div className="space-y-8">
            {/* Desktop Tabs */}
            <div className="hidden md:flex gap-4 bg-gray-100 p-2 rounded-2xl">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex-1 px-6 py-4 rounded-xl font-bold text-lg transition-all ${activeTab === tab.id
                                ? `bg-${tab.color}-600 text-white shadow-lg scale-105`
                                : 'bg-transparent text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        <span className="text-2xl mr-2">{tab.icon}</span>
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Mobile Dropdown */}
            <div className="md:hidden">
                <select
                    value={activeTab}
                    onChange={(e) => setActiveTab(e.target.value as TabType)}
                    className="w-full px-6 py-4 text-lg font-bold bg-white border-2 border-gray-300 rounded-xl focus:outline-none focus:border-green-500"
                >
                    {tabs.map((tab) => (
                        <option key={tab.id} value={tab.id}>
                            {tab.icon} {tab.label}
                        </option>
                    ))}
                </select>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-2xl shadow-lg p-8 min-h-[600px]">
                {activeTab === 'awareness' && <AwarenessTab />}
                {activeTab === 'tools' && <ToolsTab />}
                {activeTab === 'responsibility' && <ResponsibilityTab />}
            </div>
        </div>
    );
}
