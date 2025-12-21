import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';
import masarLogo from '@/assets/masar-logo.jpeg';

export function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success(t('form.success'));
      setEmail('');
    }
  };

  const productLinks = [
    { href: '/individuals', label: t('nav.individuals') },
    { href: '/employers', label: t('nav.employers') },
    { href: '/how-it-works', label: t('nav.howItWorks') },
    { href: '/funds', label: t('nav.funds') },
  ];

  const companyLinks = [
    { href: '/about', label: t('nav.about') },
    { href: '/trust', label: t('nav.trust') },
    { href: '/partners', label: t('nav.partners') },
    { href: '/insights', label: t('nav.insights') },
    { href: '/contact', label: t('nav.contact') },
  ];

  const legalLinks = [
    { href: '/privacy', label: t('footer.privacy') },
    { href: '/terms', label: t('footer.terms') },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img src={masarLogo} alt="MASAR Logo" className="h-12 w-auto rounded" />
            </Link>
            <p className="text-primary-foreground/70 max-w-sm mb-6">
              {t('footer.description')}
            </p>
            
            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-2">{t('footer.newsletter')}</h4>
              <p className="text-sm text-primary-foreground/60 mb-3">
                {t('footer.newsletter.desc')}
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder={t('footer.newsletter.placeholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Button type="submit" variant="champagne" size="default">
                  {t('footer.newsletter.button')}
                </Button>
              </form>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.product')}</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} MASAR. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
