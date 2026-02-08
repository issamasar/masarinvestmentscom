import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/layout/Layout';
import { Wallet, Coins, Handshake, ShieldCheck, FileCheck, Lock, Calculator, Eye, ArrowRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function HowItWorks() {
  const { t } = useLanguage();

  const channels = [
    { icon: Wallet, title: t('hiw.channels.payroll.title'), desc: t('hiw.channels.payroll.desc') },
    { icon: Coins, title: t('hiw.channels.roundups.title'), desc: t('hiw.channels.roundups.desc') },
    { icon: Handshake, title: t('hiw.channels.match.title'), desc: t('hiw.channels.match.desc') },
  ];

  const steps = [
    { num: '01', title: t('hiw.steps.1.title'), desc: t('hiw.steps.1.desc'), side: 'right' as const },
    { num: '02', title: t('hiw.steps.2.title'), desc: t('hiw.steps.2.desc'), side: 'left' as const },
    { num: '03', title: t('hiw.steps.3.title'), desc: t('hiw.steps.3.desc'), side: 'right' as const },
    { num: '04', title: t('hiw.steps.4.title'), desc: t('hiw.steps.4.desc'), side: 'left' as const },
  ];

  const faqs = [
    { q: t('hiw.faq.1.q'), a: t('hiw.faq.1.a') },
    { q: t('hiw.faq.2.q'), a: t('hiw.faq.2.a') },
    { q: t('hiw.faq.3.q'), a: t('hiw.faq.3.a') },
    { q: t('hiw.faq.4.q'), a: t('hiw.faq.4.a') },
    { q: t('hiw.faq.5.q'), a: t('hiw.faq.5.a') },
    { q: t('hiw.faq.6.q'), a: t('hiw.faq.6.a') },
    { q: t('hiw.faq.7.q'), a: t('hiw.faq.7.a') },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-white">
        <div className="container-content max-w-3xl animate-fade-up">
          <h1 className="text-4xl md:text-[48px] lg:text-[56px] font-serif leading-[1.1] mb-6">{t('hiw.hero.headline')}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">{t('hiw.hero.body')}</p>
        </div>
      </section>

      {/* Three Channels */}
      <section className="section-padding bg-cream">
        <div className="container-content">
          <h2 className="text-3xl md:text-[40px] font-serif text-center mb-12 animate-fade-up">{t('hiw.channels.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {channels.map((ch, i) => (
              <div key={ch.title} className="card-masar text-center animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <ch.icon className="w-6 h-6 text-primary mx-auto mb-5" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold text-navy mb-3">{ch.title}</h3>
                <p className="text-muted-foreground text-sm">{ch.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground italic animate-fade-up">{t('hiw.channels.note')}</p>
        </div>
      </section>

      {/* The Journey */}
      <section className="section-padding bg-white">
        <div className="container-content max-w-4xl">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`flex flex-col md:flex-row gap-8 mb-16 last:mb-0 items-center animate-fade-up ${
                step.side === 'left' ? 'md:flex-row-reverse' : ''
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex-1">
                <span className="text-sm font-medium text-primary mb-2 block">{step.num}</span>
                <h3 className="text-2xl font-serif text-navy mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
              <div className="flex-1 flex justify-center">
                <StepIllustration step={parseInt(step.num)} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fund Sleeves Summary */}
      <section className="section-padding bg-cream">
        <div className="container-content">
          <h2 className="text-3xl md:text-[40px] font-serif text-center mb-12 animate-fade-up">{t('hiw.sleeves.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: t('funds.cashYield'), nameAr: t('funds.cashYield.ar'), risk: t('funds.risk.low'), riskClass: 'bg-emerald-100 text-emerald-700', desc: t('funds.cashYield.short') },
              { name: t('funds.balanced'), nameAr: t('funds.balanced.ar'), risk: t('funds.risk.medium'), riskClass: 'bg-amber-100 text-amber-700', desc: t('funds.balanced.short') },
              { name: t('funds.halal'), nameAr: t('funds.halal.ar'), risk: t('funds.risk.medium'), riskClass: 'bg-amber-100 text-amber-700', desc: t('funds.halal.short') },
            ].map((fund, i) => (
              <div key={fund.name} className="card-masar animate-fade-up border border-border/50" style={{ animationDelay: `${i * 100}ms` }}>
                <h3 className="text-xl font-semibold text-navy mb-1">{fund.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{fund.nameAr}</p>
                <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full mb-4 ${fund.riskClass}`}>{fund.risk}</span>
                <p className="text-sm text-muted-foreground mb-4">{fund.desc}</p>
                <Link to="/funds" className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1">
                  {t('hiw.sleeves.details')} <ArrowRight className="w-3 h-3 rtl:rotate-180" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-12 bg-white">
        <div className="container-content">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { icon: ShieldCheck, label: t('trust.jsc') },
              { icon: FileCheck, label: t('trust.sdc') },
              { icon: Lock, label: t('trust.custody') },
              { icon: Calculator, label: t('trust.nav') },
              { icon: Eye, label: t('trust.fees') },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2.5">
                <item.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                <span className="text-sm text-muted-foreground font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-cream">
        <div className="container-content max-w-3xl">
          <h2 className="text-3xl md:text-[40px] font-serif text-center mb-12 animate-fade-up">{t('hiw.faq.title')}</h2>
          <Accordion type="single" collapsible className="animate-fade-up delay-100">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-start text-base font-medium text-navy hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-content text-center animate-fade-up">
          <h2 className="text-3xl md:text-[40px] font-serif mb-8">{t('hiw.cta.headline')}</h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
            <Link to="/contact">
              <Button size="lg">{t('cta.joinWaitlist')}</Button>
            </Link>
            <Link to="/contact#demo">
              <Button variant="outline" size="lg">{t('cta.bookDemo')}</Button>
            </Link>
          </div>
          <p className="text-xs text-muted-foreground">{t('disclaimer.full')}</p>
        </div>
      </section>
    </Layout>
  );
}

function StepIllustration({ step }: { step: number }) {
  const illustrations: Record<number, JSX.Element> = {
    1: (
      <svg viewBox="0 0 200 160" fill="none" className="w-48 h-auto">
        <rect x="40" y="30" width="120" height="80" rx="12" fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
        <rect x="60" y="50" width="80" height="12" rx="3" fill="#f3f4f6" />
        <rect x="60" y="70" width="50" height="12" rx="3" fill="#f3f4f6" />
        <circle cx="140" cy="90" r="12" fill="#e8f5f1" stroke="#16a085" strokeWidth="1.5" />
        <path d="M135 90 L139 94 L146 86" stroke="#16a085" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    2: (
      <svg viewBox="0 0 200 160" fill="none" className="w-48 h-auto">
        <rect x="30" y="40" width="140" height="80" rx="12" fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
        <rect x="50" y="60" width="100" height="8" rx="4" fill="#f3f4f6" />
        <rect x="50" y="60" width="40" height="8" rx="4" fill="#16a085" />
        <circle cx="90" cy="64" r="6" fill="white" stroke="#16a085" strokeWidth="1.5" />
        <rect x="50" y="85" width="100" height="8" rx="4" fill="#f3f4f6" />
        <rect x="50" y="85" width="70" height="8" rx="4" fill="#d4a843" />
        <circle cx="120" cy="89" r="6" fill="white" stroke="#d4a843" strokeWidth="1.5" />
      </svg>
    ),
    3: (
      <svg viewBox="0 0 200 160" fill="none" className="w-48 h-auto">
        <path d="M30 120 Q60 120 70 80" stroke="#16a085" strokeWidth="1.5" strokeDasharray="4 3" />
        <path d="M30 80 Q60 80 70 80" stroke="#d4a843" strokeWidth="1.5" strokeDasharray="4 3" />
        <path d="M30 40 Q60 40 70 80" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="4 3" />
        <circle cx="70" cy="80" r="4" fill="#16a085" />
        <rect x="90" y="50" width="40" height="24" rx="6" fill="#e8f5f1" />
        <rect x="90" y="80" width="40" height="24" rx="6" fill="#fef3c7" />
        <rect x="90" y="110" width="40" height="24" rx="6" fill="#e8f5f1" />
        <rect x="150" y="65" width="30" height="36" rx="4" fill="white" stroke="#16a085" strokeWidth="1" />
        <text x="165" y="87" textAnchor="middle" fill="#16a085" fontSize="8" fontFamily="DM Sans">SDC</text>
      </svg>
    ),
    4: (
      <svg viewBox="0 0 200 160" fill="none" className="w-48 h-auto">
        <rect x="30" y="30" width="140" height="100" rx="12" fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
        <polyline points="50,100 70,85 90,90 110,60 130,55 150,45" fill="none" stroke="#16a085" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="50" y="120" fill="#9ca3af" fontSize="9" fontFamily="DM Sans, sans-serif">12 months ✓</text>
      </svg>
    ),
  };
  return illustrations[step] || null;
}
