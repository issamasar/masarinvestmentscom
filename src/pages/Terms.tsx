import { Layout } from '@/components/layout/Layout';

export default function Terms() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-3xl animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Last updated: January 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none animate-fade-up">
            <h2 className="font-serif">Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing or using MASAR's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="font-serif">Description of Services</h2>
            <p className="text-muted-foreground">
              MASAR provides a technology platform that facilitates investment in regulated fund units through payroll deductions and other contribution mechanisms. MASAR acts as an orchestration and transparency layer — we are not a fund manager, custodian, or investment advisor.
            </p>

            <h2 className="font-serif">Eligibility</h2>
            <p className="text-muted-foreground">
              To use MASAR's services, you must:
            </p>
            <ul className="text-muted-foreground">
              <li>Be at least 18 years old</li>
              <li>Be a resident of Jordan (or other supported jurisdictions)</li>
              <li>Complete our identity verification process</li>
              <li>Have a valid bank account for contributions and withdrawals</li>
            </ul>

            <h2 className="font-serif">Investment Risks</h2>
            <p className="text-muted-foreground">
              <strong>Important:</strong> Investing involves risk. The value of your investments can go down as well as up, and you may receive back less than you invest. Past performance does not guarantee future results. Returns and distributions are not guaranteed.
            </p>
            <p className="text-muted-foreground">
              MASAR does not provide investment advice. You should consider seeking independent financial advice before making investment decisions.
            </p>

            <h2 className="font-serif">Account Responsibilities</h2>
            <p className="text-muted-foreground">
              You are responsible for:
            </p>
            <ul className="text-muted-foreground">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Providing accurate and up-to-date information</li>
              <li>Notifying us immediately of any unauthorized access</li>
            </ul>

            <h2 className="font-serif">Fees</h2>
            <p className="text-muted-foreground">
              Our fee structure is disclosed during onboarding and in your account dashboard. Fees may include platform fees, fund management fees, and other charges. We will notify you of any changes to our fee structure.
            </p>

            <h2 className="font-serif">Withdrawals and Redemptions</h2>
            <p className="text-muted-foreground">
              You may request redemption of your fund units according to the terms of the specific fund. Processing times depend on fund terms and typically take several business days after NAV calculation.
            </p>

            <h2 className="font-serif">Limitation of Liability</h2>
            <p className="text-muted-foreground">
              To the maximum extent permitted by law, MASAR shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill.
            </p>

            <h2 className="font-serif">Governing Law</h2>
            <p className="text-muted-foreground">
              These Terms shall be governed by and construed in accordance with the laws of Jordan, without regard to its conflict of law provisions.
            </p>

            <h2 className="font-serif">Changes to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these Terms at any time. We will provide notice of significant changes through our platform or via email. Your continued use of our services after such modifications constitutes acceptance of the updated Terms.
            </p>

            <h2 className="font-serif">Contact</h2>
            <p className="text-muted-foreground">
              For questions about these Terms, please contact us at legal@masar.jo.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
