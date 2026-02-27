import { useEffect } from 'react';
import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>

            <div className="space-y-8 text-muted-foreground">
              <p className="text-sm text-muted-foreground">
                <strong>Effective Date:</strong> March 1, 2026<br />
                <strong>Last Updated:</strong> February 26, 2026
              </p>

              {/* Company Identity and Scope */}
              <section>
                <h2 className="font-heading text-2xl font-semibold mb-3 text-foreground">
                  1. Company Identity and Scope
                </h2>
                <p>
                  A1 Engineering ("we," "us," or "our") is a US-based engineering firm led by licensed
                  Professional Engineers, providing comprehensive land development and permitting services
                  in Tennessee, Texas, Arizona, and Florida. This Privacy Policy describes how we collect,
                  use, and protect your personal information when you visit our website, submit contact
                  forms, or receive marketing communications from us.
                </p>
              </section>

              {/* Information We Collect */}
              <section>
                <h2 className="font-heading text-2xl font-semibold mb-3 text-foreground">
                  2. Information We Collect
                </h2>

                <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">
                  Information You Provide Directly
                </h3>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Contact information (name, email address, phone number)</li>
                  <li>Project details and descriptions</li>
                  <li>Project location information</li>
                  <li>Communications you send to us</li>
                </ul>

                <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">
                  Information Collected Automatically
                </h3>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>IP address and general location (city/state level)</li>
                  <li>Browser type and device information</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referral source (how you found our website)</li>
                  <li>Google Analytics identifiers and cookies</li>
                </ul>

                <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">
                  Sensitive Personal Information
                </h3>
                <p>
                  We do not intentionally collect sensitive personal information such as Social Security
                  numbers, financial account information, or health data. If project location information
                  constitutes precise geolocation data (GPS coordinates), we will only collect this with
                  your explicit consent.
                </p>
              </section>

              {/* How We Use Your Information */}
              <section>
                <h2 className="font-heading text-2xl font-semibold mb-3 text-foreground">
                  3. How We Use Your Information
                </h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Responding to your inquiries and providing quotes</li>
                  <li>Delivering engineering services you request</li>
                  <li>Sending marketing emails (only with your consent)</li>
                  <li>Sending marketing text messages (only with your express written consent)</li>
                  <li>Improving our website through analytics</li>
                  <li>Complying with legal obligations</li>
                  <li>Protecting our rights and preventing fraud</li>
                </ul>
              </section>

              {/* Cookies and Tracking */}
              <section>
                <h2 className="font-heading text-2xl font-semibold mb-3 text-foreground">
                  4. Cookies and Tracking Technologies
                </h2>
                <p className="mb-3">
                  We use Google Analytics to understand how visitors interact with our website. Google
                  Analytics uses cookies to collect information such as:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li><code className="bg-muted px-1 py-0.5 rounded">_ga</code> cookie (expires after 2 years) — distinguishes unique users</li>
                  <li><code className="bg-muted px-1 py-0.5 rounded">_ga_&lt;container-id&gt;</code> cookie — persists session state</li>
                  <li><code className="bg-muted px-1 py-0.5 rounded">_gid</code> cookie (expires after 24 hours) — distinguishes users</li>
                </ul>
                <p className="mb-3">
                  To learn more about how Google uses data from sites that use their services, visit{' '}
                  <a
                    href="https://policies.google.com/technologies/partner-sites"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    google.com/policies/privacy/partners/
                  </a>.
                </p>
                <p>
                  You can opt out of Google Analytics by installing the{' '}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Google Analytics Opt-out Browser Add-on
                  </a>.
                </p>
              </section>

              {/* Third-Party Sharing */}
              <section>
                <h2 className="font-heading text-2xl font-semibold mb-3 text-foreground">
                  5. How We Share Your Information
                </h2>
                <p className="mb-3">
                  We may share your information with the following third parties:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Analytics Providers:</strong> Google Analytics (acting as our data processor)</li>
                  <li><strong>Email Marketing Platforms:</strong> For sending newsletters and updates</li>
                  <li><strong>SMS Marketing Providers:</strong> For sending text message communications (with consent)</li>
                  <li><strong>Web Hosting and Infrastructure Providers:</strong> For website operation</li>
                  <li><strong>Professional Service Providers:</strong> Legal, accounting, and consulting services</li>
                </ul>
                <p className="mt-3">
                  We require all third-party service providers to maintain appropriate data security and
                  only process your data according to our instructions. We do not sell your personal
                  information to third parties.
                </p>
              </section>

              {/* Marketing Communications */}
              <section>
                <h2 className="font-heading text-2xl font-semibold mb-3 text-foreground">
                  6. Marketing Communications
                </h2>

                <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">Email Marketing</h3>
                <p className="mb-3">
                  If you opt in to receive marketing emails, we will send you newsletters, service updates,
                  and promotional content. You can unsubscribe at any time by clicking the "Unsubscribe"
                  link at the bottom of any marketing email. We will process your unsubscribe request within
                  10 business days.
                </p>

                <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">
                  Text Message (SMS) Marketing
                </h3>
                <p className="mb-3">
                  We will only send marketing text messages if you provide express written consent by
                  checking the SMS consent box on our contact form. By consenting, you agree to receive
                  automated marketing messages at the phone number provided. Consent is not a condition
                  of purchasing services or receiving a quote.
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Message frequency varies based on your engagement</li>
                  <li>Message and data rates may apply from your carrier</li>
                  <li>Reply STOP to opt out at any time</li>
                  <li>Reply HELP for assistance</li>
                  <li>We will honor opt-out requests within 10 business days</li>
                  <li>Marketing messages will only be sent between 8 AM and 9 PM in your local time zone</li>
                </ul>
              </section>

              {/* Your Privacy Rights by State */}
              <section>
                <h2 className="font-heading text-2xl font-semibold mb-3 text-foreground">
                  7. Your Privacy Rights
                </h2>

                <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">
                  Texas Residents (TDPSA)
                </h3>
                <p className="mb-2">If you are a Texas resident, you have the right to:</p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Confirm whether we are processing your personal data and access that data</li>
                  <li>Correct inaccuracies in your personal data</li>
                  <li>Delete personal data you have provided to us</li>
                  <li>Obtain a copy of your data in a portable format</li>
                  <li>Opt out of the sale of your personal data (we do not sell personal data)</li>
                  <li>Opt out of targeted advertising</li>
                  <li>Opt out of profiling in furtherance of automated decisions</li>
                </ul>
                <p className="mb-3">
                  We will respond to verifiable requests within 45 days. We honor Global Privacy Control
                  (GPC) signals as valid opt-out requests for data sales and targeted advertising.
                </p>

                <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">
                  Tennessee Residents (TIPA)
                </h3>
                <p className="mb-3">
                  Tennessee residents have similar rights to access, correct, delete, and port their data,
                  as well as opt out of sales and targeted advertising. We will respond within 45 days and
                  provide appeal rights if your request is denied.
                </p>

                <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">
                  Florida Residents
                </h3>
                <p className="mb-3">
                  Florida's Digital Bill of Rights applies to companies with over $1 billion in global
                  revenue. While we do not meet this threshold, we voluntarily commit not to sell sensitive
                  personal data without your explicit consent.
                </p>

                <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">
                  Arizona Residents
                </h3>
                <p className="mb-3">
                  Arizona does not currently have a comprehensive consumer privacy law. However, you are
                  protected by data breach notification requirements and federal privacy laws.
                </p>

                <p className="font-semibold">
                  To exercise any of these rights, contact us at: privacy@a1-engr.com or (214) 382-9584
                </p>
              </section>

              {/* Data Retention */}
              <section>
                <h2 className="font-heading text-2xl font-semibold mb-3 text-foreground">
                  8. Data Retention
                </h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Contact form inquiries:</strong> 24-36 months from last interaction</li>
                  <li><strong>Active client project data:</strong> Duration of project plus 7-10 years (professional liability requirements)</li>
                  <li><strong>Email marketing data:</strong> Until you unsubscribe, plus 30 days for processing</li>
                  <li><strong>SMS consent records:</strong> Minimum 5 years from consent date</li>
                  <li><strong>Google Analytics data:</strong> 14 months (our current configuration)</li>
                  <li><strong>Opt-out records:</strong> Retained indefinitely to honor your preferences</li>
                </ul>
              </section>

              {/* Data Security */}
              <section>
                <h2 className="font-heading text-2xl font-semibold mb-3 text-foreground">
                  9. Data Security
                </h2>
                <p className="mb-3">
                  We implement reasonable administrative, technical, and physical safeguards to protect
                  your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Administrative:</strong> Written security policies, employee training, role-based access controls</li>
                  <li><strong>Technical:</strong> SSL/TLS encryption, firewalls, multi-factor authentication, regular security updates</li>
                  <li><strong>Physical:</strong> Secure office facilities, locked file cabinets, secure document disposal</li>
                </ul>
                <p className="mt-3">
                  As a licensed engineering firm, we maintain heightened confidentiality protections for
                  all client project information in accordance with professional engineering ethics standards.
                </p>
              </section>

              {/* Children's Privacy */}
              <section>
                <h2 className="font-heading text-2xl font-semibold mb-3 text-foreground">
                  10. Children's Privacy
                </h2>
                <p>
                  Our services are not directed to children under 13 years of age. We do not knowingly
                  collect personal information from children. If we learn that we have collected information
                  from a child under 13, we will promptly delete it.
                </p>
              </section>

              {/* Do Not Track and GPC */}
              <section>
                <h2 className="font-heading text-2xl font-semibold mb-3 text-foreground">
                  11. Do Not Track and Global Privacy Control
                </h2>
                <p className="mb-3">
                  Our website does not respond to Do Not Track (DNT) browser signals due to the lack of
                  an industry standard for implementation.
                </p>
                <p>
                  We do honor <strong>Global Privacy Control (GPC)</strong> signals as valid opt-out
                  requests for the sale of personal data and targeted advertising, as required by Texas law.
                </p>
              </section>

              {/* Data Breach Notification */}
              <section>
                <h2 className="font-heading text-2xl font-semibold mb-3 text-foreground">
                  12. Data Breach Notification
                </h2>
                <p>
                  In the event of a data breach affecting your personal information, we will notify you
                  in accordance with applicable state law timelines (within 30-60 days depending on state).
                  We maintain cyber liability insurance and incident response procedures.
                </p>
              </section>

              {/* Changes to This Policy */}
              <section>
                <h2 className="font-heading text-2xl font-semibold mb-3 text-foreground">
                  13. Changes to This Privacy Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. When we make material changes, we
                  will update the "Last Updated" date at the top of this page and notify you via email if
                  you have subscribed to our communications. Continued use of our services after changes
                  take effect constitutes acceptance of the updated policy.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="font-heading text-2xl font-semibold mb-3 text-foreground">
                  14. Contact Information
                </h2>
                <p className="mb-3">
                  If you have questions about this Privacy Policy or wish to exercise your privacy rights,
                  please contact us:
                </p>
                <div className="glass-card rounded-lg p-6 bg-muted/50">
                  <p className="font-semibold text-foreground">A1 Engineering</p>
                  <p>Privacy Officer</p>
                  <p>Email: privacy@a1-engr.com</p>
                  <p>Phone: (214) 382-9584</p>
                  <p>Serving: Tennessee, Texas, Arizona, Florida</p>
                </div>
              </section>

              {/* Back to Home */}
              <div className="pt-8">
                <Link
                  to="/"
                  className="inline-flex items-center text-primary hover:underline font-medium"
                >
                  ← Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
