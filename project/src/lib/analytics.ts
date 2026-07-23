type EventName =
  | 'hero_cta_click'
  | 'feature_expand'
  | 'faq_open'
  | 'demo_walkthrough_play'
  | 'theme_toggle'
  | 'cta_section_click';

interface EventPayload {
  platform?: 'android' | 'ios';
  expanded?: boolean;
  questionId?: string;
  to?: 'dark' | 'light';
  button?: 'download' | 'github' | 'docs';
}

interface WindowWithAnalytics extends Window {
  dataLayer?: Record<string, unknown>[];
  gtag?: (event: string, name: string, payload: Record<string, unknown>) => void;
}

export function trackEvent(name: EventName, payload: EventPayload = {}) {
  if (typeof window === 'undefined') return;
  const w = window as WindowWithAnalytics;
  if (w.dataLayer) {
    w.dataLayer.push({ event: name, ...payload });
  }
  if (w.gtag) {
    w.gtag('event', name, payload as Record<string, unknown>);
  }
}
