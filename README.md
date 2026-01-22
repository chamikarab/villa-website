# Azure Dunes Villa - Luxury Villa Website

A modern, premium informative website for Azure Dunes Villa built with Next.js 14. This static website showcases the luxury coastal villa with elegant design, high-quality imagery, and seamless user experience.

## ✨ Features

- **Modern Design**: Premium black, white, and gold minimalist aesthetic
- **Full Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Complete metadata, sitemap, and robots.txt
- **Static Site Generation**: Optimized for fast loading and easy hosting
- **Image Gallery**: Beautiful grid layout showcasing villa experiences
- **Room Showcase**: Detailed information about suites and residences
- **Contact Forms**: Inquiry and contact forms (ready for Formspree integration)
- **Smooth Animations**: Elegant fade-up animations and hover effects

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Fonts**: Manrope (body), Playfair Display (headings)
- **Icons**: Font Awesome 6.5.1
- **Deployment**: Static export ready (supports shared hosting)

## 📁 Project Structure

```
villa-website/
├── app/                    # Next.js App Router pages
│   ├── about/             # About the villa
│   ├── rooms/             # Room listings
│   ├── amenities/         # Villa amenities
│   ├── gallery/           # Image gallery
│   ├── location/          # Location information
│   ├── contact/           # Contact page
│   ├── book-now/          # Inquiry form
│   ├── privacy-policy/    # Privacy policy
│   ├── terms/             # Terms of stay
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   ├── sitemap.ts         # Dynamic sitemap
│   └── robots.ts          # Robots.txt
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer with links
│   ├── Hero.tsx           # Hero section
│   ├── RoomCard.tsx       # Room display card
│   └── GalleryGrid.tsx     # Gallery grid layout
├── lib/                   # Utilities and config
│   └── site.ts            # Site configuration
└── public/                # Static assets
    └── images/            # Villa images
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/chamikarab/villa-website.git
   cd villa-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Design System

### Colors
- **Primary**: Pure White (#FFFFFF)
- **Secondary**: Absolute Black (#000000)
- **Accent**: Luxury Gold (#C5A059, #E2D1A8)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Manrope (sans-serif)
- **Style**: High tracking, uppercase labels

## 📦 Building for Production

This project is configured for static export, perfect for shared hosting:

```bash
npm run build
```

The static files will be generated in the `out/` directory, ready to upload to any web server.

## 🌐 Deployment

### Static Hosting (Recommended)
- Upload the `out/` folder contents to your hosting provider
- Works with: Namecheap, GoDaddy, Netlify, Vercel, etc.

### Vercel (Easiest)
1. Push to GitHub
2. Import project on Vercel
3. Deploy automatically

## 📝 Configuration

Update site information in `lib/site.ts`:
- Villa name and description
- Contact information
- Social media links
- Site URL

## 🖼️ Images

Replace placeholder images in `public/images/`:
- `hero-1.png` - Homepage hero image
- `horizon_suite.png` - Horizon Suite room
- `Cove_Residence.png` - Cove Residence room
- `Garden_Pavilion.png` - Garden Pavilion room
- `experiences/` - Gallery images

## 📄 License

This project is private and proprietary.

## 👨‍💻 Developer

**Chamikara Bandara**  
Website: [chamikarabandara.com](https://chamikarabandara.com)

---

Built with ❤️ using Next.js 14
