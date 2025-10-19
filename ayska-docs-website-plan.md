# Ayska Documentation Website - Next.js Project

## Overview

Create a modern, static documentation website using Next.js 15, TypeScript, and GitHub's Primer design system. The site will showcase the Ayska Field App with a branded landing page and provide easy access to all technical documentation with a clean, minimal design optimized for readability - following GitHub's design language.

## Why Primer Design System?

- **GitHub-proven**: Battle-tested on GitHub.com
- **Built-in dark mode**: Seamless theme switching
- **Accessibility first**: WCAG 2.1 Level AA compliant
- **Minimal & clean**: Perfect for documentation
- **React components**: Ready-to-use, well-documented
- **TypeScript support**: Fully typed components
- **No custom CSS needed**: Styled-components based

## Project Structure

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
│   │   ├── AyskaTextComponent.tsx
│   │   ├── AyskaHeadingComponent.tsx
│   │   ├── AyskaButtonComponent.tsx
│   │   ├── AyskaLinkComponent.tsx
│   │   ├── AyskaBoxComponent.tsx
│   │   ├── AyskaStackComponent.tsx
│   │   ├── AyskaFlashComponent.tsx
│   │   ├── AyskaLabelComponent.tsx
│   │   └── index.ts            # Barrel exports
│   ├── layout/
│   │   ├── AyskaHeaderComponent.tsx
│   │   ├── AyskaFooterComponent.tsx
│   │   ├── AyskaSidebarComponent.tsx
│   │   └── AyskaTOCComponent.tsx
│   ├── landing/
│   │   ├── AyskaHeroComponent.tsx
│   │   ├── AyskaFeaturesComponent.tsx
│   │   ├── AyskaScreenshotsComponent.tsx
│   │   └── AyskaCTAComponent.tsx
│   ├── docs/
│   │   ├── AyskaDocContentComponent.tsx
│   │   ├── AyskaCodeBlockComponent.tsx
│   │   ├── AyskaCalloutComponent.tsx
│   │   └── AyskaMermaidComponent.tsx
│   └── AyskaThemeToggleComponent.tsx
├── lib/
│   ├── docs.ts                 # Doc parsing and metadata utilities
│   ├── toc.ts                  # Table of contents generator
│   └── markdown.ts             # Markdown processing utilities
├── content/
│   └── docs/                   # Markdown docs (copied from original)
│       ├── project-setup-guide.md
│       ├── dev-guide.md
│       ├── api-specification.md
│       ├── data-flow-guide.md
│       ├── design-patterns-guide.md
│       └── ui-best-practices.md
├── public/
│   ├── screenshots/            # App screenshots placeholder
│   │   ├── ios/
│   │   └── android/
│   ├── logo.svg                # Ayska logo
│   └── favicon.ico
├── .nojekyll                   # GitHub Pages configuration
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── next.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

## Technical Stack

**Core**

- Next.js 15 (App Router)
- TypeScript 5+
- React 19

**UI Framework**

