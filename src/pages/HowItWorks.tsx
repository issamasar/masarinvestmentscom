import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/layout/Layout';
import { 
  ArrowRight,
  UserCheck,
  Settings,
  TrendingUp,
  BarChart3,
  Wallet,
  RefreshCw,
  ArrowDown
} from 'lucide-react';

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-3xl animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
              {t('how.title')}
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Simple mechanics, serious results. Here's how your money moves — and grows.
            </p>
          </div>
        </div>
      </section>

      {/* Main Steps */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            {[
              {
                step: 1,
                icon: UserCheck,
                title: t('how.step1.title'),
                desc: t('how.step1.desc'),
                details: 'Digital identity verification (eKYC) where available. Simple form, instant validation. Your data stays private and secure.',
              },
              {
                step: 2,
                icon: Settings,
                title: t('how.step2.title'),
                desc: t('how.step2.desc'),
                details: 'Choose how you want to invest: a fixed percentage from each paycheck, round-ups from daily spending, or both. Your employer may also match a portion.',
              },
              {
                step: 3,
                icon: TrendingUp,
                title: t('how.step3.title'),
                desc: t('how.step3.desc'),
                details: 'Pick from CashYield (low risk), Balanced (medium risk), or Halal (faith-aligned). Your contributions buy units in your chosen sleeve.',
              },
              {
                step: 4,
                icon: BarChart3,
                title: t('how.step4.title'),
                desc: t('how.step4.desc'),
                details: 'See your units, current value, and any distributions in plain language. No confusing jargon — just clear information.',
              },
            ].map((item, index) => (
              <div key={item.step} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex gap-6 mb-8">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-serif text-2xl">
                      {item.step}
                    </div>
                    {index < 3 && (
                      <div className="w-0.5 h-full bg-border mt-4" />
                    )}
                  </div>
                  <div className="flex-1 pb-12">
                    <div className="flex items-center gap-3 mb-3">
                      <item.icon className="w-6 h-6 text-champagne" />
                      <h3 className="text-2xl font-serif text-foreground">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{item.desc}</p>
                    <div className="bg-secondary/50 rounded-xl p-6">
                      <p className="text-foreground">{item.details}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payroll Split vs Round-ups */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
              Two Ways to Build Wealth
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card-elevated p-8 animate-fade-up">
              <div className="w-14 h-14 rounded-2xl bg-champagne/20 flex items-center justify-center mb-6">
                <Wallet className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-serif text-foreground mb-4">Payroll Split</h3>
              <p className="text-muted-foreground mb-6">
                Set a fixed percentage (e.g., 5%) of each paycheck to invest automatically. It happens before you even see the money — effortless consistency.
              </p>
              <div className="bg-secondary/50 rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-2">Example</p>
                <p className="text-foreground">JOD 50 from each JOD 1,000 paycheck</p>
              </div>
            </div>
            
            <div className="card-elevated p-8 animate-fade-up delay-100">
              <div className="w-14 h-14 rounded-2xl bg-champagne/20 flex items-center justify-center mb-6">
                <RefreshCw className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-serif text-foreground mb-4">Round-Ups</h3>
              <p className="text-muted-foreground mb-6">
                Spare change from everyday purchases gets rounded up and invested. Small amounts that add up to meaningful progress over time.
              </p>
              <div className="bg-secondary/50 rounded-lg p-4">
                <p className="text-sm text-muted-foreground mb-2">Example</p>
                <p className="text-foreground">JOD 3.50 coffee → JOD 0.50 invested</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NAV & Dealing */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
              NAV & Unit Allocation
            </h2>
            <p className="text-lg text-muted-foreground">
              How your money becomes fund units.
            </p>
          </div>
          
          <div className="card-elevated p-8 animate-fade-up">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Contribution Received</h4>
                  <p className="text-muted-foreground">Your payroll split or round-up arrives at the fund</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <ArrowDown className="w-5 h-5 text-muted-foreground" />
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">NAV Calculation</h4>
                  <p className="text-muted-foreground">Net Asset Value calculated at cut-off (typically daily)</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <ArrowDown className="w-5 h-5 text-muted-foreground" />
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Units Allocated</h4>
                  <p className="text-muted-foreground">Your contribution ÷ NAV = units you receive</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <ArrowDown className="w-5 h-5 text-muted-foreground" />
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-cta text-cta-foreground flex items-center justify-center text-sm font-medium flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Register Updated</h4>
                  <p className="text-muted-foreground">Units recorded on the authoritative register in your name</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Distributions */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
              Distributions & Reinvestment
            </h2>
          </div>
          
          <div className="card-elevated p-8 animate-fade-up">
            <p className="text-lg text-foreground mb-6">
              When the fund generates income (from dividends, interest, etc.), it may distribute to unit holders. By default, MASAR auto-reinvests these distributions — buying more units for you automatically.
            </p>
            <div className="bg-champagne/10 rounded-xl p-6 border border-champagne/20">
              <h4 className="font-medium text-foreground mb-2">Auto-Reinvest (Default)</h4>
              <p className="text-muted-foreground">
                Distributions automatically purchase additional units, compounding your growth over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-background">
        <div className="container-narrow">
          <p className="text-center text-sm text-muted-foreground italic animate-fade-up">
            {t('how.disclaimer')}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Ready to start?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/waitlist">
              <Button variant="champagne" size="xl">
                {t('hero.cta.waitlist')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/demo">
              <Button variant="heroOutline" size="xl">
                {t('hero.cta.demo')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
