# Lumina Creative — Agency Portfolio Website

🔗 **Live Demo:** https://lumisami.netlify.app/

A multi-page website for a creative agency, built with plain HTML and CSS. Includes a home page with a lightbox image gallery, an about page with services and team sections, and a contact page with a working form.

## Screenshot

<img width="1917" height="907" alt="image" src="https://github.com/user-attachments/assets/f7d7ef60-ac5a-472b-b288-c89290acc0af" />
<img width="678" height="780" alt="image" src="https://github.com/user-attachments/assets/f7ac8bdf-b463-464b-89c2-155099e6c68d" />
<img width="732" height="742" alt="image" src="https://github.com/user-attachments/assets/9688ce2a-f3a1-4b32-8a24-9c65e744084f" />
![Uploading image.png…]()


## Features

- Home page with a filterable portfolio gallery powered by Lightbox2
- About page with services overview and team member profiles
- Contact page with a validated form (name, email, message) via Netlify Forms
- Consistent header/navigation and footer across all pages
- Social media links and contact details in the footer
- Custom Google Fonts (Lato, Open Sans, Poppins, Sansita) and Font Awesome icons

## Tech Stack

- HTML5
- CSS3 (custom properties, Flexbox)
- [Lightbox2](https://lokeshdhakar.com/projects/lightbox2/) for the image gallery
- jQuery (Lightbox2 dependency)
- [Font Awesome](https://fontawesome.com/) for icons
- Google Fonts

## Project Structure

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

## Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/lumina-creative.git
   ```
2. Navigate into the project folder
   ```bash
   cd lumina-creative
   ```
3. Open `index.html` in your browser, or serve it with a local dev server (e.g. VS Code Live Server).

## Notes

- The contact form uses `data-netlify="true"`, so form submissions work out of the box if the site is deployed on Netlify. If hosting elsewhere, you'll need to hook up your own form handler.

## License

This project is open source and available under the [MIT License](LICENSE).