- @primer/react (GitHub's design system)
- @primer/react-brand (for landing page components)
- @primer/octicons-react (icons)
- styled-components (Primer's styling engine)

**Markdown & Code**

- gray-matter (front matter parsing)
- react-markdown (markdown rendering)
- remark-gfm (GitHub Flavored Markdown)
- rehype-slug (heading anchors)
- rehype-autolink-headings (auto-link headings)
- react-syntax-highlighter (code highlighting)
- mermaid (diagrams)

**Utilities**

- zod (schema validation)

## Primer Components We'll Use

**Layout Components**

- `Box` - Flexible container with spacing props
- `PageLayout` - GitHub-style page layout with header/sidebar/content
- `Header` - Top navigation bar
- `SideNav` - Sidebar navigation
- `Flash` - Alert/callout banners

**Content Components**

- `Text` - Typography with semantic variants
- `Heading` - Semantic headings
- `Link` - Styled links
- `Button` - Primary/secondary buttons
- `IconButton` - Icon-only buttons
- `Label` - Badges/tags

**Interactive Components**

- `UnderlineNav` - Tab navigation (for iOS/Android screenshots)
- `ActionList` - List with actions
- `Dialog` - Modal for screenshot lightbox
- `SegmentedControl` - Theme switcher

**Utility Components**

- `ThemeProvider` - Theme management
- `BaseStyles` - Global styles
- `Octicon` - Icons from Octicons

## Key Features & Implementation

### 1. Landing Page Components

**Hero Section** (using @primer/react-brand)

- Ayska logo and tagline
- Heading: "Field Activity Tracking Made Simple"
- Subheading with brief description
- Primary Button: "View Documentation"
- Secondary Button: "View on GitHub"
- Gradient background using Primer's color system

**Features Section**

- Grid layout using `Box` with flexbox
- Feature cards using `Box` with border and padding
- Key features:
                - SOLID Architecture (with `CodeIcon`)
                - Type-Safe Development (with `CheckCircleIcon`)
                - Modern UI Library (with `PaintbrushIcon`)
                - Comprehensive Testing (with `BeakerIcon`)
- Each card: Icon + Heading + Text

**Screenshots Gallery**

- `UnderlineNav` for iOS/Android tabs
- Grid of placeholder boxes using `Box`
- `Dialog` for lightbox view
- Placeholder message using `Flash` component: "Screenshots coming soon after API integration"

**CTA Section**

- Centered layout with `Box`
- Heading: "Ready to Explore?"
- Button links to /docs
- Link to GitHub repo

### 2. Documentation Layout (using PageLayout)

**Structure**

```tsx
<PageLayout>
  <PageLayout.Header> {/* Site header */} </PageLayout.Header>
  <PageLayout.Pane position="start"> {/* Sidebar */} </PageLayout.Pane>
  <PageLayout.Content> {/* Doc content */} </PageLayout.Content>
  <PageLayout.Pane position="end"> {/* TOC */} </PageLayout.Pane>
</PageLayout>
```

**Sidebar Navigation** (using SideNav)

- Fixed on desktop, collapsible on mobile
- Hierarchical structure:
  ```
  Getting Started
    → Project Setup Guide
  Development
    → Dev Guide
    → Data Flow Guide
    → Design Patterns Guide
  API Reference
    → API Specification
  UI Guidelines
    → UI Best Practices
  ```

- Active page highlighting with `SideNav.Link`
- Collapsible sections

**Table of Contents** (custom component with ActionList)

- Right pane on desktop (sticky)
- Extracts h2 and h3 headings from markdown
- Active section highlighting on scroll
- Click to scroll to section
- Hidden on mobile

**Content Area**

- Centered content (max-width: 768px)
- Generous spacing using Primer's space scale
- Custom markdown components:
                - h1-h6 → `Heading` with appropriate level
                - p → `Text` with size="medium"
                - a → `Link`
                - code → `CodeBlock` component
                - blockquote → `Flash` with variant="default"
                - table → Primer's table styling

### 3. Custom Components Built on Primer

**CodeBlock Component**

```tsx
// Uses react-syntax-highlighter with GitHub theme
// Wrapped in Box with border and radius
// Copy button using IconButton with CopyIcon
// Language badge using Label
```

**Callout Component**

```tsx
// Uses Flash component from Primer
// Variants mapped to Flash variants:
// - info → variant="default"
// - warning → variant="warning"
// - danger → variant="danger"
// - success → variant="success"
```

**MermaidDiagram Component**

```tsx
// Renders mermaid diagrams
// Wrapped in Box with border
// Theme-aware (light/dark)
```

**DocContent Component**

```tsx
// react-markdown with custom renderers
// Maps markdown elements to Primer components
// Applies GitHub-style prose styling
```

**TableOfContents Component**

```tsx
// Uses ActionList for TOC items
// Nested items for h3 under h2
// Active item highlighting
// Smooth scroll behavior
```

### 4. Dark/Light Mode (Primer's ThemeProvider)

**Implementation**

```tsx
import { ThemeProvider, useTheme } from '@primer/react'

// Root layout
<ThemeProvider colorMode="auto">
  <BaseStyles>
    {children}
  </BaseStyles>
</ThemeProvider>

// Theme toggle
const ThemeToggle = () => {
  const { setColorMode, colorMode } = useTheme()
  return (
    <IconButton
      icon={colorMode === 'day' ? SunIcon : MoonIcon}
      onClick={() => setColorMode(colorMode === 'day' ? 'night' : 'day')}
    />
  )
}
```

**Color System**

- Automatically uses Primer's color primitives
- Light mode: GitHub's light theme
- Dark mode: GitHub's dark (dimmed) theme
- All components adapt automatically
- No custom color configuration needed

### 5. Markdown Processing

**Pipeline**

1. Parse front matter with gray-matter
2. Render markdown with react-markdown
3. Apply GitHub Flavored Markdown with remark-gfm
4. Add heading anchors with rehype-slug
5. Auto-link headings with rehype-autolink-headings
6. Syntax highlight code with react-syntax-highlighter
7. Render mermaid diagrams with mermaid library

**Custom Renderers**

```tsx
const components = {
  h1: ({ children }) => <Heading sx={{ fontSize: 5 }}>{children}</Heading>,
  h2: ({ children }) => <Heading sx={{ fontSize: 4 }}>{children}</Heading>,
  p: ({ children }) => <Text as="p">{children}</Text>,
  a: ({ href, children }) => <Link href={href}>{children}</Link>,
  code: CodeBlock,
  blockquote: ({ children }) => <Flash>{children}</Flash>,
}
```

### 6. Static Site Generation

**Build Configuration** (next.config.mjs)

```js
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true, // Required for Primer
  },
}
```

**Build Process**

- Generate static pages for all docs at build time
- Extract metadata from markdown front matter
- Pre-render all routes
- Output: Fully static HTML/CSS/JS

## File-by-File Implementation Plan

### Setup & Configuration

**package.json**

```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "@primer/react": "^36.0.0",
    "@primer/react-brand": "^0.30.0",
    "@primer/octicons-react": "^19.0.0",
    "styled-components": "^6.1.0",
    "react-markdown": "^9.0.0",
    "remark-gfm": "^4.0.0",
    "rehype-slug": "^6.0.0",
    "rehype-autolink-headings": "^7.0.0",
    "react-syntax-highlighter": "^15.5.0",
    "gray-matter": "^4.0.3",
    "mermaid": "^10.6.0",
    "zod": "^3.22.0"
  }
}
```

**next.config.mjs**

```js
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  compiler: { styledComponents: true },
}
```

**tsconfig.json**

- Strict mode enabled
- Path aliases: `@/*` → `./src/*`

### Root Layout

**app/layout.tsx**

```tsx
import { ThemeProvider, BaseStyles } from '@primer/react'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider colorMode="auto">
          <BaseStyles>
            {children}
          </BaseStyles>
        </ThemeProvider>
      </body>
    </html>
  )
}
```

### Landing Page

**app/page.tsx**

- Import Hero, Features, Screenshots, CTA
- Wrap in Box for spacing
- Add metadata for SEO

**components/landing/Hero.tsx**

```tsx
import { Box, Heading, Text, Button } from '@primer/react'

// Gradient background using Primer colors
// Logo image
// Heading with Ayska branding
// Description text
// Button group (primary + secondary)
```

**components/landing/Features.tsx**

```tsx
import { Box, Heading, Text } from '@primer/react'
import { CodeIcon, CheckCircleIcon, PaintbrushIcon, BeakerIcon } from '@primer/octicons-react'

// Grid layout using Box with display="grid"
// Feature cards with icon, heading, description
```

**components/landing/Screenshots.tsx**

```tsx
import { Box, UnderlineNav, Dialog, Flash } from '@primer/react'

// UnderlineNav for iOS/Android tabs
// Grid of placeholder boxes
// Flash message: "Coming soon after API integration"
// Dialog for screenshot lightbox
```

**components/landing/CTASection.tsx**

```tsx
import { Box, Heading, Button } from '@primer/react'

// Centered box with heading
// Button link to /docs
```

### Documentation Pages

**app/docs/[slug]/page.tsx**

```tsx
export async function generateStaticParams() {
  const docs = await getAllDocs()
  return docs.map(doc => ({ slug: doc.slug }))
}

export default async function DocPage({ params }) {
  const doc = await getDocBySlug(params.slug)
  return (
    <>
      <DocContent content={doc.content} />
    </>
  )
}
```

**app/docs/layout.tsx**

```tsx
import { PageLayout } from '@primer/react'
import Sidebar from '@/components/layout/Sidebar'
import TableOfContents from '@/components/layout/TableOfContents'

export default function DocsLayout({ children }) {
  return (
    <PageLayout>
      <PageLayout.Header>
        <Header />
      </PageLayout.Header>
      <PageLayout.Pane position="start">
        <Sidebar />
      </PageLayout.Pane>
      <PageLayout.Content>
        {children}
      </PageLayout.Content>
      <PageLayout.Pane position="end">
        <TableOfContents />
      </PageLayout.Pane>
    </PageLayout>
  )
}
```

**components/docs/DocContent.tsx**

```tsx
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Heading, Text, Link } from '@primer/react'
import CodeBlock from './CodeBlock'

// Custom component mapping
const components = {
  h1: (props) => <Heading sx={{ fontSize: 5 }}>{props.children}</Heading>,
  h2: (props) => <Heading sx={{ fontSize: 4 }}>{props.children}</Heading>,
  // ... more mappings
  code: CodeBlock,
}

export default function DocContent({ content }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {content}
    </ReactMarkdown>
  )
}
```

**components/docs/CodeBlock.tsx**

```tsx
import { Box, IconButton } from '@primer/react'
import { CopyIcon } from '@primer/octicons-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { githubLight, githubDark } from 'react-syntax-highlighter/dist/styles/prism'

// Syntax highlighter with copy button
// Theme switches based on Primer's colorMode
```

**components/docs/Callout.tsx**

```tsx
import { Flash } from '@primer/react'

type CalloutType = 'info' | 'warning' | 'danger' | 'success'

export default function Callout({ type, children }) {
  const variantMap = {
    info: 'default',
    warning: 'warning',
    danger: 'danger',
    success: 'success',
  }
  
  return <Flash variant={variantMap[type]}>{children}</Flash>
}
```

**components/docs/MermaidDiagram.tsx**

```tsx
'use client'
import { useEffect, useRef } from 'react'
import { Box } from '@primer/react'
import mermaid from 'mermaid'

// Initialize mermaid with theme based on colorMode
// Render diagram in Box
```

### Layout Components

**components/layout/Header.tsx**

```tsx
import { Header as PrimerHeader, Box, Button } from '@primer/react'
import ThemeToggle from '../ThemeToggle'

// Logo + site title
// Nav links (Home, Docs, GitHub)
// Theme toggle
// Mobile menu button
```

**components/layout/Sidebar.tsx**

```tsx
import { SideNav } from '@primer/react'

const docStructure = [
  {
    title: 'Getting Started',
    items: [{ title: 'Project Setup Guide', slug: 'project-setup-guide' }]
  },
  {
    title: 'Development',
    items: [
      { title: 'Dev Guide', slug: 'dev-guide' },
      { title: 'Data Flow Guide', slug: 'data-flow-guide' },
      { title: 'Design Patterns Guide', slug: 'design-patterns-guide' },
    ]
  },
  // ... more sections
]

export default function Sidebar() {
  return (
    <SideNav>
      {docStructure.map(section => (
        <SideNav.Link key={section.title}>
          {section.title}
          {section.items.map(item => (
            <SideNav.Link href={`/docs/${item.slug}`}>
              {item.title}
            </SideNav.Link>
          ))}
        </SideNav.Link>
      ))}
    </SideNav>
  )
}
```

**components/layout/TableOfContents.tsx**

```tsx
'use client'
import { ActionList, Box } from '@primer/react'
import { useEffect, useState } from 'react'

// Extract headings from document
// Track active section with IntersectionObserver
// Render ActionList with nested items
// Smooth scroll on click
```

**components/ThemeToggle.tsx**

```tsx
import { IconButton, useTheme } from '@primer/react'
import { SunIcon, MoonIcon } from '@primer/octicons-react'

export default function ThemeToggle() {
  const { setColorMode, colorMode } = useTheme()
  
  return (
    <IconButton
      icon={colorMode === 'day' ? MoonIcon : SunIcon}
      aria-label="Toggle theme"
      onClick={() => setColorMode(colorMode === 'day' ? 'night' : 'day')}
    />
  )
}
```

### Utility Libraries

**lib/docs.ts**

```tsx
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const docsDirectory = path.join(process.cwd(), 'content/docs')

export function getAllDocs() {
  const fileNames = fs.readdirSync(docsDirectory)
  return fileNames.map(fileName => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(docsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    
    return {
      slug,
      ...data,
    }
  })
}

export function getDocBySlug(slug: string) {
  const fullPath = path.join(docsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  return {
    slug,
    content,
    ...data,
  }
}
```

**lib/toc.ts**

```tsx
export function extractTOC(markdown: string) {
  const headingRegex = /^#{2,3}\s+(.+)$/gm
  const headings: Array<{ level: number; text: string; id: string }> = []
  
  let match
  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[0].split('#').length - 1
    const text = match[1]
    const id = text.toLowerCase().replace(/\s+/g, '-')
    
    headings.push({ level, text, id })
  }
  
  return headings
}
```

## Content Migration

**Front Matter Template**

```yaml
---
title: "Document Title"
description: "Brief description for SEO"
order: 1
---
```

**Copy Process**

1. Copy all 6 markdown files from `ayska-field-app/docs/` to `ayska-docs/content/docs/`
2. Add front matter to each file with appropriate order
3. Verify mermaid diagrams render correctly
4. No changes needed to markdown syntax (GitHub Flavored Markdown)

## Styling Approach

**No Custom CSS Needed!**

- Primer components handle all styling
- Use `sx` prop for one-off customizations
- Use Primer's space scale for spacing (0-11)
- Use Primer's color primitives (automatically theme-aware)
- BaseStyles provides sensible defaults

**Example of sx prop usage**

```tsx
<Box sx={{ 
  padding: 4, 
  borderRadius: 2, 
  borderColor: 'border.default',
  borderWidth: 1,
  borderStyle: 'solid'
}}>
  Content
</Box>
```

## Development Workflow

1. **Initialize Project**: `npx create-next-app@latest ayska-docs --typescript --no-tailwind --app`
2. **Install Primer**: `npm install @primer/react @primer/react-brand @primer/octicons-react styled-components`
3. **Install Markdown Libraries**: `npm install react-markdown remark-gfm rehype-slug rehype-autolink-headings react-syntax-highlighter gray-matter mermaid`
4. **Install Type Definitions**: `npm install -D @types/react-syntax-highlighter`
5. **Configure Next.js**: Update next.config.mjs for static export and styled-components
6. **Setup Root Layout**: Add ThemeProvider and BaseStyles
7. **Build Landing Page**: Hero → Features → Screenshots → CTA
8. **Build Docs Layout**: Header → Sidebar → Content → TOC with PageLayout
9. **Implement Markdown Processing**: react-markdown with custom components
10. **Copy Content**: Migrate docs with front matter
11. **Test & Optimize**: Check all pages, test dark mode, verify mobile responsiveness
12. **Configure GitHub Pages**: Add .nojekyll file, setup GitHub Actions workflow
13. **Deploy**: Push to GitHub and enable GitHub Pages

## GitHub Pages Deployment

### Configuration Requirements

**1. Update next.config.mjs for GitHub Pages**

```js
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/ayska-docs' : '',
  images: { 
    unoptimized: true 
  },
  compiler: { 
    styledComponents: true 
  },
}
```

**2. Add .nojekyll file to public/**

- Create empty `.nojekyll` file in `public/` directory
- This prevents GitHub Pages from ignoring files starting with underscore

**3. GitHub Actions Workflow**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build with Next.js
        run: npm run build
        env:
          NODE_ENV: production
          
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

**4. Repository Settings**

- Go to repository Settings → Pages
- Source: GitHub Actions
- Branch: main (or master)

**5. Package.json Scripts**

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "export": "next build && next export"
  }
}
```

### Post-Deployment

- Site will be available at: `https://[username].github.io/ayska-docs/`
- First deployment takes 2-3 minutes
- Subsequent deployments are faster (1-2 minutes)
- Check Actions tab for build/deploy status

## Advantages of Primer Over Tailwind + shadcn/ui

✅ **No CSS needed**: All styling through components

✅ **GitHub's design language**: Professional, familiar

✅ **Built-in dark mode**: No configuration needed

✅ **Accessibility**: WCAG 2.1 Level AA compliant

✅ **Type-safe**: Full TypeScript support

✅ **Consistent spacing**: Primer's space scale (0-11)

✅ **Theme-aware**: All colors adapt automatically

✅ **Well-documented**: Extensive component docs

✅ **Battle-tested**: Used on GitHub.com

✅ **Zero config**: Works out of the box

## Success Criteria

✅ Landing page with Ayska branding using Primer components

✅ All 6 docs rendered with proper GitHub-style formatting

✅ Dark/light mode working with Primer's ThemeProvider

✅ Table of contents with active section highlighting

✅ Responsive design (mobile, tablet, desktop)

✅ Syntax highlighted code blocks with GitHub themes

✅ Mermaid diagrams rendering correctly

✅ Fast build time (< 30 seconds)

✅ Perfect Lighthouse scores (Performance, Accessibility, SEO)

✅ Static export ready for deployment

✅ Looks like GitHub docs (familiar, professional)

## Primer Components Reference

**Layout**

- `Box` - Flexible container (like div with styling props)
- `PageLayout` - Page structure with header/sidebar/content/panes
- `Stack` - Vertical/horizontal stacking
- `Grid` - Grid layout

**Navigation**

- `Header` - Top navigation bar
- `SideNav` - Sidebar navigation with nesting
- `UnderlineNav` - Tab-style navigation
- `Breadcrumbs` - Breadcrumb navigation

**Content**

- `Heading` - h1-h6 with semantic sizing
- `Text` - Paragraph text with variants
- `Link` - Styled links
- `Flash` - Alert/callout banners
- `Label` - Badges/tags

**Actions**

- `Button` - Primary/secondary/danger buttons
- `IconButton` - Icon-only buttons
- `ActionList` - List with actions

**Feedback**

- `Dialog` - Modal dialogs
- `ConfirmationDialog` - Confirmation modals
- `Spinner` - Loading spinner

**Forms** (if needed later)

- `TextInput`
- `Select`
- `Checkbox`
- `Radio`

All components support:

- `sx` prop for custom styling
- Theme-aware colors
- Responsive props
- TypeScript types