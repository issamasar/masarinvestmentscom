import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/layout/Layout';
import { ArrowRight } from 'lucide-react';
export default function About() {
  const {
    t
  } = useLanguage();
  const values = [{
    title: 'Dignity',
    desc: 'Everyone deserves access to wealth-building tools, regardless of starting point.'
  }, {
    title: 'Transparency',
    desc: 'Clear information, no jargon, no hidden fees. You always know where you stand.'
  }, {
    title: 'Discipline',
    desc: 'Small, consistent steps beat sporadic big moves. We design for habits, not heroics.'
  }, {
    title: 'Partnerability',
    desc: 'We succeed when our partners succeed. Non-exclusive, collaborative, open.'
  }, {
    title: 'Regulator-First',
    desc: 'Compliance is not an afterthought. We build for trust from day one.'
  }];
  return <Layout>
      {/* Hero */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-3xl animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
              About MASAR
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Building ownership, one paycheck at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Why MASAR Exists */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-8">
              Why MASAR Exists
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                In Jordan and across the region, millions of working people have jobs, earn income, and pay their bills — but never build real ownership. Investing feels complicated, expensive, or simply out of reach.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">We started MASAR because we believe this doesn't have to be the case. The infrastructure exists. Digital identity is maturing. Payroll systems are digitizing. The missing piece is a simple, trusted bridge that connects working people to regulated investment  automatically, affordably, and with dignity.</p>
              
              <p className="text-lg leading-relaxed">
                MASAR is that bridge. We turn paychecks into ownership through habit-forming mechanics, employer matching, and regulator-native design. No trading expertise required. No financial background needed. Just consistent progress toward a more secure future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Note */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow">
          <div className="card-elevated p-8 md:p-12 animate-fade-up">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-6">
              A Note From the Founder
            </h2>
            
            <blockquote className="text-lg text-muted-foreground leading-relaxed mb-6">
              "I've spent my career at the intersection of finance and technology. The thing that always struck me was how much complexity we've built into something that should be simple: helping people save and invest.
              <br /><br />
              MASAR is my attempt to strip away that complexity. We're not trying to turn everyone into traders. We're trying to make ownership accessible to people who work hard and deserve a fair shot at building wealth.
              <br /><br />
              This is a long journey. We're starting in Jordan, but our ambition is regional. Every step of the way, we'll prioritize trust, transparency, and partnership. I hope you'll join us."
            </blockquote>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-champagne/30 flex items-center justify-center">
                <span className="font-serif text-lg text-foreground">M</span>
              </div>
              <div>
                <p className="font-medium text-foreground">Founder</p>
                <p className="text-sm text-muted-foreground">MASAR</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">
              Our Values
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => <div key={value.title} className="card-elevated p-6 animate-fade-up" style={{
            animationDelay: `${index * 50}ms`
          }}>
                <h3 className="text-xl font-serif text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            Join the Journey
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Whether you're an individual, employer, or potential partner — we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/waitlist">
              <Button variant="champagne" size="xl">
                {t('hero.cta.waitlist')}
                <ArrowRight className="w-5 h-5 ms-2 rtl:rotate-180" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="heroOutline" size="xl">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>;
}