# Privacy policy requirements for A1 Engineering across four states

**A1 Engineering faces a layered compliance landscape where federal SMS and email laws pose the greatest litigation risk, Texas state law demands the most attention, and Google's own terms impose binding disclosure obligations.** The company operates in four states with dramatically different privacy regimes — Texas has the broadest comprehensive privacy law likely to apply, Tennessee offers a unique NIST-based legal defense, Florida's law targets only billion-dollar companies, and Arizona has no comprehensive privacy law at all. Despite these threshold differences, every state imposes data breach notification requirements, and federal CAN-SPAM and TCPA rules apply nationwide with penalties reaching **$53,088 per email violation** and **$1,500 per unauthorized text message**.

This report provides specific, actionable requirements organized by compliance priority, with exact statutory citations, consent language examples, and a complete privacy policy blueprint.

---

## Which state laws actually apply to A1 Engineering

The four operating states present starkly different compliance obligations. **Texas is the only state whose comprehensive privacy law is likely to apply** to a mid-size engineering services company.

**Texas Data Privacy and Security Act (TDPSA)** — effective July 1, 2024 — applies to any entity conducting business in Texas that is not a "small business" under SBA definitions. For engineering services (NAICS 541330), the SBA threshold is approximately **$25.5 million** in average annual receipts over five years. If A1 Engineering exceeds this figure, the TDPSA applies in full: privacy notice requirements, consumer rights mechanisms, opt-out capabilities, data processing agreements with vendors, and mandatory recognition of **Global Privacy Control (GPC) signals** since January 1, 2025. Even if A1 qualifies as a small business, it still **cannot sell sensitive personal data without consumer consent** — and precise geolocation data qualifies as sensitive.

**Tennessee's Information Protection Act (TIPA)** — effective July 1, 2025 — requires both $25 million in annual revenue *and* processing data of at least **175,000 Tennessee consumers** (the highest threshold of any state). A professional engineering firm would rarely meet both conditions. However, TIPA offers a powerful incentive to comply voluntarily: businesses maintaining a written privacy program that conforms to the **NIST Privacy Framework** gain an **affirmative defense** against violations — unique among all state privacy laws.

**Florida's Digital Bill of Rights (FDBR)** targets companies with **over $1 billion in global revenue** combined with additional criteria like majority revenue from online advertising. A1 Engineering is definitively exempt from its comprehensive provisions. One narrow exception applies universally: any for-profit Florida business must obtain consumer consent before **selling** sensitive personal data.

**Arizona has no comprehensive consumer privacy law** as of February 2026. Multiple bills have been introduced since 2022 but none have passed.

All four states impose **data breach notification obligations** regardless of comprehensive privacy law thresholds. Florida's **30-day** deadline is the shortest and should serve as A1's baseline:

| State | Notification deadline | AG notification trigger |
|---|---|---|
| Florida | 30 days | 500+ individuals affected |
| Tennessee | 45 days | 1,000+ (notify credit agencies) |
| Arizona | 45 days | 1,000+ (notify AG, DHS, credit agencies) |
| Texas | 60 days to individuals | 250+ (notify AG within 30 days) |

---

## CAN-SPAM allows marketing emails without opt-in, but TCPA demands written consent for every text

The federal framework creates a critical asymmetry between email and SMS marketing that A1 Engineering must understand precisely.

**CAN-SPAM operates on an opt-out model.** A1 Engineering can legally send marketing emails to anyone who submits a contact form without explicit prior consent. The law permits commercial email until the recipient unsubscribes. However, every marketing email must include: accurate "From" identification, a non-deceptive subject line, clear identification as an advertisement, a **valid physical postal address**, and a functioning unsubscribe mechanism that remains active for at least 30 days after sending. Unsubscribe requests must be honored within **10 business days**, and opted-out email addresses cannot be sold or transferred. Violations carry penalties of up to **$53,088 per non-compliant email** with no cap on total fines. The FTC's August 2024 enforcement action against Verkada — resulting in a **$2.95 million penalty** for 30 million emails without proper unsubscribe options — demonstrates renewed enforcement vigor.

