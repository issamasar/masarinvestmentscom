import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.individuals': 'For Individuals',
    'nav.employers': 'For Employers',
    'nav.howItWorks': 'How It Works',
    'nav.trust': 'Trust & Governance',
    'nav.funds': 'Funds',
    'nav.partners': 'Partners',
    'nav.about': 'About',
    'nav.insights': 'Insights',
    'nav.contact': 'Contact',
    'nav.joinWaitlist': 'Join Waitlist',
    'nav.bookDemo': 'Book Demo',

    // Hero
    'hero.headline': 'Your Financial Dignity is our Mission. Build your wealth effortlessly with MASAR.',
    'hero.subheadline': 'MASAR helps employees build regulated long-term wealth through payroll investing, employer matching, and simple habit mechanics — designed for non-experts.',
    'hero.trustLine': 'Regulator-first. Partner-led rails. Transparent ownership.',
    'hero.cta.waitlist': 'Join the Waitlist',
    'hero.cta.demo': 'Book Employer Demo',

    // Promise
    'promise.title': 'The MASAR Promise',
    'promise.simplicity.title': 'Simplicity',
    'promise.simplicity.desc': 'No trading. No noise. Just consistent progress.',
    'promise.trust.title': 'Trust',
    'promise.trust.desc': 'Units recorded on the authoritative register (TA/SDC as applicable).',
    'promise.dignity.title': 'Dignity',
    'promise.dignity.desc': 'Designed for people who work hard and deserve access.',

    // How it works
    'how.title': 'How MASAR Works',
    'how.step1.title': 'Onboard',
    'how.step1.desc': 'Quick digital verification where available',
    'how.step2.title': 'Set a Rule',
    'how.step2.desc': 'Choose payroll split and/or round-ups',
    'how.step3.title': 'Invest',
    'how.step3.desc': 'Through an umbrella fund sleeve of your choice',
    'how.step4.title': 'Track',
    'how.step4.desc': 'Units + distributions in plain language',
    'how.disclaimer': 'Capital at risk. Distributions variable. No guaranteed returns.',

    // Employers
    'employers.title': 'A benefit your team will use — without rebuilding your payroll stack.',
    'employers.subtitle': 'Turn-Key Savings Benefit',
    'employers.tier1.title': 'File/CSV Fast Start',
    'employers.tier1.desc': 'Zero engineering required',
    'employers.tier2.title': 'API Connectors',
    'employers.tier2.desc': 'For HRIS/payroll incumbents',
    'employers.tier3.title': 'White-Label',
    'employers.tier3.desc': 'Bank-embedded experience',

    // Trust
    'trust.title': 'Trust & Governance',
    'trust.subtitle': 'MASAR is an orchestration and transparency layer — not a custodian.',

    // Why Now
    'whyNow.title': 'Why Now',
    'whyNow.rails.title': 'Rails Ready',
    'whyNow.rails.desc': 'Digital identity and payments infrastructure is mature',
    'whyNow.demand.title': 'Employer Demand',
    'whyNow.demand.desc': 'Modern benefits that actually get used',
    'whyNow.youth.title': 'Youth Demographic',
    'whyNow.youth.desc': 'Financial wellbeing for the next generation',

    // Social Proof
    'social.title': 'Coming Soon',
    'social.subtitle': 'Pilot cohorts with leading employers & partners',
    'social.note': 'Select partners in discussion',

    // Final CTA
    'finalCta.headline': "Your future shouldn't depend on your financial background.",
    'finalCta.individuals': 'Join Waitlist',
    'finalCta.employers': 'Book Employer Demo',

    // Footer
    'footer.description': 'Building ownership, one paycheck at a time.',
    'footer.product': 'Product',
    'footer.company': 'Company',
    'footer.legal': 'Legal',
    'footer.newsletter': 'MASAR Insights',
    'footer.newsletter.desc': 'Financial habits, employer benefits, and investing basics.',
    'footer.newsletter.placeholder': 'Enter your email',
    'footer.newsletter.button': 'Subscribe',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.rights': 'All rights reserved.',

    // Forms
    'form.name': 'Full Name',
    'form.email': 'Email Address',
    'form.phone': 'Phone (Optional)',
    'form.employer': 'Current Employer (Optional)',
    'form.company': 'Company Name',
    'form.role': 'Your Role',
    'form.employees': 'Number of Employees',
    'form.payrollSystem': 'Payroll System',
    'form.message': 'Message',
    'form.submit': 'Submit',
    'form.success': "Thank you! We'll be in touch soon.",

    // Funds
    'funds.cashYield': 'CashYield',
    'funds.cashYield.desc': 'Capital preservation oriented',
    'funds.balanced': 'Balanced',
    'funds.balanced.desc': 'Diversified growth',
    'funds.halal': 'Halal',
    'funds.halal.desc': 'Faith-aligned investing',
  },
  ar: {
    // Navigation
    'nav.individuals': 'للأفراد',
    'nav.employers': 'لأصحاب العمل',
    'nav.howItWorks': 'كيف يعمل',
    'nav.trust': 'الثقة والحوكمة',
    'nav.funds': 'الصناديق',
    'nav.partners': 'الشركاء',
    'nav.about': 'عن مسار',
    'nav.insights': 'رؤى',
    'nav.contact': 'تواصل',
    'nav.joinWaitlist': 'انضم للقائمة',
    'nav.bookDemo': 'احجز عرض',

    // Hero
    'hero.headline': 'كرامتك المالية هي مهمتنا. ابنِ ثروتك بسهولة مع مسار.',
    'hero.subheadline': 'مسار يساعد الموظفين على بناء ثروة طويلة الأجل من خلال الاستثمار عبر الرواتب، ومطابقة صاحب العمل، وآليات بسيطة للعادات — مصمم لغير الخبراء.',
    'hero.trustLine': 'الأولوية للتنظيم. قنوات الشركاء. ملكية شفافة.',
    'hero.cta.waitlist': 'انضم لقائمة الانتظار',
    'hero.cta.demo': 'احجز عرض لصاحب العمل',

    // Promise
    'promise.title': 'وعد مسار',
    'promise.simplicity.title': 'البساطة',
    'promise.simplicity.desc': 'لا تداول. لا ضوضاء. تقدم مستمر فقط.',
    'promise.trust.title': 'الثقة',
    'promise.trust.desc': 'الوحدات مسجلة في السجل الرسمي.',
    'promise.dignity.title': 'الكرامة',
    'promise.dignity.desc': 'مصمم للأشخاص الذين يعملون بجد ويستحقون الوصول.',

    // How it works
    'how.title': 'كيف يعمل مسار',
    'how.step1.title': 'التسجيل',
    'how.step1.desc': 'تحقق رقمي سريع حيثما توفر',
    'how.step2.title': 'ضع قاعدة',
    'how.step2.desc': 'اختر تقسيم الراتب أو التقريب',
    'how.step3.title': 'استثمر',
    'how.step3.desc': 'من خلال صندوق مظلة من اختيارك',
    'how.step4.title': 'تتبع',
    'how.step4.desc': 'الوحدات والتوزيعات بلغة واضحة',
    'how.disclaimer': 'رأس المال في خطر. التوزيعات متغيرة. لا عوائد مضمونة.',

    // Employers
    'employers.title': 'ميزة سيستخدمها فريقك — بدون إعادة بناء نظام الرواتب.',
    'employers.subtitle': 'ميزة ادخار جاهزة',
    'employers.tier1.title': 'بداية سريعة بملف',
    'employers.tier1.desc': 'لا حاجة للبرمجة',
    'employers.tier2.title': 'موصلات API',
    'employers.tier2.desc': 'لأنظمة الموارد البشرية والرواتب',
    'employers.tier3.title': 'العلامة البيضاء',
    'employers.tier3.desc': 'تجربة مدمجة في البنك',

    // Trust
    'trust.title': 'الثقة والحوكمة',
    'trust.subtitle': 'مسار طبقة تنسيق وشفافية — وليس أمين حفظ.',

    // Why Now
    'whyNow.title': 'لماذا الآن',
    'whyNow.rails.title': 'البنية جاهزة',
    'whyNow.rails.desc': 'الهوية الرقمية وبنية المدفوعات ناضجة',
    'whyNow.demand.title': 'طلب أصحاب العمل',
    'whyNow.demand.desc': 'مزايا حديثة تستخدم فعلاً',
    'whyNow.youth.title': 'الديموغرافيا الشبابية',
    'whyNow.youth.desc': 'الرفاهية المالية للجيل القادم',

    // Social Proof
    'social.title': 'قريباً',
    'social.subtitle': 'مجموعات تجريبية مع أصحاب عمل وشركاء رائدين',
    'social.note': 'شركاء مختارون قيد المناقشة',

    // Final CTA
    'finalCta.headline': 'مستقبلك لا يجب أن يعتمد على خلفيتك المالية.',
    'finalCta.individuals': 'انضم للقائمة',
    'finalCta.employers': 'احجز عرض لصاحب العمل',

    // Footer
    'footer.description': 'بناء الملكية، راتب تلو راتب.',
    'footer.product': 'المنتج',
    'footer.company': 'الشركة',
    'footer.legal': 'قانوني',
    'footer.newsletter': 'رؤى مسار',
    'footer.newsletter.desc': 'العادات المالية، مزايا أصحاب العمل، وأساسيات الاستثمار.',
    'footer.newsletter.placeholder': 'أدخل بريدك الإلكتروني',
    'footer.newsletter.button': 'اشترك',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
    'footer.rights': 'جميع الحقوق محفوظة.',

    // Forms
    'form.name': 'الاسم الكامل',
    'form.email': 'البريد الإلكتروني',
    'form.phone': 'الهاتف (اختياري)',
    'form.employer': 'صاحب العمل الحالي (اختياري)',
    'form.company': 'اسم الشركة',
    'form.role': 'دورك',
    'form.employees': 'عدد الموظفين',
    'form.payrollSystem': 'نظام الرواتب',
    'form.message': 'الرسالة',
    'form.submit': 'إرسال',
    'form.success': 'شكراً! سنتواصل معك قريباً.',

    // Funds
    'funds.cashYield': 'عائد نقدي',
    'funds.cashYield.desc': 'موجه للحفاظ على رأس المال',
    'funds.balanced': 'متوازن',
    'funds.balanced.desc': 'نمو متنوع',
    'funds.halal': 'حلال',
    'funds.halal.desc': 'استثمار متوافق مع الشريعة',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
