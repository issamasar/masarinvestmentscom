import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';
import masarLogo from '@/assets/masar-logo-new.png';

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
    { href: '/how-it-works', label: t('nav.howItWorks') },
    { href: '/funds', label: t('nav.funds') },
    { href: '/employers', label: t('nav.employers') },
  ];

  const companyLinks = [
    { href: '/about', label: t('nav.about') },
    { href: '/contact', label: t('nav.contact') },
    { href: '/privacy', label: t('footer.privacy') },
    { href: '/terms', label: t('footer.terms') },
  ];

  return (
    <footer className="bg-muted/50">
      <div className="container-content section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Column 1 — Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src={masarLogo} alt="MASAR Logo" className="h-10 w-auto" />
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              {t('footer.description')}
            </p>
          </div>

          {/* Column 2 — Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-sans font-semibold text-sm text-foreground mb-4">
                {t('footer.product')}
              </h4>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-sans font-semibold text-sm text-foreground mb-4">
                {t('footer.company')}
              </h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3 — Newsletter */}
          <div>
            <h4 className="font-sans font-semibold text-sm text-foreground mb-2">
              {t('footer.newsletter')}
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              {t('footer.newsletter.desc')}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-sm"
              />
              <Button type="submit" variant="default" size="sm">
                {t('footer.newsletter.button')}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            {t('footer.copyright')}
          </p>
          <p className="text-xs text-muted-foreground">
            {t('footer.disclaimer')}
          </p>
        </div>
      </div>
    </footer>
  );
}
