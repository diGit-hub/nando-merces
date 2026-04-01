# AGENTS.md - Development Guide

This document provides guidelines for AI agents working on this codebase.

## Mandatory Tools

**Every code interaction MUST use these MCP tools:**

- **devtools MCP** - Use for browser automation, taking snapshots, clicking elements, filling forms, navigating pages, and verifying UI changes
- **context7 MCP** - Use for fetching documentation and code examples when working with libraries, frameworks, or APIs. Always resolve library IDs first before querying docs

Always verify your changes work in the browser before considering a task complete.

## Component Reference

The HTML file (`base.html`) serves as the design reference for all components and sections. When creating new components, sections, or UI elements present in the reference HTML, the agent should first consult `base.html` to understand the implementation pattern.

**Priority:** If the user gives a direct instruction that contradicts the reference HTML, the user's instruction takes priority.

## Project Overview

- **Name:** nando-merces
- **Type:** React 19 + Vite web application (Fine Art Portfolio)
- **Tech Stack:** React 19, Vite 7, Tailwind CSS 4, ESLint 9

## Design System

This project uses a premium fine art portfolio design system inspired by classical painting galleries.

### Color Palette
- **Primary:** `#b08d57` (Gold/Ochre accent)
- **Premium White:** `#F5F5F7` (Background base - 60%)
- **Charcoal:** `#1D1D1F` (Text/Secondary - 30%)

### Typography
- **Sans (Body):** Inter (300, 400, 500, 600)
- **Serif (Headlines):** Playfair Display (400, 700, italic)
- **Icons:** Material Symbols Outlined

### Spacing System
- Max content width: `1440px`
- Padding: `px-6 md:px-12`
- Section spacing: `py-32 md:py-48`

### UI Patterns
- Header: Fixed, backdrop-blur-xl, border-b border-charcoal/5
- Buttons: Rounded-full, uppercase, tracking-widest, text-xs font-bold
- Forms: Border-b only, transparent background, focus:border-primary
- Labels: text-[10px] uppercase tracking-[0.2em] text-charcoal/50
- Images: aspect-[4/5] or aspect-[3/4], rounded-sm shadow-2xl

## Build, Lint & Run Commands

### Development
```bash
npm run dev          # Start Vite dev server with hot reload
```

### Build & Preview
```bash
npm run build        # Build for production (output: dist/)
npm run preview      # Preview production build locally
```

### Linting
```bash
npm run lint         # Run ESLint on entire project
```

### Single Test
No test framework is currently configured. To add tests, consider:
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
# Then add to package.json: "test": "vitest"
# Run single test: npx vitest run src/components/Component.test.jsx
```

## Code Style Guidelines

### Language
- JavaScript (JSX) - not TypeScript
- ES Modules (`"type": "module"` in package.json)

### Imports
- Use named imports: `import { useState, useEffect } from 'react'`
- Import CSS explicitly: `import './index.css'`
- Group imports: React → External → Internal → CSS

### Formatting
- 4-space indentation (no tabs)
- Single quotes for strings (except strings containing single quotes)
- Trailing commas in objects/arrays
- No semicolons at end of statements

### Components
- Use function components (not classes)
- Export default for page components, named exports for utilities
- Use PascalCase for component names: `function MyComponent()`
- Use camelCase for variables and functions

### State Management
- Use `useState` for local component state
- Use `useEffect` for side effects (with proper cleanup)
- Follow React 19 hooks rules (eslint-plugin-react-hooks enforced)

### Tailwind CSS v4
- Use utility classes for styling
- Use arbitrary values: `bg-[#value]` for custom colors
- Use responsive prefixes: `md:`, `lg:`, `xl:`
- Use hover/focus states: `hover:`, `focus:`

### Design-Specific Classes
- Use `font-serif` for headlines (Playfair Display)
- Use `font-sans` for body text (Inter)
- Use `text-primary` for accent color (#b08d57)
- Use `bg-premium-white` for background (#F5F5F7)
- Use `text-charcoal` for text (#1D1D1F)
- Use `tracking-[0.2em]` for uppercase labels
- Use `text-[10px]` for small labels
- Use `rounded-sm` for images, `rounded-full` for buttons

### Error Handling
- Use try/catch for async operations
- Display user-friendly error messages in UI
- Log errors appropriately for debugging

### File Naming
- Components: `PascalCase.jsx` (e.g., `Button.jsx`, `Header.jsx`)
- Utilities: `camelCase.js` (e.g., `formatDate.js`, `validateInput.js`)
- Styles: `kebab-case.css` (e.g., `index.css`)

### ESLint Rules
- `no-unused-vars`: Errors on unused variables (except those starting with `_`)
- React hooks rules enforced
- React refresh enabled for HMR compatibility

### Prohibited Patterns
- No console.log in production code
- No inline styles (use Tailwind classes)
- No `any` type assumptions
- No commented-out code (remove instead)

## Project Structure

```
nando-merces/
├── src/
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   ├── index.css        # Global styles (Tailwind + design tokens)
│   └── assets/          # Static assets
├── public/               # Public static files
├── index.html            # HTML template
├── vite.config.js       # Vite configuration
├── eslint.config.js     # ESLint configuration
└── package.json         # Dependencies
```

## Admin Panel

The admin panel is accessible at a hidden URL (e.g., `/admin`). This URL is not linked in the public site - only the artist knows it exists.

- **Public users:** No login, just view the portfolio
- **Admin:** Access `/admin` → authenticate with password → access editing panel

The login page only appears when accessing the admin route.

## Backend

- **Supabase** - PostgreSQL database with built-in auth
- Data stored in database tables (artworks, texts, contact info)
- API via Supabase client (already has auth)

## Common Tasks

### Creating a New Component
1. Create `src/components/ComponentName.jsx`
2. Use function ComponentName() { ... }
3. Export default ComponentName
4. Import and use in parent component
5. Follow design system colors and typography

### Adding a New Section
- Use `max-w-[1440px] mx-auto px-6 md:px-12` for container
- Use `py-32 md:py-48` for section padding
- Use `grid grid-cols-1 lg:grid-cols-12` for layouts
- Use `gap-12` or `gap-24` for grid gaps

### Styling
1. Add utility classes directly to JSX elements
2. Use Tailwind CSS v4 features (no config file needed)
3. Use CSS variables for theme colors in index.css
4. Button styles: `bg-charcoal text-white px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary transition-all duration-300`

## Key Dependencies

- `react` / `react-dom` - ^19.1.1
- `vite` - ^7.1.7
- `tailwindcss` - ^4.2.1
- `eslint` - ^9.36.0

## Editor Setup Recommendations

- VS Code with ESLint and Tailwind CSS IntelliSense extensions
- Prettier for code formatting (add to project if desired)
- Configure editor to use 4 spaces for indentation
