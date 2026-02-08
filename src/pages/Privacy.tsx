import { Layout } from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Privacy() {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="section-padding bg-white">
        <div className="container-narrow animate-fade-up">
          <h1 className="text-4xl md:text-[48px] font-serif leading-[1.1] mb-4">{t('footer.privacy')}</h1>
          <p className="text-sm text-muted-foreground mb-12">Last updated: January 2024</p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <div>
              <h2 className="text-xl font-serif text-navy mb-3">Introduction</h2>
              <p>MASAR ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.</p>
            </div>
            <div>
              <h2 className="text-xl font-serif text-navy mb-3">Information We Collect</h2>
              <p className="mb-3">We collect information you provide directly to us, including:</p>
              <ul className="list-disc ps-6 space-y-1">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Identity verification documents (as required for eKYC)</li>
                <li>Financial information (bank account details, employment information)</li>
                <li>Investment preferences and risk tolerance</li>
                <li>Communication records with our support team</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-serif text-navy mb-3">How We Use Your Information</h2>
              <ul className="list-disc ps-6 space-y-1">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and manage your account</li>
                <li>Verify your identity and comply with regulatory requirements</li>
                <li>Send you updates, newsletters, and marketing communications (with your consent)</li>
                <li>Detect, prevent, and address technical issues and fraud</li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-serif text-navy mb-3">Data Security</h2>
              <p>We implement industry-standard security measures to protect your personal information, including encryption at rest and in transit, secure access controls, and regular security audits.</p>
            </div>
            <div>
              <h2 className="text-xl font-serif text-navy mb-3">Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at privacy@masarinvestments.com.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
