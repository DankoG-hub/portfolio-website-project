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
