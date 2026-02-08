import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/layout/Layout';
import { Sparkles, Shield, Heart, UserCheck, Settings, TrendingUp, BarChart3, Zap, Building2, Users, FileText, Plug, Palette, ArrowRight, CheckCircle2 } from 'lucide-react';
import heroImage from '@/assets/hero-people.jpg';
export default function Home() {
  const {
    t
  } = useLanguage();
  return <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-primary overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-champagne blur-3xl" />
          <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-champagne blur-3xl" />
        </div>
        
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div className="text-primary-foreground animate-fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
                {t('hero.headline')}
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl leading-relaxed">
                {t('hero.subheadline')}
              </p>
              
              {/* Trust Line */}
              <p className="text-sm text-champagne font-medium tracking-wide uppercase mb-8">
                {t('hero.trustLine')}
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/waitlist">
                  <Button variant="champagne" size="xl" className="w-full sm:w-auto">
                    {t('hero.cta.waitlist')}
                    <ArrowRight className="w-5 h-5 ms-2 rtl:rotate-180" />
                  </Button>
                </Link>
                <Link to="/demo">
                  <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                    {t('hero.cta.demo')}
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative animate-fade-up delay-200 hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={heroImage} alt="Young professionals building their financial future" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -start-6 bg-card rounded-xl p-6 shadow-elevated animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-champagne/20 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Consistent Growth</p>
                    <p className="text-xl font-serif text-foreground">Every Paycheck</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-4">
              {t('promise.title')}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Simplicity */}
            <div className="card-elevated p-8 text-center animate-fade-up delay-100">
              <div className="w-16 h-16 rounded-2xl bg-champagne/20 flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif text-foreground mb-3">
                {t('promise.simplicity.title')}
              </h3>
              <p className="text-muted-foreground">
                {t('promise.simplicity.desc')}
              </p>
            </div>
            
            {/* Trust */}
            <div className="card-elevated p-8 text-center animate-fade-up delay-200">
              <div className="w-16 h-16 rounded-2xl bg-champagne/20 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif text-foreground mb-3">
                {t('promise.trust.title')}
              </h3>
              <p className="text-muted-foreground">
                {t('promise.trust.desc')}
              </p>
            </div>
            
            {/* Dignity */}
            <div className="card-elevated p-8 text-center animate-fade-up delay-300">
              <div className="w-16 h-16 rounded-2xl bg-champagne/20 flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif text-foreground mb-3">
                {t('promise.dignity.title')}
              </h3>
              <p className="text-muted-foreground">
                {t('promise.dignity.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-4">
              {t('how.title')}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 lg:gap-8 mb-12">
            {[{
            icon: UserCheck,
            title: t('how.step1.title'),
            desc: t('how.step1.desc'),
            step: 1
          }, {
            icon: Settings,
            title: t('how.step2.title'),
            desc: t('how.step2.desc'),
            step: 2
          }, {
            icon: TrendingUp,
            title: t('how.step3.title'),
            desc: t('how.step3.desc'),
            step: 3
          }, {
            icon: BarChart3,
            title: t('how.step4.title'),
            desc: t('how.step4.desc'),
            step: 4
          }].map((item, index) => <div key={item.step} className={`relative animate-fade-up`} style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="bg-card rounded-2xl p-6 h-full border border-border/50">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif text-lg">
                      {item.step}
                    </div>
                    <item.icon className="w-6 h-6 text-champagne" />
                  </div>
                  <h3 className="text-lg font-serif text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>)}
          </div>
          
          {/* Disclaimer */}
          <p className="text-center text-sm text-muted-foreground italic">
            {t('how.disclaimer')}
          </p>
        </div>
      </section>

      {/* For Employers Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-up">
              <p className="text-champagne font-medium tracking-wide uppercase text-sm mb-4">
                {t('employers.subtitle')}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-6">
                {t('employers.title')}
              </h2>
              
              {/* Implementation Tiers */}
              <div className="space-y-4 mb-8">
                {[{
                icon: FileText,
                title: t('employers.tier1.title'),
                desc: t('employers.tier1.desc')
              }, {
                icon: Plug,
                title: t('employers.tier2.title'),
                desc: t('employers.tier2.desc')
              }, {
                icon: Palette,
                title: t('employers.tier3.title'),
                desc: t('employers.tier3.desc')
              }].map((tier, index) => <div key={tier.title} className="flex items-start gap-4 p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
                    <div className="w-10 h-10 rounded-lg bg-champagne/20 flex items-center justify-center flex-shrink-0">
                      <tier.icon className="w-5 h-5 text-champagne" />
                    </div>
                    <div>
                      <h4 className="font-medium text-primary-foreground">{tier.title}</h4>
                      <p className="text-sm text-primary-foreground/70">{tier.desc}</p>
                    </div>
                  </div>)}
              </div>
              
              <Link to="/demo">
                <Button variant="champagne" size="lg">
                  {t('hero.cta.demo')}
                  <ArrowRight className="w-5 h-5 ms-2 rtl:rotate-180" />
                </Button>
              </Link>
            </div>
            
            {/* Employer Features Grid */}
            <div className="grid grid-cols-2 gap-4 animate-fade-up delay-200">
              {['Eligibility & Cohorts', 'Matching Policy Engine', 'Payroll Instructions', 'Reconciliation & Audit', 'Reporting Dashboard', 'Employee Comms Pack'].map(feature => <div key={feature} className="flex items-center gap-3 p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
                  <CheckCircle2 className="w-5 h-5 text-champagne flex-shrink-0" />
                  <span className="text-sm text-primary-foreground/90">{feature}</span>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      

      {/* Social Proof Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            {t('social.title')}
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            {t('social.subtitle')}
          </p>
          <p className="text-sm text-muted-foreground italic">
            {t('social.note')}
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="bg-primary rounded-3xl p-8 md:p-12 lg:p-16 text-center animate-fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-foreground mb-8 max-w-3xl mx-auto leading-tight">
              {t('finalCta.headline')}
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/waitlist">
                <Button variant="champagne" size="xl">
                  {t('finalCta.individuals')}
                  <ArrowRight className="w-5 h-5 ms-2 rtl:rotate-180" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button variant="heroOutline" size="xl">
                  {t('finalCta.employers')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
}