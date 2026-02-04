# MONAD Law Firm Website

A professional, modern website for MONAD Law Firm built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Multilingual Support**: Full English and Greek versions
- **Responsive Design**: Optimized for all devices
- **Video Hero Section**: Full-screen video carousel on homepage
- **Modern UI**: Clean, professional design with smooth animations
- **SEO Optimized**: Server-side rendering for better search engine visibility

## Pages

### English Version
- `/` - Home page with video hero and featured services
- `/about` - About the firm, mission, vision, and values
- `/services/companies` - Legal services for businesses
- `/services/individuals` - Legal services for individuals
- `/services/real-estate` - Real estate legal services
- `/services/technology` - Technology & IP legal services
- `/team` - Meet the team
- `/knowledge` - Blog/articles section
- `/contact` - Contact form and information
- `/finlex` - Financial recovery services (FINLEX)

### Greek Version
- `/el` - Greek homepage
- `/el/medlex` - Medical negligence services (MEDLEX)

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Adding Video Content

1. Place your hero video files in `/public/videos/`:
   - `hero-video.mp4` (required)
   - `hero-video.webm` (recommended for browser compatibility)

2. Add a poster image in `/public/images/`:
   - `hero-poster.jpg` (displayed while video loads)

### Recommended Video Specifications
- **Resolution**: 1920x1080 or higher
- **Duration**: 10-30 seconds (loops automatically)
- **File Size**: Keep under 10MB for fast loading
- **Format**: MP4 (H.264) and WebM for best compatibility

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with navigation and footer
│   ├── page.tsx            # English homepage
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── knowledge/          # Blog/Knowledge page
│   ├── team/               # Team page
│   ├── finlex/             # FINLEX page
│   ├── services/
│   │   ├── companies/      # Services for companies
│   │   ├── individuals/    # Services for individuals
│   │   ├── real-estate/    # Real estate services
│   │   └── technology/     # Technology services
│   └── el/                 # Greek version
│       ├── page.tsx        # Greek homepage
│       └── medlex/         # MEDLEX page
├── components/
│   ├── Navigation.tsx      # Header navigation
│   ├── Footer.tsx          # Footer component
│   ├── HeroSection.tsx     # Video hero carousel
│   ├── ServiceCard.tsx     # Service card component
│   ├── TeamCard.tsx        # Team member card
│   ├── ContactForm.tsx     # Contact form component
│   └── SectionHeading.tsx  # Section heading component
└── globals.css             # Global styles and Tailwind config
```

## Customization

### Colors
Edit `tailwind.config.ts` to modify the color scheme:
- `primary` - Main brand colors (currently dark gray/black)
- `accent` - Accent colors for highlights

### Typography
The site uses:
- **Inter** - For body text
- **Playfair Display** - For headings (serif font)

### Content
Update content directly in the page files. Key files:
- `src/app/page.tsx` - Homepage content
- `src/components/Navigation.tsx` - Navigation links
- `src/components/Footer.tsx` - Footer content and links

## Deployment

The site can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- Any Node.js hosting platform

```bash
# Build the production bundle
npm run build

# The output will be in the .next folder
```

## License

Copyright MONAD Law Firm. All rights reserved.
