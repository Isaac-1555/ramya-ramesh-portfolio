# Product Requirements Document: Aspiring Data Analyst Portfolio Website

## Overview

This document defines the requirements for designing and building a professional portfolio website for an aspiring data analyst. The site should function as a proof-of-work portfolio, not just a personal profile, by emphasizing projects, tools, analysis process, and outcomes. A standard data analyst portfolio typically includes core sections such as Home, About, Projects, Skills/Tools, and Contact, with optional additions like a Blog, Certifications, or a Dashboard Gallery when the client has enough strong content to justify them.[cite:8][cite:21]

The website should help the client achieve one or more of the following goals: job search, internships, freelance lead generation, networking, or graduate application support. The site must present the analyst clearly, demonstrate analytical thinking, and make it easy for recruiters, hiring managers, or prospective clients to assess skills and contact the client.[cite:12][cite:21]

## Product Goals

- Present the client as a credible aspiring data analyst through real projects and clear positioning.
- Showcase practical skills in SQL, Excel, Python or R, and BI tools such as Tableau or Power BI.[cite:11][cite:21]
- Turn each portfolio project into a case study that explains the business question, method, analysis, and findings rather than showing visuals alone.[cite:8][cite:10][cite:14]
- Provide clear pathways for visitors to view projects, download the resume, and contact the client.[cite:12][cite:14]

## Target Audience

Primary audiences:

- Recruiters screening junior or aspiring data analysts.
- Hiring managers reviewing project quality and communication ability.
- Potential freelance clients looking for dashboard, reporting, or analysis work.
- Professional connections or mentors evaluating the client's work.

## Success Criteria

The website should be considered successful if it enables visitors to quickly understand who the client is, what tools they use, and how they solve data problems. The strongest evidence of success includes resume downloads, clicks to GitHub or dashboard links, and inbound contact submissions.[cite:11][cite:12][cite:14]

## Core Site Map

### 1. Home

The Home page should immediately communicate the client's role and value proposition. It should include:

- Name and professional title, such as "Aspiring Data Analyst" or a more targeted role like "Junior Product Data Analyst".
- Short headline focused on value, for example turning raw data into actionable business insights.
- Primary call-to-action buttons such as View Projects, Download Resume, or Contact.
- Featured project previews, ideally 2 to 3 of the strongest projects.
- Tool stack preview with core tools and platforms.
- Short About preview and link to full About page.[cite:17][cite:21]

### 2. About

The About page should establish credibility and context. It should include:

- Short professional bio.
- Career background or transition story if relevant.
- Education.
- Certifications.
- Resume summary.
- Domain interests, such as healthcare, product analytics, retail, finance, or marketing.
- Optional professional headshot if the client wants one.[cite:12][cite:21]

### 3. Projects

The Projects page is the most important page on the website and should act as the portfolio center. It should contain 3 to 6 high-quality projects rather than a large number of weak ones.[cite:8][cite:13]

Each project should include:

- Project title.
- One-line problem statement.
- Dataset source.
- Business or analytical question.
- Tools used.
- Methodology or workflow.
- Key findings.
- Recommendation or conclusion.
- Outcome or impact, ideally quantified where possible.
- Links to GitHub, notebook, dashboard, or presentation.
- Visual proof such as screenshots, charts, or embedded dashboards.[cite:10][cite:11][cite:14]

### 4. Skills and Tools

This page or section should group tools in a way that matches how hiring teams assess analyst candidates. Suggested categories:

- Data querying: SQL.
- Spreadsheets: Excel or Google Sheets.
- Programming: Python or R.
- Visualization: Tableau, Power BI, Looker Studio.
- Analytics methods: data cleaning, exploratory data analysis, dashboarding, regression, segmentation, KPI analysis, reporting.
- Optional domain knowledge areas.[cite:11][cite:21]

### 5. Contact

The Contact page should make outreach frictionless. It should include:

- Professional email.
- LinkedIn link.
- GitHub link.
- Resume download.
- Optional contact form.
- Optional note about response time or the type of opportunities being sought.[cite:12][cite:14]

## Optional Pages

These pages should only be included if the client has enough material to support them well:

- Blog or Insights page for writing about analytical thinking, project breakdowns, or learning notes.[cite:17]
- Certifications page for relevant credentials.
- Dashboard Gallery for multiple embedded Tableau Public or Power BI examples.[cite:11][cite:18]

## Information Architecture and Content Strategy

The site should prioritize scannability. Visitors should be able to understand the client within one minute. The information hierarchy should place results and proof-of-work before long autobiographical text.[cite:18][cite:21]

Recommended Home page flow:

1. Hero section with role statement and CTA.
2. Featured projects.
3. Skills and tools snapshot.
4. About preview.
5. Resume and contact CTA.

Recommended content principles:

- Lead with outcomes and business questions before tools.
- Use short paragraphs and concise bullets.
- Pair every project visual with a short written interpretation.
- Use plain language first, then technical detail.
- Highlight domain specialization if the client has one, such as marketing analytics, product analytics, finance, or healthcare.[cite:13][cite:17][cite:21]

## Project Case Study Template

Each featured project should follow a repeatable structure so the site feels consistent and credible. Use this template:

1. Project title.
2. Project summary in 1 to 2 sentences.
3. Business problem or question.
4. Dataset source and size.
5. Tools used.
6. Process or methodology, such as cleaning, SQL joins, EDA, visualization, modeling, or segmentation.
7. Key insights in plain English.
8. Recommendation or implication.
9. Outcome or measurable result if available.
10. Links to assets, such as GitHub, Tableau Public, Power BI, notebook, or PDF.
11. Visual asset such as dashboard screenshot, chart, or interactive embed.[cite:10][cite:11][cite:14]