**The TCPA imposes the opposite framework for text messages: prior express written consent (PEWC) is mandatory before sending any marketing SMS.** Simply collecting a phone number on a contact form does not constitute consent. Valid PEWC requires a written agreement bearing the consumer's signature (electronic signatures via checkbox are acceptable) that clearly authorizes marketing texts by automated system, specifies the phone number, identifies A1 Engineering as the sender, and explicitly states that **consent is not a condition of purchasing any goods or services**. Penalties are **$500 per unauthorized text** (trebled to **$1,500 for willful violations**), with no damages cap and — critically — a **private right of action** allowing consumers to sue directly. Q1 2025 saw **507 TCPA class actions**, a 112% increase over the prior year.

Key 2024-2025 TCPA developments include a **new opt-out rule effective April 11, 2025** requiring businesses to accept consent revocation "by any reasonable means" (not just STOP keywords) and honor it within 10 business days. The FCC's "one-to-one" consent rule was **vacated** by the 11th Circuit in January 2025, meaning consent can still cover communications from the identified seller without the stricter "logically and topically related" requirement the FCC had attempted.

**The distinction between transactional and marketing messages is legally significant.** Responding directly to a project inquiry, delivering a quote, or providing project status updates are transactional communications exempt from most CAN-SPAM requirements and requiring only basic express consent under the TCPA. The moment content shifts to promoting services, sharing newsletters, or nurturing leads beyond the specific inquiry, full compliance obligations apply.

---

## Google Analytics disclosures are contractually mandatory, not optional

Google Analytics Terms of Service Section 7 imposes **binding contractual obligations** that function as de facto legal requirements for any site using GA4. A1 Engineering must: maintain a privacy policy, disclose the use of Google Analytics and how it collects and processes data, disclose cookie usage, and link to Google's data practices page at `google.com/policies/privacy/partners/`. Failure to comply violates the TOS and could result in service termination.

GA4 collects cookies (`_ga` with 2-year expiration, `_ga_<container-id>`, `_gid` with 24-hour expiration), anonymized IP addresses for geolocation, device and browser information, pages visited, session duration, scroll depth, click events, and traffic sources. All of these must be described in the privacy policy.

**Whether GA4 constitutes "selling" data under state laws depends on configuration.** Standard GA4 without advertising features treats Google as a data processor acting on A1's instructions — generally not a "sale." Enabling Google Signals, demographics reporting, or remarketing features shifts Google into an independent controller relationship where data may be used for cross-context behavioral advertising. The California AG's $1.2 million Sephora enforcement action established that transferring data to analytics platforms for cross-context advertising qualifies as a "sale" — a precedent other states may follow.

**Texas's GPC requirement creates the most actionable obligation.** Since January 1, 2025, the TDPSA mandates that businesses honor Global Privacy Control browser signals by automatically opting users out of data sales and targeted advertising. When a visitor arrives with GPC enabled (`navigator.globalPrivacyControl === true`), advertising and targeting scripts must be suppressed. The most practical implementation is a **cookie consent banner** with category controls (Strictly Necessary, Analytics, Marketing) paired with Google Consent Mode v2 to dynamically adjust GA4 behavior based on user preferences.

While no U.S. state explicitly requires an EU-style opt-in cookie banner, cookie consent management is rapidly becoming standard practice and is the clearest path to satisfying Texas's GPC mandate, Google's TOS obligations, and FTC expectations about transparency.

---

## Contact form design determines legal exposure for both channels

The contact form is A1 Engineering's primary data collection point and the origin of its compliance obligations. Proper form design is not a best practice — it is a legal necessity, particularly for SMS.

**Email and SMS consent must be collected separately.** A single checkbox cannot authorize both channels. SMS consent requires substantially more specific disclosures than email, and TCPA case law has consistently held that bundled consent is insufficient.

**Recommended contact form structure:**

The form should collect name (required), email (required), phone number (**optional** — making it optional strengthens the consent argument), project details (required), and project location (optional). Below the input fields, two separate unchecked checkboxes should appear:

**Email marketing checkbox language:**
> ☐ Yes, I would like to receive email updates, newsletters, and promotional communications from A1 Engineering about our services and industry insights. You can unsubscribe at any time.

