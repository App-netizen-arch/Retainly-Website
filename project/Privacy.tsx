import { LegalLayout } from '@/components/layout/LegalLayout';
import { BRAND } from '@/data/brand';

export function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" effectiveDate="July 22, 2026">
      <p>
        This Privacy Policy explains how {BRAND.name} ("{BRAND.name}", "we", "us", or "our")
        handles information in connection with the {BRAND.name} website (retainly.app) and the{' '}
        {BRAND.name} Android application (together, the "Service"). We built {BRAND.name} to be
        offline-first, so it is designed to collect as little personal information as possible.
      </p>

      <h2>1. Information We Collect</h2>
      <h3>a. Study data you create in the App</h3>
      <p>
        Study plans, schedules, notes, and progress you create in the App are stored locally on
        your device. We do not have access to this data unless you explicitly choose to share it
        with us, for example by attaching it to a support email.
      </p>
      <h3>b. Website interaction data</h3>
      <p>
        When you visit retainly.app, we may use standard, privacy-respecting analytics to
        understand aggregate usage of the marketing site, such as which sections visitors view or
        which buttons they click (for example, when the "Download" button or an FAQ item is
        selected). This data is not linked to your name, email address, or study data.
      </p>
      <h3>c. Theme preference</h3>
      <p>
        Your light/dark mode preference is stored locally in your browser's storage so the Site
        remembers your choice on your next visit. This preference is never transmitted to our
        servers.
      </p>
      <h3>d. Information you provide directly</h3>
      <p>
        If you email us at{' '}
        <a href="mailto:hello@retainly.app">hello@retainly.app</a>, join a waitlist, or otherwise
        contact us, we collect the information you choose to provide, such as your email address
        and the contents of your message.
      </p>

      <h2>2. How We Use Information</h2>
      <ul>
        <li>To operate, maintain, and improve the Service;</li>
        <li>To respond to support requests and feedback;</li>
        <li>To understand aggregate, anonymized usage trends on the Site;</li>
        <li>To communicate updates about the Service, such as new features or policy changes;</li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h2>3. What We Do Not Do</h2>
      <ul>
        <li>We do not sell your personal information.</li>
        <li>
          We do not require an account to use the App's core planning and revision features.
        </li>
        <li>
          We do not access the study content you create in the App unless you choose to share it
          with us.
        </li>
      </ul>

      <h2>4. Data Storage and Retention</h2>
      <p>
        Because {BRAND.name} is offline-first, your study data is stored on your device and is
        retained for as long as the App remains installed, or until you delete it. If we introduce
        optional cloud backup or account features in the future, this policy will be updated to
        describe how that data is stored and for how long.
      </p>

      <h2>5. Sharing of Information</h2>
      <p>
        We do not share personal information with third parties except: (a) with service
        providers who help us operate the Site (such as hosting or analytics providers), bound by
        confidentiality obligations; (b) if required by law, regulation, or valid legal process; or
        (c) in connection with a merger, acquisition, or sale of assets, subject to continued
        protection under a policy at least as protective as this one.
      </p>

      <h2>6. Children's Privacy</h2>
      <p>
        {BRAND.name} is intended for Matric-level students, many of whom are minors. We do not
        knowingly collect more personal information from a child than is necessary to provide the
        Service, and we do not request account registration or personal details as a condition of
        using the App's core features. Parents or guardians with questions about a child's use of
        the Service may contact us at{' '}
        <a href="mailto:hello@retainly.app">hello@retainly.app</a>.
      </p>

      <h2>7. Your Choices</h2>
      <ul>
        <li>You can delete your study data at any time by clearing it within the App or uninstalling the App.</li>
        <li>You can clear your stored theme preference through your browser's site settings.</li>
        <li>You can contact us to ask what information, if any, we hold about you.</li>
      </ul>

      <h2>8. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy as the Service evolves, particularly if we introduce
        accounts, cloud sync, or payments. We will update the effective date above when we do, and
        will provide additional notice for material changes.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy or how your information is handled, please
        contact us at <a href="mailto:hello@retainly.app">hello@retainly.app</a>.
      </p>

      <h3>A note on this document</h3>
      <p>
        This Privacy Policy is a professionally drafted template based on {BRAND.name}'s current,
        offline-first product design. It is not a substitute for advice from a licensed attorney.
        Please have it reviewed by legal counsel — and update it promptly — before publishing, and
        again before introducing accounts, payments, analytics providers, or data syncing, since
        each of those meaningfully changes what this policy needs to disclose.
      </p>
    </LegalLayout>
  );
}
