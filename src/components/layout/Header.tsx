import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import masarLogo from '@/assets/masar-logo-light.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/how-it-works', label: t('nav.howItWorks') },
    { href: '/employers', label: t('nav.employers') },
    { href: '/funds', label: t('nav.funds') },
    { href: '/about', label: t('nav.about') },
    { href: '/contact', label: t('nav.contact') },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <>
      {/* Teal accent line */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-primary" />

      <header
        className={cn(
          "fixed top-0.5 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg transition-shadow duration-200",
          isScrolled && "shadow-sm"
        )}
      >
        <nav className="container-content">
          <div className="flex items-center justify-between h-16 md:h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img src={masarLogo} alt="MASAR Logo" className="h-10 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "px-4 py-2 text-[15px] font-medium rounded-lg transition-colors",
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
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
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Toggle language"
              >
                {language === 'en' ? 'العربية' : 'EN'}
              </button>
              <Link to="/contact">
                <Button variant="outline" size="sm">
                  {t('nav.joinWaitlist')}
                </Button>
              </Link>
              <Link to="/contact#demo">
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

          {/* Mobile Menu — full screen overlay */}
          {isMenuOpen && (
            <div className="lg:hidden fixed inset-0 top-[calc(2px+72px)] bg-white z-50 animate-fade-in">
              <div className="flex flex-col p-6 gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "px-4 py-3 text-lg font-medium rounded-lg transition-colors",
                      location.pathname === item.href
                        ? "text-primary bg-teal-light"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex items-center gap-3 px-4 pt-6 mt-4 border-t border-border">
                  <button
                    onClick={toggleLanguage}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {language === 'en' ? 'العربية' : 'EN'}
                  </button>
                </div>
                <div className="flex flex-col gap-3 px-4 pt-4">
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full">
                      {t('nav.joinWaitlist')}
                    </Button>
                  </Link>
                  <Link to="/contact#demo" onClick={() => setIsMenuOpen(false)}>
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
    </>
  );
}
