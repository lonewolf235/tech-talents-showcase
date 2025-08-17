# Prakash V.S. Tomar - AI/ML Engineer Portfolio

A modern, responsive portfolio website showcasing AI/ML expertise, built with React, TypeScript, and Tailwind CSS.

## 🚀 Live Demo

Visit the live portfolio: [https://prakash-portfolio.lovable.app](https://prakash-portfolio.lovable.app)

## 📋 Features

### 🎨 Design & UX
- **Modern Data Science Theme**: Beautiful indigo/teal gradient design system
- **Responsive Design**: Mobile-first approach, optimized for all devices
- **Smooth Animations**: Subtle micro-interactions and scroll animations
- **Dark/Light Mode**: Automatic theme switching support
- **Performance Optimized**: Fast loading with lazy-loaded images

### 🔧 Technical Features
- **React 18** with TypeScript for type safety
- **Tailwind CSS** with custom design system
- **Semantic HTML** for accessibility
- **SEO Optimized** with meta tags and structured data
- **Component Architecture** for maintainability

### 📊 Content Sections
- **Hero Section**: Name, title, tagline, and call-to-actions
- **About**: Professional summary with key highlights
- **Skills**: Interactive skill categories with proficiency levels
- **Experience**: Timeline view with detailed achievements
- **Projects**: Featured case studies with technical details
- **Contact**: Professional contact form and social links

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Inter (body), JetBrains Mono (code)
- **Animations**: CSS Animations + Tailwind

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Skills.tsx       # Skills showcase
│   ├── Experience.tsx   # Work experience
│   ├── Projects.tsx     # Project portfolio
│   └── Contact.tsx      # Contact form
├── assets/              # Images and media
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── pages/               # Page components
└── index.css           # Design system & global styles

public/
├── content.json        # Editable content data
└── ...                 # Static assets
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd prakash-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:8080
   ```

## 📝 Content Management

### Editing Content

The portfolio content is managed through `/public/content.json`. This file contains all text, project details, skills, and personal information.

#### Structure:
```json
{
  "personal": { ... },      // Name, contact, social links
  "about": { ... },         // Bio and highlights
  "experience": [ ... ],    // Work history
  "projects": [ ... ],      // Portfolio projects
  "skills": { ... },        // Technical skills
  "education": { ... },     // Academic background
  "certifications": [ ... ] // Certifications and achievements
}
```

### Updating Images

1. Add new images to `src/assets/`
2. Import them in the relevant component
3. Update image references in the component

### Customizing Design

The design system is centralized in:
- `src/index.css` - CSS variables and component styles
- `tailwind.config.ts` - Tailwind configuration and theme

## 🌐 Deployment

### Option 1: Vercel (Recommended)

1. **Connect to Vercel**
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Follow the prompts**
   - Connect your GitHub repository
   - Deploy with default settings

3. **Custom Domain** (Optional)
   - Add domain in Vercel dashboard
   - Update DNS records

### Option 2: Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag `dist/` folder to Netlify
   - Or connect via GitHub

3. **Configure redirects** (Create `public/_redirects`)
   ```
   /*    /index.html   200
   ```

### Option 3: Static Hosting

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload `dist/` folder** to any static hosting provider:
   - GitHub Pages
   - Cloudflare Pages
   - AWS S3 + CloudFront
   - Any web server

## 🔧 Customization Guide

### Changing Colors

Update the design system in `src/index.css`:

```css
:root {
  --primary: 239 84% 67%;     /* Main brand color */
  --accent: 180 98% 44%;      /* Accent color */
  --success: 142 76% 36%;     /* Success states */
  /* ... other colors */
}
```

### Adding New Sections

1. Create a new component in `src/components/`
2. Add it to `src/pages/Index.tsx`
3. Update the navigation in the footer
4. Add corresponding data to `content.json`

### Modifying Animations

Animations are defined in `tailwind.config.ts` and can be customized:

```typescript
keyframes: {
  'fade-in': {
    '0%': { opacity: '0', transform: 'translateY(20px)' },
    '100%': { opacity: '1', transform: 'translateY(0)' }
  }
}
```

## 📊 SEO & Analytics

### Built-in SEO Features
- Meta descriptions and keywords
- Open Graph tags for social sharing
- Twitter Card support
- Schema.org structured data
- Semantic HTML structure

### Adding Analytics

To add Google Analytics:

1. **Create GA4 property**
2. **Add tracking code** to `index.html`
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

## 🧪 Testing & Optimization

### Performance Testing
```bash
npm run build
npx serve dist
# Test with Lighthouse
```

### Accessibility Testing
- Use browser dev tools accessibility audit
- Test keyboard navigation
- Verify screen reader compatibility

### SEO Testing
- Use Google Search Console
- Test with structured data validator
- Check meta tags with social media debuggers

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**
   ```bash
   npm run type-check  # Check TypeScript errors
   npm run lint        # Check code quality
   ```

2. **Deployment Issues**
   - Check build output in `dist/`
   - Verify all assets are correctly referenced
   - Test locally with `npx serve dist`

3. **Content Not Updating**
   - Clear browser cache
   - Check `content.json` syntax
   - Restart development server

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support:
- Email: prakashvstomar@gmail.com
- LinkedIn: [lonewolf235](https://linkedin.com/in/lonewolf235)
- GitHub: [lonewolf235](https://github.com/lonewolf235)

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**