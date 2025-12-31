// Translations Object
const translations = {
    en: {
        pageTitle: "Smart Store - Intelligent Retail Management",
        navFeatures: "Features",
        navShowcase: "Showcase",
        navBenefits: "Why Us",
        navContact: "Contact",
        navDownload: "Download Now",
        themeLabel: "Theme",
        versionBadge: "v2.0 Now Available",
        heroTitle1: "The Smartest Way to",
        heroTitle2: "Manage Your Store",
        heroSubtitle: "All-in-one POS and Inventory solution built for modern retailers. Secure, offline-first, and beautifully designed.",
        heroDownloadWin: "Download for Windows",
        heroWatchDemo: "Watch Demo",
        dashboardCaption: "Interactive Dashboard View",
        featuresTitle: "Everything You Need to Run Your Business",
        featuresSubtitle: "Powerful modules designed to work together seamlessly.",
        feat1Title: "Smart Invoicing (POS)",
        feat1Desc: "Fast sales entry with barcode support. Designed for speed with full keyboard navigation and instant stock validation.",
        feat2Title: "Inventory Management",
        feat2Desc: "Track multiple warehouses, units, and categories. Never run out of stock with low-quantity alerts.",
        feat3Title: "Comprehensive Reporting",
        feat3Desc: "Visual insights for best sellers, profits, and financial statements. Make data-driven decisions instantly.",
        feat4Title: "Localization & Theming",
        feat4Desc: "Native Arabic (RTL) & English support. Switch between a stunning Dark Mode and Clean Light Mode.",
        feat5Title: "Financial Control",
        feat5Desc: "Track customer debts, supplier payments, and expense management. Keep your books balanced effortlessly.",
        feat6Title: "Secure & Offline First",
        feat6Desc: "Your data stays on your device. Works perfectly without internet. Automated local backups for peace of mind.",
        showcaseTitle: "Designed for Efficiency",
        showcase1Title: "Intuitive Interface",
        showcase1Desc: "Clean layouts that reduce eye strain and cognitive load during long shifts.",
        showcase2Title: "Keyboard Shortcuts",
        showcase2Desc: "Perform every action without reaching for the mouse. Designed for power users.",
        showcase3Title: "Detailed Analytics",
        showcase3Desc: "Go beyond simple numbers with interactive charts and itemized breakdowns.",
        exploreFeatures: "Explore all features",
        benefitsTitle: "Why Retailers Choose Smart Store",
        benefitsSubtitle: "Built with performance and reliability at its core.",
        benefit1Title: "Lightning Fast",
        benefit1Desc: "Optimized Electron codebase tailored for low-spec hardware capability.",
        benefit2Title: "Secure Database",
        benefit2Desc: "Local SQLite/MySQL integration ensuring your financial data never leaks.",
        benefit3Title: "Auto Updates",
        benefit3Desc: "Seamless background updates to keep you on the latest features.",
        footerTagline: "Simplify your retail operations today.",
        footerPrivacy: "Privacy Policy",
        footerTerms: "Terms of Service",
        footerSupport: "Support",
        footerCopyright: "© 2025 Muzamil. All rights reserved."
    },
    ar: {
        pageTitle: "المتجر الذكي - إدارة التجزئة الذكية",
        navFeatures: "المميزات",
        navShowcase: "العرض",
        navBenefits: "لماذا نحن",
        navContact: "اتصل بنا",
        navDownload: "حمل الآن",
        themeLabel: "المظهر",
        versionBadge: "الإصدار 2.0 متاح الآن",
        heroTitle1: "أذكى طريقة",
        heroTitle2: "لإدارة متجرك",
        heroSubtitle: "حل نقاط البيع والمخزون الشامل المصمم لتجار التجزئة المعاصرين. آمن، يعمل دون اتصال، ومصمم بشكل جميل.",
        heroDownloadWin: "تحميل لنظام ويندوز",
        heroWatchDemo: "شاهد العرض",
        dashboardCaption: "عرض لوحة التحكم التفاعلية",
        featuresTitle: "كل ما تحتاجه لتشغيل عملك",
        featuresSubtitle: "وحدات قوية مصممة للعمل معًا بسلاسة.",
        feat1Title: "فواتير ذكية (POS)",
        feat1Desc: "إدخال سريع للمبيعات مع دعم الباركود. مصمم للسرعة مع التنقل الكامل عبر لوحة المفاتيح والتحقق الفوري من المخزون.",
        feat2Title: "إدارة المخزون",
        feat2Desc: "تتبع مستودعات ووحدات وفئات متعددة. لا ينفد المخزون أبدًا مع تنبيهات الكمية المنخفضة.",
        feat3Title: "تقارير شاملة",
        feat3Desc: "رؤى مرئية للأكثر مبيعًا والأرباح والبيانات المالية. اتخذ قرارات تعتمد على البيانات على الفور.",
        feat4Title: "التعريب والسمات",
        feat4Desc: "دعم أصلي للغة العربية (RTL) والإنجليزية. التبديل بين الوضع الداكن المذهل والوضع الفاتح النظيف.",
        feat5Title: "الرقابة المالية",
        feat5Desc: "تتبع ديون العملاء ومدفوعات الموردين وإدارة النفقات. حافظ على توازن دفاتر حساباتك دون عناء.",
        feat6Title: "آمن ويعمل دون اتصال",
        feat6Desc: "تبقى بياناتك على جهازك. يعمل بشكل مثالي بدون إنترنت. نسخ احتياطية محلية آلية لراحة البال.",
        showcaseTitle: "مصمم للكفاءة",
        showcase1Title: "واجهة بديهية",
        showcase1Desc: "تخطيطات نظيفة تقلل من إجهاد العين والحمل المعرفي أثناء نوبات العمل الطويلة.",
        showcase2Title: "ختصارات لوحة المفاتيح",
        showcase2Desc: "قم بتنفيذ كل إجراء دون الوصول إلى الماوس. مصمم للمستخدمين المحترفين.",
        showcase3Title: "تحليلات مفصلة",
        showcase3Desc: "تجاوز الأرقام البسيطة باستخدام الرسوم البيانية التفاعلية والتفاصيل المفصلة.",
        exploreFeatures: "استكشف جميع الميزات",
        benefitsTitle: "لماذا يختار تجار التجزئة المتجر الذكي",
        benefitsSubtitle: "مبني مع الأداء والموثوقية في جوهره.",
        benefit1Title: "سريع كالبرق",
        benefit1Desc: "قاعدة كود Electron محسنة مصممة لقدرة الأجهزة منخفضة المواصفات.",
        benefit2Title: "قاعدة بيانات آمنة",
        benefit2Desc: "تكامل SQLite/MySQL محلي يضمن عدم تسرب بياناتك المالية أبدًا.",
        benefit3Title: "تحديثات تلقائية",
        benefit3Desc: "تحديثات خلفية سلسة لإبقائك على أحدث الميزات.",
        footerTagline: "بسط عمليات التجزئة الخاصة بك اليوم.",
        footerPrivacy: "سياسة الخصوصية",
        footerTerms: "شروط الخدمة",
        footerSupport: "الدعم",
        footerCopyright: "© 2025 Muzamil. جميع الحقوق محفوظة."
    }
};

