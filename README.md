# Azure Dunes Villa - Luxury Villa Website

A modern, premium informative website for Azure Dunes Villa, built with Next.js 16 and featuring a minimalist black, white, and gold design aesthetic.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38bdf8?style=flat-square&logo=tailwind-css)

## 🌟 Features

- **Premium Design**: Minimalist luxury aesthetic with black, white, and gold color palette
- **Full Static Site**: Optimized for static export (perfect for shared hosting)
- **SEO Optimized**: Complete metadata, sitemap, and robots.txt
- **Responsive Design**: Mobile-first approach with elegant breakpoints
- **Performance**: Optimized images, lazy loading, and fast page loads
- **Accessibility**: Semantic HTML and proper ARIA labels

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **Fonts**: Playfair Display (headings), Manrope (body)
- **Icons**: Font Awesome 6.5.1
- **Deployment**: Static export ready

## 📁 Project Structure

```
villa-website/
├── app/                    # Next.js App Router pages
│   ├── about/             # About the villa page
│   ├── amenities/         # Amenities showcase
│   ├── book-now/          # Inquiry form
│   ├── contact/           # Contact page
│   ├── gallery/           # Image gallery
│   ├── location/          # Location information
│   ├── rooms/             # Room listings
│   ├── privacy-policy/    # Privacy policy
│   ├── terms/             # Terms of stay
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   ├── robots.ts          # Robots.txt generator
│   └── sitemap.ts         # Sitemap generator
├── components/             # Reusable React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer with social links
│   ├── Hero.tsx           # Hero section component
│   ├── RoomCard.tsx       # Room card component
│   └── GalleryGrid.tsx    # Gallery grid component
├── lib/                    # Utility functions and data
│   └── site.ts            # Site configuration and data
├── public/                 # Static assets
│   └── images/            # Villa images
└── next.config.ts         # Next.js configuration
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

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)


```

## 📄 Pages

- **Home** (`/`) - Hero section, highlights, rooms preview, amenities, gallery
- **About** (`/about`) - Villa story and design philosophy
- **Rooms** (`/rooms`) - Detailed room listings with images
- **Amenities** (`/amenities`) - Complete amenities list
- **Gallery** (`/gallery`) - Visual journey through the villa
- **Location** (`/location`) - Location details and highlights
- **Book Now** (`/book-now`) - Inquiry form (UI only, ready for Formspree)
- **Contact** (`/contact`) - Contact information and form
- **Privacy Policy** (`/privacy-policy`) - Privacy policy page
- **Terms** (`/terms`) - Terms of stay

## 🎨 Design Philosophy

This website follows a **premium minimalist** design approach:

- **Clean Typography**: Elegant serif headings with generous spacing
- **Subtle Animations**: Smooth fade-up effects and hover transitions
- **Luxury Accents**: Gold borders and highlights for premium feel
- **White Space**: Generous spacing for a calm, sophisticated look
- **High Contrast**: Black text on white for maximum readability

## 🔧 Customization

### Adding New Pages

1. Create a new folder in `app/` directory
2. Add `page.tsx` with metadata and content
3. Update `lib/site.ts` navigation items if needed

### Adding Images

1. Place images in `public/images/`
2. Update image paths in `lib/site.ts`
3. Use Next.js `Image` component for optimization

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is private and proprietary.

## 👨‍💻 Developer

**Chamikara Bandara**  
Portfolio: [chamikarabandara.com](https://chamikarabandara.com)

---

Built with ❤️ using Next.js 16
