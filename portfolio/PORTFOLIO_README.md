# Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Hero Section** - Eye-catching introduction with animated elements
- **About Section** - Personal background and professional story
- **Skills Section** - Organized display of technical skills and expertise
- **Projects Section** - Showcase of featured projects with descriptions
- **Contact Section** - Easy ways to get in touch with social links
- **Smooth Scrolling** - Seamless navigation between sections
- **Responsive Design** - Mobile-first approach, works on all devices
- **Dark Mode Support** - Automatic dark mode based on system preferences
- **Animations** - Smooth transitions and fade-in effects

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint

## Getting Started

### Development

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

To create a production build:

```bash
npm run build
```

### Start Production Server

To start the production server:

```bash
npm start
```

### Linting

To run ESLint:

```bash
npm run lint
```

## Customization

### Personal Information

Edit `/app/page.tsx` to customize:

- Your name and title in the Hero section
- About section content
- Skills and expertise
- Project details
- Contact information and social links

### Styling

- Main styles are in `/app/globals.css`
- Tailwind configuration can be adjusted in `postcss.config.mjs`
- Custom animations are defined in `globals.css`

### Colors

The portfolio uses a gradient color scheme with:
- Primary: Blue (blue-600) to Purple (purple-600)
- Background: Slate tones for light and dark modes
- Accents: Various gradient combinations for projects

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css       # Global styles and animations
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main portfolio page
├── public/               # Static assets
├── next.config.ts        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## Deployment

This portfolio can be easily deployed to:

- **Vercel** (recommended): `vercel deploy`
- **Netlify**: Connect your git repository
- **AWS Amplify**: Connect your git repository
- **Any static hosting**: Use `npm run build` and deploy the `.next` folder

## License

Feel free to use this template for your own portfolio!

## Credits

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
