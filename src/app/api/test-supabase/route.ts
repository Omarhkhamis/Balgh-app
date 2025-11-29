import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function GET() {
    try {
        // 1. اختبار الاتصال
        console.log('🔍 Testing Supabase connection...');

        // 2. محاولة قراءة من الجدول
        const { data: readTest, error: readError } = await supabaseAdmin
            .from('analyses')
            .select('*')
            .limit(1);

        if (readError) {
            console.error('❌ Read error:', readError);
            return NextResponse.json({
                success: false,
                error: 'Failed to read from database',
                details: readError.message,
                code: readError.code
            }, { status: 500 });
        }

        console.log('✅ Read test passed');

        // 3. محاولة إضافة بيانات تجريبية
        const { data: insertTest, error: insertError } = await supabaseAdmin
            .from('analyses')
            .insert({
                content: 'اختبار الاتصال - ' + new Date().toISOString(),
                classification: 'safe',
                risk_level: 'low',
                reasoning: 'اختبار تلقائي للتحقق من الاتصال',
                user_ip: 'test'
            })
            .select()
            .single();

        if (insertError) {
            console.error('❌ Insert error:', insertError);
            return NextResponse.json({
                success: false,
                error: 'Failed to insert test data',
                details: insertError.message,
                code: insertError.code
            }, { status: 500 });
        }

        console.log('✅ Insert test passed');

        // 4. حذف البيانات التجريبية
        await supabaseAdmin
            .from('analyses')
            .delete()
            .eq('id', insertTest.id);

        return NextResponse.json({
            success: true,
            message: '🎉 Supabase connection is working perfectly!',
            testData: {
                id: insertTest.id,
                content: insertTest.content
            }
        });

    } catch (error: unknown) {
        console.error('❌ Unexpected error:', error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json({
            success: false,
            error: 'Unexpected error',
            details: errorMessage
        }, { status: 500 });
    }
}
