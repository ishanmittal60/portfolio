# VS Code Copilot Instructions

## Portfolio Website Setup

This workspace contains a modern React portfolio website built with Vite, Tailwind CSS, and Framer Motion.

### Project Overview
- **Type**: React + Vite Frontend Application
- **Purpose**: Personal portfolio showcasing projects, skills, and achievements
- **Key Technologies**: React 18, Tailwind CSS, Framer Motion, Lucide React

### Useful Commands

**Development**:
```bash
npm install    # Install dependencies
npm run dev    # Start development server (auto-opens at http://localhost:3000)
npm run build  # Create optimized production build
npm run preview # Preview production build locally
```

### Project Structure
- `src/` - Source code
  - `components/` - Reusable components (Navbar, Footer)
  - `sections/` - Page sections (Hero, About, Projects, Skills, Education, Contact)
  - `App.jsx` - Main app component
  - `index.css` - Global styles
- `public/` - Static assets
- Configuration files: `vite.config.js`, `tailwind.config.js`, `package.json`

### Key Features
✨ Smooth animations with Framer Motion
📱 Fully responsive design
🎨 Beautiful gradient backgrounds
⚡ Fast performance with Vite
🔗 Smooth scrolling navigation
📧 Contact form integration

### Customization Tips
- **Colors**: Edit `tailwind.config.js` for the color scheme
- **Content**: Update individual section files in `src/sections/`
- **Animations**: Modify Framer Motion configs in component files
- **Font**: Change in `index.html` and `tailwind.config.js`

### Next Steps
1. Run `npm install` to install all dependencies
2. Run `npm run dev` to start the development server
3. Customize content, colors, and links to match your needs
4. Run `npm run build` when ready for production

### Additional Notes
- The portfolio is fully self-contained and doesn't require a backend
- All sections are pre-populated with sample data - customize as needed
- Uses Tailwind CSS for styling - no separate CSS files needed
- Framer Motion handles all animations - very performant