// Current Language
let currentLang = localStorage.getItem('lang') || 'ar'; // Default to Arabic

// Function to update content
function updateContent(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update Text
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update Toggle Button Text
    const toggleBtn = document.getElementById('lang-toggle');
    const mobileToggleBtn = document.getElementById('mobile-lang-toggle');
    
    if (toggleBtn) {
        if (lang === 'ar') {
            toggleBtn.textContent = 'English';
        } else {
            toggleBtn.textContent = 'العربية';
        }
    }
    
    if (mobileToggleBtn) {
        if (lang === 'ar') {
            mobileToggleBtn.textContent = 'EN';
        } else {
            mobileToggleBtn.textContent = 'AR';
        }
    }

    // Save to localStorage
    localStorage.setItem('lang', lang);
    currentLang = lang;
}

// Initialize Language
updateContent(currentLang);

// Language Toggle Event Listeners
const langToggleBtn = document.getElementById('lang-toggle');
const mobileLangToggleBtn = document.getElementById('mobile-lang-toggle');

function toggleLanguage() {
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    updateContent(newLang);
}

if (langToggleBtn) langToggleBtn.addEventListener('click', toggleLanguage);
if (mobileLangToggleBtn) mobileLangToggleBtn.addEventListener('click', toggleLanguage);


// Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Dark Mode Toggle Logic
const themeToggleBtns = [document.getElementById('theme-toggle'), document.getElementById('mobile-theme-toggle')];

// Check local storage or system preference
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

themeToggleBtns.forEach(btn => {
    if (btn) {
        btn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            
            if (document.documentElement.classList.contains('dark')) {
                localStorage.theme = 'dark';
                btn.innerHTML = '<i class="fa-solid fa-sun text-yellow-500"></i>';
            } else {
                localStorage.theme = 'light';
                btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
            }
        });
        
        // Initialize icon based on current state
        if (document.documentElement.classList.contains('dark')) {
            btn.innerHTML = '<i class="fa-solid fa-sun text-yellow-500"></i>';
        }
    }
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Close mobile menu if open
        if (!menu.classList.contains('hidden')) {
            menu.classList.add('hidden');
        }
    });
});
