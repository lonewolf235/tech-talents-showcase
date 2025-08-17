# AI/ML Portfolio Website

## Overview

This is a modern, professional portfolio website for an AI/ML Engineer built with React, TypeScript, and a full-stack architecture. The site showcases professional experience, technical skills, projects, and achievements in the AI/ML field. It features a high-contrast charcoal and electric blue theme, responsive design, and interactive components to create an engaging user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### January 17, 2025
- **Theme Update**: Changed entire color scheme from black/red to high-contrast charcoal and electric blue theme
- **Skills Update**: Updated skills to reflect actual expertise - removed Docker, added MCP, Agno, Keras, Matplotlib, Seaborn, PostgreSQL, MongoDB, Windows, Raspberry Pi, Loguru
- **Achievement Added**: Added GATE DA 2024 AIR 2552 achievement to About section
- **Project Cleanup**: Removed DigiBOLT AI from projects (kept in experience section as requested)
- **Favicon**: Added custom SVG favicon with electric blue gradient and professional "P" monogram
- **SEO**: Enhanced meta tags with project description and GATE achievement
- **New Sections Added**: Created comprehensive Accomplishments and Education sections with all leadership roles, certifications, publications, awards, and academic details
- **Navigation Updated**: Added new sections to footer navigation for better site structure
- **Skills UI Redesign**: Replaced cluttered progress bars with clean card-based design using skill levels (Expert/Advanced/Proficient), icons, and better visual hierarchy

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development patterns
- **Styling**: Tailwind CSS with custom dark theme (black background with red accents) and shadcn/ui component library
- **State Management**: TanStack React Query for server state management and data fetching
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds
- **Component Architecture**: Modular component structure with reusable UI components from shadcn/ui

### Backend Architecture
- **Server Framework**: Express.js with TypeScript for API endpoints
- **Database ORM**: Drizzle ORM with PostgreSQL support for type-safe database operations
- **Storage Layer**: Abstracted storage interface with in-memory implementation (MemStorage) for development
- **API Structure**: RESTful API with `/api` prefix for all backend routes
- **Development Setup**: Hot module replacement with Vite integration for seamless development experience

### Design System
- **Color Scheme**: High-contrast charcoal and electric blue theme with charcoal black background (#0A0A0A), surface gray (#141414), blue-tinted white text (#F5F7FA), muted blue-gray (#A6B0C3), and electric blue accent (#3298FF)
- **Typography**: Inter font family for readability with JetBrains Mono for code elements
- **Layout**: Responsive grid system with mobile-first approach
- **Components**: Consistent component library using Radix UI primitives with custom styling
- **Favicon**: Custom SVG favicon with electric blue gradient and "P" monogram

### Content Management
- **Static Content**: JSON-based content management in `client/public/content.json` for easy updates
- **Dynamic Sections**: Hero, About, Skills, Experience, Projects, Accomplishments, Education, and Contact sections with interactive elements
- **Media Assets**: Optimized image handling with placeholder support for project showcases
- **Comprehensive Sections**: Full coverage of professional profile including leadership roles, certifications, publications, awards, and education

### Development Workflow
- **Type Safety**: Comprehensive TypeScript configuration across frontend, backend, and shared code
- **Code Organization**: Monorepo structure with clear separation between client, server, and shared code
- **Path Aliases**: Configured import aliases for clean import statements (@/, @shared/, @assets/)
- **Build Process**: Separate build processes for frontend (Vite) and backend (ESBuild) with production optimization

## External Dependencies

### Core Frameworks
- **React 18**: Frontend framework with modern hooks and concurrent features
- **Express.js**: Backend web server framework
- **TypeScript**: Type safety across the entire stack

### Database & ORM
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL support
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **connect-pg-simple**: PostgreSQL session store for Express

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality component library built on Radix UI
- **Radix UI**: Unstyled, accessible UI primitives
- **class-variance-authority**: Utility for creating variant-based component APIs

### Development Tools
- **Vite**: Fast build tool and dev server
- **TanStack React Query**: Data fetching and caching library
- **Wouter**: Lightweight router for React
- **ESBuild**: Fast JavaScript bundler for production builds

### Third-party Integrations
- **Replit**: Development environment integration with runtime error handling
- **PostCSS**: CSS processing with Autoprefixer
- **React Hook Form**: Form handling with validation support
- **Date-fns**: Date manipulation utilities
- **Lucide React**: Icon library for consistent iconography