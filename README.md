# Frontend Landing Pages — Project Collection

A collection of responsive landing pages and multi-page websites built with plain HTML, CSS, and vanilla JavaScript. Each project focuses on a different UI pattern — app marketing sites, agency portfolios, course platforms, and simple coming-soon pages — while sharing a consistent, modern design approach (custom CSS, Google Fonts, Font Awesome icons).

## 📁 Projects

| Project | Description | Live Demo |
| --- | --- | --- |
| [Leno](#-leno--health--productivity-app-landing-page) | Health & productivity app landing page | [View](https://resilient-croissant-365d29.netlify.app/) |
| [Lumina Creative](#-lumina-creative--agency-portfolio-website) | Creative agency portfolio site | [View](https://lumisami.netlify.app/) |
| [Tutor](#-tutor--video-course-landing-page) | Online video course landing page | [View](https://remarkable-cupcake-e742b3.netlify.app/) |
| [Landing Form Project](#-landing-form-project) | Coming-soon page with contact form | [View](https://cerulean-cassata-97dfa4.netlify.app/) |

---

## 🏥 Leno — Health & Productivity App Landing Page

A responsive marketing/landing website for a mobile app that helps users stay focused, set goals, track progress, and maintain a healthy work-life balance.

🔗 **Live Demo:** https://resilient-croissant-365d29.netlify.app/

### Screenshots
<img width="1902" height="880" alt="Leno screenshot 1" src="https://github.com/user-attachments/assets/66c367a0-3c7c-4b03-a697-d10086b99ce3" />
<img width="1887" height="912" alt="Leno screenshot 2" src="https://github.com/user-attachments/assets/981d625a-315e-48d8-bb9d-546ed32d1042" />
<img width="911" height="817" alt="Leno screenshot 3" src="https://github.com/user-attachments/assets/f0fc5327-83e1-4bb8-85af-017ab38a2d5b" />
<img width="1896" height="563" alt="Leno screenshot 4" src="https://github.com/user-attachments/assets/4267feea-11ea-4975-821b-45ede08cdabe" />

### Features
- Responsive navbar with mobile hamburger menu
- Hero section with call-to-action buttons
- Features grid highlighting app capabilities
- App preview / screenshots section
- Customer testimonials
- Pricing plans (Standard, Advanced, Complete)
- Detailed features breakdown
- Download / call-to-action section
- Footer with quick links and social media icons

### Tech Stack
HTML5 · CSS3 · JavaScript · Font Awesome · Google Fonts (Lato, Open Sans, Poppins, Sansita)

### Project Structure
```
Leno/
├── css/            # Stylesheets
├── images/         # Logo, icons, and image assets
├── js/             # JavaScript files
├── index.html      # Home page
└── details.html    # Pricing & details page
```

### Pages
- **index.html** — Home page (Hero, Features, Preview, Testimonials, Download)
- **details.html** — Pricing options and detailed feature breakdown

---

## 🎨 Lumina Creative — Agency Portfolio Website

A multi-page website for a creative agency. Includes a home page with a lightbox image gallery, an about page with services and team sections, and a contact page with a working form.

🔗 **Live Demo:** https://lumisami.netlify.app/

### Screenshots
<img width="1917" height="907" alt="Lumina Creative screenshot 1" src="https://github.com/user-attachments/assets/f7d7ef60-ac5a-472b-b288-c89290acc0af" />
<img width="678" height="780" alt="Lumina Creative screenshot 2" src="https://github.com/user-attachments/assets/f7ac8bdf-b463-464b-89c2-155099e6c68d" />
<img width="732" height="742" alt="Lumina Creative screenshot 3" src="https://github.com/user-attachments/assets/9688ce2a-f3a1-4b32-8a24-9c65e744084f" />

### Features
- Home page with a filterable portfolio gallery powered by Lightbox2
- About page with services overview and team member profiles
- Contact page with a validated form (name, email, message) via Netlify Forms
- Consistent header/navigation and footer across all pages
- Social media links and contact details in the footer
- Custom Google Fonts and Font Awesome icons

### Tech Stack
HTML5 · CSS3 (custom properties, Flexbox) · [Lightbox2](https://lokeshdhakar.com/projects/lightbox2/) · jQuery · Font Awesome · Google Fonts

### Project Structure
```
├── index.html
├── about.html
├── contact.html
├── css/
│   └── style.css
└── images/
    ├── logo.png
    ├── favicon.ico
    ├── portfolio1.jpg ... portfolio9.jpg
    ├── image1.jpg ... image9.jpg
    └── team1.jpg, team2.jpg, team3.jpg
```

### Notes
- The contact form uses `data-netlify="true"`, so form submissions work out of the box if the site is deployed on Netlify. If hosting elsewhere, you'll need to hook up your own form handler.

---

## 🎓 Tutor — Video Course Landing Page

A responsive landing page for an online video course platform. Includes a hero section, course chapters, summary breakdown, key takeaways, stats, newsletter signup, and a separate contact page.

🔗 **Live Demo:** https://remarkable-cupcake-e742b3.netlify.app/

### Screenshots
<img width="1916" height="905" alt="Tutor screenshot 1" src="https://github.com/user-attachments/assets/ac26b299-c817-45fa-a41f-fcc3b0b0b9c5" />
<img width="1906" height="956" alt="Tutor screenshot 2" src="https://github.com/user-attachments/assets/8a3ce5ca-c2dc-4d7c-a2fc-059d8ccda424" />
<img width="1900" height="908" alt="Tutor screenshot 3" src="https://github.com/user-attachments/assets/cbce07ae-67be-4b36-a48c-2abdb8d3baef" />

### Features
- Fully responsive layout (desktop, tablet, mobile)
- Sticky/scroll-aware navbar with mobile hamburger menu
- Hero section with wave/frame decoration
- "What Will You Learn" topics grid
- Course chapters, summary, and key takeaways sections
- Stats section with counters
- Newsletter subscription form
- Social media links
- Dedicated Contact page with embedded Google Map

### Tech Stack
HTML5 · CSS3 (custom properties, Flexbox, Grid, media queries) · Vanilla JavaScript · Font Awesome · Google Fonts (Lato, Open Sans, Poppins, Sansita)

### Project Structure
```
├── index.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
    ├── logo.svg
    ├── favicon.png
    └── ...
```

---

## 📝 Landing Form Project

A simple and responsive Coming Soon landing page with a contact form.

🔗 **Live Demo:** https://cerulean-cassata-97dfa4.netlify.app/

### Screenshot
<img width="1910" height="921" alt="Landing Form Project screenshot" src="https://github.com/user-attachments/assets/1a25981f-17c5-43c0-adb9-deace217f9e9" />

### Features
- Responsive design
- Coming Soon section
- Contact form
- Email and phone information
- Social media icons
- Background image with gradient overlay
- Modern CSS styling

### Tech Stack
HTML5 · CSS3 · Font Awesome · Google Fonts

### Project Structure
```
LandingFormProject/
├── index.html
├── css/
│   └── style.css
├── images/
│   ├── logo.avif
│   ├── bg.avif
│   └── screenshot.png
└── README.md
```

### Status
This project is currently a simple frontend landing page. The contact form does not have a backend yet.

---

## 🚀 Getting Started (Any Project)

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```
2. Navigate into the relevant project folder
   ```bash
   cd project-folder
   ```
3. Open `index.html` in your browser, or serve it with a local dev server (e.g. VS Code Live Server).

## 🛠️ Common Tech Stack

- HTML5 & CSS3 (Flexbox, Grid, custom properties)
- Vanilla JavaScript (where applicable)
- [Font Awesome](https://fontawesome.com/) for icons
- [Google Fonts](https://fonts.google.com/) for typography
- Deployed on [Netlify](https://www.netlify.com/)

## 📝 License

These projects are open source and available under the [MIT License](LICENSE).
