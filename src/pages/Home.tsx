import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/layout/Layout';
import { Route, ShieldCheck, TrendingUp, Cpu, Building2, Users, ArrowRight } from 'lucide-react';

function HeroIllustration() {
  return (
    <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      {/* Stream 1 — Salary (teal) */}
      <text x="20" y="80" fill="#9ca3af" fontSize="13" fontFamily="DM Sans, sans-serif">Salary</text>
      <path d="M80 75 Q200 75 300 200" stroke="#16a085" strokeWidth="1.5" fill="none" strokeDasharray="6 4" opacity="0.7">
        <animate attributeName="stroke-dashoffset" values="0;-20" dur="3s" repeatCount="indefinite" />
      </path>

      {/* Stream 2 — Round-ups (gold) */}
      <text x="20" y="200" fill="#9ca3af" fontSize="13" fontFamily="DM Sans, sans-serif">Round-ups</text>
      <path d="M100 195 Q220 195 300 200" stroke="#d4a843" strokeWidth="1.5" fill="none" strokeDasharray="6 4" opacity="0.7">
        <animate attributeName="stroke-dashoffset" values="0;-20" dur="3.5s" repeatCount="indefinite" />
      </path>

      {/* Stream 3 — Employer Match (gray) */}
      <text x="20" y="320" fill="#9ca3af" fontSize="13" fontFamily="DM Sans, sans-serif">Employer Match</text>
      <path d="M140 315 Q250 315 300 200" stroke="#6b7280" strokeWidth="1.5" fill="none" strokeDasharray="6 4" opacity="0.7">
        <animate attributeName="stroke-dashoffset" values="0;-20" dur="4s" repeatCount="indefinite" />
      </path>

      {/* Convergence point */}
      <circle cx="300" cy="200" r="4" fill="#16a085" opacity="0.6" />

      {/* Rising shape */}
      <path d="M300 200 Q350 180 380 120 Q400 80 430 50" stroke="#16a085" strokeWidth="2" fill="none" />
      <path d="M300 200 Q350 190 380 140 Q400 110 430 90" stroke="#16a085" strokeWidth="1" fill="none" opacity="0.3" />

      {/* Label */}
      <text x="340" y="40" fill="#1a1a2e" fontSize="14" fontFamily="DM Sans, sans-serif" fontWeight="500">Your Fund Units</text>
    </svg>);

}

