'use client';

import { useState } from 'react';
import AppHeader from '../../components/AppHeader';
import AnalysisForm from '../../components/AnalysisForm';

export default function Home() {
  // const [analysisResult] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = async (text: string) => {
    setIsAnalyzing(true);
    try {
      const response = await fetch('/api/classify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
      });

      const data = await response.json();

      // Redirect to monitoring page with results
      const resultParam = encodeURIComponent(JSON.stringify(data));
      window.location.href = `/monitoring?result=${resultParam}`;
    } catch (error) {
      console.error('Error analyzing text:', error);
      setIsAnalyzing(false);
    }
  };

  return (
    <div id="analyze" className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <AppHeader />
      <main className="container mx-auto px-4 py-8 md:py-16">
        <AnalysisForm onAnalyze={handleAnalyze} isAnalyzing={isAnalyzing} />
      </main>
    </div>
  );
}
