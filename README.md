# 🛡️ بَلِّغ - منصة كشف خطاب الكراهية

منصة آمنة ومتطورة لكشف خطاب الكراهية باستخدام الذكاء الاصطناعي وإنشاء تقارير قانونية.

## ✨ المميزات

- 🤖 **تحليل ذكي**: استخدام Gemini 2.0 Flash مع إطار HSIE-Syria v2.0
- 🌍 **واجهة عربية**: واجهة كاملة بالعربية مع دعم RTL
- ⚖️ **تقارير قانونية**: إنشاء تقارير لـ 9 دول (سوريا، ألمانيا، فرنسا، إلخ)
- 📊 **قاعدة بيانات**: حفظ التحليلات في Supabase
- 🗺️ **خريطة تفاعلية**: عرض القوانين حسب الدولة
- 📱 **متجاوب**: يعمل على جميع الأجهزة

## 🚀 البدء السريع

### 1. تثبيت المكتبات

```bash
npm install
```

### 2. إعداد المتغيرات البيئية

أنشئ ملف `.env.local` في المجلد الرئيسي:

```env
# Gemini AI
GEMINI_API_KEY=your_gemini_api_key_here

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# Google Sheets (اختياري - للنسخ الاحتياطي)
GOOGLE_SERVICE_ACCOUNT_CREDENTIALS={"type": "service_account", ...}
SPREADSHEET_ID=your_google_sheet_id_here
```

### 3. إعداد قاعدة البيانات

1. أنشئ حساب على [Supabase](https://supabase.com)
2. أنشئ مشروع جديد
3. في SQL Editor، شغّل:

```sql
CREATE TABLE analyses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  content TEXT NOT NULL,
  classification TEXT NOT NULL,
  risk_level TEXT NOT NULL,
  reasoning TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  user_ip TEXT
);
```

### 4. تشغيل المشروع

```bash
# Development
npm run dev

# Production
npm run build
npm start
```

افتح [http://localhost:3000](http://localhost:3000) في المتصفح.

## 🛠️ التقنيات المستخدمة

- **Frontend**: Next.js 15, React, TypeScript, Tailwind CSS
- **AI**: Google Gemini 2.0 Flash
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel (موصى به)

## 📚 الوثائق

- [دليل الاستخدام](docs/usage.md)
- [API Documentation](docs/api.md)
- [Contributing Guide](CONTRIBUTING.md)

## 🔒 الأمان

- ✅ جميع المفاتيح السرية في `.env.local` (غير مرفوعة على Git)
- ✅ Row Level Security في Supabase
- ✅ معالجة آمنة للبيانات الحساسة

## 📄 الترخيص

MIT License - انظر [LICENSE](LICENSE) للتفاصيل.

## 🤝 المساهمة

نرحب بالمساهمات! يرجى قراءة [دليل المساهمة](CONTRIBUTING.md) أولاً.

## 📞 التواصل

- Email: info@balagh.org
- Website: [balagh.org](https://balagh.org)

---

صُنع بـ ❤️ لمكافحة خطاب الكراهية
# balghapp
# balghapp
