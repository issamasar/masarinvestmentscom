import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/layout/Layout';
import { Wallet, Coins, Handshake, ShieldCheck, FileCheck, Lock, Calculator, Eye } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';
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
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">{t('hiw.hero.body')}</p>

          {/* Animated Flow Diagram */}
          <div className="flex justify-center">
            <HoWFlowDiagram />
          </div>
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
                <AnimatedStepIllustration step={parseInt(step.num)} />
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
                  {t('hiw.sleeves.details')}
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

function HoWFlowDiagram() {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';
  const font = isRTL ? 'Noto Sans Arabic, DM Sans, sans-serif' : 'DM Sans, sans-serif';

  // RTL-aware positions
  const pillX = isRTL ? 310 : 0;
  const pillCenterX = pillX + 45;
  const mergeX = isRTL ? 222 : 178;
  const wealthBoxX = isRTL ? 15 : 275;
  const wealthCenterX = wealthBoxX + 55;

  // Lines: from pill edge to merge
  const pillEdge = isRTL ? pillX : pillX + 90;
  const lineEndX = isRTL ? mergeX + 8 : mergeX - 8;

  // Arrow from merge to wealth
  const arrowStartX = isRTL ? mergeX - 8 : mergeX + 8;
  const arrowEndX = isRTL ? wealthBoxX + 110 : wealthBoxX;
  const arrowPointX = isRTL ? wealthBoxX + 118 : wealthBoxX - 8;
  const arrowPoly = isRTL
    ? `${arrowPointX + 10},55 ${arrowPointX},60 ${arrowPointX + 10},65`
    : `${arrowPointX + 10},55 ${arrowPointX + 20},60 ${arrowPointX + 10},65`;

  return (
    <svg viewBox="0 0 400 120" fill="none" className="w-full max-w-sm h-auto">
      <style>{`
        @keyframes drawLine { from { stroke-dashoffset: 200; } to { stroke-dashoffset: 0; } }
        @keyframes nodeIn { from { opacity: 0; transform: scale(0.8); } to { opacity: 1; transform: scale(1); } }
        @keyframes dotPulse { 0%, 100% { r: 5; } 50% { r: 7; } }
        .flow-node { animation: nodeIn 0.5s ease-out forwards; opacity: 0; }
        .flow-line { stroke-dasharray: 200; animation: drawLine 1s ease-out forwards; }
        .flow-dot { animation: dotPulse 2s ease-in-out infinite; }
        .n1 { animation-delay: 0.2s; } .n2 { animation-delay: 0.4s; } .n3 { animation-delay: 0.6s; }
        .l1 { animation-delay: 0.6s; } .l2 { animation-delay: 0.8s; } .l3 { animation-delay: 1s; }
        .n4 { animation-delay: 1.2s; } .n5 { animation-delay: 1.5s; }
      `}</style>

      {/* Source pills */}
      <g className="flow-node n1" style={{ transformOrigin: `${pillCenterX}px 20px` }}>
        <rect x={pillX} y="4" width="90" height="32" rx="16" fill="hsl(160 41% 94%)" stroke="hsl(168 73% 36%)" strokeWidth="1" />
        <text x={pillCenterX} y="25" textAnchor="middle" fill="hsl(240 33% 14%)" fontSize="10" fontFamily={font} fontWeight="500">{t('hiw.flow.salary')}</text>
      </g>
      <g className="flow-node n2" style={{ transformOrigin: `${pillCenterX}px 60px` }}>
        <rect x={pillX} y="44" width="90" height="32" rx="16" fill="hsl(160 41% 94%)" stroke="hsl(168 73% 36%)" strokeWidth="1" />
        <text x={pillCenterX} y="65" textAnchor="middle" fill="hsl(240 33% 14%)" fontSize="10" fontFamily={font} fontWeight="500">{t('hiw.flow.roundups')}</text>
      </g>
      <g className="flow-node n3" style={{ transformOrigin: `${pillCenterX}px 100px` }}>
        <rect x={pillX} y="84" width="90" height="32" rx="16" fill="hsl(41 61% 55% / 0.12)" stroke="hsl(41 61% 55%)" strokeWidth="1" />
        <text x={pillCenterX} y="105" textAnchor="middle" fill="hsl(240 33% 14%)" fontSize="10" fontFamily={font} fontWeight="500">{t('hiw.flow.employer')}</text>
      </g>

      {/* Converging lines */}
      <path className="flow-line l1" d={`M${pillEdge} 20 Q${(pillEdge + lineEndX) / 2} 20 ${lineEndX} 60`} stroke="hsl(168 73% 36%)" strokeWidth="1.2" fill="none" />
      <path className="flow-line l2" d={`M${pillEdge} 60 L${lineEndX} 60`} stroke="hsl(168 73% 36%)" strokeWidth="1.2" fill="none" />
      <path className="flow-line l3" d={`M${pillEdge} 100 Q${(pillEdge + lineEndX) / 2} 100 ${lineEndX} 60`} stroke="hsl(41 61% 55%)" strokeWidth="1.2" fill="none" />

      {/* Merge dot */}
      <circle className="flow-node n4 flow-dot" cx={mergeX} cy="60" r="5" fill="hsl(168 73% 36%)" style={{ transformOrigin: `${mergeX}px 60px` }} />

      {/* Arrow + Wealth */}
      <g className="flow-node n5" style={{ transformOrigin: `${wealthCenterX}px 60px` }}>
        <path d={`M${arrowStartX} 60 L${arrowEndX} 60`} stroke="hsl(168 73% 36%)" strokeWidth="1.2" />
        <polygon points={arrowPoly} fill="hsl(168 73% 36%)" />
        <rect x={wealthBoxX} y="38" width="110" height="44" rx="8" fill="white" stroke="hsl(220 13% 91%)" strokeWidth="1.2" />
        <text x={wealthCenterX} y="57" textAnchor="middle" fill="hsl(168 73% 36%)" fontSize="11" fontFamily={font} fontWeight="600">{t('hiw.flow.wealth')}</text>
        <text x={wealthCenterX} y="72" textAnchor="middle" fill="hsl(220 9% 46%)" fontSize="8" fontFamily={font}>{t('hiw.flow.sdc')}</text>
      </g>
    </svg>
  );
}

