import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/layout/Layout';
import { toast } from 'sonner';
import { 
  ArrowRight,
  Building2,
  Plug,
  Palette,
  Handshake
} from 'lucide-react';

export default function Partners() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    partnerType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t('form.success'));
    setFormData({ company: '', name: '', email: '', partnerType: '', message: '' });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-3xl animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
              Partner With MASAR
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Partner-first distribution. API gateway + white-label readiness. Non-exclusivity.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
              Who We Work With
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Building2,
                title: 'Banks & PSPs',
                desc: 'Embed MASAR into your digital banking or payment app. Offer savings as a native feature.',
              },
              {
                icon: Plug,
                title: 'HRIS / Payroll',
                desc: 'Integrate with your payroll platform. Enable employer savings benefits seamlessly.',
              },
              {
                icon: Palette,
                title: 'White-Label',
                desc: 'Your brand, our engine. Full customization for enterprise and institutional partners.',
              },
              {
                icon: Handshake,
                title: 'Employers',
                desc: 'Offer MASAR as an employee benefit. Boost retention with matching programs.',
              },
            ].map((partner, index) => (
              <div 
                key={partner.title}
                className="card-elevated p-6 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-champagne/20 flex items-center justify-center mb-4">
                  <partner.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-serif text-foreground mb-2">{partner.title}</h3>
                <p className="text-sm text-muted-foreground">{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Options */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
                Flexible Integration
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Choose the depth that works for your business. From simple referrals to full white-label experiences.
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    level: 'Light',
                    title: 'Referral / Link-Out',
                    desc: 'Simple integration. Users click through to MASAR.',
                  },
                  {
                    level: 'Medium',
                    title: 'API Integration',
                    desc: 'Embed MASAR flows in your app via REST APIs.',
                  },
                  {
                    level: 'Deep',
                    title: 'White-Label',
                    desc: 'Your branding, our infrastructure. Fully customized.',
                  },
                ].map((option) => (
                  <div 
                    key={option.level}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border"
                  >
                    <span className="px-2 py-1 text-xs font-medium bg-champagne/20 text-foreground rounded">
                      {option.level}
                    </span>
                    <div>
                      <h4 className="font-medium text-foreground">{option.title}</h4>
                      <p className="text-sm text-muted-foreground">{option.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Partner Inquiry Form */}
            <div className="card-elevated p-8 animate-fade-up delay-200">
              <h3 className="text-2xl font-serif text-foreground mb-6">Partner Inquiry</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Company Name
                  </label>
                  <Input
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Your Name
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Email Address
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
                    Partner Type
                  </label>
                  <Select
                    value={formData.partnerType}
                    onValueChange={(value) => setFormData({ ...formData, partnerType: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bank-psp">Bank / PSP</SelectItem>
                      <SelectItem value="hris-payroll">HRIS / Payroll</SelectItem>
                      <SelectItem value="employer">Employer</SelectItem>
                      <SelectItem value="investor">Investor</SelectItem>
                      <SelectItem value="regulator">Regulator / Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Message (Optional)
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                  />
                </div>
                
                <Button type="submit" variant="default" size="lg" className="w-full">
                  Submit Inquiry
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Non-Exclusivity */}
      <section className="section-padding bg-background">
        <div className="container-narrow text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
            Non-Exclusive by Design
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We believe in open partnerships. Multiple banks, payroll providers, and employers can integrate MASAR simultaneously. Your competitive advantage comes from your relationship with your customers — not from locking out others.
          </p>
        </div>
      </section>
    </Layout>
  );
}
