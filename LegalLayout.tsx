import type { ReactNode } from 'react';
import { Card } from '@/components/ui/Card';

interface LegalLayoutProps {
  title: string;
  effectiveDate: string;
  children: ReactNode;
}

export function LegalLayout({ title, effectiveDate, children }: LegalLayoutProps) {
  return (
    <main id="main" className="section-padding">
      <div className="content-max max-w-3xl">
        <header className="mb-10">
          <h1 className="font-display font-bold text-brand text-h2 mb-3">{title}</h1>
          <p className="text-brand-muted text-meta">Effective date: {effectiveDate}</p>
        </header>

        <Card className="p-6 sm:p-10">
          <article className="legal-content text-brand">{children}</article>
        </Card>
      </div>
    </main>
  );
}
