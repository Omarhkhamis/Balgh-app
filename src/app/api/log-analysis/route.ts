import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const {
            inputText,
            classification,
            riskLevel,
            reasoning
        } = body;

        // التحقق من البيانات المطلوبة
        if (!inputText || !classification || !riskLevel) {
            return NextResponse.json(
                { error: 'Missing required fields: inputText, classification, or riskLevel' },
                { status: 400 }
            );
        }

        // الحصول على IP المستخدم (اختياري)
        const userIp = req.headers.get('x-forwarded-for') ||
            req.headers.get('x-real-ip') ||
            null;

        // حفظ البيانات في Supabase
        const { data, error } = await supabaseAdmin
            .from('analyses')
            .insert({
                content: inputText,
                classification: classification,
                risk_level: riskLevel,
                reasoning: reasoning || '',
                user_ip: userIp
            })
            .select()
            .single();

        if (error) {
            console.error('Supabase error:', error);
            return NextResponse.json(
                { error: 'Failed to save analysis to database', details: error.message },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            analysisId: data.id
        });

    } catch (error: unknown) {
        console.error('Error in /api/log-analysis:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json(
            { error: errorMessage || 'Internal Server Error' },
            { status: 500 }
        );
    }
}
