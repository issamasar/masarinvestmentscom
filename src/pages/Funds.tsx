import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/layout/Layout';
import { 
  ArrowRight,
  Wallet,
  Target,
  TrendingUp,
  Shield,
  Info
} from 'lucide-react';

export default function Funds() {
  const { t } = useLanguage();

  const sleeves = [
    {
      name: 'CashYield',
      nameAr: 'عائد نقدي',
      desc: 'Capital preservation oriented',
      risk: 'Low',
      riskColor: 'bg-emerald-500',
      icon: Wallet,
      iconBg: 'bg-emerald-500/10 text-emerald-600',
      whoFor: 'Conservative investors who prioritize capital preservation over growth. Ideal for short-term goals or those new to investing.',
      characteristics: [
        'Focus on money market instruments',
        'Lower volatility',
        'More stable NAV',
        'Suitable for shorter time horizons',
      ],
    },
    {
      name: 'Balanced',
      nameAr: 'متوازن',
      desc: 'Diversified growth',
      risk: 'Medium',
      riskColor: 'bg-blue-500',
      icon: Target,
      iconBg: 'bg-blue-500/10 text-blue-600',
      whoFor: 'Investors seeking a balance between growth and stability. Suitable for medium-term goals with moderate risk tolerance.',
      characteristics: [
        'Mix of equities and fixed income',
        'Diversified across asset classes',
        'Moderate volatility',
        'Suitable for 3-5 year horizons',
      ],
    },
    {
      name: 'Halal',
      nameAr: 'حلال',
      desc: 'Faith-aligned investing',
      risk: 'Medium',
      riskColor: 'bg-amber-500',
      icon: TrendingUp,
      iconBg: 'bg-amber-500/10 text-amber-600',
      whoFor: 'Investors who want their portfolio to align with Islamic finance principles. Excludes prohibited sectors and interest-based instruments.',
      characteristics: [
        'Sharia-compliant screening',
        'Excludes prohibited industries',
        'Sukuk and halal equities',
        'Supervised by Sharia board',
      ],
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-3xl animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
              Funds & Portfolios
            </h1>
            <p className="text-xl text-primary-foreground/80">
              One umbrella fund, three sleeves. Choose the approach that fits your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Umbrella Concept */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
              The Umbrella Fund Structure
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              All sleeves operate under a single regulated umbrella fund. This means shared governance, consistent standards, and clear oversight — while offering different investment approaches.
            </p>
          </div>
          
          <div className="card-elevated p-8 text-center animate-fade-up">
            <div className="w-16 h-16 rounded-full bg-champagne/20 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-serif text-foreground mb-2">MASAR Umbrella Fund</h3>
            <p className="text-muted-foreground mb-6">
              Regulated structure with independent fund administration, custody, and audit.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {sleeves.map((sleeve) => (
                <span 
                  key={sleeve.name}
                  className={`px-4 py-2 rounded-lg ${sleeve.iconBg} font-medium`}
                >
                  {sleeve.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sleeves Detail */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">
              Choose Your Sleeve
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {sleeves.map((sleeve, index) => (
              <div 
                key={sleeve.name}
                className="card-elevated overflow-hidden animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  <div className={`w-14 h-14 rounded-xl ${sleeve.iconBg} flex items-center justify-center mb-4`}>
                    <sleeve.icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-2xl font-serif text-foreground mb-1">{sleeve.name}</h3>
                  <p className="text-muted-foreground mb-4">{sleeve.nameAr}</p>
                  
                  <p className="text-foreground mb-4">{sleeve.desc}</p>
                  
                  {/* Risk Band */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-sm text-muted-foreground">Risk:</span>
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${sleeve.riskColor}`} />
                      <span className="text-sm font-medium text-foreground">{sleeve.risk}</span>
                    </div>
                  </div>
                  
                  {/* Who It's For */}
                  <div className="bg-secondary/50 rounded-lg p-4 mb-6">
                    <h4 className="text-sm font-medium text-foreground mb-2">Who it's for</h4>
                    <p className="text-sm text-muted-foreground">{sleeve.whoFor}</p>
                  </div>
                  
                  {/* Characteristics */}
                  <ul className="space-y-2">
                    {sleeve.characteristics.map((char) => (
                      <li key={char} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-champagne mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{char}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimers */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="bg-muted/50 rounded-xl p-8 border border-border animate-fade-up">
            <div className="flex items-start gap-4">
              <Info className="w-6 h-6 text-muted-foreground flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-lg text-foreground mb-4">Important Disclosures</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>• <strong>Capital at risk:</strong> The value of your investment can go down as well as up. You may get back less than you invested.</li>
                  <li>• <strong>Returns not guaranteed:</strong> Past performance does not indicate future results. Distributions are variable and not assured.</li>
                  <li>• <strong>Full disclosures:</strong> Complete fund documentation, including fees, risks, and terms, will be provided at onboarding.</li>
                  <li>• <strong>Not investment advice:</strong> This information is for educational purposes. Consult a qualified advisor for personal advice.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Ready to choose your path?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Join the waitlist and be notified when we launch.
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
