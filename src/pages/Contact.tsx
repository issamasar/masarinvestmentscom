import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/layout/Layout';
import { toast } from 'sonner';
import { ArrowRight, Mail, MapPin, Calendar } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t('form.success'));
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="max-w-3xl animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
              {t('nav.contact')}
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Questions, feedback, or partnership inquiries — we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-elevated p-8 animate-fade-up">
              <h2 className="text-2xl font-serif text-foreground mb-6">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    {t('form.name')}
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    {t('form.email')}
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
                    Subject
                  </label>
                  <Input
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    {t('form.message')}
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" variant="default" size="lg" className="w-full">
                  {t('form.submit')}
                  <ArrowRight className="w-5 h-5 ms-2 rtl:rotate-180" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-up delay-200">
              <div>
                <h2 className="text-2xl font-serif text-foreground mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Whether you have questions about our platform, need help with your account, or want to explore partnership opportunities, our team is ready to assist.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-champagne/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">hello@masar.jo</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-champagne/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">Amman, Jordan</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-champagne/20 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Book a Call</h3>
                    <p className="text-muted-foreground mb-2">Schedule a demo or consultation</p>
                    <a href="#" className="text-primary font-medium hover:underline">
                      View calendar →
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8 border-t border-border">
                <h3 className="font-medium text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    LinkedIn
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