export default function Home() {
  const { t } = useLanguage();

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
              <p className="text-lg text-muted-foreground max-w-[520px] mb-6 leading-relaxed">
                {t('home.hero.body')}
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
      <section className="py-12 md:py-16 bg-cream">
        <div className="container-content">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
            { num: t('stats.1.num'), label: t('stats.1.label') },
            { num: t('stats.2.num'), label: t('stats.2.label') },
            { num: t('stats.3.num'), label: t('stats.3.label') },
            { num: t('stats.4.num'), label: t('stats.4.label') }].
            map((stat) =>
            <div key={stat.label}>
                <p className="text-3xl md:text-[32px] font-serif text-navy mb-1">{stat.num}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            )}
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
            { icon: TrendingUp, title: t('promise.dignity.title'), desc: t('promise.dignity.desc') }].
            map((card, i) =>
            <div key={card.title} className="card-masar text-center animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <card.icon className="w-6 h-6 text-primary mx-auto mb-5" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-navy mb-3">{card.title}</h3>
                <p className="text-muted-foreground">{card.desc}</p>
              </div>
            )}
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

      {/* Section 6 — Trust & Governance (navy) */}
      <section className="section-padding bg-navy">
        <div className="container-content text-center">
          <h2 className="text-3xl md:text-[40px] font-serif text-white mb-4 animate-fade-up">{t('home.trust.headline')}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 animate-fade-up delay-100">{t('home.trust.body')}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-12 mb-8 animate-fade-up delay-200">
            {[
            { icon: ShieldCheck, label: t('home.trust.1') },
            { icon: ShieldCheck, label: t('home.trust.2') },
            { icon: ShieldCheck, label: t('home.trust.3') }].
            map((item) =>
            <div key={item.label} className="flex flex-col items-center gap-3">
                <item.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                <span className="text-sm text-gray-300">{item.label}</span>
              </div>
            )}
          </div>
          <Link to="/funds" className="text-teal-light text-sm font-medium hover:underline inline-flex items-center gap-1">
            {t('home.trust.link')} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </Link>
        </div>
      </section>

      {/* Section 7 — Why Now */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <h2 className="text-3xl md:text-[40px] font-serif text-center mb-12 animate-fade-up">{t('whyNow.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
            { icon: Cpu, title: t('whyNow.rails.title'), desc: t('whyNow.rails.desc') },
            { icon: Building2, title: t('whyNow.demand.title'), desc: t('whyNow.demand.desc') },
            { icon: Users, title: t('whyNow.youth.title'), desc: t('whyNow.youth.desc') }].
            map((col, i) =>
            <div key={col.title} className="animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <col.icon className="w-6 h-6 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold text-navy mb-2">{col.title}</h3>
                <p className="text-muted-foreground">{col.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 8 — Final CTA */}
      <section className="section-padding bg-cream">
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
    </Layout>);

}

function FlowDiagram() {
  return (
    <div className="max-w-4xl mx-auto">
      <svg viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        {/* Source nodes */}
        <rect x="10" y="20" width="120" height="36" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1" />
        <text x="70" y="43" textAnchor="middle" fill="#374151" fontSize="12" fontFamily="DM Sans, sans-serif">Payroll Split</text>

        <rect x="10" y="80" width="120" height="36" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1" />
        <text x="70" y="103" textAnchor="middle" fill="#374151" fontSize="12" fontFamily="DM Sans, sans-serif">Round-ups</text>

        <rect x="10" y="140" width="120" height="36" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1" />
        <text x="70" y="163" textAnchor="middle" fill="#374151" fontSize="12" fontFamily="DM Sans, sans-serif">Employer Match</text>

        {/* Arrows to Platform */}
        <line x1="130" y1="38" x2="260" y2="98" stroke="#16a085" strokeWidth="1.5" markerEnd="url(#arrowTeal)" />
        <line x1="130" y1="98" x2="260" y2="98" stroke="#16a085" strokeWidth="1.5" markerEnd="url(#arrowTeal)" />
        <line x1="130" y1="158" x2="260" y2="98" stroke="#16a085" strokeWidth="1.5" markerEnd="url(#arrowTeal)" />

        {/* Platform node */}
        <rect x="260" y="72" width="140" height="52" rx="10" fill="white" stroke="#16a085" strokeWidth="1.5" />
        <text x="330" y="103" textAnchor="middle" fill="#1a1a2e" fontSize="13" fontFamily="DM Sans, sans-serif" fontWeight="500">MASAR Platform</text>

        {/* Arrow to Fund */}
        <line x1="400" y1="98" x2="480" y2="98" stroke="#16a085" strokeWidth="1.5" markerEnd="url(#arrowTeal)" />

        {/* Fund node */}
        <rect x="480" y="72" width="140" height="52" rx="10" fill="white" stroke="#16a085" strokeWidth="1.5" />
        <text x="550" y="103" textAnchor="middle" fill="#1a1a2e" fontSize="13" fontFamily="DM Sans, sans-serif" fontWeight="500">Umbrella Fund</text>

        {/* Arrow to Registry */}
        <line x1="620" y1="98" x2="690" y2="98" stroke="#16a085" strokeWidth="1.5" markerEnd="url(#arrowTeal)" />

        {/* Registry node */}
        <rect x="690" y="72" width="100" height="52" rx="10" fill="white" stroke="#16a085" strokeWidth="1.5" />
        <text x="740" y="97" textAnchor="middle" fill="#1a1a2e" fontSize="12" fontFamily="DM Sans, sans-serif" fontWeight="500">SDC</text>
        <text x="740" y="112" textAnchor="middle" fill="#9ca3af" fontSize="10" fontFamily="DM Sans, sans-serif">Registry</text>

        {/* Sleeves below fund */}
        <line x1="510" y1="124" x2="510" y2="160" stroke="#e5e7eb" strokeWidth="1" />
        <line x1="550" y1="124" x2="550" y2="160" stroke="#e5e7eb" strokeWidth="1" />
        <line x1="590" y1="124" x2="590" y2="160" stroke="#e5e7eb" strokeWidth="1" />

        <rect x="485" y="160" width="50" height="28" rx="6" fill="#e8f5f1" stroke="#16a085" strokeWidth="0.5" />
        <text x="510" y="178" textAnchor="middle" fill="#16a085" fontSize="9" fontFamily="DM Sans, sans-serif">CashYield</text>

        <rect x="525" y="160" width="50" height="28" rx="6" fill="#fef3c7" stroke="#d4a843" strokeWidth="0.5" />
        <text x="550" y="178" textAnchor="middle" fill="#92400e" fontSize="9" fontFamily="DM Sans, sans-serif">Balanced</text>

        <rect x="565" y="160" width="50" height="28" rx="6" fill="#e8f5f1" stroke="#16a085" strokeWidth="0.5" />
        <text x="590" y="178" textAnchor="middle" fill="#16a085" fontSize="9" fontFamily="DM Sans, sans-serif">Halal</text>

        {/* Arrow marker */}
        <defs>
          <marker id="arrowTeal" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0 0 L8 4 L0 8 Z" fill="#16a085" />
          </marker>
        </defs>
      </svg>
    </div>);

}