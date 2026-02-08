import { Layout } from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Terms() {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="section-padding bg-white">
        <div className="container-narrow animate-fade-up">
          <h1 className="text-4xl md:text-[48px] font-serif leading-[1.1] mb-4">{t('footer.terms')}</h1>
          <p className="text-sm text-muted-foreground mb-12">Last updated: January 2024</p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-xl font-serif text-navy mb-3">Acceptance of Terms</h2>
              <p>By accessing or using MASAR's services, you agree to be bound by these Terms of Service.</p>
            </div>
            <div>
              <h2 className="text-xl font-serif text-navy mb-3">Description of Services</h2>
              <p>MASAR provides a technology platform that facilitates investment in regulated fund units through payroll deductions and other contribution mechanisms. MASAR acts as an orchestration and transparency layer.</p>
            </div>
            <div>
              <h2 className="text-xl font-serif text-navy mb-3">Investment Risks</h2>
              <p><strong>Important:</strong> Investing involves risk. The value of your investments can go down as well as up. Past performance does not guarantee future results. Returns and distributions are not guaranteed. MASAR does not provide investment advice.</p>
            </div>
            <div>
              <h2 className="text-xl font-serif text-navy mb-3">Fees</h2>
              <p>Our fee structure is disclosed during onboarding and in your account dashboard. Fees may include platform fees, fund management fees, and other charges.</p>
            </div>
            <div>
              <h2 className="text-xl font-serif text-navy mb-3">Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of Jordan.</p>
            </div>
            <div>
              <h2 className="text-xl font-serif text-navy mb-3">Contact</h2>
              <p>For questions about these Terms, please contact us at legal@masarinvestments.com.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
