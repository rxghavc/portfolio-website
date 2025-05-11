# Portfolio Website

This is my personal portfolio website, showcasing my projects, skills, and professional journey. The website is built using modern web development technologies and is designed to be responsive and user-friendly.

Access the website at: [raghavc-portfolio.vercel.app](https://raghavc-portfolio.vercel.app/)

## Features

- **Hero Section**: Introduction and overview with animated background patterns.
- **Projects Section**: Highlights key projects with links to their GitHub repositories.
- **Experience Section**: Details professional and academic experiences.
- **Contact Section**: Provides a way to get in touch.
- **Dark Mode**: Toggle between light and dark themes with dynamic favicon updates.
- **Responsive Design**: Optimized for all screen sizes, including mobile, tablet, and desktop.
- **Hover Animations**: 3D effects on buttons and bar animations under navbar links.
- **Collapsible Navbar**: Hamburger menu for smaller screens.

## Technologies Used

- **Frontend**: React, HTML, CSS, JavaScript
- **Icons**: FontAwesome, React Icons
- **Hosting**: Vercel

## File Structure

- **public/**: Contains static assets like the favicon, manifest, and my CV.
  - **assets/**: Contains images and documents.
    - **images/**: Logos and other images used in the website.
      - `rclogo.png`: Logo for light mode.
      - `rclogo-dark.png`: Logo for dark mode.
    - `Sai_Raghavan_Commandur_CV.pdf`: My downloadable CV linked in the website.
  - `index.html`: The main HTML file.
  - `manifest.json`: Web app manifest for PWA support.
  - `robots.txt`: Instructions for web crawlers.

- **src/**: Contains the main application code.
  - **App.js**: Main application file managing theme toggling and animations.
  - **index.js**: Entry point of the application.
  - **index.css**: Global styles and CSS variables for light and dark themes.
  - **components/**: Reusable React components for different sections of the website.
    - **Header/**: Contains the header and navigation bar.
      - `Header.js`: Header component with responsive navbar and theme toggle.
      - `Header.css`: Styles for the header, including hover animations and responsive design.
    - **Hero/**: Contains the hero section.
      - `Hero.js`: Hero section with animated background patterns.
      - `Hero.css`: Styles for the hero section.
    - **MyExperience/**: Contains the experience section.
      - `MyExperience.js`: Experience section with professional and academic details.
      - `MyExperience.css`: Styles for the experience section.
    - **Projects/**: Contains the projects section.
      - `Projects.js`: Projects section showcasing key projects.
      - `Projects.css`: Styles for the projects section.
    - **Contact/**: Contains the contact section.
      - `Contact.js`: Contact section with a form or contact details.
      - `Contact.css`: Styles for the contact section.

## Static Assets

- **Logos**: Located in `public/assets/images/`
  - `rclogo.png`: Used for light mode branding.
  - `rclogo-dark.png`: Used for dark mode branding.
- **CV**: Located in `public/assets/`
  - `Sai_Raghavan_Commandur_CV.pdf`: My downloadable CV linked in the website.

## Deployment

The website is hosted on Vercel. Changes pushed to the GitHub repository are automatically deployed to the live site.
