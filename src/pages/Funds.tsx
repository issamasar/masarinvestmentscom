import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/layout/Layout';
import { ArrowRight } from 'lucide-react';

export default function Funds() {
  const { t } = useLanguage();

  const sleeves = [
    {
      name: t('funds.cashYield'), nameAr: t('funds.cashYield.ar'),
      risk: t('funds.risk.lowFull'), riskClass: 'bg-emerald-100 text-emerald-700',
      objective: t('funds.cy.objective'), universe: t('funds.cy.universe'),
      distribution: t('funds.cy.distribution'), bestFor: t('funds.cy.bestFor'),
      chars: [t('funds.cy.c1'), t('funds.cy.c2'), t('funds.cy.c3')],
    },
    {
      name: t('funds.balanced'), nameAr: t('funds.balanced.ar'),
      risk: t('funds.risk.medFull'), riskClass: 'bg-amber-100 text-amber-700',
      objective: t('funds.bal.objective'), universe: t('funds.bal.universe'),
      distribution: t('funds.bal.distribution'), bestFor: t('funds.bal.bestFor'),
      chars: [t('funds.bal.c1'), t('funds.bal.c2'), t('funds.bal.c3')],
    },
    {
      name: t('funds.halal'), nameAr: t('funds.halal.ar'),
      risk: t('funds.risk.medFull'), riskClass: 'bg-amber-100 text-amber-700',
      sharia: true,
      objective: t('funds.hal.objective'), universe: t('funds.hal.universe'),
      distribution: t('funds.hal.distribution'), bestFor: t('funds.hal.bestFor'),
      chars: [t('funds.hal.c1'), t('funds.hal.c2'), t('funds.hal.c3')],
    },
  ];

  const dealingTerms = [
    { label: t('funds.dealing.days.label'), value: t('funds.dealing.days.value') },
    { label: t('funds.dealing.cutoff.label'), value: t('funds.dealing.cutoff.value') },
    { label: t('funds.dealing.nav.label'), value: t('funds.dealing.nav.value') },
    { label: t('funds.dealing.settlement.label'), value: t('funds.dealing.settlement.value') },
    { label: t('funds.dealing.frontend.label'), value: t('funds.dealing.frontend.value') },
    { label: t('funds.dealing.redemption.label'), value: t('funds.dealing.redemption.value') },
    { label: t('funds.dealing.distributions.label'), value: t('funds.dealing.distributions.value') },
    { label: t('funds.dealing.fees.label'), value: t('funds.dealing.fees.value') },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-white">
        <div className="container-content max-w-3xl animate-fade-up">
          <h1 className="text-4xl md:text-[48px] lg:text-[56px] font-serif leading-[1.1] mb-6">{t('funds.hero.headline')}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">{t('funds.hero.body')}</p>
        </div>
      </section>

      {/* Fund Cards */}
      <section className="section-padding bg-cream">
        <div className="container-content">
          <div className="space-y-8">
            {sleeves.map((sleeve, i) => (
              <div key={sleeve.name} className="card-masar p-8 md:p-10 border border-border/50 animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <h3 className="text-2xl font-serif text-navy">{sleeve.name}</h3>
                  <span className="text-sm text-muted-foreground">| {sleeve.nameAr}</span>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${sleeve.riskClass}`}>{sleeve.risk}</span>
                  {sleeve.sharia && (
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-teal-light text-primary">{t('funds.sharia.badge')}</span>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-navy mb-1">{t('funds.label.objective')}</h4>
                      <p className="text-sm text-muted-foreground">{sleeve.objective}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-navy mb-1">{t('funds.label.universe')}</h4>
                      <p className="text-sm text-muted-foreground">{sleeve.universe}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-navy mb-1">{t('funds.label.distribution')}</h4>
                      <p className="text-sm text-muted-foreground">{sleeve.distribution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-navy mb-1">{t('funds.label.bestFor')}</h4>
                      <p className="text-sm text-muted-foreground">{sleeve.bestFor}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-navy mb-1">{t('funds.label.chars')}</h4>
                      <ul className="space-y-1">
                        {sleeve.chars.map((c) => (
                          <li key={c} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-0.5">·</span> {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structure & Governance */}
      <section className="section-padding bg-white">
        <div className="container-content">
          <h2 className="text-3xl md:text-[40px] font-serif text-center mb-12 animate-fade-up">{t('funds.structure.title')}</h2>
          <div className="animate-fade-up delay-100">
            <GovernanceDiagram />
          </div>
          <div className="max-w-3xl mx-auto mt-8 space-y-3 animate-fade-up delay-200">
            <p className="text-sm text-muted-foreground">{t('funds.structure.note1')}</p>
            <p className="text-sm text-muted-foreground">{t('funds.structure.note2')}</p>
          </div>
        </div>
      </section>

      {/* Dealing & Pricing */}
      <section className="section-padding bg-cream">
        <div className="container-content max-w-3xl">
          <h2 className="text-3xl md:text-[40px] font-serif text-center mb-12 animate-fade-up">{t('funds.dealing.title')}</h2>
          <div className="card-masar p-0 overflow-hidden animate-fade-up delay-100">
            <table className="w-full">
              <tbody>
                {dealingTerms.map((term, i) => (
                  <tr key={term.label} className={i % 2 === 0 ? 'bg-white' : 'bg-muted/30'}>
                    <td className="px-6 py-4 text-sm font-medium text-navy">{term.label}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{term.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Risk Disclosure */}
      <section className="section-padding bg-white">
        <div className="container-content max-w-3xl">
          <div className="border-s-4 border-gold ps-6 py-2 animate-fade-up">
            <h2 className="text-xl font-serif text-navy mb-4">{t('funds.risk.title')}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{t('funds.risk.body')}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function GovernanceDiagram() {
  return (
    <svg viewBox="0 0 700 280" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-3xl mx-auto h-auto">
      {/* Top: Umbrella Fund */}
      <rect x="230" y="10" width="240" height="44" rx="8" fill="white" stroke="#16a085" strokeWidth="1.5" />
      <text x="350" y="28" textAnchor="middle" fill="#1a1a2e" fontSize="13" fontFamily="DM Sans, sans-serif" fontWeight="500">MASAR Umbrella Fund</text>
      <text x="350" y="44" textAnchor="middle" fill="#9ca3af" fontSize="10" fontFamily="DM Sans, sans-serif">JSC-Authorized</text>

      {/* Lines to middle row */}
      <line x1="290" y1="54" x2="130" y2="100" stroke="#e5e7eb" strokeWidth="1" />
      <line x1="350" y1="54" x2="350" y2="100" stroke="#e5e7eb" strokeWidth="1" />
      <line x1="410" y1="54" x2="570" y2="100" stroke="#e5e7eb" strokeWidth="1" />

      {/* Middle row */}
      <rect x="50" y="100" width="160" height="44" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1" />
      <text x="130" y="118" textAnchor="middle" fill="#1a1a2e" fontSize="12" fontFamily="DM Sans" fontWeight="500">Fund Board</text>
      <text x="130" y="134" textAnchor="middle" fill="#9ca3af" fontSize="10" fontFamily="DM Sans">Oversight</text>

      <rect x="270" y="100" width="160" height="44" rx="8" fill="white" stroke="#16a085" strokeWidth="1" />
      <text x="350" y="118" textAnchor="middle" fill="#1a1a2e" fontSize="12" fontFamily="DM Sans" fontWeight="500">Investment Manager</text>
      <text x="350" y="134" textAnchor="middle" fill="#9ca3af" fontSize="10" fontFamily="DM Sans">MASAR</text>

      <rect x="490" y="100" width="160" height="44" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1" />
      <text x="570" y="118" textAnchor="middle" fill="#1a1a2e" fontSize="12" fontFamily="DM Sans" fontWeight="500">Sharia Board</text>
      <text x="570" y="134" textAnchor="middle" fill="#9ca3af" fontSize="10" fontFamily="DM Sans">Independent SSB</text>

      {/* Lines to bottom row */}
      <line x1="290" y1="144" x2="130" y2="200" stroke="#e5e7eb" strokeWidth="1" />
      <line x1="350" y1="144" x2="350" y2="200" stroke="#e5e7eb" strokeWidth="1" />
      <line x1="410" y1="144" x2="570" y2="200" stroke="#e5e7eb" strokeWidth="1" />

      {/* Bottom row */}
      <rect x="50" y="200" width="160" height="44" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1" />
      <text x="130" y="218" textAnchor="middle" fill="#1a1a2e" fontSize="12" fontFamily="DM Sans" fontWeight="500">Custodian</text>
      <text x="130" y="234" textAnchor="middle" fill="#9ca3af" fontSize="10" fontFamily="DM Sans">Independent Bank</text>

      <rect x="270" y="200" width="160" height="44" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1" />
      <text x="350" y="218" textAnchor="middle" fill="#1a1a2e" fontSize="12" fontFamily="DM Sans" fontWeight="500">Transfer Agent</text>
      <text x="350" y="234" textAnchor="middle" fill="#9ca3af" fontSize="10" fontFamily="DM Sans">SDC Registry</text>

      <rect x="490" y="200" width="160" height="44" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1" />
      <text x="570" y="218" textAnchor="middle" fill="#1a1a2e" fontSize="12" fontFamily="DM Sans" fontWeight="500">Regulator</text>
      <text x="570" y="234" textAnchor="middle" fill="#9ca3af" fontSize="10" fontFamily="DM Sans">JSC</text>
    </svg>
  );
}
