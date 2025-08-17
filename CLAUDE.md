# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Running the Application

- `npm run dev` - Start Vite development server on http://localhost:3000
- `npm run build` - Build for production using Vite
- `npm run preview` - Preview production build locally

### Code Quality and Linting

- `npm run lint` - Run ESLint to check for issues
- `npm run lint:fix` - Auto-fix ESLint issues
- `npm run format` - Format code with Prettier
- `npx stylelint "src/**/*.css"` - Lint CSS files

### Pre-commit Hooks

The project uses Husky with pre-commit hooks that automatically run:

1. Prettier formatting
2. Stylelint for CSS
3. ESLint fix and check

## Architecture Overview

This is a React TypeScript portfolio website built with **Vite** (migrated from Create React App). The application follows a component-based architecture with clean separation of concerns.

### Key Structure

- **Components**: Located in `src/components/`, each component has its own directory with `.tsx`, `.css`, and `index.ts` files
- **Hooks**: Custom React hooks in `src/hooks/` including `useGitHubStats` and `useWindowSize`
- **Utils**: Shared constants and utilities in `src/utils/`

### Component Architecture

- **Header**: Navigation with scroll-hide functionality and responsive sidebar
- **Main**: Contains the main content sections (About, Jobs, Projects, Contact)
- **Footer**: Site footer
- **SocialMedia**: Fixed social media links
- **Email**: Fixed email contact link

### Key Features

- Responsive design with mobile-first approach
- Scroll-triggered header hide/show behavior
- GitHub API integration for portfolio stats
- Accessibility features with skip links and ARIA labels
- Component-based CSS with individual stylesheets

### Build System - Vite

- Fast development server with instant HMR
- ES modules support for modern browsers
- Optimized production builds with Rollup
- TypeScript support out of the box

### TypeScript Configuration

- Strict mode enabled
- Target: ES2020 with modern library support
- JSX: React
- ES modules with Node resolution
- Isolated modules for better compatibility

### Code Style

- ESLint with TypeScript, React, and accessibility rules
- Prettier for code formatting
- Single quotes preferred
- Standard TypeScript configuration optimized for Vite

### Asset Handling

- Public assets served from `/public` directory
- Static assets referenced with `/` prefix (e.g., `/logo.png`)
- Vite handles asset optimization and bundling automatically
