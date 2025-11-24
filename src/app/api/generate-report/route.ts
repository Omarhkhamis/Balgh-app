import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: Request) {
    try {
        const { jurisdiction, text, reasoning_ar, severity_score, legal_citation } = await req.json();

        // Map countries to their official languages
        const countryLanguages: { [key: string]: string } = {
            'Syria': 'Arabic',
            'Germany': 'German',
            'Turkey': 'Turkish',
            'France': 'French',
            'USA': 'English',
            'UK': 'English',
            'Canada': 'English',
            'Netherlands': 'Dutch',
            'Sweden': 'Swedish',
            'Austria': 'German',
            'Belgium': 'French or Dutch',
            'Switzerland': 'German, French, or Italian',
            'Spain': 'Spanish'
        };

        const targetLanguage = countryLanguages[jurisdiction] || 'English';

        const prompt = `
        You are a legal expert specializing in hate speech laws in ${jurisdiction}.
        Generate a formal legal report (complaint/notification) to the authorities regarding the following hate speech incident.
        
        **CRITICAL REQUIREMENT: The ENTIRE report MUST be written in ${targetLanguage}. Do NOT use any other language.**
        
        **Incident Details:**
        - Content: "${text}"
        - Analysis (Arabic): ${reasoning_ar}
        - Severity: ${severity_score}/10
        - Legal Basis: ${legal_citation || 'Hate Speech Laws'}

        **Requirements:**
        1. Language: The report MUST be 100% in ${targetLanguage} (the official language of ${jurisdiction}).
        2. Format: Formal legal letter structure (To the Public Prosecutor/Platform Safety Team).
        3. Tone: Professional, objective, and legally grounded.
        4. Content: 
           - Clearly state the violation
           - Reference the specific law (${legal_citation || 'applicable hate speech laws'})
           - Request immediate action (removal/investigation)
        5. Do NOT include any markdown formatting (no ** or #). Just plain text.
        6. The report should include:
           - Official header
           - Sender and recipient information
           - Subject of the complaint
           - Detailed description of the violation
           - Legal basis
           - Request and recommendations
           - Signature and date
        
        **REMINDER: Write the ENTIRE report in ${targetLanguage} only.**
        `;

        const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
        const result = await model.generateContent(prompt);
        const report = result.response.text();

        return NextResponse.json({ report });
    } catch (error) {
        console.error('Report generation error:', error);
        return NextResponse.json({ error: 'Failed to generate report' }, { status: 500 });
    }
}
