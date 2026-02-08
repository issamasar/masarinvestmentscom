import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/layout/Layout';
import { 
  Shield, 
  Target, 
  TrendingUp, 
  Wallet,
  ArrowRight,
  CheckCircle2,
  Repeat,
  PiggyBank
} from 'lucide-react';

export default function Individuals() {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-3xl animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
              Build ownership, one paycheck at a time.
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              No trading expertise needed. Just consistent habits that turn into real wealth.
            </p>
            <Link to="/waitlist">
              <Button variant="champagne" size="xl">
                {t('hero.cta.waitlist')}
                <ArrowRight className="w-5 h-5 ms-2 rtl:rotate-180" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What You Own */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
                What You Own
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                When you invest through MASAR, you own real fund units. These are recorded on the authoritative register — not just in our system.
              </p>
              <ul className="space-y-4">
                {[
                  'Regulated fund units in your name',
                  'Transparent NAV calculations',
                  'Clear distributions tracking',
                  'Full audit trail available',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cta flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-elevated p-8 animate-fade-up delay-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-champagne/20 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground">Your Units</h3>
                  <p className="text-sm text-muted-foreground">Recorded on official register</p>
                </div>
              </div>
              <div className="bg-secondary/50 rounded-xl p-6">
                <p className="text-sm text-muted-foreground mb-2">Example Portfolio</p>
                <p className="text-3xl font-serif text-foreground">245.32 units</p>
                <p className="text-sm text-muted-foreground">CashYield Sleeve</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Style */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
              Choose Your Style
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three sleeves, one simple choice. Pick what fits your goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'CashYield',
                nameAr: 'عائد نقدي',
                desc: 'Capital preservation oriented',
                risk: 'Low risk',
                icon: Wallet,
                color: 'bg-emerald-500/10 text-emerald-600',
              },
              {
                name: 'Balanced',
                nameAr: 'متوازن',
                desc: 'Diversified growth',
                risk: 'Medium risk',
                icon: Target,
                color: 'bg-blue-500/10 text-blue-600',
              },
              {
                name: 'Halal',
                nameAr: 'حلال',
                desc: 'Faith-aligned investing',
                risk: 'Medium risk',
                icon: TrendingUp,
                color: 'bg-amber-500/10 text-amber-600',
              },
            ].map((fund, index) => (
              <div 
                key={fund.name}
                className="card-elevated p-6 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl ${fund.color} flex items-center justify-center mb-4`}>
                  <fund.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif text-foreground mb-1">{fund.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{fund.nameAr}</p>
                <p className="text-muted-foreground mb-4">{fund.desc}</p>
                <span className="inline-block px-3 py-1 rounded-full bg-secondary text-sm text-muted-foreground">
                  {fund.risk}
                </span>
              </div>
            ))}
          </div>
          
          <p className="text-center text-sm text-muted-foreground italic mt-8">
            Capital at risk. Returns not guaranteed. Full disclosures at onboarding.
          </p>
        </div>
      </section>

      {/* Built for Consistency */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
              Built for Consistency
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Repeat,
                title: 'Habit Streaks',
                desc: 'Watch your consistency grow with visual progress tracking',
              },
              {
                icon: PiggyBank,
                title: 'Auto-Reinvest',
                desc: 'Distributions automatically compound by default',
              },
              {
                icon: Target,
                title: 'Goal Tracking',
                desc: 'Set milestones and celebrate your progress',
              },
            ].map((feature, index) => (
              <div 
                key={feature.title}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-champagne/20 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-serif text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-12 text-center animate-fade-up">
            Common Questions
          </h2>
          
          <div className="space-y-6">
            {[
              {
                q: 'Can I withdraw my money?',
                a: 'Yes, you can request redemptions according to the fund terms. Processing typically takes a few business days after the next NAV calculation.',
              },
              {
                q: 'Is this Sharia-compliant?',
                a: 'Our Halal sleeve is designed for faith-aligned investing. It follows Islamic finance principles and avoids prohibited sectors.',
              },
              {
                q: 'Are returns guaranteed?',
                a: 'No. Like all investments, your capital is at risk. Past performance does not guarantee future results. We focus on transparency, not promises.',
              },
            ].map((faq, index) => (
              <div 
                key={faq.q}
                className="card-elevated p-6 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-serif text-lg text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Ready to start building?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Join the waitlist and be first to know when we launch.
          </p>
          <Link to="/waitlist">
            <Button variant="champagne" size="xl">
              {t('hero.cta.waitlist')}
              <ArrowRight className="w-5 h-5 ms-2 rtl:rotate-180" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
