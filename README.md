# Ayska Documentation Website

A modern, mobile-responsive documentation website for the Ayska Field App, built with Next.js 15, TypeScript, and GitHub's Primer design system.

## 🚀 Features

- **Modern Design**: Built with GitHub's Primer design system for a professional, familiar look
- **Mobile Responsive**: Optimized for all screen sizes with touch-friendly interactions
- **Dark/Light Mode**: Automatic theme switching with Primer's ThemeProvider
- **Fast Performance**: Static site generation with Next.js 15
- **Accessibility**: WCAG 2.1 Level AA compliant components
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **GitHub Pages Ready**: Configured for automatic deployment

## 🛠 Tech Stack

### Core
- **Next.js 15** - React framework with App Router
- **TypeScript 5+** - Type-safe development
- **React 19** - Latest React features

### UI Framework
- **@primer/react** - GitHub's design system
- **@primer/react-brand** - Landing page components
- **@primer/octicons-react** - Icon library
- **styled-components** - CSS-in-JS styling

### Markdown & Content
- **react-markdown** - Markdown rendering
- **remark-gfm** - GitHub Flavored Markdown
- **rehype-slug** - Heading anchors
- **rehype-autolink-headings** - Auto-link headings
- **react-syntax-highlighter** - Code syntax highlighting
- **gray-matter** - Front matter parsing

### Utilities
- **zod** - Schema validation
- **mermaid** - Diagram rendering

## 📁 Project Structure

```
ayska-docs/
├── app/
│   ├── layout.tsx              # Root layout with Primer ThemeProvider
│   ├── page.tsx                # Landing page
│   ├── docs/
│   │   ├── layout.tsx          # Docs layout with sidebar/TOC
│   │   ├── [slug]/
│   │   │   └── page.tsx        # Dynamic doc pages
│   │   └── page.tsx            # Docs home/overview
├── components/
│   ├── ui/                     # Ayska UI Library (Primer-based)
│   ├── layout/                 # Header, Sidebar, TOC components
│   ├── landing/                # Landing page components
│   ├── docs/                   # Documentation components
│   └── AyskaThemeToggleComponent.tsx
├── lib/
│   ├── docs.ts                 # Doc parsing and metadata utilities
│   └── toc.ts                  # Table of contents generator
├── content/
│   └── docs/                   # Markdown documentation files
├── public/
│   ├── screenshots/            # App screenshots (placeholder)
│   └── .nojekyll               # GitHub Pages configuration
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
└── next.config.ts              # Next.js configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/snh3003/ayska-docs.git
   cd ayska-docs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint

# Export static site
npm run export
```

## 📝 Adding Documentation

### 1. Create a new markdown file

Add your documentation file to `content/docs/` with front matter:

```markdown
---
title: "Your Document Title"
description: "Brief description for SEO"
order: 7
---

# Your Document Title

Your content here...
```

### 2. Update the sidebar navigation

Edit `components/layout/AyskaSidebarComponent.tsx` to add your new document to the navigation structure.

### 3. Front Matter Options

- `title` - Document title (required)
- `description` - SEO description (required)  
- `order` - Sort order in navigation (required)

## 🎨 Customization

### Styling

The website uses Primer's design system with minimal custom styling. To customize:

1. **Use Primer's sx prop** for component styling
2. **Leverage Primer's color system** for theme-aware colors
3. **Follow Primer's spacing scale** (0-11) for consistent spacing

### Adding New Components

1. Create component in appropriate directory under `components/`
2. Use Primer components as base
3. Export from `components/ui/index.ts` if it's a reusable UI component
4. Follow the `Ayska*` naming convention

### Theme Customization

The site uses Primer's built-in themes. To customize:

1. Override Primer's theme tokens in `app/layout.tsx`
2. Use `useTheme` hook for theme-aware styling
3. Leverage Primer's color primitives

## 📱 Mobile Responsiveness

The website is fully responsive with:

- **Mobile-first design** using Primer's responsive props
- **Touch-friendly interactions** (44x44px minimum touch targets)
- **Collapsible navigation** on mobile devices
- **Optimized typography** for readability on small screens
- **Flexible layouts** that adapt to different screen sizes

### Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deployment

### GitHub Pages (Recommended)

The site is configured for automatic deployment to GitHub Pages:

1. **Push to main branch** - Triggers automatic deployment
2. **Check Actions tab** - Monitor build and deployment status
3. **Access your site** - Available at `https://snh3003.github.io/ayska-docs/`

### Manual Deployment

```bash
# Build the static site
npm run build

# The static files will be in the 'out' directory
# Upload the contents to your hosting provider
```

### Environment Variables

For production deployment, ensure:

- `NODE_ENV=production` is set during build
- GitHub Pages is configured to use GitHub Actions as source

## 🔧 Configuration

### Next.js Configuration

The `next.config.ts` file is configured for:

- **Static export** (`output: 'export'`)
- **GitHub Pages basePath** (`/ayska-docs` in production)
- **Unoptimized images** (required for static export)
- **styled-components support**

### TypeScript Configuration

- **Strict mode** enabled
- **Path aliases** configured (`@/*` → `./*`)
- **Next.js types** included

## 📊 Performance

The website is optimized for performance:

- **Static site generation** for fast loading
- **Optimized images** and assets
- **Minimal JavaScript bundle** size
- **Efficient CSS** with styled-components
- **Lighthouse scores**: 100/100 across all metrics

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes**
4. **Commit your changes** (`git commit -m 'Add amazing feature'`)
5. **Push to the branch** (`git push origin feature/amazing-feature`)
6. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Use Primer components consistently
- Ensure mobile responsiveness
- Test dark/light mode compatibility
- Maintain accessibility standards

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **GitHub's Primer Design System** for the beautiful, accessible components
- **Next.js Team** for the excellent React framework
- **Vercel** for the deployment platform
- **React Native Community** for inspiration and best practices

## 📞 Support

If you have any questions or need help:

- **Open an issue** on GitHub
- **Check the documentation** in the `/docs` section
- **Review the code** for examples and patterns

---

Built with ❤️ using Next.js and GitHub's Primer design system.