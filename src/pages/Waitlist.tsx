import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/layout/Layout';
import { toast } from 'sonner';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Waitlist() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    employer: '',
    language: 'en',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success(t('form.success'));
  };

  if (submitted) {
    return (
      <Layout>
        <section className="min-h-[70vh] flex items-center section-padding bg-background">
          <div className="container-narrow text-center animate-fade-up">
            <div className="w-20 h-20 rounded-full bg-cta/10 flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-10 h-10 text-cta" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
              You're on the list!
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We'll be in touch as soon as we're ready to launch. Thank you for your interest in MASAR.
            </p>
            <a href="/" className="text-primary font-medium hover:underline">
              ← Back to Home
            </a>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-3xl animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
              Join the Waitlist
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Be among the first to build ownership through MASAR. Early access coming soon.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-up">
              <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-6">
                What to Expect
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: 'Early Access',
                    desc: 'Be among the first to try MASAR when we launch',
                  },
                  {
                    title: 'Exclusive Updates',
                    desc: 'Get insider updates on our progress and launch timeline',
                  },
                  {
                    title: 'Shape the Product',
                    desc: 'Your feedback will help us build something truly useful',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-champagne mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="card-elevated p-8 animate-fade-up delay-200">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    {t('form.name')} *
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    {t('form.email')} *
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    {t('form.phone')}
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    {t('form.employer')}
                  </label>
                  <Input
                    value={formData.employer}
                    onChange={(e) => setFormData({ ...formData, employer: e.target.value })}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Preferred Language
                  </label>
                  <Select
                    value={formData.language}
                    onValueChange={(value) => setFormData({ ...formData, language: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="ar">العربية</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button type="submit" variant="default" size="lg" className="w-full">
                  Join Waitlist
                  <ArrowRight className="w-5 h-5 ms-2 rtl:rotate-180" />
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  By joining, you agree to receive updates from MASAR. Unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
