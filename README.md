# Baddie Eats Landing Page

A modern, minimalist landing page for Baddie Eats - the "Uber for Dating" startup that connects users with verified companions for events.

## Features

- **Modern Design**: Clean, minimalist UI with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Built with Next.js 14 and optimized for Vercel
- **Interactive**: Smooth scroll animations and hover effects
- **Waitlist Signup**: Functional email collection with API endpoint

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Deployment

#### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with zero configuration

#### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## Project Structure

```
baddie-eats/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   ├── globals.css         # Global styles
│   └── api/
│       └── waitlist/
│           └── route.ts    # Waitlist API endpoint
├── components/
│   ├── Hero.tsx            # Hero section
│   ├── HowItWorks.tsx      # How it works section
│   ├── Features.tsx        # Features section
│   └── Waitlist.tsx        # Waitlist signup form
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── next.config.ts          # Next.js configuration
└── vercel.json            # Vercel deployment config
```

## Customization

### Colors
Update the color palette in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Your primary colors
  },
  accent: {
    // Your accent colors
  }
}
```

### Content
- Hero section: Edit `components/Hero.tsx`
- How it works: Edit `components/HowItWorks.tsx`
- Features: Edit `components/Features.tsx`
- Waitlist: Edit `components/Waitlist.tsx`

### API Integration
The waitlist API endpoint is ready to be connected to your preferred database or email service. Update `app/api/waitlist/route.ts` to integrate with:

- Database (PostgreSQL, MongoDB, etc.)
- Email service (SendGrid, Mailchimp, etc.)
- Analytics (Google Analytics, Mixpanel, etc.)

## Performance

This landing page is optimized for performance with:

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting by Next.js
- **Compression**: Gzip compression enabled
- **Caching**: Optimized caching headers
- **Bundle Analysis**: Use `npm run build` to analyze bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is private and proprietary to Baddie Eats.