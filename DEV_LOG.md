# Goluza Interface Studio — Development Log

Project: Goluza Interface Studio Website
Website: https://dankogoluza.com
Repository: DankoG-hub/portfolio-website-project

---

## 2026-10-16 — Terms and Conditions Integration

### Objective

Create and integrate a dedicated Terms and Conditions page for Goluza Interface Studio using Termly.

### Completed Work

- Upgraded Termly subscription to Pro+.
- Generated Terms and Conditions for the business.
- Configured Irish governing law.
- Added registered sole-trader business information.
- Configured contact and business address details.
- Reviewed the generated legal document.
- Created a dedicated `terms.html` page.
- Integrated the Termly policy using its code snippet.
- Added the Termly policy-loading JavaScript.
- Created a responsive layout with a centred content area.
- Confirmed the policy renders correctly in local preview.

### Technical Implementation

File: `terms.html`

Integration method: Termly Code Snippet

The website loads the published Terms and Conditions dynamically using Termly's policy embed.

This allows future updates to the policy through the Termly dashboard without manually replacing the HTML.

### Deployment

- Local testing: Completed
- Termly publication: Completed
- Hostinger deployment: Verify
- Footer navigation: Verify
- GitHub commit: Pending

### Outstanding Items

- Ask Termly support about sole-trader legal wording.
- Review intellectual property provisions relating to client enquiry submissions.
- Review generated data-transfer and liability provisions.
- Configure the Cookie Policy and consent banner.
- Review the existing Privacy Policy.
- Configure Google Ads and Google Analytics with consent controls.

---

## 2026-10-17 — Website Documentation and Architecture Review

### Objective

Improve project documentation and establish a clear reference for website maintenance and legal integrations.

### Website Architecture

- Front end: HTML, CSS and JavaScript.
- Hosting provider: Hostinger.
- Version control: Git and GitHub.
- Development environment: Visual Studio Code.
- Repository: DankoG-hub/portfolio-website-project.

### Legal Documentation

- Privacy Policy: `privacy-policy.html`
- Terms and Conditions: `terms.html`
- Cookie Policy: Pending review/integration.

Privacy and legal documents are managed through Termly.

Published policies are embedded into their respective HTML pages, allowing document updates to be managed through the Termly dashboard.

### Development Workflow

1. Modify files locally in VS Code.
2. Test changes using a local development server.
3. Review changes with `git status` and `git diff`.
4. Commit changes to GitHub.
5. Deploy relevant production files to Hostinger.
6. Verify changes on the live website.

### Security and Documentation

- Internal development logs remain outside Hostinger.
- Only production website files are uploaded to `public_html`.
- Credentials and API keys are excluded from documentation.
- Client-specific data is kept separate from public repositories.

### Next Steps

- Complete Cookie Policy integration.
- Configure Termly consent management.
- Implement Google Analytics 4 and Google Ads tracking with appropriate consent controls.
- Review legal policy wording with Termly support.

---

## 2026-10-19 — Cookie Compliance and Analytics Planning

### Development Focus

Continued development and maintenance of the
Goluza Interface Studio portfolio website.

Today's work focused on website compliance,
cookie management, and preparation for future
analytics and advertising integrations.

The objective is to establish a reliable foundation
for privacy-conscious website analytics, conversion
measurement, and digital marketing.

### Work Completed

- Reviewed the website's current legal documentation.
- Confirmed that the Privacy Policy and Terms and
  Conditions are published.
- Initiated a website cookie scan through Termly.
- Investigated initial cookie scanning errors.
- Reviewed the website's robots.txt configuration.
- Confirmed that robots.txt permits crawler access.
- Successfully completed a subsequent cookie scan.
- Generated an initial Cookie Policy draft.
- Reviewed the preliminary cookie classifications.
- Identified additional configuration requirements
  before completing the consent management setup.

### Technical Observations

The initial cookie scan identified two cookies
across one scanned page.

