import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI, SchemaType } from '@google/generative-ai';
import { HSIE_SYRIA_SYSTEM_PROMPT } from '@/lib/prompts';

export async function POST(req: NextRequest) {
    try {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return NextResponse.json({ error: 'GEMINI_API_KEY is not set' }, { status: 500 });
        }

        const { text } = await req.json();
        if (!text) {
            return NextResponse.json({ error: 'Text is required' }, { status: 400 });
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
            model: 'gemini-2.0-flash',
            generationConfig: {
                responseMimeType: 'application/json',
                responseSchema: {
                    type: SchemaType.OBJECT,
                    properties: {
                        classification: { type: SchemaType.STRING, enum: ["Safe", "Hate Speech", "Incitement to Violence"] },
                        severity_score: { type: SchemaType.NUMBER },
                        vulnerability_score: { type: SchemaType.NUMBER },
                        context_score: { type: SchemaType.NUMBER },
                        risk_level: { type: SchemaType.STRING, enum: ["Low", "Medium", "High", "Critical"] },
                        reasoning_ar: { type: SchemaType.STRING },
                        violation_type: { type: SchemaType.STRING },
                        target_group: { type: SchemaType.STRING },
                    },
                    required: ["classification", "severity_score", "risk_level", "reasoning_ar"],
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                } as any,
            },
        });

        const result = await model.generateContent([HSIE_SYRIA_SYSTEM_PROMPT, text]);
        const responseText = result.response.text();
        const analysis = JSON.parse(responseText);

        return NextResponse.json(analysis);
    } catch (error: unknown) {
        console.error('Error in /api/classify:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        console.error('Error details:', JSON.stringify(error, null, 2));
        return NextResponse.json({ error: errorMessage || 'Internal Server Error', details: String(error) }, { status: 500 });
    }
}
