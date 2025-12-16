import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/layout/Layout';
import { toast } from 'sonner';
import { ArrowRight, CheckCircle2, Calendar, Clock, Video } from 'lucide-react';

export default function Demo() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    role: '',
    email: '',
    employees: '',
    payrollSystem: '',
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
              Demo Request Received!
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Our team will reach out within 1-2 business days to schedule your personalized demo.
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
              Book an Employer Demo
            </h1>
            <p className="text-xl text-primary-foreground/80">
              See how MASAR can transform your employee benefits. 30-minute personalized walkthrough.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-up">
              <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-6">
                What You'll Learn
              </h2>
              
              <div className="space-y-6 mb-10">
                {[
                  {
                    title: 'Platform Walkthrough',
                    desc: 'See the employer console and employee experience in action',
                  },
                  {
                    title: 'Integration Options',
                    desc: 'Understand which implementation tier fits your organization',
                  },
                  {
                    title: 'Matching Programs',
                    desc: 'Learn how to design effective employer matching policies',
                  },
                  {
                    title: 'Compliance & Governance',
                    desc: 'Get clarity on regulatory requirements and oversight',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-cta flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Demo Info */}
              <div className="bg-secondary/50 rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-muted-foreground" />
                  <span className="text-foreground">30 minutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <Video className="w-5 h-5 text-muted-foreground" />
                  <span className="text-foreground">Video call (Zoom/Google Meet)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-muted-foreground" />
                  <span className="text-foreground">Flexible scheduling</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="card-elevated p-8 animate-fade-up delay-200">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    {t('form.company')} *
                  </label>
                  <Input
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    required
                  />
                </div>
                
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
                    {t('form.role')} *
                  </label>
                  <Input
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="e.g., HR Director, CFO"
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
                    {t('form.employees')}
                  </label>
                  <Select
                    value={formData.employees}
                    onValueChange={(value) => setFormData({ ...formData, employees: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-50">1-50</SelectItem>
                      <SelectItem value="51-200">51-200</SelectItem>
                      <SelectItem value="201-500">201-500</SelectItem>
                      <SelectItem value="501-1000">501-1000</SelectItem>
                      <SelectItem value="1000+">1000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    {t('form.payrollSystem')}
                  </label>
                  <Input
                    value={formData.payrollSystem}
                    onChange={(e) => setFormData({ ...formData, payrollSystem: e.target.value })}
                    placeholder="e.g., SAP, Oracle, Custom"
                  />
                </div>
                
                <Button type="submit" variant="default" size="lg" className="w-full">
                  Request Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