Further verification is required to ensure the
cookie inventory accurately reflects the website's
technologies and third-party integrations.

The Cookie Policy has been generated but has not
yet been integrated into the production website.

Google Analytics and advertising measurement
integrations remain pending.

### Planned Development — Next Session

#### 1. Cookie Inventory Review

- Review cookies identified by Termly.
- Investigate any unclassified cookies.
- Verify cookie categories and purposes.
- Identify additional third-party technologies
  that may require documentation.

#### 2. Cookie Policy Integration

- Review and publish the Cookie Policy in Termly.
- Create or update the cookies.html page.
- Integrate the dynamic Termly policy embed.
- Apply consistent styling across legal pages.
- Test the page locally.
- Deploy the page to Hostinger.
- Verify the live document.

#### 3. Website Navigation

- Update the Cookie Policy link in the footer.
- Verify navigation between legal pages.
- Test relevant links on desktop and mobile.

#### 4. Consent Management

- Configure the Termly consent banner.
- Review cookie categories and visitor choices.
- Configure appropriate consent defaults.
- Install and test the consent management script.
- Verify that non-essential tracking respects
  the visitor's consent preferences.

#### 5. Google Integrations

- Review Google Consent Mode v2 implementation.
- Activate Google Ads tagging when consent
  management is correctly configured.
- Integrate Google Analytics 4.
- Define meaningful website conversion events.
- Test measurement and consent behaviour.
- Repeat cookie scanning after implementation.

#### 6. Deployment Workflow Review

- Investigate GitHub integration with Hostinger.
- Evaluate options for automated deployments.
- Review production file and directory structure.
- Ensure internal documentation and development
  resources remain outside public_html.
- Maintain separation between development
  and production environments.

### Development Notes

The implementation will be completed incrementally,
with testing performed before production deployment.

Priority will be given to maintainability,
privacy-conscious development, and reliable
integration of third-party services.

All significant changes will be documented
and tracked through Git version control.

### Current Status

Privacy Policy: Published
Terms and Conditions: Published
Cookie Policy: Generated, integration pending
Consent Banner: Pending
Google Analytics: Pending
Google Ads Conversion Tracking: Pending

---

## 2026-10-21 — Termly Integration and Legal Footer Milestone

### Work Completed

- Integrated the Termly Cookie Policy in cookies.html (0551be3).
- Added Termly consent management across website pages (9dde4ea).
- Updated the Privacy Policy with Termly integration (6fb7c25).
- Corrected legal links to /privacy-policy.html, /terms.html,
  and /cookies.html on the home, about, and projects pages.
- Corrected the home page contact Privacy Policy link.
- Added Cookie Preferences links using termly-display-preferences
  to the home, about, projects, and three case-study pages.
- Added case-study legal navigation and matching CSS, including
  wrapping, link colours, and hover and keyboard-focus styling.
- Committed and pushed the focused website update as 03d6c2d.

### Validation and Scope

- Reviewed staged differences for exactly the six intended HTML files.
- Verified legal destinations exist in Git, preference hooks are present,
  and the existing Termly resource-blocker scripts remain in place.
- Checked case-study legal CSS against the local intended rules.
- Passed Git whitespace checks and verified working HTML stayed unchanged.
- Preserved unrelated local edits and formatting; excluded the local
  imprint.html and privacy.html deletions from the commit.
- Kept this development-log update in a separate commit.

### Follow-up

- Verify deployment and test the consent banner and Cookie Preferences
  interaction in a browser, including desktop and mobile layouts.
- Confirm non-essential tracking respects consent before enabling
  analytics or advertising measurement.
- The unchanged local working copies still contain the duplicate home
  footer separator and old about/projects privacy paths; preserve the
  committed corrections when integrating the remaining local changes.

---

## 2026-10-22 — Google Analytics setup

