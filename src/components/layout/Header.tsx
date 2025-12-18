import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import masarLogo from '@/assets/masar-logo.jpeg';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navItems = [
    { href: '/individuals', label: t('nav.individuals') },
    { href: '/employers', label: t('nav.employers') },
    { href: '/how-it-works', label: t('nav.howItWorks') },
    { href: '/trust', label: t('nav.trust') },
    { href: '/funds', label: t('nav.funds') },
    { href: '/about', label: t('nav.about') },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <nav className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={masarLogo} 
              alt="MASAR مسار" 
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                  location.pathname === item.href
                    ? "text-primary bg-secondary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'en' ? 'العربية' : 'English'}</span>
            </button>
            <Link to="/waitlist">
              <Button variant="outline" size="sm">
                {t('nav.joinWaitlist')}
              </Button>
            </Link>
            <Link to="/demo">
              <Button variant="default" size="sm">
                {t('nav.bookDemo')}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 text-base font-medium rounded-lg transition-colors",
                    location.pathname === item.href
                      ? "text-primary bg-secondary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-3 px-4 pt-4 mt-2 border-t border-border/50">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span>{language === 'en' ? 'العربية' : 'English'}</span>
                </button>
              </div>
              <div className="flex flex-col gap-2 px-4 pt-4">
                <Link to="/waitlist" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="outline" className="w-full">
                    {t('nav.joinWaitlist')}
                  </Button>
                </Link>
                <Link to="/demo" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="default" className="w-full">
                    {t('nav.bookDemo')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
