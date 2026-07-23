import { Github, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND } from '@/data/brand';

const PRODUCT_LINKS = [
  { label: 'Features', href: '/#features' },
  { label: 'Why Choose Us', href: '/#why-us' },
  { label: 'Student Journey', href: '/#journey' },
  { label: 'Screenshots', href: '/#screenshots' },
  { label: 'Roadmap', href: '/#roadmap' },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
];

const DEV_LINKS = [
  { label: 'GitHub', href: BRAND.social.github },
  { label: 'Documentation', href: '#docs' },
];

export function Footer() {
  return (
    <footer className="bg-brand-alt border-t border-brand">
      <div className="content-max py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display font-semibold text-brand text-meta mb-4">Product</h3>
            <ul className="space-y-2.5">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-brand-muted hover:text-primary text-meta transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-brand text-meta mb-4">Legal</h3>
            <ul className="space-y-2.5">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-brand-muted hover:text-primary text-meta transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-brand text-meta mb-4">Developer</h3>
            <ul className="space-y-2.5">
              {DEV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-brand-muted hover:text-primary text-meta transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <address className="mt-4 not-italic text-brand-muted text-meta">
              <a href="mailto:hello@retainly.app" className="hover:text-primary transition-colors flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                hello@retainly.app
              </a>
            </address>
          </div>

          <div>
            <h3 className="font-display font-semibold text-brand text-meta mb-4">Meta</h3>
            <p className="text-brand-muted text-meta">Version {BRAND.version}</p>
            <p className="text-brand-muted text-meta mt-2">Made for Pakistani Students</p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href={BRAND.social.github}
                aria-label="GitHub"
                className="w-9 h-9 rounded-full border border-brand flex items-center justify-center text-brand-muted hover:text-primary hover:border-primary transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={BRAND.social.twitter}
                aria-label="Twitter"
                className="w-9 h-9 rounded-full border border-brand flex items-center justify-center text-brand-muted hover:text-primary hover:border-primary transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <img
              src="/images/logo.svg"
              alt={`${BRAND.name} logo`}
              className="h-8 w-8"
              width="32"
              height="32"
            />
            <span className="font-display font-bold text-brand text-meta">{BRAND.name}</span>
          </div>
          <p className="text-brand-muted text-meta text-center md:text-right">
            © {new Date().getFullYear()} {BRAND.name}. Built for {BRAND.region} Matric students.
          </p>
        </div>
      </div>
    </footer>
  );
}
