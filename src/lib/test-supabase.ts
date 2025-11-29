import { supabaseAdmin } from './supabase';

/**
 * اختبار الاتصال بـ Supabase
 * شغّل هذا الملف للتأكد من أن كل شيء يعمل
 */
async function testSupabaseConnection() {
    console.log('🔍 اختبار الاتصال بـ Supabase...\n');

    try {
        // 1. اختبار الاتصال بالجدول
        console.log('1️⃣ اختبار قراءة الجدول...');
        const { data: testRead, error: readError } = await supabaseAdmin
            .from('analyses')
            .select('*')
            .limit(1);

        if (readError) {
            console.error('❌ خطأ في القراءة:', readError.message);
            return false;
        }
        console.log('✅ القراءة نجحت!');

        // 2. اختبار إضافة بيانات تجريبية
        console.log('\n2️⃣ اختبار إضافة بيانات تجريبية...');
        const { data: testInsert, error: insertError } = await supabaseAdmin
            .from('analyses')
            .insert({
                content: 'هذا نص تجريبي للاختبار',
                classification: 'safe',
                risk_level: 'low',
                reasoning: 'اختبار الاتصال بقاعدة البيانات',
                user_ip: '127.0.0.1'
            })
            .select()
            .single();

        if (insertError) {
            console.error('❌ خطأ في الإضافة:', insertError.message);
            return false;
        }

        console.log('✅ الإضافة نجحت!');
        console.log('📊 البيانات المضافة:', {
            id: testInsert.id,
            content: testInsert.content,
            classification: testInsert.classification
        });

        // 3. حذف البيانات التجريبية
        console.log('\n3️⃣ حذف البيانات التجريبية...');
        const { error: deleteError } = await supabaseAdmin
            .from('analyses')
            .delete()
            .eq('id', testInsert.id);

        if (deleteError) {
            console.error('⚠️ تحذير: لم نستطع حذف البيانات التجريبية');
        } else {
            console.log('✅ تم حذف البيانات التجريبية');
        }

        console.log('\n🎉 جميع الاختبارات نجحت! Supabase جاهز للاستخدام!');
        return true;

    } catch (error) {
        console.error('\n❌ خطأ غير متوقع:', error);
        return false;
    }
}

// شغّل الاختبار
testSupabaseConnection()
    .then((success) => {
        process.exit(success ? 0 : 1);
    })
    .catch((error) => {
        console.error('Fatal error:', error);
        process.exit(1);
    });