A good beginner portfolio often includes 1 to 2 SQL projects and 1 to 2 visualization projects, with an additional Excel project if it is strong and relevant.[cite:13]

## Functional Requirements

### Must Have

- Responsive layout for desktop and mobile.
- Navigation to all core pages.
- Clear hero section with positioning statement.
- Featured project cards.
- Dedicated project detail layout or expandable project sections.
- Resume download link.
- External links to LinkedIn, GitHub, and dashboard platforms.
- Contact section or form.
- Clean typography and accessible layout.

### Should Have

- Filtering or tagging for projects by tool or domain.
- Embedded dashboards where practical.
- Downloadable resume button visible in header or hero.
- Sticky navigation.
- SEO metadata for the client's name and target role.

### Nice to Have

- Blog or writing section.
- Dark mode.
- Analytics integration.
- Case-study-specific templates.
- Testimonials if available.

## Design Requirements

The design should be clean, modern, and professional. It should support data storytelling, not distract from it. A good default visual direction is minimalist, structured, and recruiter-friendly rather than highly decorative.[cite:8][cite:17]

Design principles:

- Keep layout clean and scan-friendly.
- Use strong spacing and clear hierarchy.
- Make project visuals prominent.
- Use a restrained palette with one strong accent color.
- Prioritize readability over visual novelty.
- Ensure mobile usability and fast load times.

## Content Requirements From Client

The builder should collect the following before implementation:

### Identity and Goals

- Full name.
- Preferred professional title.
- Target jobs or industries.
- Main website goal, such as jobs, internships, freelance work, or networking.
- Preferred primary CTA.

### Professional Background

- Short bio.
- Longer bio or background story.
- Education details.
- Certifications.
- Resume PDF.
- Work experience, internships, volunteer work, or competitions.

### Projects

For each project:

- Project title.
- Short summary.
- Problem or question solved.
- Dataset source.
- Tools used.
- Key steps in the analysis.
- Main findings.
- Business recommendation or conclusion.
- Any measurable results.
- GitHub link.
- Notebook link.
- Dashboard link.
- Screenshots, charts, visuals, or slide deck.

### Profiles and Links

- LinkedIn URL.
- GitHub URL.
- Tableau Public URL.
- Power BI portfolio link if available.
- Kaggle, Medium, Notion, or other relevant links.

### Visual and Brand Assets

- Headshot if desired.
- Preferred colors.
- Preferred fonts or style direction.
- Portfolio examples they like.
- Logo or monogram if any.

### Contact and Technical

- Contact email.
- Whether a form is needed.
- Preferred hosting.
- Domain name status.
- Whether the site should be static or editable.
- Need for blog, CMS, or analytics.

## Discovery Questions for Client

The builder should ask the client the following before starting design:

### Goals

- What is the main purpose of the portfolio?
- Which role is being targeted?
- What should a visitor do first?
- Is the site optimized for recruiters, clients, or both?

### Content

- Which projects should be featured?
- Which 2 to 3 projects are the strongest?
- Are there live dashboards, notebooks, or only screenshots?
- Are there measurable project outcomes?
- Should certifications or blog content be included?

### Brand and Design

- Should the site feel corporate, modern, technical, academic, or creative?
- Is there an existing brand style to match?
- Should a headshot be included?
- Which portfolio examples or references are liked most?[cite:8][cite:17]

### Career Background

- Is the client a student, recent graduate, career switcher, or early professional?
- What industries are they targeting?
- Which tools are they strongest in?
- What experience should be emphasized most?

### Technical Preferences

- Static site or CMS?
- Need downloadable resume?
- Need blog support?
- Need filtering or search?
- Need dashboard embeds?
- Need analytics and SEO support?

## Recommended Technical Approach

The implementation can be done as a simple static site or with a lightweight framework depending on the coding agent's stack preference. The final result should emphasize maintainability, responsive design, and easy content updates. A static-first architecture is acceptable if the client content is relatively stable, while a CMS-backed approach is appropriate if the client expects to update projects regularly.

Suggested implementation priorities:

1. Define content model for pages and project case studies.
2. Build reusable project card and project detail components.
3. Build responsive layout and navigation.
4. Add resume and contact CTAs.
5. Add SEO metadata and social preview tags.
6. Add optional dashboard embeds and blog only if content justifies them.

## Content Quality Standards

The site should avoid generic self-promotion language. Generic phrases such as broad motivational statements are weaker than specific problem-solving claims. The copy should sound credible and concrete, especially on the Home and Projects pages.[cite:17][cite:21]

Project descriptions should emphasize:

- What problem was solved.
- What data was used.
- What analysis was performed.
- What insights were discovered.
- Why the project matters.

## Deliverables

The coding agent should produce:

- A complete responsive portfolio website.
- Home, About, Projects, Skills/Tools, and Contact pages or equivalent sections.
- Reusable template for project case studies.
- Resume download integration.
- External profile links.
- Mobile-friendly navigation.
- Clean, production-ready UI.

Optional deliverables if content exists:

- Blog or Insights page.
- Certifications page.
- Dashboard Gallery.
- Theme toggle.

## Final Notes for the Coding Agent

This portfolio should feel like a professional analyst showcase, not a generic personal website. The site should lead with proof-of-work and help a recruiter or client quickly evaluate skills, tools, and analytical thinking. When in doubt, simplify the visual design and strengthen the project storytelling.[cite:8][cite:21]
