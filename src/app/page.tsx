'use client';

import { useState } from 'react';
import AppHeader from '../components/AppHeader';
import AnalysisForm from '../components/AnalysisForm';
import ResultsDisplay from '../components/ResultsDisplay';

export default function Home() {
  const [analysisResult, setAnalysisResult] = useState(null);
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
      setAnalysisResult(data);
    } catch (error) {
      console.error('Error analyzing text:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <AppHeader />
      <main className="container mx-auto px-4 py-12">
        <AnalysisForm onAnalyze={handleAnalyze} isAnalyzing={isAnalyzing} />
        {analysisResult && <ResultsDisplay result={analysisResult} />}
      </main>
    </div>
  );
}
