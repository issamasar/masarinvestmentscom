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
    'nav.howItWorks': 'How It Works',
    'nav.employers': 'For Employers',
    'nav.funds': 'Funds',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.joinWaitlist': 'Join Waitlist',
    'nav.bookDemo': 'Book Demo',

    // CTAs
    'cta.joinWaitlist': 'Join the Waitlist',
    'cta.bookDemo': 'Book Employer Demo',

    // Disclaimers
    'disclaimer.short': 'Capital at risk. No guaranteed returns.',
    'disclaimer.full': 'Capital at risk. Distributions variable. No guaranteed returns.',

    // Home — Hero
    'home.hero.brand': 'MASAR',
    'home.hero.headline': 'Your hard work, building your future while you sleep.',
    'home.hero.body': 'MASAR turns small, recurring cashflows from your paycheck and daily spending into real, regulated investment assets. No expertise required. No complexity. Just consistent, compounding progress.',
    'home.hero.trustline': 'Regulator-first · Partner-led rails · Transparent ownership',

    // Home — Stats
    'stats.1.num': '1.3M',
    'stats.1.label': 'Salaried Employees',
    'stats.2.num': 'JOD 2.5B',
    'stats.2.label': 'Informal Savings',
    'stats.3.num': '<5%',
    'stats.3.label': 'Retail Investment Participation',
    'stats.4.num': '70%',
    'stats.4.label': 'Lack Investment Accounts',

    // Home — Promise
    'promise.title': 'The MASAR Promise',
    'promise.simplicity.title': 'Simplicity',
    'promise.simplicity.desc': 'No trading. No noise. Just consistent progress.',
    'promise.trust.title': 'Trust',
    'promise.trust.desc': 'Your units are recorded at the Securities Depository Center. Not app balances — real, registered ownership.',
    'promise.dignity.title': 'Dignity',
    'promise.dignity.desc': 'Designed for people who work hard and deserve access to wealth-building tools.',

    // Home — Engine
    'home.engine.headline': 'Your money works while you live your life.',
    'home.engine.body': 'Every paycheck, every purchase, every employer contribution — flowing into a regulated fund that compounds over time.',

    // Home — Two Paths
    'home.paths.individuals.label': 'For Individuals',
    'home.paths.individuals.title': 'Your paycheck can build more than a bank balance.',
    'home.paths.individuals.body': 'Payroll investing, round-ups from daily spending, and employer matching, all flowing into regulated fund units that grow while you focus on what matters.',
    'home.paths.individuals.link': 'See how it works →',
    'home.paths.employers.label': 'For Employers',
    'home.paths.employers.title': 'A benefit your team will actually use.',
    'home.paths.employers.body': 'Turn-key employee financial wellness with zero fiduciary risk. Retain & Incentivise your team with a real-life benefit, fit for the real world.',
    'home.paths.employers.link': 'Learn more →',

    // Home — Trust
    'home.trust.headline': 'An orchestration layer with the safety of Bank Custodians.',
    'home.trust.body': 'MASAR coordinates the flow. Independent institutions hold, record, and oversee.',
    'home.trust.1': 'JSC-Authorized Fund',
    'home.trust.2': 'SDC-Recorded Units',
    'home.trust.3': 'Independent Custody',
    'home.trust.link': 'Learn about our fund structure →',

    // Why Now
    'whyNow.title': 'Why Now',
    'whyNow.rails.title': 'Rails Ready',
    'whyNow.rails.desc': 'SANAD digital identity, CliQ instant payments, and eFAWATEERcom — Jordan\'s financial infrastructure is mature and connected.',
    'whyNow.demand.title': 'Employer Demand',
    'whyNow.demand.desc': 'Companies want modern financial wellness benefits that employees actually engage with. Traditional schemes go unused.',
    'whyNow.youth.title': 'Youth Demographic',
    'whyNow.youth.desc': '65% of Jordan\'s population is under 30. An entire generation ready for accessible wealth-building infrastructure.',

    // Final CTA
    'finalCta.headline': 'Your future shouldn\'t depend on your financial background.',

    // How It Works
    'hiw.hero.headline': 'Your Hard Work & Daily Spend, Transformed into Real Ownership',
    'hiw.hero.body': 'MASAR converts your salary contributions, employer matching, and everyday spending round-ups into a wealth engine tailored to your needs, growing while you live your life, seamlessly building your future for you.',
    'hiw.channels.title': 'Three ways your money flows in.',
    'hiw.channels.payroll.title': 'Payroll Split',
    'hiw.channels.payroll.desc': 'Choose a fixed amount or percentage of your salary. It flows automatically every pay cycle. Set it once and it runs every month — no decisions, no friction.',
    'hiw.channels.roundups.title': 'Round-Ups',
    'hiw.channels.roundups.desc': 'Link your bank card. Every purchase rounds up to the nearest dinar. Your JOD 3.40 coffee becomes a 60-piaster investment. Your daily spending quietly builds your portfolio.',
    'hiw.channels.match.title': 'Employer Match',
    'hiw.channels.match.desc': 'If your employer participates in MASAR, they contribute alongside you. It\'s like a raise that goes straight to your future — and it compounds.',
    'hiw.channels.note': 'All three channels flow into the same regulated fund. You choose how much comes from each.',

    'hiw.steps.1.title': 'Sign Up',
    'hiw.steps.1.desc': 'Verify your identity digitally through SANAD. KYC and AML compliance are built in. The process takes minutes, not days, and is fully digital.',
    'hiw.steps.2.title': 'Set Your Rules',
    'hiw.steps.2.desc': 'Choose your payroll split — a fixed dinar amount or a percentage. Optionally, activate round-ups on your bank card. If your employer offers matching, it activates automatically. You decide the rules once, and they run every cycle.',
    'hiw.steps.3.title': 'Your Money Enters the Fund',
    'hiw.steps.3.desc': 'Your contributions are pooled into the MASAR Umbrella Fund — a JSC-authorized, open-ended mutual fund. You choose one or more of three sleeves. Units are purchased at the daily Net Asset Value. Every unit is recorded at the Securities Depository Center.',
    'hiw.steps.4.title': 'Track and Grow',
    'hiw.steps.4.desc': 'See your units, their current value, your contribution streak, and distribution history — all in plain Arabic and English. Distributions are automatically reinvested unless you opt for cash. Your money compounds while you focus on your life.',

    'hiw.sleeves.title': 'Three sleeves. Your choice.',
    'hiw.sleeves.details': 'See full details →',

    // Trust strip
    'trust.jsc': 'JSC-Authorized',
    'trust.sdc': 'SDC-Recorded',
    'trust.custody': 'Independent Custody',
    'trust.nav': 'Daily NAV Pricing',
    'trust.fees': 'No Hidden Fees',

    // FAQ
    'hiw.faq.title': 'Common Questions',
    'hiw.faq.1.q': 'What is the minimum contribution?',
    'hiw.faq.1.a': 'There is no formal minimum. MASAR is designed for contributions as small as a few dinars per month. The point is consistency, not size.',
    'hiw.faq.2.q': 'Can I withdraw my money?',
    'hiw.faq.2.a': 'Yes. Your units can be redeemed at Net Asset Value, typically settling within T+0 or T+1 depending on the fund sleeve. Your money is yours.',
    'hiw.faq.3.q': 'Is my money safe?',
    'hiw.faq.3.a': 'Your fund units are recorded at the Securities Depository Center and held by an independent custodian bank. MASAR never holds client money. The fund is authorized by the Jordan Securities Commission.',
    'hiw.faq.4.q': 'What if I leave my employer?',
    'hiw.faq.4.a': 'Your units are yours. They remain registered in your name at the SDC regardless of your employment status. You can continue contributing directly.',
    'hiw.faq.5.q': 'Is there a Sharia-compliant option?',
    'hiw.faq.5.a': 'Yes. The Halal Income sleeve invests in screened Sharia-compliant equities, sukuk, and Islamic money market instruments. It is supervised by an independent Sharia Supervisory Board.',
    'hiw.faq.6.q': 'What are the fees?',
    'hiw.faq.6.a': 'MASAR charges a transparent Ongoing Charges Figure (OCF) as a percentage of assets under management, plus a small employer administration fee. There are no front-end subscription charges, no redemption fees, and no hidden monetization.',
    'hiw.faq.7.q': 'What is NAV?',
    'hiw.faq.7.a': 'Net Asset Value is the price per unit of the fund, calculated daily. When you invest, you buy units at that day\'s NAV. When you redeem, you sell at that day\'s NAV. It\'s how all regulated mutual funds are priced.',

    'hiw.cta.headline': 'Start your MASAR journey.',

    // Employers
    'emp.hero.headline': 'A benefit your team will actually use.',
    'emp.hero.body': 'MASAR is a fully turn-key financial wellness benefit. No internal investment expertise. No fiduciary responsibility. No custodial handling. No operational overhead.',
    'emp.why.1.title': 'Zero Friction',
    'emp.why.1.desc': 'No advice obligations. No custody. No pension-like liabilities. MASAR handles the entire infrastructure — you just connect your payroll.',
    'emp.why.2.title': 'Measurable Impact',
    'emp.why.2.desc': 'Improved employee retention and engagement. Reduced financial stress. A differentiated, non-salary benefit at low per-employee cost.',
    'emp.why.3.title': 'Risk Insulated',
    'emp.why.3.desc': 'Employers do not provide investment advice, do not select investments, and do not assume investment obligations. Clean regulatory separation.',

    'emp.tiers.title': 'Connect your way.',
    'emp.tiers.subtitle': 'Choose your integration depth. Start simple, scale up.',
    'emp.tiers.1.tag': 'Simple',
    'emp.tiers.1.title': 'CSV Fast Start',
    'emp.tiers.1.f1': 'Upload a CSV file, MASAR does the rest',
    'emp.tiers.1.f2': 'Zero engineering required',
    'emp.tiers.1.f3': 'Launch in days',
    'emp.tiers.1.best': 'Best for: SMEs, quick pilots',
    'emp.tiers.2.tag': 'Standard',
    'emp.tiers.2.title': 'API Connectors',
    'emp.tiers.2.f1': 'Direct integration with HRIS/payroll systems',
    'emp.tiers.2.f2': 'Automated contribution flows',
    'emp.tiers.2.f3': 'Real-time reporting dashboard',
    'emp.tiers.2.best': 'Best for: Mid-market companies',
    'emp.tiers.3.tag': 'Enterprise',
    'emp.tiers.3.title': 'White-Label',
    'emp.tiers.3.f1': 'Fully embedded in your banking or HR experience',
    'emp.tiers.3.f2': 'Your brand, MASAR\'s infrastructure',
    'emp.tiers.3.f3': 'Complete customization',
    'emp.tiers.3.best': 'Best for: Banks, large enterprises, regional partners',

    'emp.dashboard.title': 'See what matters.',
    'emp.dashboard.subtitle': 'Real-time visibility into program performance.',
    'emp.dashboard.f1.title': 'Overview Dashboard',
    'emp.dashboard.f1.desc': 'Track enrollment, AUM, and contribution flows in real time.',
    'emp.dashboard.f2.title': 'Employee Management',
    'emp.dashboard.f2.desc': 'Monitor vesting progress, balances, and onboarding status.',
    'emp.dashboard.f3.title': 'Policy Controls',
    'emp.dashboard.f3.desc': 'Set matching rules, contribution limits, and vesting schedules.',

    'emp.start.1.title': 'Sign',
    'emp.start.1.desc': 'Standard employer participation agreement. No fiduciary obligations.',
    'emp.start.2.title': 'Connect',
    'emp.start.2.desc': 'CSV upload, API integration, or white-label — your choice.',
    'emp.start.3.title': 'Launch',
    'emp.start.3.desc': 'Your team onboards digitally. Contributions flow. You see results.',

    'emp.outcomes.quote': '"Lower friction than traditional wellness programs. More durable impact than one-off bonuses. Easier to deploy than insurance or savings schemes."',
    'emp.outcomes.1.num': '3x',
    'emp.outcomes.1.label': 'higher participation vs. voluntary-only schemes',
    'emp.outcomes.2.num': 'Zero',
    'emp.outcomes.2.label': 'fiduciary obligations for employers',
    'emp.outcomes.3.num': 'Days',
    'emp.outcomes.3.label': 'from agreement to live deployment (CSV tier)',

    'emp.cta.headline': 'Give your team a benefit that builds real wealth.',

    // Funds
    'funds.hero.headline': 'Three Sleeves. One Fund. Your Choice.',
    'funds.hero.body': 'The MASAR Umbrella Fund is a JSC-authorized, open-ended mutual fund structured under Jordanian securities law. All units recorded at the Securities Depository Center.',

    'funds.cashYield': 'CashYield',
    'funds.cashYield.ar': 'عائد نقدي',
    'funds.cashYield.short': 'Capital preservation. Stable, frequent yield.',
    'funds.balanced': 'Balanced Income',
    'funds.balanced.ar': 'متوازن',
    'funds.balanced.short': 'Diversified growth across equities and bonds.',
    'funds.halal': 'Halal Income',
    'funds.halal.ar': 'حلال',
    'funds.halal.short': 'Sharia-compliant. Sukuk, screened equities, Islamic money market.',

    'funds.risk.low': 'Low Risk',
    'funds.risk.medium': 'Medium Risk',
    'funds.risk.lowFull': 'Low Risk (2-3/7)',
    'funds.risk.medFull': 'Medium Risk (3-4/7)',
    'funds.sharia.badge': 'Sharia Supervised ✓',

    'funds.label.objective': 'Objective',
    'funds.label.universe': 'Asset Universe',
    'funds.label.distribution': 'Distribution',
    'funds.label.bestFor': 'Best For',
    'funds.label.chars': 'Key Characteristics',

    'funds.cy.objective': 'Preserve capital in JOD terms while delivering frequent, relatively stable cash yield.',
    'funds.cy.universe': 'Short-dated JOD sovereign and quasi-sovereign paper; high-quality money market and liquidity funds; bank deposits and term deposits with highly rated domestic and regional banks.',
    'funds.cy.distribution': 'Monthly',
    'funds.cy.bestFor': 'Users with a short-medium time horizon, prioritizing capital stability and liquidity.',
    'funds.cy.c1': 'Lower volatility',
    'funds.cy.c2': 'More stable NAV',
    'funds.cy.c3': 'Suitable for shorter time horizons',

    'funds.bal.objective': 'Deliver recurring income with moderate capital appreciation over the medium term.',
    'funds.bal.universe': 'Global investment-grade bond and short-duration income funds; diversified, dividend-oriented equity and REIT ETFs; select local or regional income assets within risk limits.',
    'funds.bal.distribution': 'Quarterly',
    'funds.bal.bestFor': 'Users with a medium-long time horizon seeking an income-plus-growth profile.',
    'funds.bal.c1': 'Mix of equities and fixed income',
    'funds.bal.c2': 'Diversified across asset classes',
    'funds.bal.c3': 'Suitable for 3-5 year horizons',

    'funds.hal.objective': 'Provide Sharia-compliant income with prudent capital growth.',
    'funds.hal.universe': 'Screened Sharia-compliant equities and income funds; sukuk funds and Islamic money market funds; instruments approved by the Fund\'s independent Sharia Supervisory Board.',
    'funds.hal.distribution': 'Quarterly (per SSB guidance)',
    'funds.hal.bestFor': 'Users who require or prefer Sharia-compliant exposure.',
    'funds.hal.c1': 'Excludes prohibited industries',
    'funds.hal.c2': 'Sukuk and halal equities',
    'funds.hal.c3': 'Supervised by independent Sharia board',

    'funds.structure.title': 'Structure & Governance',
    'funds.structure.note1': 'MASAR is the Investment Manager. It does not hold client money, does not act as custodian, and does not provide personalized investment advice.',
    'funds.structure.note2': 'All units are recorded at the Securities Depository Center — the same infrastructure used by the Amman Stock Exchange.',

    'funds.dealing.title': 'Transparent Pricing',
    'funds.dealing.days.label': 'Dealing Days',
    'funds.dealing.days.value': 'All Jordanian business days',
    'funds.dealing.cutoff.label': 'Order Cut-Off',
    'funds.dealing.cutoff.value': '12:00–13:00 Amman time',
    'funds.dealing.nav.label': 'NAV Calculation',
    'funds.dealing.nav.value': 'Daily, single-priced (no bid/offer spread)',
    'funds.dealing.settlement.label': 'Settlement',
    'funds.dealing.settlement.value': 'T+0 or T+1 depending on sleeve',
    'funds.dealing.frontend.label': 'Front-End Charges',
    'funds.dealing.frontend.value': 'None',
    'funds.dealing.redemption.label': 'Redemption Fees',
    'funds.dealing.redemption.value': 'None',
    'funds.dealing.distributions.label': 'Distributions',
    'funds.dealing.distributions.value': 'Auto-reinvested by default; cash option available',
    'funds.dealing.fees.label': 'Fee Structure',
    'funds.dealing.fees.value': 'Transparent Ongoing Charges Figure (OCF) — percentage of AUM. No payment-for-order-flow, no leverage products.',

    'funds.risk.title': 'Important Information',
    'funds.risk.body': 'Capital is at risk. The value of your investment can go down as well as up. Past performance is not a guarantee of future results. Distributions are variable and not guaranteed. The fund is subject to market risk, liquidity risk, and currency risk. MASAR does not guarantee returns. Please read the full prospectus and Key Information Document before investing.',

    // About
    'about.hero.headline': 'About MASAR',
    'about.hero.sub': 'Building ownership, one paycheck at a time.',
    'about.why.p1': 'In Jordan and across the region, millions of working people have jobs, earn income, and pay their bills — but never build real ownership. Investing feels complicated, expensive, or simply out of reach.',
    'about.why.p2': 'An estimated JOD 2.5 billion sits in informal savings cooperatives and cash — not because people don\'t want to invest, but because the infrastructure doesn\'t exist. There is no regulated mechanism that enables wages, employer contributions, and everyday spending to flow seamlessly into capital markets at scale.',
    'about.why.p3': 'MASAR is that bridge. We turn paychecks into ownership through habit-forming mechanics, employer matching, and regulator-native design. No trading expertise required. No financial background needed. Just consistent, small steps toward real asset ownership.',

    'about.founder.name': 'Issa Dallal',
    'about.founder.role': 'Founder & CEO',
    'about.founder.quote': 'MASAR is my attempt to strip away the complexity. We\'re not trying to turn everyone into traders. We\'re trying to make ownership accessible to people who work hard and deserve a fair shot at building wealth.',

    'about.values.title': 'Our Values',
    'about.values.1.title': 'Accessibility',
    'about.values.1.desc': 'Everyone deserves access to wealth-building tools, regardless of starting point.',
    'about.values.2.title': 'Transparency',
    'about.values.2.desc': 'Clear information, no jargon, no hidden fees. You always know where you stand.',
    'about.values.3.title': 'Discipline',
    'about.values.3.desc': 'Small, consistent steps beat sporadic big moves. We design for habits, not heroics.',
    'about.values.4.title': 'Partnerability',
    'about.values.4.desc': 'We succeed when our partners succeed. Non-exclusive, collaborative, open.',

    'about.vision.title': 'Jordan First. Then the Region.',
    'about.vision.body': 'Jordan is MASAR\'s proving ground — regulatory depth, employer pilots, contribution persistence. The infrastructure, the playbook, the governance model — all designed to be replicated across the GCC and broader MENA.',
    'about.roadmap.1.title': 'Jordan',
    'about.roadmap.1.label': 'Phase 1 — Active',
    'about.roadmap.2.title': 'Saudi Arabia · UAE',
    'about.roadmap.2.label': 'Phase 2',
    'about.roadmap.3.title': 'Egypt · Kuwait · Qatar',
    'about.roadmap.3.label': 'Phase 3',

    'about.cta.headline': 'Want to be part of the journey?',
    'about.cta.contact': 'Get in Touch',

    // Contact
    'contact.hero.headline': 'Get in Touch',
    'contact.hero.body': 'Whether you\'re an individual, an employer, or a potential partner — we\'d love to hear from you.',
    'contact.waitlist.title': 'Join the Waitlist',
    'contact.waitlist.note': 'We\'ll notify you when MASAR launches in your area.',
    'contact.demo.title': 'Book Employer Demo',
    'contact.demo.note': 'For employers interested in MASAR as a team benefit.',
    'contact.partner.title': 'Partner With Us',
    'contact.partner.note': 'For banks, PSPs, HR platforms, and strategic partners.',
    'contact.partner.type': 'Partner Type',
    'contact.partner.type.bank': 'Bank / Financial Institution',
    'contact.partner.type.psp': 'Payment Service Provider',
    'contact.partner.type.hr': 'HR Platform',
    'contact.partner.type.employer': 'Employer',
    'contact.partner.type.other': 'Other',
    'contact.partner.cta': 'Start a Conversation',
    'contact.email.line': 'You can also reach us at',

    // Forms
    'form.name': 'Full Name',
    'form.email': 'Email Address',
    'form.phone': 'Phone (Optional)',
    'form.employer': 'Current Employer (Optional)',
    'form.company': 'Company Name',
    'form.role': 'Your Role',
    'form.employees': 'Number of Employees',
    'form.payrollSystem': 'Payroll System (Optional)',
    'form.message': 'Message (Optional)',
    'form.submit': 'Submit',
    'form.success': "Thank you! We'll be in touch soon.",
    'form.select': 'Select...',
    'form.emp.under50': 'Under 50',

    // Footer
    'footer.description': 'Building ownership, one paycheck at a time.',
    'footer.product': 'Product',
    'footer.company': 'Company',
    'footer.newsletter': 'MASAR Insights',
    'footer.newsletter.desc': 'Financial habits, employer benefits, and investing basics.',
    'footer.newsletter.placeholder': 'Enter your email',
    'footer.newsletter.button': 'Subscribe',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.copyright': '© 2026 MASAR Investment Co. PSC (U.E.) All rights reserved.',
    'footer.disclaimer': 'Capital at risk. No guaranteed returns.',
  },

  ar: {
    // Navigation
    'nav.howItWorks': 'كيف يعمل',
    'nav.employers': 'لأصحاب العمل',
    'nav.funds': 'الصناديق',
    'nav.about': 'عن مسار',
    'nav.contact': 'تواصل',
    'nav.joinWaitlist': 'انضم للقائمة',
    'nav.bookDemo': 'احجز عرض',

    // CTAs
    'cta.joinWaitlist': 'انضم لقائمة الانتظار',
    'cta.bookDemo': 'احجز عرض لأصحاب العمل',

    // Disclaimers
    'disclaimer.short': 'رأس المال في خطر. لا عوائد مضمونة.',
    'disclaimer.full': 'رأس المال في خطر. التوزيعات متغيرة. لا عوائد مضمونة.',

    // Home — Hero
    'home.hero.brand': 'مسار',
    'home.hero.headline': 'جهدك وتعبك، يبني مستقبلك وأنت نائم.',
    'home.hero.body': 'مسار يحوّل التدفقات النقدية الصغيرة والمتكررة من راتبك ومصاريفك اليومية إلى أصول استثمارية حقيقية ومنظمة. لا حاجة لخبرة. لا تعقيد. فقط تقدم ثابت ومتراكم.',
    'home.hero.trustline': 'الأولوية للتنظيم · قنوات الشركاء · ملكية شفافة',

    // Home — Stats
    'stats.1.num': '١.٣ مليون',
    'stats.1.label': 'موظف بأجر',
    'stats.2.num': '٢.٥ مليار دينار',
    'stats.2.label': 'مدخرات غير رسمية',
    'stats.3.num': '<٥٪',
    'stats.3.label': 'مشاركة في الاستثمار',
    'stats.4.num': '٧٠٪',
    'stats.4.label': 'بدون حسابات استثمارية',

    // Home — Promise
    'promise.title': 'وعد مسار',
    'promise.simplicity.title': 'البساطة',
    'promise.simplicity.desc': 'لا تداول. لا ضوضاء. تقدم مستمر فقط.',
    'promise.trust.title': 'الثقة',
    'promise.trust.desc': 'وحداتك مسجلة في مركز إيداع الأوراق المالية. ليست أرصدة تطبيق — ملكية حقيقية مسجلة.',
    'promise.dignity.title': 'الكرامة',
    'promise.dignity.desc': 'مصمم للأشخاص الذين يعملون بجد ويستحقون الوصول لأدوات بناء الثروة.',

    // Home — Engine
    'home.engine.headline': 'أموالك تعمل بينما تعيش حياتك.',
    'home.engine.body': 'كل راتب، كل عملية شراء، كل مساهمة من صاحب العمل — تتدفق إلى صندوق منظم ينمو مع الوقت.',

    // Home — Two Paths
    'home.paths.individuals.label': 'للأفراد',
    'home.paths.individuals.title': 'راتبك يمكن أن يبني أكثر من رصيد بنكي.',
    'home.paths.individuals.body': 'الاستثمار عبر الراتب، تقريب المصاريف اليومية، ومطابقة صاحب العمل — كلها تتدفق إلى وحدات صناديق منظمة تنمو وأنت تركز على ما يهم.',
    'home.paths.individuals.link': 'اعرف كيف يعمل ←',
    'home.paths.employers.label': 'لأصحاب العمل',
    'home.paths.employers.title': 'ميزة سيستخدمها فريقك فعلاً.',
    'home.paths.employers.body': 'رفاهية مالية جاهزة بدون مخاطر ائتمانية. لا حفظ أموال، لا التزامات استشارية، لا إعادة بناء نظام الرواتب.',
    'home.paths.employers.link': 'اعرف المزيد ←',

    // Home — Trust
    'home.trust.headline': 'طبقة تنسيق، وليس أمين حفظ.',
    'home.trust.body': 'مسار ينسق التدفق. مؤسسات مستقلة تحفظ وتسجل وتشرف.',
    'home.trust.1': 'صندوق مرخص من هيئة الأوراق المالية',
    'home.trust.2': 'وحدات مسجلة في مركز الإيداع',
    'home.trust.3': 'حفظ مستقل',
    'home.trust.link': 'اعرف المزيد عن هيكل الصندوق ←',

    // Why Now
    'whyNow.title': 'لماذا الآن',
    'whyNow.rails.title': 'البنية التحتية جاهزة',
    'whyNow.rails.desc': 'الهوية الرقمية سند، المدفوعات الفورية كليك، وإي فواتيركم — البنية التحتية المالية في الأردن ناضجة ومترابطة.',
    'whyNow.demand.title': 'طلب أصحاب العمل',
    'whyNow.demand.desc': 'الشركات تريد مزايا رفاهية مالية حديثة يتفاعل معها الموظفون فعلاً. الأنظمة التقليدية لا تُستخدم.',
    'whyNow.youth.title': 'الديموغرافيا الشبابية',
    'whyNow.youth.desc': '٦٥٪ من سكان الأردن تحت ٣٠ عاماً. جيل كامل جاهز لبنية تحتية ميسرة لبناء الثروة.',

    // Final CTA
    'finalCta.headline': 'مستقبلك لا يجب أن يعتمد على خلفيتك المالية.',

    // How It Works
    'hiw.hero.headline': 'من الراتب إلى الملكية',
    'hiw.hero.body': 'مسار يحوّل مساهمات راتبك، مطابقة صاحب العمل، وتقريب المصاريف اليومية إلى وحدات صندوق استثماري حقيقي مرخص من هيئة الأوراق المالية — كل شيء يعمل بهدوء في الخلفية.',
    'hiw.channels.title': 'ثلاث طرق لتدفق أموالك.',
    'hiw.channels.payroll.title': 'تقسيم الراتب',
    'hiw.channels.payroll.desc': 'اختر مبلغاً ثابتاً أو نسبة من راتبك. يتدفق تلقائياً كل دورة رواتب. اضبطه مرة وسيعمل كل شهر — بدون قرارات، بدون احتكاك.',
    'hiw.channels.roundups.title': 'التقريب',
    'hiw.channels.roundups.desc': 'اربط بطاقتك البنكية. كل عملية شراء تُقرّب لأقرب دينار. قهوتك بـ ٣.٤٠ دينار تصبح استثماراً بـ ٦٠ قرشاً.',
    'hiw.channels.match.title': 'مطابقة صاحب العمل',
    'hiw.channels.match.desc': 'إذا كان صاحب العمل مشتركاً في مسار، فهو يساهم معك. إنها كعلاوة تذهب مباشرة لمستقبلك — وتتراكم.',
    'hiw.channels.note': 'القنوات الثلاث تتدفق لنفس الصندوق المنظم. أنت تختار كم يأتي من كل قناة.',

    'hiw.steps.1.title': 'التسجيل',
    'hiw.steps.1.desc': 'تحقق من هويتك رقمياً عبر سند — الهوية الإلكترونية الوطنية مع أكثر من ٢ مليون مستخدم. الامتثال لـ KYC و AML مدمج. العملية تستغرق دقائق وليس أياماً.',
    'hiw.steps.2.title': 'اضبط قواعدك',
    'hiw.steps.2.desc': 'اختر تقسيم راتبك — مبلغ ثابت بالدينار أو نسبة مئوية. اختيارياً، فعّل التقريب على بطاقتك البنكية. إذا قدّم صاحب عملك المطابقة، فهي تتفعل تلقائياً.',
    'hiw.steps.3.title': 'أموالك تدخل الصندوق',
    'hiw.steps.3.desc': 'مساهماتك تُجمع في صندوق مسار المظلي — صندوق استثمار مشترك مفتوح مرخص من هيئة الأوراق المالية. تختار واحداً أو أكثر من ثلاثة أوعية. الوحدات تُشترى بصافي قيمة الأصول اليومية.',
    'hiw.steps.4.title': 'تتبع ونمو',
    'hiw.steps.4.desc': 'شاهد وحداتك، قيمتها الحالية، سلسلة مساهماتك، وتاريخ التوزيعات — بالعربية والإنجليزية البسيطة. التوزيعات تُعاد استثمارها تلقائياً ما لم تختر النقد.',

    'hiw.sleeves.title': 'ثلاثة أوعية. اختيارك.',
    'hiw.sleeves.details': 'شاهد التفاصيل الكاملة ←',

    // Trust strip
    'trust.jsc': 'مرخص من هيئة الأوراق المالية',
    'trust.sdc': 'مسجل في مركز الإيداع',
    'trust.custody': 'حفظ مستقل',
    'trust.nav': 'تسعير يومي بصافي قيمة الأصول',
    'trust.fees': 'لا رسوم خفية',

    // FAQ
    'hiw.faq.title': 'أسئلة شائعة',
    'hiw.faq.1.q': 'ما هو الحد الأدنى للمساهمة؟',
    'hiw.faq.1.a': 'لا يوجد حد أدنى رسمي. مسار مصمم لمساهمات صغيرة بضعة دنانير شهرياً. المهم هو الاستمرارية وليس الحجم.',
    'hiw.faq.2.q': 'هل يمكنني سحب أموالي؟',
    'hiw.faq.2.a': 'نعم. يمكن استرداد وحداتك بصافي قيمة الأصول، وعادة ما يتم التسوية خلال T+0 أو T+1 حسب الوعاء. أموالك ملكك.',
    'hiw.faq.3.q': 'هل أموالي آمنة؟',
    'hiw.faq.3.a': 'وحداتك مسجلة في مركز إيداع الأوراق المالية ومحفوظة لدى بنك أمين حفظ مستقل. مسار لا يحتفظ بأموال العملاء أبداً. الصندوق مرخص من هيئة الأوراق المالية الأردنية.',
    'hiw.faq.4.q': 'ماذا لو تركت صاحب العمل؟',
    'hiw.faq.4.a': 'وحداتك ملكك. تبقى مسجلة باسمك في مركز الإيداع بغض النظر عن حالتك الوظيفية. يمكنك الاستمرار بالمساهمة مباشرة.',
    'hiw.faq.5.q': 'هل يوجد خيار متوافق مع الشريعة؟',
    'hiw.faq.5.a': 'نعم. وعاء الدخل الحلال يستثمر في أسهم متوافقة مع الشريعة وصكوك وأدوات سوق نقد إسلامية. يشرف عليه هيئة رقابة شرعية مستقلة.',
    'hiw.faq.6.q': 'ما هي الرسوم؟',
    'hiw.faq.6.a': 'مسار يتقاضى نسبة رسوم مستمرة شفافة من الأصول المُدارة، بالإضافة إلى رسوم إدارية صغيرة لصاحب العمل. لا رسوم اشتراك أمامية، لا رسوم استرداد، ولا رسوم خفية.',
    'hiw.faq.7.q': 'ما هو صافي قيمة الأصول (NAV)؟',
    'hiw.faq.7.a': 'صافي قيمة الأصول هو سعر الوحدة في الصندوق، يُحسب يومياً. عندما تستثمر، تشتري وحدات بسعر ذلك اليوم. وعندما تسترد، تبيع بسعر ذلك اليوم.',

    'hiw.cta.headline': 'ابدأ رحلتك مع مسار.',

    // Employers
    'emp.hero.headline': 'ميزة سيستخدمها فريقك فعلاً.',
    'emp.hero.body': 'مسار هو ميزة رفاهية مالية جاهزة بالكامل. لا حاجة لخبرة استثمارية داخلية. لا مسؤولية ائتمانية. لا تعامل مع الحفظ. لا عبء تشغيلي.',
    'emp.why.1.title': 'صفر احتكاك',
    'emp.why.1.desc': 'لا التزامات استشارية. لا حفظ. لا التزامات تشبه التقاعد. مسار يتولى البنية التحتية بالكامل — أنت فقط تربط نظام الرواتب.',
    'emp.why.2.title': 'تأثير قابل للقياس',
    'emp.why.2.desc': 'تحسين في الاحتفاظ بالموظفين والمشاركة. تقليل الضغط المالي. ميزة غير راتبية مميزة بتكلفة منخفضة لكل موظف.',
    'emp.why.3.title': 'معزول عن المخاطر',
    'emp.why.3.desc': 'أصحاب العمل لا يقدمون نصائح استثمارية، لا يختارون الاستثمارات، ولا يتحملون التزامات استثمارية. فصل تنظيمي واضح.',

    'emp.tiers.title': 'اتصل بطريقتك.',
    'emp.tiers.subtitle': 'اختر عمق التكامل. ابدأ بسيطاً، تطور لاحقاً.',
    'emp.tiers.1.tag': 'بسيط',
    'emp.tiers.1.title': 'بداية سريعة CSV',
    'emp.tiers.1.f1': 'ارفع ملف CSV، مسار يتولى الباقي',
    'emp.tiers.1.f2': 'لا حاجة للبرمجة',
    'emp.tiers.1.f3': 'أطلق خلال أيام',
    'emp.tiers.1.best': 'الأفضل لـ: الشركات الصغيرة والمتوسطة، التجارب السريعة',
    'emp.tiers.2.tag': 'معياري',
    'emp.tiers.2.title': 'موصلات API',
    'emp.tiers.2.f1': 'تكامل مباشر مع أنظمة الموارد البشرية والرواتب',
    'emp.tiers.2.f2': 'تدفقات مساهمة آلية',
    'emp.tiers.2.f3': 'لوحة تقارير فورية',
    'emp.tiers.2.best': 'الأفضل لـ: الشركات المتوسطة',
    'emp.tiers.3.tag': 'مؤسسي',
    'emp.tiers.3.title': 'العلامة البيضاء',
    'emp.tiers.3.f1': 'مدمج بالكامل في تجربتك البنكية أو HR',
    'emp.tiers.3.f2': 'علامتك التجارية، بنية مسار التحتية',
    'emp.tiers.3.f3': 'تخصيص كامل',
    'emp.tiers.3.best': 'الأفضل لـ: البنوك، المؤسسات الكبيرة، الشركاء الإقليميون',

    'emp.dashboard.title': 'شاهد ما يهم.',
    'emp.dashboard.subtitle': 'رؤية فورية لأداء البرنامج.',
    'emp.dashboard.f1.title': 'لوحة المعلومات',
    'emp.dashboard.f1.desc': 'تتبع التسجيل والأصول المُدارة وتدفقات المساهمات فورياً.',
    'emp.dashboard.f2.title': 'إدارة الموظفين',
    'emp.dashboard.f2.desc': 'راقب تقدم الاستحقاق والأرصدة وحالة التسجيل.',
    'emp.dashboard.f3.title': 'ضوابط السياسات',
    'emp.dashboard.f3.desc': 'حدد قواعد المطابقة وحدود المساهمة وجداول الاستحقاق.',

    'emp.start.1.title': 'وقّع',
    'emp.start.1.desc': 'اتفاقية مشاركة صاحب العمل القياسية. بدون التزامات ائتمانية.',
    'emp.start.2.title': 'اتصل',
    'emp.start.2.desc': 'رفع CSV، تكامل API، أو العلامة البيضاء — اختيارك.',
    'emp.start.3.title': 'أطلق',
    'emp.start.3.desc': 'فريقك يسجل رقمياً. المساهمات تتدفق. أنت ترى النتائج.',

    'emp.outcomes.quote': '"احتكاك أقل من برامج الرفاهية التقليدية. تأثير أكثر استدامة من المكافآت لمرة واحدة. أسهل في النشر من التأمين أو خطط الادخار."',
    'emp.outcomes.1.num': '٣ أضعاف',
    'emp.outcomes.1.label': 'مشاركة أعلى مقارنة بالبرامج التطوعية فقط',
    'emp.outcomes.2.num': 'صفر',
    'emp.outcomes.2.label': 'التزامات ائتمانية على أصحاب العمل',
    'emp.outcomes.3.num': 'أيام',
    'emp.outcomes.3.label': 'من الاتفاقية إلى الإطلاق (مستوى CSV)',

    'emp.cta.headline': 'امنح فريقك ميزة تبني ثروة حقيقية.',

    // Funds
    'funds.hero.headline': 'ثلاثة أوعية. صندوق واحد. اختيارك.',
    'funds.hero.body': 'صندوق مسار المظلي هو صندوق استثمار مشترك مفتوح مرخص من هيئة الأوراق المالية الأردنية بموجب قانون الأوراق المالية الأردني. جميع الوحدات مسجلة في مركز إيداع الأوراق المالية.',

    'funds.cashYield': 'عائد نقدي',
    'funds.cashYield.ar': 'CashYield',
    'funds.cashYield.short': 'الحفاظ على رأس المال. عائد مستقر ومتكرر.',
    'funds.balanced': 'دخل متوازن',
    'funds.balanced.ar': 'Balanced Income',
    'funds.balanced.short': 'نمو متنوع عبر الأسهم والسندات.',
    'funds.halal': 'دخل حلال',
    'funds.halal.ar': 'Halal Income',
    'funds.halal.short': 'متوافق مع الشريعة. صكوك، أسهم مفحوصة، سوق نقد إسلامي.',

    'funds.risk.low': 'مخاطر منخفضة',
    'funds.risk.medium': 'مخاطر متوسطة',
    'funds.risk.lowFull': 'مخاطر منخفضة (٢-٣/٧)',
    'funds.risk.medFull': 'مخاطر متوسطة (٣-٤/٧)',
    'funds.sharia.badge': 'إشراف شرعي ✓',

    'funds.label.objective': 'الهدف',
    'funds.label.universe': 'عالم الأصول',
    'funds.label.distribution': 'التوزيع',
    'funds.label.bestFor': 'الأفضل لـ',
    'funds.label.chars': 'الخصائص الرئيسية',

    'funds.cy.objective': 'الحفاظ على رأس المال بالدينار مع تقديم عائد نقدي متكرر ومستقر نسبياً.',
    'funds.cy.universe': 'أوراق حكومية وشبه حكومية قصيرة الأجل بالدينار؛ صناديق سوق نقد عالية الجودة؛ ودائع بنكية لدى بنوك محلية وإقليمية ذات تصنيف عالٍ.',
    'funds.cy.distribution': 'شهري',
    'funds.cy.bestFor': 'المستخدمون ذوو أفق زمني قصير-متوسط، يعطون أولوية لاستقرار رأس المال والسيولة.',
    'funds.cy.c1': 'تقلب أقل',
    'funds.cy.c2': 'صافي قيمة أصول أكثر استقراراً',
    'funds.cy.c3': 'مناسب للآفاق الزمنية القصيرة',

    'funds.bal.objective': 'تقديم دخل متكرر مع تقدير معتدل لرأس المال على المدى المتوسط.',
    'funds.bal.universe': 'صناديق سندات استثمارية عالمية وصناديق دخل قصيرة المدة؛ صناديق أسهم متنوعة موجهة لتوزيعات الأرباح وصناديق REITs؛ أصول دخل محلية أو إقليمية مختارة.',
    'funds.bal.distribution': 'ربع سنوي',
    'funds.bal.bestFor': 'المستخدمون ذوو أفق زمني متوسط-طويل يبحثون عن ملف دخل مع نمو.',
    'funds.bal.c1': 'مزيج من الأسهم والدخل الثابت',
    'funds.bal.c2': 'تنويع عبر فئات الأصول',
    'funds.bal.c3': 'مناسب لآفاق ٣-٥ سنوات',

    'funds.hal.objective': 'تقديم دخل متوافق مع الشريعة مع نمو حصيف لرأس المال.',
    'funds.hal.universe': 'أسهم متوافقة مع الشريعة مفحوصة وصناديق دخل؛ صناديق صكوك وصناديق سوق نقد إسلامية؛ أدوات معتمدة من هيئة الرقابة الشرعية المستقلة للصندوق.',
    'funds.hal.distribution': 'ربع سنوي (وفق توجيهات هيئة الرقابة الشرعية)',
    'funds.hal.bestFor': 'المستخدمون الذين يحتاجون أو يفضلون التعرض المتوافق مع الشريعة.',
    'funds.hal.c1': 'يستبعد الصناعات المحرمة',
    'funds.hal.c2': 'صكوك وأسهم حلال',
    'funds.hal.c3': 'إشراف من هيئة رقابة شرعية مستقلة',

    'funds.structure.title': 'الهيكل والحوكمة',
    'funds.structure.note1': 'مسار هو مدير الاستثمار. لا يحتفظ بأموال العملاء، ولا يعمل كأمين حفظ، ولا يقدم نصائح استثمارية شخصية.',
    'funds.structure.note2': 'جميع الوحدات مسجلة في مركز إيداع الأوراق المالية — نفس البنية التحتية المستخدمة في بورصة عمّان.',

    'funds.dealing.title': 'تسعير شفاف',
    'funds.dealing.days.label': 'أيام التداول',
    'funds.dealing.days.value': 'جميع أيام العمل الأردنية',
    'funds.dealing.cutoff.label': 'موعد قطع الأوامر',
    'funds.dealing.cutoff.value': '١٢:٠٠–١٣:٠٠ بتوقيت عمّان',
    'funds.dealing.nav.label': 'حساب صافي قيمة الأصول',
    'funds.dealing.nav.value': 'يومي، سعر واحد (بدون فرق بين العرض والطلب)',
    'funds.dealing.settlement.label': 'التسوية',
    'funds.dealing.settlement.value': 'T+0 أو T+1 حسب الوعاء',
    'funds.dealing.frontend.label': 'رسوم الاشتراك الأمامية',
    'funds.dealing.frontend.value': 'لا يوجد',
    'funds.dealing.redemption.label': 'رسوم الاسترداد',
    'funds.dealing.redemption.value': 'لا يوجد',
    'funds.dealing.distributions.label': 'التوزيعات',
    'funds.dealing.distributions.value': 'تُعاد استثمارها تلقائياً افتراضياً؛ خيار النقد متاح',
    'funds.dealing.fees.label': 'هيكل الرسوم',
    'funds.dealing.fees.value': 'نسبة رسوم مستمرة شفافة من الأصول المُدارة. لا دفع مقابل تدفق الأوامر، لا منتجات رافعة مالية.',

    'funds.risk.title': 'معلومات مهمة',
    'funds.risk.body': 'رأس المال في خطر. قيمة استثمارك يمكن أن تنخفض كما يمكن أن ترتفع. الأداء السابق ليس ضماناً للنتائج المستقبلية. التوزيعات متغيرة وغير مضمونة. الصندوق خاضع لمخاطر السوق ومخاطر السيولة ومخاطر العملة. مسار لا يضمن العوائد.',

    // About
    'about.hero.headline': 'عن مسار',
    'about.hero.sub': 'بناء الملكية، راتب تلو راتب.',
    'about.why.p1': 'في الأردن وعبر المنطقة، ملايين العاملين لديهم وظائف ويكسبون دخلاً ويدفعون فواتيرهم — لكنهم لا يبنون ملكية حقيقية أبداً. الاستثمار يبدو معقداً أو مكلفاً أو ببساطة بعيد المنال.',
    'about.why.p2': 'ما يقدر بـ ٢.٥ مليار دينار يقبع في تعاونيات ادخار غير رسمية ونقد — ليس لأن الناس لا يريدون الاستثمار، بل لأن البنية التحتية غير موجودة.',
    'about.why.p3': 'مسار هو ذلك الجسر. نحوّل الرواتب إلى ملكية من خلال آليات تكوين العادات، مطابقة صاحب العمل، وتصميم أصيل للتنظيم. لا حاجة لخبرة تداول. لا حاجة لخلفية مالية. فقط خطوات صغيرة ثابتة نحو ملكية أصول حقيقية.',

    'about.founder.name': 'عيسى دلال',
    'about.founder.role': 'المؤسس والرئيس التنفيذي',
    'about.founder.quote': 'مسار هو محاولتي لإزالة التعقيد. لا نحاول تحويل الجميع إلى متداولين. نحاول جعل الملكية في متناول الأشخاص الذين يعملون بجد ويستحقون فرصة عادلة لبناء الثروة.',

    'about.values.title': 'قيمنا',
    'about.values.1.title': 'سهولة الوصول',
    'about.values.1.desc': 'الجميع يستحق الوصول لأدوات بناء الثروة، بغض النظر عن نقطة البداية.',
    'about.values.2.title': 'الشفافية',
    'about.values.2.desc': 'معلومات واضحة، بدون مصطلحات معقدة، بدون رسوم خفية. أنت تعرف دائماً أين تقف.',
    'about.values.3.title': 'الانضباط',
    'about.values.3.desc': 'خطوات صغيرة ثابتة تتفوق على الحركات الكبيرة المتفرقة. نصمم للعادات وليس للبطولات.',
    'about.values.4.title': 'الشراكة',
    'about.values.4.desc': 'ننجح عندما ينجح شركاؤنا. غير حصري، تعاوني، منفتح.',

    'about.vision.title': 'الأردن أولاً. ثم المنطقة.',
    'about.vision.body': 'الأردن هو أرض اختبار مسار — العمق التنظيمي، تجارب أصحاب العمل، استمرارية المساهمات. البنية التحتية والمنهجية ونموذج الحوكمة — كلها مصممة للتكرار عبر دول الخليج ومنطقة الشرق الأوسط وشمال أفريقيا.',
    'about.roadmap.1.title': 'الأردن',
    'about.roadmap.1.label': 'المرحلة ١ — نشط',
    'about.roadmap.2.title': 'السعودية · الإمارات',
    'about.roadmap.2.label': 'المرحلة ٢',
    'about.roadmap.3.title': 'مصر · الكويت · قطر',
    'about.roadmap.3.label': 'المرحلة ٣',

    'about.cta.headline': 'تريد أن تكون جزءاً من الرحلة؟',
    'about.cta.contact': 'تواصل معنا',

    // Contact
    'contact.hero.headline': 'تواصل معنا',
    'contact.hero.body': 'سواء كنت فرداً أو صاحب عمل أو شريكاً محتملاً — يسعدنا سماعك.',
    'contact.waitlist.title': 'انضم لقائمة الانتظار',
    'contact.waitlist.note': 'سنُعلمك عند إطلاق مسار في منطقتك.',
    'contact.demo.title': 'احجز عرض لأصحاب العمل',
    'contact.demo.note': 'لأصحاب العمل المهتمين بمسار كميزة للفريق.',
    'contact.partner.title': 'كن شريكاً',
    'contact.partner.note': 'للبنوك ومزودي خدمات الدفع ومنصات الموارد البشرية والشركاء الاستراتيجيين.',
    'contact.partner.type': 'نوع الشريك',
    'contact.partner.type.bank': 'بنك / مؤسسة مالية',
    'contact.partner.type.psp': 'مزود خدمات دفع',
    'contact.partner.type.hr': 'منصة موارد بشرية',
    'contact.partner.type.employer': 'صاحب عمل',
    'contact.partner.type.other': 'أخرى',
    'contact.partner.cta': 'ابدأ محادثة',
    'contact.email.line': 'يمكنك أيضاً التواصل معنا عبر',

    // Forms
    'form.name': 'الاسم الكامل',
    'form.email': 'البريد الإلكتروني',
    'form.phone': 'الهاتف (اختياري)',
    'form.employer': 'صاحب العمل الحالي (اختياري)',
    'form.company': 'اسم الشركة',
    'form.role': 'دورك',
    'form.employees': 'عدد الموظفين',
    'form.payrollSystem': 'نظام الرواتب (اختياري)',
    'form.message': 'الرسالة (اختياري)',
    'form.submit': 'إرسال',
    'form.success': 'شكراً! سنتواصل معك قريباً.',
    'form.select': 'اختر...',
    'form.emp.under50': 'أقل من ٥٠',

    // Footer
    'footer.description': 'بناء الملكية، راتب تلو راتب.',
    'footer.product': 'المنتج',
    'footer.company': 'الشركة',
    'footer.newsletter': 'رؤى مسار',
    'footer.newsletter.desc': 'العادات المالية، مزايا أصحاب العمل، وأساسيات الاستثمار.',
    'footer.newsletter.placeholder': 'أدخل بريدك الإلكتروني',
    'footer.newsletter.button': 'اشترك',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
    'footer.copyright': '© ٢٠٢٦ شركة مسار للاستثمار م.خ.م (ق.خ.) جميع الحقوق محفوظة.',
    'footer.disclaimer': 'رأس المال في خطر. لا عوائد مضمونة.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;

    if (language === 'ar') {
      document.title = 'مسار | MASAR — بناء الملكية، راتب تلو راتب';
      document.querySelector('meta[name="description"]')?.setAttribute(
        'content',
        'مسار هي منصة استثمارية أصيلة التنظيم تحوّل مساهمات الرواتب ومطابقة أصحاب العمل وتقريب المصاريف اليومية إلى وحدات صناديق مرخصة من هيئة الأوراق المالية. مصممة للأسر العاملة في الأردن ومنطقة الشرق الأوسط وشمال أفريقيا.'
      );
    } else {
      document.title = 'MASAR | مسار — Building Ownership, One Paycheck at a Time';
      document.querySelector('meta[name="description"]')?.setAttribute(
        'content',
        'MASAR is a regulation-native investment platform that converts payroll contributions, employer matching, and daily spending round-ups into JSC-authorized fund units. Designed for working households in Jordan and the MENA region.'
      );
    }
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
