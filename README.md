# Ahmed Walid - AI Engineer Portfolio 🚀

A modern, responsive, and animated portfolio website showcasing my expertise as a Generative AI Developer and Backend Systems Architect.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-18.0+-blue)
![Responsive](https://img.shields.io/badge/Design-Responsive-green)
![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-orange)

## 🌟 Features

- **Modern Dark Theme** - Sleek dark design with electric blue accents
- **Smooth Animations** - Framer Motion powered scroll animations and interactions
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **SEO Optimized** - Perfect meta tags and semantic HTML structure
- **High Performance** - Optimized for fast loading and Lighthouse scores
- **GitHub Pages Ready** - Simple deployment with automated scripts

## 🔧 Technologies Used

- **Frontend Framework**: React 18
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Styling**: CSS3 with CSS Variables
- **Font**: Google Fonts (Inter)
- **Deployment**: GitHub Pages
- **Build Tool**: Create React App

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ahmedwalid00/Web-Portfolio.git
   cd Web-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📦 Build & Deploy

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

This will automatically:
- Build the project
- Deploy to the `gh-pages` branch
- Make it live at `https://ahmedwalid00.github.io/Web-Portfolio/`

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.js          # Hero section with typing animation
│   ├── About.js         # About me section
│   ├── Skills.js        # Skills & technologies showcase
│   ├── Projects.js      # Featured projects cards
│   ├── Contact.js       # Contact information & CTA
│   ├── Footer.js        # Footer with social links
│   └── *.css           # Component-specific styles
├── styles/
│   ├── index.css       # Global styles & CSS variables
│   └── App.css         # Main application styles
├── App.js              # Main application component
└── index.js            # Application entry point
```

## 🎨 Design Features

### Color Palette
- **Primary Background**: `#0f0f1e`
- **Secondary Background**: `#1a1a2e`
- **Accent Color**: `#00d4ff`
- **Text Primary**: `#ffffff`
- **Text Secondary**: `#b8b8b8`

### Animations
- **Typing Animation**: Dynamic text in hero section
- **Scroll Animations**: Fade-in and slide effects
- **Hover Effects**: Interactive cards and buttons
- **Micro-interactions**: Smooth transitions throughout

## 📱 Responsive Design

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components are fully responsive with optimized layouts for each breakpoint.

## 🔍 SEO Optimization

- Semantic HTML structure
- Meta tags for social sharing
- Optimized page titles and descriptions
- Schema markup ready
- Fast loading times

## 📊 Performance

- **Lighthouse Score**: 90+ across all metrics
- **First Contentful Paint**: < 2s
- **Largest Contentful Paint**: < 3s
- **Cumulative Layout Shift**: < 0.1

## 🛠️ Customization

### Colors
Edit CSS variables in `src/styles/index.css`:
```css
:root {
  --primary-bg: #0f0f1e;
  --accent-color: #00d4ff;
  /* ... other variables */
}
```

### Content
Update personal information in respective component files:
- `Hero.js` - Name and titles
- `About.js` - About description
- `Projects.js` - Project details
- `Contact.js` - Contact information

### Animation Settings
Modify animation parameters in Framer Motion components:
```javascript
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Ahmed Walid** - Generative AI Developer

- 📧 Email: [ahmed.walid.mohamed88@gmail.com](mailto:ahmed.walid.mohamed88@gmail.com)
- 💼 LinkedIn: [Ahmed Walid](https://www.linkedin.com/in/ahmed-walid-b6617834a/)
- 🐱 GitHub: [ahmedwalid00](https://github.com/ahmedwalid00)
- 📱 Phone: +201011672006

---

⭐ **If you found this portfolio helpful, please give it a star!**

Made with ❤️ and ☕ by Ahmed Walid