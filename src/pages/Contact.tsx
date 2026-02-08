import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/layout/Layout';
import { toast } from 'sonner';
import { ArrowRight } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();

  // Waitlist form
  const [waitlist, setWaitlist] = useState({ name: '', email: '', phone: '', employer: '' });
  // Demo form
  const [demo, setDemo] = useState({ company: '', role: '', employees: '', payroll: '', email: '', message: '' });
  // Partner form
  const [partner, setPartner] = useState({ company: '', type: '', contact: '', email: '', message: '' });

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t('form.success'));
    setWaitlist({ name: '', email: '', phone: '', employer: '' });
  };

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t('form.success'));
    setDemo({ company: '', role: '', employees: '', payroll: '', email: '', message: '' });
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t('form.success'));
    setPartner({ company: '', type: '', contact: '', email: '', message: '' });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-white">
        <div className="container-content max-w-3xl animate-fade-up">
          <h1 className="text-4xl md:text-[48px] lg:text-[56px] font-serif leading-[1.1] mb-6">{t('contact.hero.headline')}</h1>
          <p className="text-lg text-muted-foreground">{t('contact.hero.body')}</p>
        </div>
      </section>

      {/* Section 1 — Join the Waitlist */}
      <section className="section-padding bg-cream">
        <div className="container-content max-w-2xl">
          <h2 className="text-2xl font-serif text-navy mb-2 animate-fade-up">{t('contact.waitlist.title')}</h2>
          <p className="text-sm text-muted-foreground mb-8 animate-fade-up">{t('contact.waitlist.note')}</p>
          <form onSubmit={handleWaitlistSubmit} className="space-y-4 animate-fade-up delay-100">
            <div>
              <label className="block text-sm font-medium text-navy mb-1.5">{t('form.name')} *</label>
              <Input value={waitlist.name} onChange={(e) => setWaitlist({ ...waitlist, name: e.target.value })} required />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-1.5">{t('form.email')} *</label>
              <Input type="email" value={waitlist.email} onChange={(e) => setWaitlist({ ...waitlist, email: e.target.value })} required />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-1.5">{t('form.phone')}</label>
              <Input value={waitlist.phone} onChange={(e) => setWaitlist({ ...waitlist, phone: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-1.5">{t('form.employer')}</label>
              <Input value={waitlist.employer} onChange={(e) => setWaitlist({ ...waitlist, employer: e.target.value })} />
            </div>
            <Button type="submit" size="lg" className="w-full">
              {t('cta.joinWaitlist')}
              <ArrowRight className="w-4 h-4 ms-1 rtl:rotate-180" />
            </Button>
          </form>
        </div>
      </section>

      {/* Section 2 — Book Employer Demo */}
      <section id="demo" className="section-padding bg-white">
        <div className="container-content max-w-2xl">
          <h2 className="text-2xl font-serif text-navy mb-2 animate-fade-up">{t('contact.demo.title')}</h2>
          <p className="text-sm text-muted-foreground mb-8 animate-fade-up">{t('contact.demo.note')}</p>
          <form onSubmit={handleDemoSubmit} className="space-y-4 animate-fade-up delay-100">
            <div>
              <label className="block text-sm font-medium text-navy mb-1.5">{t('form.company')} *</label>
              <Input value={demo.company} onChange={(e) => setDemo({ ...demo, company: e.target.value })} required />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-1.5">{t('form.role')} *</label>
              <Input value={demo.role} onChange={(e) => setDemo({ ...demo, role: e.target.value })} required />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-1.5">{t('form.employees')} *</label>
              <select
                value={demo.employees}
                onChange={(e) => setDemo({ ...demo, employees: e.target.value })}
                required
                className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">{t('form.select')}</option>
                <option value="under-50">{t('form.emp.under50')}</option>
                <option value="50-149">50–149</option>
                <option value="150-499">150–499</option>
                <option value="500+">500+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-1.5">{t('form.payrollSystem')}</label>
              <Input value={demo.payroll} onChange={(e) => setDemo({ ...demo, payroll: e.target.value })} />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-1.5">{t('form.email')} *</label>
              <Input type="email" value={demo.email} onChange={(e) => setDemo({ ...demo, email: e.target.value })} required />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-1.5">{t('form.message')}</label>
              <Textarea value={demo.message} onChange={(e) => setDemo({ ...demo, message: e.target.value })} rows={3} />
            </div>
            <Button type="submit" size="lg" className="w-full">
              {t('cta.bookDemo')}
              <ArrowRight className="w-4 h-4 ms-1 rtl:rotate-180" />
            </Button>
          </form>
        </div>
      </section>

      {/* Section 3 — Partner With Us */}
      <section className="section-padding bg-cream">
        <div className="container-content max-w-2xl">
          <h2 className="text-2xl font-serif text-navy mb-2 animate-fade-up">{t('contact.partner.title')}</h2>
          <p className="text-sm text-muted-foreground mb-8 animate-fade-up">{t('contact.partner.note')}</p>
          <form onSubmit={handlePartnerSubmit} className="space-y-4 animate-fade-up delay-100">
            <div>
              <label className="block text-sm font-medium text-navy mb-1.5">{t('form.company')} *</label>
              <Input value={partner.company} onChange={(e) => setPartner({ ...partner, company: e.target.value })} required />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-1.5">{t('contact.partner.type')} *</label>
              <select
                value={partner.type}
                onChange={(e) => setPartner({ ...partner, type: e.target.value })}
                required
                className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">{t('form.select')}</option>
                <option value="bank">{t('contact.partner.type.bank')}</option>
                <option value="psp">{t('contact.partner.type.psp')}</option>
                <option value="hr">{t('contact.partner.type.hr')}</option>
                <option value="employer">{t('contact.partner.type.employer')}</option>
                <option value="other">{t('contact.partner.type.other')}</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-1.5">{t('form.name')} *</label>
              <Input value={partner.contact} onChange={(e) => setPartner({ ...partner, contact: e.target.value })} required />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-1.5">{t('form.email')} *</label>
              <Input type="email" value={partner.email} onChange={(e) => setPartner({ ...partner, email: e.target.value })} required />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy mb-1.5">{t('form.message')}</label>
              <Textarea value={partner.message} onChange={(e) => setPartner({ ...partner, message: e.target.value })} rows={3} />
            </div>
            <Button type="submit" size="lg" className="w-full">
              {t('contact.partner.cta')}
              <ArrowRight className="w-4 h-4 ms-1 rtl:rotate-180" />
            </Button>
          </form>
        </div>
      </section>

      {/* Bottom email */}
      <section className="py-12 bg-white">
        <div className="container-content text-center">
          <p className="text-sm text-muted-foreground">
            {t('contact.email.line')}{' '}
            <a href="mailto:hello@masarinvestments.com" className="text-primary font-medium hover:underline">
              hello@masarinvestments.com
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
}
