# 🕌 موقع الشيخ عبد الرحمن الزواوي

الموقع الرسمي للشيخ عبد الرحمن الزواوي — مصحف كامل، مشغل صوتي متقدم، وجميع روابط التواصل.

> تصميم وبرمجة: **Farouk** — نسخة احترافية RTL

---

## 🚀 نشر الموقع على GitHub Pages (مجاناً)

### الخطوات:

### 1. رفع المشروع على GitHub

```bash
git init
git add .
git commit -m "Initial commit - Sheikh website by Farouk"
git remote add origin https://github.com/<اسم-المستخدم>/<اسم-الريبو>.git
git push -u origin main
```

### 2. تفعيل GitHub Pages

افتح الريبو على GitHub، ثم:

1. اذهب إلى **Settings** → **Pages**
2. في قسم **Source**: اختر **GitHub Actions**
3. احفظ التغييرات

### 3. تشغيل الـ Workflow

- اذهب إلى تبويب **Actions** في الريبو
- سيعمل الـ Workflow تلقائياً عند كل push على فرع `main`
- أو اضغط **Run workflow** لتشغيله يدوياً

### 4. إعداد قاعدة الرابط (Base Path)

افتح الملف: `.github/workflows/deploy.yml`

ابحث عن هذا السطر:

```yaml
GITHUB_BASE: "/"
```

**إذا كان لديك دومين مخصص** (مثل `abdelrahmanelzwawy.com`): اتركه `/`

**إذا كنت تستخدم رابط GitHub الافتراضي** (`<user>.github.io/<repo>`): غيّره إلى:

```yaml
GITHUB_BASE: "/<اسم-الريبو>/"
# مثال:
GITHUB_BASE: "/sheikh-website/"
```

### 5. إعداد دومين مخصص (اختياري)

1. في ملف `public/CNAME` (أنشئه إذا لم يكن موجوداً) ضع اسم الدومين:
   ```
   abdelrahmanelzwawy.com
   ```
2. في **Settings** → **Pages** → **Custom domain** أدخل الدومين واضغط Save
3. فعّل **Enforce HTTPS** ✅

---

## 🏗️ تشغيل الموقع محلياً

### المتطلبات

- Node.js 20+
- pnpm: `npm install -g pnpm`

### التثبيت

```bash
# من جذر المشروع
pnpm install
```

### التشغيل للتطوير

```bash
# من جذر المشروع
PORT=5173 BASE_PATH="/" pnpm --filter @workspace/sheikh-website run dev
```

### البناء لـ GitHub Pages

```bash
pnpm --filter @workspace/sheikh-website run build:github
# الملفات تُبنى في: artifacts/sheikh-website/dist/
```

---

## 📁 هيكل الملفات

```
artifacts/sheikh-website/
├── src/
│   ├── App.tsx              # التطبيق الرئيسي + التوجيه
│   ├── index.css            # التصميم العام + RTL + الألوان
│   ├── lib/
│   │   ├── surahs.ts        # قائمة 114 سورة + روابط الصوت
│   │   └── theme.tsx        # إدارة الوضع الداكن/الفاتح
│   ├── components/
│   │   ├── Navbar.tsx       # شريط التنقل
│   │   ├── Footer.tsx       # تذييل الصفحة
│   │   └── AudioPlayer.tsx  # مشغل صوتي متقدم
│   └── pages/
│       ├── HomePage.tsx     # الصفحة الرئيسية
│       ├── QuranPage.tsx    # صفحة المصحف (114 سورة)
│       ├── DownloadsPage.tsx # صفحة التحميلات
│       ├── VideosPage.tsx   # صفحة الفيديوهات
│       └── ContactPage.tsx  # صفحة التواصل
├── public/
│   └── 404.html             # إعادة توجيه SPA لـ GitHub Pages
├── vite.config.github.ts    # إعدادات البناء لـ GitHub Pages
├── vite.config.ts           # إعدادات التطوير على Replit
└── README.md                # هذا الملف
.github/
└── workflows/
    └── deploy.yml           # GitHub Actions للنشر التلقائي
```

---

## 🔗 الروابط المستخدمة

| المنصة | الرابط |
|--------|--------|
| الموقع الرسمي | https://abdelrahmanelzwawy.com |
| فيسبوك | https://www.facebook.com/AbdElRahmanElzwawy |
| يوتيوب | https://www.youtube.com/channel/UCmEQwRROa-hTlySNvMtFWnw |
| إكس/تويتر | https://twitter.com/Sheikh_Elzwawy |
| تليجرام | https://t.me/abdelrahmanelzwawy |
| تليجرام (2) | https://t.me/shelzwawy |
| إنستجرام | https://www.instagram.com/abdelrahman.elzwawy/ |
| تيك توك | https://www.tiktok.com/@abdelrahman.elzwawy |
| ساوند كلاود | https://soundcloud.com/abdelrahmanelzwawy |
| خريطة المسجد | https://maps.app.goo.gl/VqNXrqVBTsYTkQi6A |
| مجلد المصحف | https://drive.google.com/drive/folders/1PZtZ8SOg0EHNujKyTYuJynPJzmAO-3bZ |

---

## ✨ المميزات

- ✅ واجهة عربية كاملة (RTL) بخط Cairo
- ✅ وضع داكن/فاتح
- ✅ تأثير الـ Glitch + Typing على اسم الشيخ
- ✅ مشغل صوتي متقدم (تشغيل/إيقاف/تخطي/سرعة/تكرار/تحميل)
- ✅ 114 سورة كاملة مع بحث وفلتر
- ✅ جميع روابط التواصل الاجتماعي
- ✅ صفحة تحميل مع روابط مباشرة
- ✅ مقاطع يوتيوب مدمجة
- ✅ نموذج تواصل عبر الواتساب
- ✅ SEO كامل (meta، OG tags، canonical)
- ✅ تعليق حقوق Farouk بعد كل سطر
- ✅ متجاوب مع الجوال والتابلت والكمبيوتر

---

## 📝 ملاحظات

- مصدر الصوت: [mp3quran.net](https://mp3quran.net) — قارئ: عبد الرحمن الزواوي (رمز: afs)
- يمكن تغيير مصدر الصوت من ملف `src/lib/surahs.ts`
- كل الحقوق محفوظة © الشيخ عبد الرحمن الزواوي

---

*تصميم وبرمجة: Farouk*