- Created the Goluza Interface Studio Google Analytics 4 account, property and website data stream.
- Configured reporting for Ireland with EUR currency.
- Reviewed Termly settings: Europe and “All other regions” use Basic Google Consent Mode with opt-in consent.
- Replaced the commented Google Ads block in `index.html` with Analytics scripts controlled by Termly’s analytics consent category.
- Google detected the tag on the live website.
- Confirmed incoming data in Realtime: one user, with `page_view`, `session_start` and `first_visit` events.

### Remaining work
- Add the consent-controlled Analytics scripts to the other public pages.
- Verify blocking before consent, after declining, and when accepting analytics only.
- Configure Google Ads under advertising consent.
- Trigger the “Request quote” conversion only after a successful enquiry submission.

Analytics currently runs on the homepage only. Ads tracking and consent verification remain unfinished.

---

## 2026-10-23 — Planning the website completion phase

Today was a rest day, with no implementation changes. I reviewed the remaining work for Goluza Interface Studio and outlined the next phase: completing measurement, expanding content, and checking the website’s performance and consistency.

### Planned work

- Extend the consent-controlled Google Analytics setup to all relevant public pages.
- Complete Google Ads configuration and track successful enquiries as conversions.
- Test tracking before consent, after declining, and with individual consent categories selected.
- Review every page for consistent navigation, footer links, typography and responsive layouts.
- Create useful blog articles and supporting pages that explain the studio’s services and demonstrate practical experience.
- Review SEO fundamentals, including titles, descriptions, headings, internal links, canonical URLs, sitemap and indexing.
- Convert suitable images to WebP, optimise image dimensions and review lazy loading.
- Check loading speed and usability on mobile and desktop.
- Review security settings, dependencies, form handling and third-party integrations.
- Complete a final check for broken links, missing assets and accessibility issues.

The next working session will begin with Analytics coverage and consent testing, followed by Google Ads. These items remain planned work; today’s update records priorities rather than completed implementation.

---

## 24 October 2026 — Google Analytics & Google Ads Integration

**Project:** Goluza Interface Studio — Portfolio Website

### Completed
- Verified Google Analytics 4 integration (`G-DDKWC0W083`) using Google Tag Assistant and GA4 Realtime.
- Confirmed Termly consent behaviour: GA4 records events after Analytics consent is granted, while declined consent prevents Google Analytics scripts and collection requests in our tests.
- Tested Termly's independent Analytics and Advertising consent preferences.
- Refactored the homepage's Google tag configuration to use a shared `dataLayer` and `gtag()` function.
- Confirmed that GA4 remained functional after the initial code changes.
- Identified the existing Google Ads *Request quote* conversion and reviewed its configuration.
- Verified the Formspree contact form workflow: successful submission redirects to `pages/thank-you.html`, and test messages arrive in the business inbox.
- Created a backup of the working homepage outside Hostinger's public directory.

### Pending
- Complete Google Ads conversion tracking using the existing conversion action.
- Trigger conversion measurement only after confirmed successful Formspree submissions.
- Ensure Google Ads respects Termly advertising consent independently of Analytics consent.
- Test the completed integration and synchronise the final code with VS Code/GitHub.
- Extend the verified GA4 installation to other relevant portfolio pages.

**Status:** Termly + GA4 tested successfully. Google Ads integration pending. No Google Ads tracking code deployed in the final configuration.

---

### 26 October 2026 — Analytics, Consent & Conversion Tracking

- Integrated Termly consent management across website pages.
- Configured Google Analytics 4 (`G-DDKWC0W083`) with analytics consent requirements.
- Added Google Ads destination (`AW-18293186545`) under advertising consent.
- Verified GA4 network activity and Realtime reporting.
- Ran Termly Google Consent Mode Validator; no compliance issues reported.
- Updated Formspree contact handler to trigger a Google Ads conversion after successful submission, subject to advertising consent.
- Synchronised website changes between Hostinger and local VS Code project.

**Remaining verification:** Confirm Google Ads conversion event in Tag Assistant, review consent withdrawal behaviour, and complete final cookie scan.