**SMS marketing checkbox language (TCPA-compliant):**
> ☐ By checking this box, I consent to receive marketing and informational text messages from A1 Engineering at the phone number provided, including messages sent by autodialer. Consent is not a condition of purchase or receiving a quote. Message frequency varies. Message & data rates may apply. Reply STOP to opt out or HELP for help. View our [Privacy Policy] and [Terms of Service].

Below both checkboxes, a general submission disclaimer should read: "By submitting this form, you agree to our Privacy Policy and acknowledge that A1 Engineering will use the information you provide to respond to your inquiry."

**Pre-checked boxes are unacceptable** for SMS consent under the TCPA and are strongly discouraged for email consent by major marketing platforms. A1 Engineering must also implement **consent record-keeping**: timestamp, IP address, exact consent language displayed, form URL, and the consumer's affirmative action — retained for a minimum of **5 years** for SMS and **4 years** for email to cover the relevant statutes of limitations.

Email marketing platforms like Mailchimp and HubSpot impose their own requirements that often exceed CAN-SPAM minimums. Both prohibit purchased or rented lists, require verifiable opt-in evidence, and monitor spam complaint rates. HubSpot distinguishes between implied and explicit consent and recommends explicit opt-in for maintaining sending reputation. **Double opt-in** (confirmation email after form submission) is not legally required but significantly improves deliverability and creates stronger consent documentation.

---

## Every section the privacy policy must contain

Based on the combined requirements of applicable state laws, federal regulations, Google's TOS, and professional engineering obligations, A1 Engineering's privacy policy needs the following sections in this recommended order:

**1. Effective date and last updated date.** Required by all applicable frameworks and essential for demonstrating currency.

**2. Company identity and scope.** Identify A1 Engineering, describe the services offered, states of operation, and what the policy covers (website, contact forms, marketing communications).

**3. Information collected.** Must itemize three categories: directly collected data (name, email, phone, project details, location from contact forms); automatically collected data (IP addresses, browser type, device information, cookies, Google Analytics identifiers, browsing behavior); and any data received from third parties. **Sensitive data must be separately identified** — precise geolocation qualifies as sensitive under both Texas and Tennessee law, requiring affirmative opt-in consent.

**4. How information is used.** Each purpose must be explicitly stated: responding to inquiries, providing engineering services, sending marketing emails, sending SMS communications, website analytics and improvement, legal compliance, and any targeted advertising.

**5. Cookies and tracking technologies.** Disclose GA4 specifically, list cookie names and durations (`_ga`, `_ga_<id>`, `_gid`), explain purposes, link to `google.com/policies/privacy/partners/`, provide opt-out instructions including the Google Analytics Opt-Out Browser Add-on, and describe any advertising features enabled.

**6. Third-party sharing.** Identify categories of recipients: analytics providers (Google), email marketing platforms, SMS marketing providers, web hosting providers, and professional service providers. Describe whether each acts as a data processor or independent controller. State that data processing agreements are maintained requiring processors to handle data only per A1's instructions.

