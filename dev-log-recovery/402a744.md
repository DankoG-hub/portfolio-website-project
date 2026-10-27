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

## Future Development Entries

Add new entries above this section, with the newest updates appearing first.