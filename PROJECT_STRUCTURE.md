# Portfolio Project Structure

## 📁 Folder Organization

```
portfolio/
├── public/
│   ├── favicon.svg              # Custom favicon with MH initials
│   └── Marvyn Harryson CV.pdf   # Your CV for download
│
├── src/
│   ├── components/              # All React components
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx       # Navigation bar with language switch
│   │   │   └── Navbar.css       # Navbar styles
│   │   │
│   │   ├── Hero/
│   │   │   ├── Hero.jsx         # Hero section with tech icons
│   │   │   └── Hero.css         # Hero styles & animations
│   │   │
│   │   ├── About/
│   │   │   ├── About.jsx        # About section
│   │   │   └── About.css        # About styles
│   │   │
│   │   ├── Experience/
│   │   │   ├── Experience.jsx   # Work experience timeline
│   │   │   └── Experience.css   # Timeline styles
│   │   │
│   │   ├── Projects/
│   │   │   ├── Projects.jsx     # Projects grid
│   │   │   └── Projects.css     # Project cards styles
│   │   │
│   │   ├── Skills/
│   │   │   ├── Skills.jsx       # Skills by category
│   │   │   └── Skills.css       # Skills styles
│   │   │
│   │   ├── Contact/
│   │   │   ├── Contact.jsx      # Contact section
│   │   │   └── Contact.css      # Contact cards styles
│   │   │
│   │   └── Footer/
│   │       ├── Footer.jsx       # Footer with links
│   │       └── Footer.css       # Footer styles
│   │
│   ├── data/
│   │   ├── translations.js      # All text in English & Spanish
│   │   └── skills.js            # Skills data & gradients
│   │
│   ├── App.jsx                  # Main app component
│   ├── App.css                  # Global styles
│   ├── index.css                # Base CSS & theme
│   └── main.jsx                 # Entry point
│
├── index.html                   # HTML template
└── package.json                 # Dependencies
```

## 🎯 Key Features

### Component Structure
Each component follows this pattern:
- Self-contained with its own styles
- Receives props for data and translations
- Clean, readable code
- Export as default

### Data Management
- **translations.js**: All UI text in both languages (EN/ES)
- **skills.js**: Skills list and project gradients

### Styling
- Component-scoped CSS files
- Global styles in App.css
- Consistent design system
- Fully responsive

## 🔧 How to Edit Content

### 1. Update Your Information
Edit `/src/data/translations.js`:
- Line ~80 (English) - Your experience
- Line ~205 (Spanish) - Your experience
- Update all personal information, projects, etc.

### 2. Add/Remove Technologies
Edit `/src/components/Hero/Hero.jsx`:
- Add or remove `<i>` tags with devicon classes
- Visit https://devicon.dev for available icons

### 3. Update Skills
Edit `/src/data/skills.js`:
- Modify frontend, backend, tools arrays

### 4. Change Colors/Design
Each component has its own CSS file in its folder

## 🚀 Running the Project

```bash
cd portfolio
npm install      # Install dependencies
npm run dev      # Start development server
npm run build    # Build for production
```

## 📝 Notes

- **App.jsx** is now clean and organized (only ~80 lines)
- All styling is separated into component files
- Easy to maintain and extend
- Professional code organization
- Backup of old CSS: `src/App.css.backup`
