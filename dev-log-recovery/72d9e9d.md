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