function AnimatedStepIllustration({ step }: { step: number }) {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <div
      ref={ref}
      className="transition-all duration-700 ease-out"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.95)',
      }}
    >
      <StepIllustration step={step} />
    </div>
  );
}

function StepIllustration({ step }: { step: number }) {
  const { t, language } = useLanguage();
  const fontFamily = language === 'ar' ? 'Noto Sans Arabic, DM Sans, sans-serif' : 'DM Sans, sans-serif';

  const illustrations: Record<number, JSX.Element> = {
    1: (
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
    2: (
      <svg viewBox="0 0 200 160" fill="none" className="w-48 h-auto">
        <path d="M30 120 Q60 120 70 80" stroke="#16a085" strokeWidth="1.5" strokeDasharray="4 3" />
        <path d="M30 80 Q60 80 70 80" stroke="#d4a843" strokeWidth="1.5" strokeDasharray="4 3" />
        <path d="M30 40 Q60 40 70 80" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="4 3" />
        <circle cx="70" cy="80" r="4" fill="#16a085" />
        <rect x="90" y="50" width="40" height="24" rx="6" fill="#e8f5f1" />
        <rect x="90" y="80" width="40" height="24" rx="6" fill="#fef3c7" />
        <rect x="90" y="110" width="40" height="24" rx="6" fill="#e8f5f1" />
        <rect x="150" y="65" width="30" height="36" rx="4" fill="white" stroke="#16a085" strokeWidth="1" />
        <text x="165" y="87" textAnchor="middle" fill="#16a085" fontSize="8" fontFamily={fontFamily}>SDC</text>
      </svg>
    ),
    3: (
      <svg viewBox="0 0 200 160" fill="none" className="w-48 h-auto">
        <rect x="30" y="30" width="140" height="100" rx="12" fill="white" stroke="#e5e7eb" strokeWidth="1.5" />
        <polyline points="50,100 70,85 90,90 110,60 130,55 150,45" fill="none" stroke="#16a085" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="50" y="120" fill="#9ca3af" fontSize="9" fontFamily={fontFamily}>{t('hiw.flow.12months')}</text>
      </svg>
    ),
  };
  return illustrations[step] || null;
}
