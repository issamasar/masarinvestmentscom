import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/layout/Layout';
import { ArrowRight } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  const values = [
    { title: t('about.values.1.title'), desc: t('about.values.1.desc') },
    { title: t('about.values.2.title'), desc: t('about.values.2.desc') },
    { title: t('about.values.3.title'), desc: t('about.values.3.desc') },
    { title: t('about.values.4.title'), desc: t('about.values.4.desc') },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-white">
        <div className="container-content max-w-3xl animate-fade-up">
          <h1 className="text-4xl md:text-[48px] lg:text-[56px] font-serif leading-[1.1] mb-4">{t('about.hero.headline')}</h1>
          <p className="text-lg text-muted-foreground">{t('about.hero.sub')}</p>
        </div>
      </section>

      {/* Why MASAR Exists */}
      <section className="section-padding bg-cream">
        <div className="container-narrow animate-fade-up">
          <div className="space-y-6 text-muted-foreground leading-relaxed text-[17px]">
            <p>{t('about.why.p1')}</p>
            <p>{t('about.why.p2')}</p>
            <p>{t('about.why.p3')}</p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding bg-white">
        <div className="container-narrow text-center animate-fade-up">
          <div className="w-[120px] h-[120px] rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
            <span className="text-[32px] font-sans font-semibold text-navy">ID</span>
          </div>
          <p className="text-xl font-semibold text-navy mb-1">{t('about.founder.name')}</p>
          <p className="text-base text-gray-500 mb-8">{t('about.founder.role')}</p>
          <blockquote className="text-xl font-serif italic text-gray-700 leading-relaxed max-w-[640px] mx-auto">
            "{t('about.founder.quote')}"
          </blockquote>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-cream">
        <div className="container-content">
          <h2 className="text-3xl md:text-[40px] font-serif text-center mb-12 animate-fade-up">{t('about.values.title')}</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <div key={v.title} className="card-masar border border-border/50 animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <h3 className="text-lg font-semibold text-navy mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section-padding bg-white">
        <div className="container-content max-w-3xl animate-fade-up">
          <h2 className="text-3xl md:text-[40px] font-serif mb-6">{t('about.vision.title')}</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">{t('about.vision.body')}</p>

          {/* Roadmap */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center">
            <div className="flex-1 rounded-xl bg-teal-light border border-primary/20 py-4 px-6">
              <p className="text-sm font-semibold text-primary mb-1">{t('about.roadmap.1.title')}</p>
              <p className="text-xs text-muted-foreground">{t('about.roadmap.1.label')}</p>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground hidden sm:block rtl:rotate-180" />
            <div className="flex-1 rounded-xl bg-muted py-4 px-6">
              <p className="text-sm font-semibold text-navy mb-1">{t('about.roadmap.2.title')}</p>
              <p className="text-xs text-muted-foreground">{t('about.roadmap.2.label')}</p>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground hidden sm:block rtl:rotate-180" />
            <div className="flex-1 rounded-xl bg-muted py-4 px-6">
              <p className="text-sm font-semibold text-navy mb-1">{t('about.roadmap.3.title')}</p>
              <p className="text-xs text-muted-foreground">{t('about.roadmap.3.label')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-cream">
        <div className="container-content text-center animate-fade-up">
          <h2 className="text-3xl md:text-[40px] font-serif mb-8">{t('about.cta.headline')}</h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact">
              <Button size="lg">
                {t('cta.joinWaitlist')}
                <ArrowRight className="w-4 h-4 ms-1 rtl:rotate-180" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">{t('about.cta.contact')}</Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
