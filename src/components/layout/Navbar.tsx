import { useEffect, useState, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND } from '@/data/brand';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Button } from '@/components/ui/Button';
import { trackEvent } from '@/lib/analytics';

const NAV_LINKS = [
  { label: 'Features', href: '/#features' },
  { label: 'Why Us', href: '/#why-us' },
  { label: 'Journey', href: '/#journey' },
  { label: 'Screenshots', href: '/#screenshots' },
  { label: 'FAQ', href: '/#faq' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const handleNavClick = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg"
      >
        Skip to content
      </a>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'glass-light shadow-card' : 'bg-transparent'
        }`}
        aria-label="Main navigation"
      >
        <div className="content-max flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src="/images/logo.svg"
              alt={`${BRAND.name} logo`}
              className="h-9 w-9"
              width="36"
              height="36"
            />
            <span className="font-display font-bold text-brand text-lg hidden sm:block">
              {BRAND.name}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-brand-muted hover:text-brand font-medium text-meta transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button
              href={BRAND.appStore.android}
              size="sm"
              className="hidden sm:inline-flex"
              onClick={() => trackEvent('hero_cta_click', { platform: 'android' })}
            >
              Download
            </Button>
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden w-10 h-10 rounded-full flex items-center justify-center border border-brand text-brand"
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-brand md:hidden flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <div className="flex items-center justify-between h-16 px-5 border-b border-brand">
            <div className="flex items-center gap-2.5">
              <img
                src="/images/logo.svg"
                alt={`${BRAND.name} logo`}
                className="h-8 w-8"
                width="32"
                height="32"
              />
              <span className="font-display font-bold text-brand text-lg">{BRAND.name}</span>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-brand text-brand"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex flex-col gap-2 p-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="py-3 text-brand text-body-lg font-medium border-b border-brand"
              >
                {link.label}
              </a>
            ))}
            <Button
              href={BRAND.appStore.android}
              fullWidth
              className="mt-4"
              onClick={() => trackEvent('hero_cta_click', { platform: 'android' })}
            >
              Download on Android
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
