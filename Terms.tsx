import { LegalLayout } from '@/components/layout/LegalLayout';
import { BRAND } from '@/data/brand';

export function Terms() {
  return (
    <LegalLayout title="Terms of Service" effectiveDate="July 22, 2026">
      <p>
        These Terms of Service ("Terms") govern your access to and use of {BRAND.name} (the
        "App"), together with the {BRAND.name} website located at retainly.app (the "Site" and,
        together with the App, the "Service"), provided by the {BRAND.name} team ("{BRAND.name}",
        "we", "us", or "our"). By downloading, installing, or using the Service, you agree to be
        bound by these Terms. If you do not agree, please do not use the Service.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        {BRAND.name} is designed for students preparing for Matric-level examinations in{' '}
        {BRAND.region} and their parents or guardians. If you are under the age of 18, you should
        review these Terms together with a parent or guardian before using the Service.
      </p>

      <h2>2. Description of the Service</h2>
      <p>
        {BRAND.name} is an offline-first study planning application that helps students organize
        revision schedules, track exam preparation, and plan study sessions without requiring a
        continuous internet connection. Certain features, such as software updates or optional
        cloud backup (if and when introduced), may require an internet connection.
      </p>

      <h2>3. License to Use the Service</h2>
      <p>
        Subject to your compliance with these Terms, we grant you a limited, non-exclusive,
        non-transferable, revocable license to download and use the App on devices that you own
        or control, solely for your personal, non-commercial use.
      </p>
      <p>You agree not to:</p>
      <ul>
        <li>Copy, modify, or create derivative works of the App or Site;</li>
        <li>Reverse engineer, decompile, or disassemble the App, except where permitted by law;</li>
        <li>Rent, lease, sell, sublicense, or otherwise commercially exploit the Service;</li>
        <li>Remove or alter any proprietary notices on the Service;</li>
        <li>
          Use the Service in any way that violates applicable law or infringes the rights of
          others.
        </li>
      </ul>

      <h2>4. User Content</h2>
      <p>
        The Service may allow you to create study plans, notes, schedules, and similar content
        ("User Content"). You retain ownership of your User Content. Because {BRAND.name} is
        offline-first, User Content is generally stored on your device; you are responsible for
        backing up your own data unless a backup feature is explicitly provided.
      </p>

      <h2>5. Intellectual Property</h2>
      <p>
        The Service, including its design, text, graphics, logos, and software, is owned by{' '}
        {BRAND.name} or its licensors and is protected by copyright, trademark, and other
        intellectual property laws. Nothing in these Terms transfers ownership of the Service to
        you.
      </p>

      <h2>6. Pricing and Payments</h2>
      <p>
        {BRAND.name} is currently offered free of charge. If we introduce paid features, premium
        tiers, or in-app purchases in the future, the applicable pricing and payment terms will be
        presented to you before you are charged, and these Terms will be updated accordingly.
      </p>

      <h2>7. Third-Party Services</h2>
      <p>
        The App may be distributed through third-party platforms (such as the Google Play Store),
        which have their own terms and policies. Your use of those platforms is governed by their
        respective terms, in addition to these Terms.
      </p>

      <h2>8. Disclaimer of Warranties</h2>
      <p>
        The Service is provided on an "as is" and "as available" basis, without warranties of any
        kind, whether express, implied, or statutory, including implied warranties of
        merchantability, fitness for a particular purpose, and non-infringement. We do not
        guarantee that use of {BRAND.name} will result in any particular examination outcome or
        grade.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by applicable law, {BRAND.name} and its team shall not be
        liable for any indirect, incidental, special, consequential, or punitive damages, or any
        loss of data, arising out of or relating to your use of, or inability to use, the Service.
      </p>

      <h2>10. Termination</h2>
      <p>
        We may suspend or terminate your access to the Service at any time if you violate these
        Terms. You may stop using the Service and uninstall the App at any time.
      </p>

      <h2>11. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. If we make material changes, we will update
        the effective date above and, where appropriate, provide additional notice within the
        Service. Continued use of the Service after changes take effect constitutes acceptance of
        the revised Terms.
      </p>

      <h2>12. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the Islamic Republic of Pakistan, without regard to
        conflict-of-law principles, unless otherwise required by applicable local law.
      </p>

      <h2>13. Contact Us</h2>
      <p>
        If you have questions about these Terms, please contact us at{' '}
        <a href="mailto:hello@retainly.app">hello@retainly.app</a>.
      </p>

      <h3>A note on this document</h3>
      <p>
        This Terms of Service is a professionally drafted template tailored to {BRAND.name}'s
        current product description. It is not a substitute for advice from a licensed attorney.
        Before publishing, please have it reviewed by legal counsel familiar with the laws of the
        jurisdictions in which {BRAND.name} operates, particularly if the Service later introduces
        accounts, payments, or data syncing.
      </p>
    </LegalLayout>
  );
}
