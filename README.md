# Ishan Mittal - Portfolio Website

A stunning, modern portfolio website showcasing my skills, projects, and achievements as a Computer Science student and AI/ML enthusiast.

## ✨ Features

- **Smooth Animations**: Framer Motion-powered animations for an engaging user experience
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Components**: Hover effects, smooth scrolling, and dynamic content
- **Modern Stack**: React + Vite + TypeScript for fast development
- **Beautiful UI**: Gradient backgrounds, smooth transitions, and creative design
- **Sections Included**:
  - Hero Section with CTA buttons
  - About Me with key highlights
  - Featured Projects showcase
  - Comprehensive Skills breakdown
  - Education & Certifications
  - Contact Form with social links

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
```bash
cd portfolio2
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The portfolio will open automatically at `http://localhost:3000`

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: JavaScript (JSX)

## 📂 Project Structure

```
portfolio2/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation bar with smooth scroll
│   │   └── Footer.jsx         # Footer with social links
│   ├── sections/
│   │   ├── Hero.jsx           # Hero section with CTA
│   │   ├── About.jsx          # About me section
│   │   ├── Projects.jsx       # Featured projects showcase
│   │   ├── Skills.jsx         # Skills breakdown
│   │   ├── Education.jsx      # Education & certifications
│   │   └── Contact.jsx        # Contact form
│   ├── App.jsx                # Main app component
│   ├── index.css              # Global styles
│   └── main.jsx               # Entry point
├── index.html                 # HTML template
├── package.json               # Dependencies
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind CSS config
└── postcss.config.js          # PostCSS config
```

## 🎨 Customization

### Change Colors
Edit the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: '#6366f1',    // Indigo
  secondary: '#ec4899',  // Pink
  // ... more colors
}
```

### Update Content
- **Hero Section**: Edit `src/sections/Hero.jsx`
- **Projects**: Modify `src/sections/Projects.jsx`
- **Skills**: Update `src/sections/Skills.jsx`
- **Contact Info**: Edit `src/sections/Contact.jsx`

### Add New Sections
1. Create a new file in `src/sections/`
2. Import it in `src/App.jsx`
3. Add the component to your JSX

## 📝 License

This portfolio is personal and created by Ishan Mittal.

## 🤝 Contributing

Feel free to fork and customize this portfolio for your own use!

## 📧 Contact

- Email: ishanmittal60@gmail.com
- Phone: 6377162515
- Location: Noida, India

---

Made with ❤️ and React ⚛️
