LeuTech Devs — Web Application Development Project
LeuTech Devs is a fully responsive, multi-page web application built for a fictional digital agency.
It was developed as a submission for the Web Application Development Project Assignment, meeting all core requirements: 8 interlinked pages, a unified design system, Bootstrap 5 responsiveness, and multiple JavaScript interactivity features.


📋 Project Overview
Attribute	Details
Theme	Digital agency / technology solutions provider
Pages	Home, About, Services, Blog, Gallery, FAQ, Testimonials, Contact
Technologies	HTML5, CSS3, JavaScript (ES6+), Bootstrap 5, Git & GitHub
Responsive	Yes – desktop, tablet, mobile (Bootstrap grid + custom media queries)
Interactive Features	4 distinct JavaScript-powered features (see below)
Version Control	36+ incremental commits with meaningful messages, first commit 15 June 2026
✨ Features (Implemented)
Dark / Light Mode Toggle

Persistent preference via localStorage (leutech-theme key).

Button in the navigation bar; toggles CSS variables for a seamless visual switch.

Contact Form with Client-Side Validation

Real‑time validation for name, email, subject, and message.

Displays success/error feedback without page reload.

Invalid fields are highlighted with Bootstrap’s is-invalid class.

Filterable Project Gallery

Categories: All, Web, Mobile, Cloud, Design.

Clicking a filter hides/show cards using a .hidden CSS class.

Active filter button is visually highlighted.

FAQ Search with Live Filtering

Input field that filters accordion items by question or answer text.

Matching items are highlighted and remain expandable.

Bonus – Smooth Scrolling

Internal anchor links (e.g., #) scroll smoothly instead of jumping.

Bootstrap Tooltips

Initialised globally; ready for any element with data-bs-toggle="tooltip".

📁 Folder Structure
text
project-root/
├── index.html
├── about.html
├── services.html
├── blog.html
├── gallery.html
├── faq.html
├── testimonials.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
All HTML pages share the same navigation bar, footer, and consistent styling.

External CSS and JavaScript files are kept in separate folders for clean separation.

🚀 How to Run Locally
Clone the repository

bash
git clone https://github.com/your-username/leutech-devs.git
Open any .html file in your browser (double-click or use a live server).

For the best experience, use VS Code Live Server or a similar tool.

No build steps or dependencies are required – all assets are loaded via CDN.

🛠 Technologies Used
Technology	Purpose
HTML5	Semantic structure of all pages
CSS	Custom styling, CSS variables, media queries
Bootstrap 5	Grid system, components (navbar, cards, accordion, forms), responsiveness
JavaScript	DOM manipulation, event handling, localStorage
Git & GitHub	Version control, incremental commits
📦 External Resources
Bootstrap 5 – CDN

Placeholder Images – Picsum Photos – used for team photos, blog thumbnails, gallery items, and client avatars.


🧪 Testing & Compatibility
Tested on the latest versions of Google Chrome, Mozilla Firefox, and Microsoft Edge.

Responsive design verified on real devices (iPhone, iPad, and various screen sizes using DevTools).