**7. Marketing communications.** Describe email marketing practices and how to unsubscribe (CAN-SPAM compliance). Describe SMS marketing practices including consent requirements, message frequency, opt-out methods (STOP, HELP, or any reasonable means), and quiet hours (8 AM–9 PM recipient's local time).

**8. Consumer rights by state.** Dedicated subsections for each state:
- **Texas residents**: Rights to access, correct, delete, port data; opt-out of sales, targeted advertising, profiling; response within 45 days; at least two methods to submit requests; must honor GPC signals.
- **Tennessee residents**: Same core rights if TIPA thresholds are met; 45-day response; right to appeal.
- **Florida residents**: Note that FDBR applies only to companies exceeding $1B revenue; disclose that sensitive data will not be sold without consent.
- **Arizona residents**: Note absence of comprehensive privacy rights; describe breach notification protections.

**9. Data retention.** Specific periods by data type: contact form leads retained **24–36 months** from last interaction; active client project data retained for project duration plus **7–10 years** (professional liability/statute of limitations); email marketing data retained until unsubscribe plus 30 days processing; SMS consent records retained **minimum 5 years**; GA4 data retained 14 or 26 months per configuration; opt-out records retained **indefinitely**.

**10. Data security.** Describe administrative safeguards (written security policy, employee training, role-based access), technical safeguards (SSL/TLS encryption, firewalls, MFA, regular patching), and physical safeguards (locked offices, secure disposal). All four states require "reasonable" security practices proportionate to data volume and sensitivity.

**11. Children's privacy (COPPA).** State that services are not directed to children under 13, that A1 does not knowingly collect children's data, and that inadvertently collected data will be promptly deleted.

**12. Do Not Track and Global Privacy Control.** Disclose how the site responds to DNT signals (typically: does not respond due to no industry standard). State that the site **honors GPC signals** as a valid opt-out for data sales and targeted advertising (required under TDPSA).

**13. Changes to the policy.** Describe how updates will be communicated and when they take effect.

**14. Contact information.** Company name, physical mailing address, email, phone, and designated privacy contact. Include instructions for submitting data rights requests.

---

## Engineering firms carry heightened confidentiality obligations

Professional engineering licensure creates data protection obligations that go beyond standard privacy law. The **NSPE Code of Ethics Section II.1.c** prohibits engineers from revealing "facts, data, or information without the prior consent of the client or employer except as authorized or required by law." Section III.4 extends this to "confidential information concerning the business affairs or technical processes of any present or former client." This duty has **no defined expiration** — the NSPE Board of Ethical Review has declined to set a time limit.

For A1 Engineering, this means **project details submitted through contact forms constitute confidential client information** requiring protection beyond standard marketing data. The privacy policy should explicitly acknowledge heightened protection for project-related data. Internal data handling should maintain separate classification for client project data versus marketing lead data, with project data subject to stricter access controls, longer retention (10+ years per professional liability requirements), and prohibition on use for marketing purposes without explicit client consent.

Professional liability (E&O) insurance policies typically **do not cover privacy or cyber incidents** without specific endorsements. A1 Engineering should obtain dedicated **cyber liability insurance** covering breach notification costs, forensic investigation, regulatory defense, and business interruption — recommended minimum coverage of **$1–2 million** for a small to mid-size firm.

---

## Penalties make TCPA compliance the highest priority

The litigation risk hierarchy is clear, and A1 Engineering should allocate compliance resources accordingly.

**TCPA violations pose the greatest financial threat** due to the private right of action. A campaign sending unauthorized marketing texts to 1,000 contacts without proper consent could generate **$500,000–$1,500,000 in statutory damages** before attorney's fees. Class actions are the norm — over 80% of TCPA cases proceed as class actions, and Q1 2025 saw a 112% year-over-year increase in filings. Florida is a particular hotspot, as the **Florida Telephone Solicitation Act (FTSA)** provides an additional private right of action with similar damages.

**CAN-SPAM violations rank second** in financial exposure. While there is no private right of action, FTC enforcement has intensified. The 2024 Verkada case produced the largest CAN-SPAM penalty in history at $2.95 million. Penalties of up to $53,088 per non-compliant email accumulate without cap.

**State privacy law violations carry significant but AG-only enforcement risk.** Texas's penalty of $7,500 per violation, with each affected consumer constituting a separate violation, can compound rapidly. The Texas AG formed a dedicated data privacy task force in June 2024 and filed its first TDPSA enforcement action in January 2025. Florida's penalties reach $50,000 per violation, tripled for children's data.

**FTC Section 5 creates a catch-all risk**: if A1 Engineering publishes a privacy policy and fails to follow it, the FTC can pursue enforcement for deceptive practices regardless of whether any specific privacy statute was violated.

---

## Conclusion

A1 Engineering's privacy policy must serve four simultaneous functions: satisfy Texas TDPSA requirements as the most likely applicable comprehensive state law, meet Google Analytics contractual obligations, establish CAN-SPAM-compliant email marketing practices, and create a bulletproof TCPA consent framework for SMS marketing. The highest-priority action is implementing proper **prior express written consent** collection for text messages — this is the single greatest litigation exposure. The second priority is activating **GPC signal recognition** to comply with the Texas mandate effective since January 2025. Third, aligning the overall privacy program with the **NIST Privacy Framework** earns Tennessee's unique affirmative defense while simultaneously satisfying reasonable security standards across all four states. The policy should be posted in the website footer, linked from every contact form, referenced in email footers, and reviewed at minimum annually or whenever data practices, vendors, or applicable laws change.