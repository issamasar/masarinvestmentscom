import { Layout } from '@/components/layout/Layout';

export default function Privacy() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-3xl animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
              Privacy Policy
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
            <h2 className="font-serif">Introduction</h2>
            <p className="text-muted-foreground">
              MASAR ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
            </p>

            <h2 className="font-serif">Information We Collect</h2>
            <p className="text-muted-foreground">
              We collect information you provide directly to us, including:
            </p>
            <ul className="text-muted-foreground">
              <li>Personal identification information (name, email address, phone number)</li>
              <li>Identity verification documents (as required for eKYC)</li>
              <li>Financial information (bank account details, employment information)</li>
              <li>Investment preferences and risk tolerance</li>
              <li>Communication records with our support team</li>
            </ul>

            <h2 className="font-serif">How We Use Your Information</h2>
            <p className="text-muted-foreground">
              We use the information we collect to:
            </p>
            <ul className="text-muted-foreground">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and manage your account</li>
              <li>Verify your identity and comply with regulatory requirements</li>
              <li>Send you updates, newsletters, and marketing communications (with your consent)</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Detect, prevent, and address technical issues and fraud</li>
            </ul>

            <h2 className="font-serif">Data Sharing and Disclosure</h2>
            <p className="text-muted-foreground">
              We may share your information with:
            </p>
            <ul className="text-muted-foreground">
              <li>Service providers who assist in our operations</li>
              <li>Fund administrators and custodians</li>
              <li>Regulatory authorities as required by law</li>
              <li>Your employer (only for employer-related savings programs, and only the minimum necessary)</li>
            </ul>
            <p className="text-muted-foreground">
              We do not sell your personal information to third parties.
            </p>

            <h2 className="font-serif">Data Security</h2>
            <p className="text-muted-foreground">
              We implement industry-standard security measures to protect your personal information, including encryption at rest and in transit, secure access controls, and regular security audits.
            </p>

            <h2 className="font-serif">Your Rights</h2>
            <p className="text-muted-foreground">
              You have the right to:
            </p>
            <ul className="text-muted-foreground">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data (subject to regulatory requirements)</li>
              <li>Opt out of marketing communications</li>
              <li>Withdraw consent where applicable</li>
            </ul>

            <h2 className="font-serif">Data Retention</h2>
            <p className="text-muted-foreground">
              We retain your personal information for as long as necessary to provide our services and comply with legal obligations. This typically includes a minimum retention period required by financial regulations.
            </p>

            <h2 className="font-serif">Changes to This Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>

            <h2 className="font-serif">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at privacy@masar.jo.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
