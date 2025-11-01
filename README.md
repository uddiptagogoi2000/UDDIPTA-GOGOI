# Portfolio Website - Uddipta Gogoi

A modern, responsive portfolio website built with Next.js 14+, TypeScript, Tailwind CSS, and shadcn/ui. Features dark/light mode, project filtering, and a comprehensive data structure for easy management.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14+ (App Router), React 18+, TypeScript
- **Beautiful UI**: Tailwind CSS with shadcn/ui components
- **Theme Support**: Dark/light mode with system preference detection
- **Responsive Design**: Mobile-first approach, works on all devices
- **SEO Optimized**: Metadata for all pages, Open Graph support
- **Project Management**: Easy-to-update JSON data structure
- **Project Filtering**: Search and filter projects by technology/category
- **Image Optimization**: Next.js Image component with automatic optimization
- **Type Safe**: Full TypeScript support

## 📁 Project Structure

```
portfolio-uddipta/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with theme provider
│   │   ├── page.tsx             # Landing page
│   │   ├── about/
│   │   │   └── page.tsx         # About page with experience & education
│   │   ├── projects/
│   │   │   ├── page.tsx         # Projects list with filtering
│   │   │   └── [id]/
│   │   │       └── page.tsx     # Individual project details
│   │   └── contact/
│   │       └── page.tsx         # Contact page with form
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Navigation with mobile menu
│   │   │   ├── Footer.tsx       # Footer with social links
│   │   │   └── ThemeProvider.tsx # Theme management
│   │   ├── sections/
│   │   │   ├── Hero.tsx         # Hero section
│   │   │   ├── About.tsx        # About section
│   │   │   ├── Experience.tsx   # Experience showcase
│   │   │   ├── Skills.tsx       # Skills section
│   │   │   ├── Projects.tsx     # Featured projects
│   │   │   └── Contact.tsx      # Contact CTA
│   │   └── ui/
│   │       ├── ProjectCard.tsx  # Reusable project card
│   │       ├── ContactForm.tsx  # Contact form with validation
│   │       └── ThemeToggle.tsx  # Theme switcher
│   ├── data/
│   │   └── portfolio-data.json  # All portfolio data (EDIT THIS!)
│   └── lib/
│       └── utils.ts             # Utility functions
└── public/
    └── images/                   # Images for projects & avatar
```

## 📝 Managing Your Data

All portfolio data is stored in a single JSON file: `src/data/portfolio-data.json`

### Update Your Profile

```json
{
  "profile": {
    "name": "Your Name",
    "title": "Your Title",
    "bio": "Short bio",
    "detailedBio": "Longer detailed bio",
    "email": "your.email@example.com",
    "phone": "+1234567890",
    "location": "Your Location",
    "avatar": "/images/avatar.jpg"
  }
}
```

### Add/Edit Projects

```json
{
  "projects": [
    {
      "id": "unique-project-id",
      "title": "Project Title",
      "shortDescription": "Brief description",
      "fullDescription": "Detailed description",
      "background": "Project background story",
      "technologies": ["React", "Next.js"],
      "tags": ["Front End Development", "React"],
      "coverImage": "/images/projects/project-cover.jpg",
      "images": {
        "hero": "/images/projects/project-hero.jpg",
        "previews": ["/image1.jpg", "/image2.jpg"]
      },
      "liveUrl": "https://your-project.com",
      "githubUrl": "https://github.com/username/repo",
      "featured": true,
      "category": "Web Development"
    }
  ]
}
```

### Update Experience

```json
{
  "experience": [
    {
      "company": "Company Name",
      "position": "Job Title",
      "startDate": "2023-01",
      "endDate": "present",
      "description": "Job description",
      "technologies": ["React", "Node.js"],
      "achievements": ["Achievement 1", "Achievement 2"]
    }
  ]
}
```

### Update Skills

```json
{
  "skills": [
    {
      "name": "React",
      "level": 90,
      "category": "Frontend",
      "years": 3,
      "description": "Skill description"
    }
  ]
}
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

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

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 🎨 Customization

### Colors & Theme

The theme colors are defined in `src/app/globals.css`. The site uses CSS variables that automatically switch between light and dark modes.

### Components

All UI components use shadcn/ui and can be customized by editing the component files in `src/components/ui/`.

### Styling

Tailwind CSS is used throughout. Customize styles by:
- Editing component classes
- Modifying `tailwind.config.ts`
- Updating CSS variables in `globals.css`

## 📦 Environment Variables

Create a `.env.local` file for production:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Set environment variables
4. Deploy!

### Other Platforms

The site can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Your own server

## 📸 Images

Place images in `public/images/`:
- `avatar.jpg` - Your profile picture
- `projects/` - Project images
- `og-image.jpg` - Open Graph image

Recommended image formats: WebP or optimized JPG/PNG

## 🔧 Key Features Explained

### Project Filtering

The projects page includes:
- Search by title, description, or technology
- Filter by category
- Responsive grid layout

### Project Details

Each project has:
- Hero image
- Full description
- Technology stack badges
- Preview images gallery
- Live demo & GitHub links
- Previous/Next navigation

### Contact Form

- Client-side validation
- Email format checking
- Error handling
- Success messages

*Note: Currently shows success message only. Connect to a backend service (e.g., Resend, Formspree) for actual email sending.*

## 📚 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Theme**: next-themes
- **Icons**: SVG icons (custom)

## 📄 License

This project is open source and available for personal use.

## 🤝 Support

For questions or issues, please open an issue on GitHub or contact via email.

---

Built with ❤️ by Uddipta Gogoi