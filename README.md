# DEWALEON — Healthcare Careers Platform (prototype)

A mobile-responsive front-end prototype for a healthcare-specific jobs, professional directory and networking product, initially aimed at Southwest Nigeria.

> **Brand:** DEWALEON. Before public launch, check business-name, domain and trademark availability.

## What works in this prototype

- Responsive homepage and navigation for mobile and desktop
- Sample healthcare job cards and job search by keyword, location and job type
- Sample professional directory with keyword and location filtering
- Employer and community information pages
- Demo sign-up/login/application/profile dialogs
- Updated DEWALEON heart-and-care pulse logo and footer branding
- Direct messaging feature concept shown as planned functionality
- Save-job interaction for the current browser session

## Important limitations

This is a front-end demonstration only. The job listings and professional profiles are fictional sample data, not live vacancies or verified people. The sign-up form does not send or store information. There is no real authentication, database, file upload, real messaging, payment, or credential verification yet. The messaging card is a product concept only. Do not use this prototype to collect sensitive or real applicant data.

## Run it locally (beginner-friendly)

### Option A — quickest
1. Download and unzip the project.
2. Open the `healthcare-careers-platform` folder.
3. Double-click `index.html` to open it in a browser.

Most of the prototype works without a server. For a more realistic local preview, use Option B.

### Option B — local development server
1. Install Node.js LTS from https://nodejs.org/ if it is not already installed.
2. Open a terminal in this folder.
3. Run:

   ```bash
   npx serve .
   ```

4. Open the local URL shown in the terminal.

This prototype uses plain HTML, CSS and JavaScript, so there is no build step.

## Deploy free/low-cost preview with Netlify

1. Visit https://app.netlify.com/ and create an account.
2. Use Netlify's manual deploy / drag-and-drop option to upload the folder containing `index.html`, `styles.css`, and `app.js` (or drag the unzipped folder into the deploy area, following the current Netlify instructions).
3. Netlify will provide a preview URL. Test it on both mobile and desktop.
4. A custom domain can be connected later; domains generally cost extra.

You can also deploy the static folder with GitHub Pages. Hosting providers change their free-tier limits from time to time, so check current terms before launch.

## Suggested next development stages

1. **Confirm brand and requirements:** select a name, interview 5–10 nurses and 3–5 healthcare employers, and validate the biggest pain points.
2. **Backend foundation:** create a Supabase project, define user roles (professional, employer, admin), and configure row-level security before storing any real data.
3. **Authentication and profiles:** email verification, password reset, consent, privacy settings, profile/CV management.
4. **Jobs and applications:** persistent listings, application status, employer dashboard and notifications.
5. **Verification workflow:** manual review and regulator-specific checks; clearly distinguish uploaded, pending, verified and expired credentials.
6. **Safety and compliance:** privacy policy, terms, data-retention plan, reporting/moderation, employer checks and Nigerian data protection review.
7. **Pilot:** start with a small set of real employers in one Southwest city, then expand regionally.
8. **Mobile app:** once the web product is validated, build a cross-platform mobile app that shares the same backend.

## Project structure

```text
healthcare-careers-platform/
├── index.html   # Pages/views and accessible interface markup
├── styles.css   # Responsive layout and visual design
├── app.js       # Demo data, filtering, navigation and interactions
└── README.md    # Setup, deployment and roadmap
```

## Product decisions still to make

- Final brand name and domain
- Launch city for the first pilot
- Whether profiles are searchable by default or only by consent
- Which professional credentials to support first
- Whether job posting is free during the pilot
- Moderation, reporting and employer-verification procedures
