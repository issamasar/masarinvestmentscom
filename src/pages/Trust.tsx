import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/layout/Layout';
import { 
  ArrowRight,
  Shield,
  FileCheck,
  Eye,
  Lock,
  Building,
  ArrowRightLeft
} from 'lucide-react';

export default function Trust() {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-3xl animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
              {t('trust.title')}
            </h1>
            <p className="text-xl text-primary-foreground/80">
              {t('trust.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Governance Principles */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
              Governance Principles
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Regulator-First',
                desc: 'We design for compliance from day one. Every feature is built with regulatory requirements in mind.',
              },
              {
                icon: Eye,
                title: 'Transparency',
                desc: 'Clear reporting on units, NAV, distributions, and fees. No hidden surprises.',
              },
              {
                icon: Lock,
                title: 'Data Privacy',
                desc: 'Consent-first approach. Your data is yours. We collect only what we need.',
              },
            ].map((principle, index) => (
              <div 
                key={principle.title}
                className="card-elevated p-8 text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-champagne/20 flex items-center justify-center mx-auto mb-6">
                  <principle.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif text-foreground mb-3">{principle.title}</h3>
                <p className="text-muted-foreground">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Money Movement Diagram */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
              How Money Moves
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Clear, auditable, regulated at every step.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto animate-fade-up">
            <div className="card-elevated p-8">
              {/* Flow Diagram */}
              <div className="grid md:grid-cols-7 gap-4 items-center">
                {[
                  { label: 'Payroll / Instruction', icon: Building },
                  { arrow: true },
                  { label: 'Partner Rails', icon: ArrowRightLeft },
                  { arrow: true },
                  { label: 'Fund Subscription', icon: FileCheck },
                  { arrow: true },
                  { label: 'Register Update', icon: Shield },
                ].map((item, index) => 
                  item.arrow ? (
                    <div key={index} className="hidden md:flex justify-center">
                      <ArrowRight className="w-6 h-6 text-champagne rtl:rotate-180" />
                    </div>
                  ) : (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2">
                        {item.icon && <item.icon className="w-6 h-6 text-primary" />}
                      </div>
                      <p className="text-sm text-foreground font-medium">{item.label}</p>
                    </div>
                  )
                )}
              </div>
              
              {/* Mobile Flow */}
              <div className="md:hidden space-y-4 mt-6">
                {[
                  'Employer payroll or employee instruction',
                  'Money moves through partner rails (banks/PSPs)',
                  'Fund subscription at NAV cut-off',
                  'Units allocated',
                  'Register updated',
                  'User sees units in dashboard',
                ].map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-sm text-foreground">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MASAR's Role */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
              What MASAR Does
            </h2>
          </div>
          
          <div className="space-y-6 animate-fade-up">
            <div className="card-elevated p-6">
              <h3 className="font-serif text-lg text-foreground mb-2">Orchestration Layer</h3>
              <p className="text-muted-foreground">
                We coordinate between employers, employees, payroll systems, payment rails, and fund administrators. Think of us as the connective tissue that makes it all work smoothly.
              </p>
            </div>
            
            <div className="card-elevated p-6">
              <h3 className="font-serif text-lg text-foreground mb-2">Transparency Layer</h3>
              <p className="text-muted-foreground">
                We provide clear, plain-language reporting so you always know what you own, what it's worth, and where your money went. No financial jargon, no hidden details.
              </p>
            </div>
            
            <div className="bg-secondary/50 rounded-xl p-6 border border-border">
              <h3 className="font-serif text-lg text-foreground mb-2">What We Are Not</h3>
              <p className="text-muted-foreground">
                MASAR is not a custodian, not a fund manager, and not an investment advisor. We do not hold your assets. Units are recorded on the authoritative register (TA/SDC as applicable).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Privacy */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
              Data Privacy Posture
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 animate-fade-up">
            {[
              {
                title: 'Consent-First',
                desc: 'We ask before collecting. No surprises, no dark patterns.',
              },
              {
                title: 'Minimal Collection',
                desc: 'We collect only what we need to provide the service.',
              },
              {
                title: 'Secure Storage',
                desc: 'Industry-standard encryption at rest and in transit.',
              },
              {
                title: 'No Selling Data',
                desc: 'Your information is not sold to third parties. Ever.',
              },
            ].map((item) => (
              <div key={item.title} className="card-elevated p-6">
                <h3 className="font-medium text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-background">
        <div className="container-narrow">
          <div className="bg-muted/50 rounded-xl p-6 border border-border animate-fade-up">
            <h4 className="font-medium text-foreground mb-2">Important Notice</h4>
            <p className="text-sm text-muted-foreground">
              This content is for informational purposes only and does not constitute investment advice. Capital is at risk. Returns are not guaranteed. Past performance does not indicate future results. Please read all disclosures before investing.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Questions about trust?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            We're happy to explain how everything works.
          </p>
          <Link to="/contact">
            <Button variant="champagne" size="xl">
              Get in Touch
              <ArrowRight className="w-5 h-5 ms-2 rtl:rotate-180" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
