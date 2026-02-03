# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

This is a Next.js 16 project using the App Router with TypeScript, React 19, and Tailwind CSS v4.

### Project Structure

- `app/` - App Router pages and layouts (file-based routing)
  - `layout.tsx` - Root layout wrapping all pages
  - `page.tsx` - Home page (route: `/`)
  - `globals.css` - Global styles and Tailwind imports
- `public/` - Static assets served at root path
- `@/*` - Path alias for project root imports (configured in tsconfig.json)

### Key Patterns

- **Routing**: Files named `page.tsx` in `app/` subdirectories become routes
- **Layouts**: `layout.tsx` files wrap child routes and persist across navigation
- **Styling**: Use Tailwind CSS utility classes; global styles in `app/globals.css`
