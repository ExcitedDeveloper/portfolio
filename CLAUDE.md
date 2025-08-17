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

### Testing

- `npm test` - Run Jest test suite
- `npm run test:watch` - Run tests in watch mode for development
- `npm run test:coverage` - Run tests with coverage reporting

### Pre-commit Hooks

The project uses Husky with lint-staged for pre-commit hooks that automatically run:

1. ESLint fix for JavaScript/TypeScript files

## Architecture Overview

This is a React TypeScript portfolio website built with **Vite**. The application follows a component-based architecture with clean separation of concerns and modular structure.

### Project Structure

```
src/
├── __mocks__/           # Jest mock files
│   └── fileMock.js      # Mock for static file imports
├── components/          # Reusable UI components
│   ├── About/           # About section with headshot and skills
│   │   ├── *.tsx        # Component files
│   │   ├── *.css        # Component styles
│   │   ├── *.test.tsx   # Component tests
│   │   └── index.ts     # Export barrel
│   ├── Bio/             # Bio component
│   ├── Button/          # Reusable button component
│   ├── Contact/         # Contact form/section
│   ├── Email/           # Fixed email contact link
│   ├── Footer/          # Site footer
│   ├── Header/          # Navigation header
│   ├── Icons/           # SVG icon components (ExternalLink, GitHub)
│   ├── Jobs/            # Work experience section
│   ├── Main/            # Main content container
│   ├── ProjectCard/     # Individual project display component
│   ├── Projects/        # Projects showcase section
│   ├── SideBar/         # Mobile navigation sidebar
│   └── SocialMedia/     # Fixed social media links
├── data/                # Static data and configuration
│   ├── projects.ts      # Project portfolio data
│   └── projects.test.ts # Data tests
├── hooks/               # Custom React hooks
│   ├── useGitHubStats.tsx     # GitHub API integration
│   ├── useGitHubStats.test.tsx # Hook tests
│   ├── useWindowSize.tsx      # Responsive design hook
│   └── useWindowSize.test.tsx  # Hook tests
├── images/              # Image assets
├── types/               # TypeScript type definitions
│   ├── Project.ts       # Project interface definition
│   └── Project.test.ts  # Type tests
├── utils/               # Shared utilities and constants
│   ├── constants.ts     # Application constants
│   ├── constants.test.ts # Utility tests
│   ├── reportAccessibility.ts      # Accessibility reporting
│   └── reportAccessibility.test.ts # Accessibility tests
├── App.tsx              # Main application component
├── App.test.tsx         # App component tests
├── index.tsx            # Application entry point
├── index.css            # Global styles
├── setupTests.js        # Jest test setup
└── vite-env.d.ts        # Vite environment types
```

### Component Architecture

Each component follows a consistent structure:

- `ComponentName.tsx` - Main component file
- `ComponentName.css` - Component-specific styles
- `ComponentName.test.tsx` - Jest unit tests with Testing Library
- `index.ts` - Export barrel for clean imports

### Testing Strategy

- **Unit Tests**: Comprehensive Jest test suite for all components, hooks, utilities, and data
- **Testing Library**: React Testing Library for component testing with accessibility focus
- **Coverage**: Test coverage reporting available via `npm run test:coverage`
- **Mocks**: File mocks for static assets and external dependencies
- **Setup**: Custom Jest configuration with JSDOM environment for DOM testing

#### Key Components

- **Header**: Navigation with responsive behavior and sidebar integration
- **Main**: Contains all main content sections (About, Jobs, Projects, Contact)
- **About**: Split into AboutHeadshot and AboutSkills subcomponents
- **Projects**: Displays project cards using ProjectCard component
- **SocialMedia**: Fixed positioning with GitHub and LinkedIn icons
- **SideBar**: Mobile navigation using react-burger-menu

### Data Management

- **Projects**: Centralized in `src/data/projects.ts` with type safety via `Project` interface
- **Types**: TypeScript interfaces in `src/types/` for type safety
- **Constants**: Shared constants in `src/utils/constants.ts`

### Key Features

- Responsive design with mobile-first approach
- TypeScript for type safety
- Component-based CSS with modular stylesheets
- GitHub API integration for dynamic stats
- Accessibility features with proper ARIA labels
- Optimized asset handling through Vite

### Build System - Vite

- Development server on port 3000 with auto-open
- Build output to `build/` directory
- Optimized dependencies caching for React ecosystem
- ES modules with modern JavaScript support

### TypeScript Configuration

- Strict mode enabled for better type safety
- Target: ES2020 with DOM libraries
- JSX: React mode
- ES modules with Node resolution
- Isolated modules for Vite compatibility
- No emit mode (Vite handles transpilation)

### Code Quality Tools

- **ESLint**: TypeScript, React, accessibility, and Prettier integration
- **Prettier**: Code formatting with single quotes preference
- **Stylelint**: CSS linting with standard configuration
- **Husky**: Git hooks for automated quality checks

### Dependencies

#### Core

- React 18.2.0 with TypeScript support
- react-burger-menu for mobile navigation
- web-vitals for performance monitoring

#### Development Tools

- Vite 5.0.0 for build tooling
- TypeScript 5.0.0 for type checking
- ESLint ecosystem for code quality
- Jest 30.0.5 for unit testing with JSDOM environment
- Testing Library ecosystem (@testing-library/react, @testing-library/jest-dom, @testing-library/user-event)
- Babel presets for Jest transpilation
- Accessibility testing with @axe-core/react
- Husky and lint-staged for pre-commit hooks
- Prettier and Stylelint for code formatting

### Asset Handling

- Public assets served from `/public` directory
- Image assets for projects and branding
- SVG icons as React components
- Static assets referenced with `/` prefix for proper routing

### Configuration Files

- **vite.config.ts**: Vite configuration with React plugin, port 3000, and build output to `/build`
- **jest.config.js**: Jest testing configuration with JSDOM environment and TypeScript support
- **tsconfig.json**: TypeScript configuration with strict mode and ES2020 target
- **package.json**: Dependencies, scripts, and project metadata
