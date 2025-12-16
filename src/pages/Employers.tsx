import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/layout/Layout';
import { 
  FileText, 
  Plug, 
  Palette,
  ArrowRight,
  CheckCircle2,
  Users,
  Settings,
  ClipboardCheck,
  BarChart3,
  Mail,
  Calendar
} from 'lucide-react';

export default function Employers() {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-3xl animate-fade-up">
            <p className="text-champagne font-medium tracking-wide uppercase text-sm mb-4">
              {t('employers.subtitle')}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
              {t('employers.title')}
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Deploy in weeks, not quarters. No engineering required for basic setup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/demo">
                <Button variant="champagne" size="xl">
                  {t('hero.cta.demo')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button variant="heroOutline" size="xl">
                Request Pilot One-Pager
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Tiers */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
              Deploy in Weeks, Not Quarters
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose your integration depth. Start simple, scale up.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                tier: 'Tier 1',
                title: t('employers.tier1.title'),
                desc: t('employers.tier1.desc'),
                icon: FileText,
                features: ['CSV upload', 'Manual reconciliation', 'Basic reporting', 'Email support'],
                timeline: '1-2 weeks',
              },
              {
                tier: 'Tier 2',
                title: t('employers.tier2.title'),
                desc: t('employers.tier2.desc'),
                icon: Plug,
                features: ['REST APIs', 'Webhooks', 'Automated reconciliation', 'Priority support'],
                timeline: '4-6 weeks',
                highlighted: true,
              },
              {
                tier: 'Tier 3',
                title: t('employers.tier3.title'),
                desc: t('employers.tier3.desc'),
                icon: Palette,
                features: ['Your brand, our engine', 'Full customization', 'Dedicated account', 'SLA guarantees'],
                timeline: '8-12 weeks',
              },
            ].map((tier, index) => (
              <div 
                key={tier.tier}
                className={`card-elevated p-6 animate-fade-up ${tier.highlighted ? 'ring-2 ring-cta' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {tier.tier}
                  </span>
                  {tier.highlighted && (
                    <span className="text-xs font-medium text-cta bg-cta/10 px-2 py-0.5 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <div className="w-12 h-12 rounded-xl bg-champagne/20 flex items-center justify-center mb-4">
                  <tier.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif text-foreground mb-2">{tier.title}</h3>
                <p className="text-muted-foreground mb-4">{tier.desc}</p>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-cta flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">Timeline: </span>
                  <span className="text-sm font-medium text-foreground">{tier.timeline}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employer Console Features */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
              Employer Console Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage your employee savings benefit.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: 'Eligibility & Cohorts', desc: 'Define who qualifies and segment by department, tenure, or role' },
              { icon: Settings, title: 'Matching Policy Engine', desc: 'Set caps, rules, vesting schedules, and pause conditions' },
              { icon: FileText, title: 'Payroll Instructions', desc: 'Generate clear instructions for your payroll team' },
              { icon: ClipboardCheck, title: 'Reconciliation & Audit', desc: 'Full audit trail with dispute resolution support' },
              { icon: BarChart3, title: 'Reporting Dashboard', desc: 'Real-time insights on participation and contributions' },
              { icon: Mail, title: 'Employee Comms Pack', desc: 'Ready-to-send materials to announce and educate' },
            ].map((feature, index) => (
              <div 
                key={feature.title}
                className="card-elevated p-6 animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-champagne/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Employers Choose MASAR */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
                Why Employers Choose MASAR
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Retention & Engagement',
                    desc: 'Financial benefits that employees actually use and value.',
                  },
                  {
                    title: 'Zero Payroll Rebuild',
                    desc: 'Works with your existing systems — no massive integration project.',
                  },
                  {
                    title: 'Compliance Built-In',
                    desc: 'Regulator-native design means you can trust the governance.',
                  },
                  {
                    title: 'Modern Benefit Positioning',
                    desc: 'Attract talent with forward-thinking financial wellness.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-cta flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="card-elevated p-8 animate-fade-up delay-200">
              <div className="flex items-center gap-4 mb-6">
                <Calendar className="w-8 h-8 text-champagne" />
                <div>
                  <h3 className="font-serif text-xl text-foreground">Book a Demo</h3>
                  <p className="text-sm text-muted-foreground">30-minute walkthrough</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                See how MASAR can work for your organization. No commitment, just a conversation.
              </p>
              <Link to="/demo">
                <Button variant="default" size="lg" className="w-full">
                  Schedule Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Ready to modernize your benefits?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Let's discuss how MASAR can work for your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo">
              <Button variant="champagne" size="xl">
                {t('hero.cta.demo')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button variant="heroOutline" size="xl">
              Request Pilot One-Pager
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
