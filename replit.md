# AI/ML Portfolio Website

## Overview

This is a modern, professional portfolio website for an AI/ML Engineer built with React, TypeScript, and a full-stack architecture. The site showcases professional experience, technical skills, projects, and achievements in the AI/ML field. It features a dark theme with red accents, responsive design, and interactive components to create an engaging user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

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
- **Color Scheme**: Dark theme with deep black background (--background: 0 0% 8%) and blood red primary colors (--primary: 0 85% 45%)
- **Typography**: Inter font family for readability with JetBrains Mono for code elements
- **Layout**: Responsive grid system with mobile-first approach
- **Components**: Consistent component library using Radix UI primitives with custom styling

### Content Management
- **Static Content**: JSON-based content management in `client/public/content.json` for easy updates
- **Dynamic Sections**: Hero, About, Skills, Experience, Projects, and Contact sections with interactive elements
- **Media Assets**: Optimized image handling with placeholder support for project showcases

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