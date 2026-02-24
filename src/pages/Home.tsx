import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/layout/Layout';
import { Route, ShieldCheck, TrendingUp, Cpu, Building2, Users, ArrowRight, Train, Briefcase, UserCheck } from 'lucide-react';

export default function Home() {
  const { t, language } = useLanguage();

  return (
    <Layout>
      {/* Section 1 — Hero */}
      <section className="min-h-[calc(100vh-74px)] flex items-center bg-white">
        <div className="container-content">
          <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center py-16 md:py-24">
            <div className="animate-fade-up">
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4">{t('home.hero.brand')}</p>
              <h1 className="text-4xl md:text-[48px] lg:text-[56px] font-serif leading-[1.1] mb-6 whitespace-pre-line">
                {t('home.hero.headline')}
              </h1>
              <p className="text-lg text-muted-foreground max-w-[520px] mb-4 leading-relaxed">
                {t('home.hero.body')}
              </p>
              <p className="text-[15px] text-gray-400 italic max-w-[520px] mb-4 leading-relaxed">
                {t('home.hero.descriptor')}
              </p>
              <p className="text-[13px] text-muted-foreground uppercase tracking-widest font-medium mb-8">
                {t('home.hero.trustline')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/contact">
                  <Button size="lg">
                    {t('cta.joinWaitlist')}
                    <ArrowRight className="w-4 h-4 ms-1 rtl:rotate-180" />
                  </Button>
                </Link>
                <Link to="/contact#demo">
                  <Button variant="outline" size="lg">
                    {t('cta.bookDemo')}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block animate-fade-up delay-200">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Market Stats */}
      <section className="py-10 md:py-14 bg-cream">
        <div className="container-content">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { num: t('stats.1.num'), label: t('stats.1.label') },
              { num: t('stats.2.num'), label: t('stats.2.label') },
              { num: t('stats.3.num'), label: t('stats.3.label') },
              { num: t('stats.4.num'), label: t('stats.4.label') },
            ].map((stat) => (
              <div key={stat.label} className="text-center animate-fade-up">
                <p className="text-[32px] font-serif text-navy mb-1">{stat.num}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — The MASAR Promise */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-[40px] font-serif mb-4">{t('promise.title')}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Route, title: t('promise.simplicity.title'), desc: t('promise.simplicity.desc') },
              { icon: ShieldCheck, title: t('promise.trust.title'), desc: t('promise.trust.desc') },
              { icon: TrendingUp, title: t('promise.dignity.title'), desc: t('promise.dignity.desc') },
            ].map((card, i) => (
              <div
                key={card.title}
                className="card-masar text-center animate-fade-up"
                style={{ animationDelay: `${i * 100}ms`, padding: '40px', border: '1px solid rgba(0,0,0,0.06)', borderTop: '3px solid hsl(168 73% 36%)' }}
              >
                <div className="w-14 h-14 rounded-full bg-teal-light flex items-center justify-center mx-auto mb-5">
                  <card.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{card.title}</h3>
                <p className="text-muted-foreground">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — The Quiet Engine */}
      <section className="section-padding bg-cream">
        <div className="container-content text-center">
          <div className="mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-[40px] font-serif mb-4">{t('home.engine.headline')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{t('home.engine.body')}</p>
          </div>
          <div className="animate-fade-up delay-200">
            <FlowDiagram />
          </div>
        </div>
      </section>

      {/* Section 5 — Two Audience Paths */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-masar p-10 animate-fade-up border border-border/50">
              <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">{t('home.paths.individuals.label')}</p>
              <h3 className="text-2xl font-serif text-navy mb-4">{t('home.paths.individuals.title')}</h3>
              <p className="text-muted-foreground mb-6">{t('home.paths.individuals.body')}</p>
              <Link to="/how-it-works" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
                {t('home.paths.individuals.link')}
              </Link>
            </div>
            <div className="card-masar p-10 animate-fade-up delay-100 border border-border/50">
              <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">{t('home.paths.employers.label')}</p>
              <h3 className="text-2xl font-serif text-navy mb-4">{t('home.paths.employers.title')}</h3>
              <p className="text-muted-foreground mb-6">{t('home.paths.employers.body')}</p>
              <Link to="/employers" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
                {t('home.paths.employers.link')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5b — Why Now */}
      <section className="section-padding bg-cream">
        <div className="container-content">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-[40px] font-serif mb-4">{t('whyNow.title')}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Train, title: t('whyNow.rails.title'), desc: t('whyNow.rails.desc') },
              { icon: Briefcase, title: t('whyNow.demand.title'), desc: t('whyNow.demand.desc') },
              { icon: UserCheck, title: t('whyNow.youth.title'), desc: t('whyNow.youth.desc') },
            ].map((item, i) => (
              <div key={item.title} className="text-center animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <item.icon className="w-6 h-6 text-primary mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="text-base font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 — Trust & Governance (navy) */}
      <section className="section-padding bg-navy">
        <div className="container-content text-center">
          <h2 className="text-3xl md:text-[40px] font-serif text-white mb-4 animate-fade-up">{t('home.trust.headline')}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 animate-fade-up delay-100">{t('home.trust.body')}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-12 mb-8 animate-fade-up delay-200">
            {[
              { icon: ShieldCheck, label: t('home.trust.1') },
              { icon: ShieldCheck, label: t('home.trust.2') },
              { icon: ShieldCheck, label: t('home.trust.3') },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-3">
                <item.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                <span className="text-sm text-gray-300">{item.label}</span>
              </div>
            ))}
          </div>
          <Link to="/funds" className="text-teal-light text-sm font-medium hover:underline inline-flex items-center gap-1">
            {t('home.trust.link')}
          </Link>
        </div>
      </section>

      {/* Section 8 — Final CTA */}
      <section className="section-padding bg-white">
        <div className="container-content text-center animate-fade-up">
          <h2 className="text-3xl md:text-[40px] font-serif mb-8 max-w-3xl mx-auto">{t('finalCta.headline')}</h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
            <Link to="/contact">
              <Button size="lg">
                {t('cta.joinWaitlist')}
                <ArrowRight className="w-4 h-4 ms-1 rtl:rotate-180" />
              </Button>
            </Link>
            <Link to="/contact#demo">
              <Button variant="outline" size="lg">
                {t('cta.bookDemo')}
              </Button>
            </Link>
          </div>
          <p className="text-xs text-muted-foreground">{t('disclaimer.short')}</p>
        </div>
      </section>
    </Layout>
  );
}

function HeroIllustration() {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';
  const font = isRTL ? 'Noto Sans Arabic, DM Sans, sans-serif' : 'DM Sans, sans-serif';

  // RTL-aware coordinates
  const labelX = isRTL ? 480 : 20;
  const anchor = isRTL ? 'end' : 'start';
  const streamStartX = isRTL ? 400 : 100;
  const convergeX = isRTL ? 200 : 300;
  const empStartX = isRTL ? 340 : 160;
  const riseDir = isRTL ? -1 : 1;

  // Rising line endpoints
  const riseX1 = convergeX + riseDir * 50;
  const riseX2 = convergeX + riseDir * 80;
  const riseX3 = convergeX + riseDir * 100;
  const riseX4 = convergeX + riseDir * 130;
  const fundLabelX = isRTL ? 100 : 340;
  const fundAnchor = isRTL ? 'end' : 'start';

  return (
    <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      {/* Stream 1 — Salary (teal) */}
      <text x={labelX} y="80" fill="hsl(215 19% 26%)" fontSize="15" fontFamily={font} fontWeight="500" textAnchor={anchor}>
        {t('hero.illust.salary')}
      </text>
      <path d={`M${streamStartX} 75 Q${(streamStartX + convergeX) / 2} 75 ${convergeX} 200`} stroke="#16a085" strokeWidth="2" fill="none" strokeDasharray="6 4" opacity="0.7">
        <animate attributeName="stroke-dashoffset" values={isRTL ? '0;20' : '0;-20'} dur="3s" repeatCount="indefinite" />
      </path>

      {/* Stream 2 — Round-ups (gold) */}
      <text x={labelX} y="200" fill="hsl(215 19% 26%)" fontSize="15" fontFamily={font} fontWeight="500" textAnchor={anchor}>
        {t('hero.illust.roundups')}
      </text>
      <path d={`M${streamStartX} 195 Q${(streamStartX + convergeX) / 2 + 20} 195 ${convergeX} 200`} stroke="#d4a843" strokeWidth="2" fill="none" strokeDasharray="6 4" opacity="0.7">
        <animate attributeName="stroke-dashoffset" values={isRTL ? '0;20' : '0;-20'} dur="3.5s" repeatCount="indefinite" />
      </path>

      {/* Stream 3 — Employer Match (gray) */}
      <text x={labelX} y="320" fill="hsl(215 19% 26%)" fontSize="15" fontFamily={font} fontWeight="500" textAnchor={anchor}>
        {t('hero.illust.employer')}
      </text>
      <path d={`M${empStartX} 315 Q${(empStartX + convergeX) / 2 + 10} 315 ${convergeX} 200`} stroke="#6b7280" strokeWidth="2" fill="none" strokeDasharray="6 4" opacity="0.7">
        <animate attributeName="stroke-dashoffset" values={isRTL ? '0;20' : '0;-20'} dur="4s" repeatCount="indefinite" />
      </path>

      {/* Convergence point */}
      <circle cx={convergeX} cy="200" r="5" fill="#16a085" opacity="0.6" />

      {/* Rising shape */}
      <path d={`M${convergeX} 200 Q${riseX1} 180 ${riseX2} 120 Q${riseX3} 80 ${riseX4} 50`} stroke="#16a085" strokeWidth="2.5" fill="none" />
      <path d={`M${convergeX} 200 Q${riseX1} 190 ${riseX2} 140 Q${riseX3} 110 ${riseX4} 90`} stroke="#16a085" strokeWidth="1" fill="none" opacity="0.3" />

      {/* Label */}
      <text x={fundLabelX} y="40" fill="#1a1a2e" fontSize="15" fontFamily={font} fontWeight="600" textAnchor={fundAnchor}>
        {t('hero.illust.fundUnits')}
      </text>
    </svg>
  );
}

function FlowDiagram() {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';
  const font = isRTL ? 'Noto Sans Arabic, DM Sans, sans-serif' : 'DM Sans, sans-serif';
  const srcFontSize = isRTL ? '10' : '12';
  const nodeFontSize = isRTL ? '11' : '13';

  // RTL-aware positions
  const srcX = isRTL ? 660 : 10;
  const srcCenterX = srcX + 65;
  const srcEdge = isRTL ? srcX : srcX + 130;
  const platX = isRTL ? 380 : 270;
  const platCenterX = platX + 75;
  const platEdgeFar = isRTL ? platX : platX + 150;
  const fundX = isRTL ? 160 : 490;
  const fundCenterX = fundX + 75;
  const fundEdgeFar = isRTL ? fundX : fundX + 150;
  const regX = isRTL ? 10 : 690;
  const regCenterX = regX + 50;

  // Arrow connection edges
  const srcArrowEnd = isRTL ? platX + 150 : platX;
  const platArrowEnd = isRTL ? fundX + 150 : fundX;
  const fundArrowEnd = isRTL ? regX + 100 : regX;

  // Sleeves below fund
  const sleeveStartX = fundX + 2;
  const sleeveGap = 78;

  return (
    <div className="max-w-4xl mx-auto">
      <svg viewBox="0 0 800 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Source nodes */}
        <rect x={srcX} y="20" width="130" height="44" rx="10" fill="white" stroke="#e5e7eb" strokeWidth="1.2" />
        <text x={srcCenterX} y="47" textAnchor="middle" fill="#374151" fontSize={srcFontSize} fontFamily={font}>{t('flow.payroll')}</text>

        <rect x={srcX} y="80" width="130" height="44" rx="10" fill="white" stroke="#e5e7eb" strokeWidth="1.2" />
        <text x={srcCenterX} y="107" textAnchor="middle" fill="#374151" fontSize={srcFontSize} fontFamily={font}>{t('flow.roundups')}</text>

        <rect x={srcX} y="140" width="130" height="44" rx="10" fill="white" stroke="#e5e7eb" strokeWidth="1.2" />
        <text x={srcCenterX} y="167" textAnchor="middle" fill="#374151" fontSize={srcFontSize} fontFamily={font}>{t('flow.employer')}</text>

        {/* Arrows to Platform */}
        <line x1={srcEdge} y1="42" x2={srcArrowEnd} y2="102" stroke="#16a085" strokeWidth="2" markerEnd="url(#arrowTeal)" />
        <line x1={srcEdge} y1="102" x2={srcArrowEnd} y2="102" stroke="#16a085" strokeWidth="2" markerEnd="url(#arrowTeal)" />
        <line x1={srcEdge} y1="162" x2={srcArrowEnd} y2="102" stroke="#16a085" strokeWidth="2" markerEnd="url(#arrowTeal)" />

        {/* Platform node */}
        <rect x={platX} y="76" width="150" height="52" rx="10" fill="white" stroke="#16a085" strokeWidth="1.5" />
        <text x={platCenterX} y="107" textAnchor="middle" fill="#1a1a2e" fontSize={nodeFontSize} fontFamily={font} fontWeight="500">{t('flow.platform')}</text>

        {/* Arrow to Fund */}
        <line x1={platEdgeFar} y1="102" x2={isRTL ? fundX + 150 : fundX} y2="102" stroke="#16a085" strokeWidth="2" markerEnd="url(#arrowTeal)" />

        {/* Fund node */}
        <rect x={fundX} y="76" width="150" height="52" rx="10" fill="white" stroke="#16a085" strokeWidth="1.5" />
        <text x={fundCenterX} y="107" textAnchor="middle" fill="#1a1a2e" fontSize={nodeFontSize} fontFamily={font} fontWeight="500">{t('flow.fund')}</text>

        {/* Arrow to Registry */}
        <line x1={fundEdgeFar} y1="102" x2={isRTL ? regX + 100 : regX} y2="102" stroke="#16a085" strokeWidth="2" markerEnd="url(#arrowTeal)" />

        {/* Registry node */}
        <rect x={regX} y="76" width="100" height="52" rx="10" fill="white" stroke="#16a085" strokeWidth="1.5" />
        <text x={regCenterX} y="99" textAnchor="middle" fill="#1a1a2e" fontSize={nodeFontSize} fontFamily={font} fontWeight="500">{t('flow.registry')}</text>
        <text x={regCenterX} y="115" textAnchor="middle" fill="#9ca3af" fontSize="10" fontFamily={font}>{t('flow.registryLabel')}</text>

        {/* Sleeves below fund — spaced out */}
        <line x1={sleeveStartX + 30} y1="128" x2={sleeveStartX + 30} y2="165" stroke="#e5e7eb" strokeWidth="1" />
        <line x1={sleeveStartX + 30 + sleeveGap} y1="128" x2={sleeveStartX + 30 + sleeveGap} y2="165" stroke="#e5e7eb" strokeWidth="1" />
        <line x1={sleeveStartX + 30 + sleeveGap * 2} y1="128" x2={sleeveStartX + 30 + sleeveGap * 2} y2="165" stroke="#e5e7eb" strokeWidth="1" />

        <rect x={sleeveStartX} y="165" width="68" height="32" rx="8" fill="#e8f5f1" stroke="#16a085" strokeWidth="0.8" />
        <text x={sleeveStartX + 34} y="185" textAnchor="middle" fill="#16a085" fontSize="10" fontFamily={font}>{t('flow.cashyield')}</text>

        <rect x={sleeveStartX + sleeveGap} y="165" width="68" height="32" rx="8" fill="#fef3c7" stroke="#d4a843" strokeWidth="0.8" />
        <text x={sleeveStartX + sleeveGap + 34} y="185" textAnchor="middle" fill="#92400e" fontSize="10" fontFamily={font}>{t('flow.balanced')}</text>

        <rect x={sleeveStartX + sleeveGap * 2} y="165" width="68" height="32" rx="8" fill="#e8f5f1" stroke="#16a085" strokeWidth="0.8" />
        <text x={sleeveStartX + sleeveGap * 2 + 34} y="185" textAnchor="middle" fill="#16a085" fontSize="10" fontFamily={font}>{t('flow.halal')}</text>

        {/* Arrow marker */}
        <defs>
          <marker id="arrowTeal" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0 0 L8 4 L0 8 Z" fill="#16a085" />
          </marker>
        </defs>
      </svg>
    </div>
  );
}
