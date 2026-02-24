import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/layout/Layout';
import { Zap, BarChart3, Shield, ArrowRight } from 'lucide-react';

export default function Employers() {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-white">
        <div className="container-content max-w-3xl animate-fade-up">
          <h1 className="text-4xl md:text-[48px] lg:text-[56px] font-serif leading-[1.1] mb-6">{t('emp.hero.headline')}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">{t('emp.hero.body')}</p>
          <Link to="/contact#demo">
            <Button size="lg">
              {t('cta.bookDemo')}
              <ArrowRight className="w-4 h-4 ms-1 rtl:rotate-180" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Why Employers Choose MASAR */}
      <section className="section-padding bg-cream">
        <div className="container-content">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: t('emp.why.1.title'), desc: t('emp.why.1.desc') },
              { icon: BarChart3, title: t('emp.why.2.title'), desc: t('emp.why.2.desc') },
              { icon: Shield, title: t('emp.why.3.title'), desc: t('emp.why.3.desc') },
            ].map((item, i) => (
              <div key={item.title} className="animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <item.icon className="w-6 h-6 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Tiers */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <h2 className="text-3xl md:text-[40px] font-serif text-center mb-4 animate-fade-up">{t('emp.tiers.title')}</h2>
          <p className="text-center text-muted-foreground mb-12 animate-fade-up">{t('emp.tiers.subtitle')}</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                tag: t('emp.tiers.1.tag'), title: t('emp.tiers.1.title'),
                features: [t('emp.tiers.1.f1'), t('emp.tiers.1.f2'), t('emp.tiers.1.f3')],
                best: t('emp.tiers.1.best'),
              },
              {
                tag: t('emp.tiers.2.tag'), title: t('emp.tiers.2.title'),
                features: [t('emp.tiers.2.f1'), t('emp.tiers.2.f2'), t('emp.tiers.2.f3')],
                best: t('emp.tiers.2.best'),
              },
              {
                tag: t('emp.tiers.3.tag'), title: t('emp.tiers.3.title'),
                features: [t('emp.tiers.3.f1'), t('emp.tiers.3.f2'), t('emp.tiers.3.f3')],
                best: t('emp.tiers.3.best'),
              },
            ].map((tier, i) => (
              <div key={tier.tag} className="card-masar border border-border/50 animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <span className="inline-block text-xs font-medium text-primary bg-teal-light px-2.5 py-1 rounded-full mb-4">{tier.tag}</span>
                <h3 className="text-xl font-semibold text-navy mb-4">{tier.title}</h3>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((f) => (
                    <li key={f} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span> {f}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground border-t border-border pt-4">{tier.best}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employer Dashboard */}
      <section className="section-padding bg-cream">
        <div className="container-content">
          <h2 className="text-3xl md:text-[40px] font-serif text-center mb-3 animate-fade-up">{t('emp.dashboard.title')}</h2>
          <p className="text-center text-muted-foreground mb-12 animate-fade-up">{t('emp.dashboard.subtitle')}</p>

          {/* Dashboard mockup */}
          <div className="card-masar p-8 mb-12 animate-fade-up delay-100">
            <DashboardMockup />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: t('emp.dashboard.f1.title'), desc: t('emp.dashboard.f1.desc') },
              { title: t('emp.dashboard.f2.title'), desc: t('emp.dashboard.f2.desc') },
              { title: t('emp.dashboard.f3.title'), desc: t('emp.dashboard.f3.desc') },
            ].map((f, i) => (
              <div key={f.title} className="animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <h3 className="text-base font-semibold text-navy mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How To Get Started */}
      <section className="section-padding bg-white">
        <div className="container-content max-w-3xl">
          <div className="flex flex-col md:flex-row items-start gap-8 animate-fade-up">
            {[
              { num: '1', title: t('emp.start.1.title'), desc: t('emp.start.1.desc') },
              { num: '2', title: t('emp.start.2.title'), desc: t('emp.start.2.desc') },
              { num: '3', title: t('emp.start.3.title'), desc: t('emp.start.3.desc') },
            ].map((step, i) => (
              <div key={step.num} className="flex-1 text-center">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="text-base font-semibold text-navy mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
                {i < 2 && <div className="hidden md:block w-full h-px bg-border mt-8" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employer Outcomes (navy) */}
      <section className="section-padding bg-navy">
        <div className="container-content text-center">
          <p className="text-xl md:text-2xl font-serif text-white max-w-3xl mx-auto mb-12 leading-relaxed italic animate-fade-up">
            {t('emp.outcomes.quote')}
          </p>
          <div className="grid grid-cols-3 gap-8 animate-fade-up delay-100">
            {[
              { num: t('emp.outcomes.1.num'), label: t('emp.outcomes.1.label') },
              { num: t('emp.outcomes.2.num'), label: t('emp.outcomes.2.label') },
              { num: t('emp.outcomes.3.num'), label: t('emp.outcomes.3.label') },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-serif text-white mb-1">{stat.num}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-content text-center animate-fade-up">
          <h2 className="text-3xl md:text-[40px] font-serif mb-8">{t('emp.cta.headline')}</h2>
          <Link to="/contact#demo">
            <Button size="lg">
              {t('cta.bookDemo')}
              <ArrowRight className="w-4 h-4 ms-1 rtl:rotate-180" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}

function DashboardMockup() {
  const { t, language } = useLanguage();
  const fontFamily = language === 'ar' ? 'Noto Sans Arabic, DM Sans' : 'DM Sans';

  return (
    <svg viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      {/* Top metrics */}
      <rect x="0" y="0" width="180" height="80" rx="10" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
      <text x="20" y="30" fill="#9ca3af" fontSize="11" fontFamily={fontFamily}>{t('emp.mock.enrollment')}</text>
      <text x="20" y="60" fill="#1a1a2e" fontSize="24" fontFamily={fontFamily} fontWeight="600">78%</text>

      <rect x="200" y="0" width="180" height="80" rx="10" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
      <text x="220" y="30" fill="#9ca3af" fontSize="11" fontFamily={fontFamily}>{t('emp.mock.aum')}</text>
      <text x="220" y="60" fill="#1a1a2e" fontSize="24" fontFamily={fontFamily} fontWeight="600">JOD 1.2M</text>

      {/* Bar chart */}
      <rect x="420" y="0" width="380" height="140" rx="10" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
      <text x="440" y="25" fill="#9ca3af" fontSize="11" fontFamily={fontFamily}>{t('emp.mock.trends')}</text>
      <rect x="455" y="45" width="24" height="85" rx="3" fill="#16a085" opacity="0.6" />
      <rect x="495" y="55" width="24" height="75" rx="3" fill="#16a085" opacity="0.65" />
      <rect x="535" y="35" width="24" height="95" rx="3" fill="#16a085" opacity="0.7" />
      <rect x="575" y="50" width="24" height="80" rx="3" fill="#16a085" opacity="0.75" />
      <rect x="615" y="30" width="24" height="100" rx="3" fill="#16a085" opacity="0.8" />
      <rect x="655" y="40" width="24" height="90" rx="3" fill="#16a085" opacity="0.85" />
      <rect x="695" y="25" width="24" height="105" rx="3" fill="#16a085" opacity="0.9" />
      <rect x="735" y="20" width="24" height="110" rx="3" fill="#16a085" opacity="0.95" />

      {/* Donut chart placeholder */}
      <rect x="0" y="100" width="380" height="200" rx="10" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" />
      <text x="20" y="125" fill="#9ca3af" fontSize="11" fontFamily={fontFamily}>{t('emp.mock.participation')}</text>
      <circle cx="190" cy="210" r="60" fill="none" stroke="#e5e7eb" strokeWidth="12" />
      <circle cx="190" cy="210" r="60" fill="none" stroke="#16a085" strokeWidth="12" strokeDasharray="200 377" strokeDashoffset="0" />
      <circle cx="190" cy="210" r="60" fill="none" stroke="#d4a843" strokeWidth="12" strokeDasharray="100 377" strokeDashoffset="-200" />
      <circle cx="190" cy="210" r="60" fill="none" stroke="#6b7280" strokeWidth="12" strokeDasharray="77 377" strokeDashoffset="-300" />
    </svg>
  );
}
