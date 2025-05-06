# Healing House Website Structure

This document provides an overview of the Healing House website architecture, components, and design decisions to aid in future development and maintenance.

## Technology Stack

- **Static Site Generator:** Jekyll
- **Hosting:** GitHub Pages
- **Custom Domain:** Configured with GitHub Pages
- **Languages:** HTML, CSS, JavaScript, Markdown
- **Browser Support:** Modern browsers (Chrome, Firefox, Safari, Edge)

## Directory Structure

```
healinghouse/
├── _config.yml            # Jekyll configuration
├── _data/                 # Data files (business hours, services)
├── _includes/             # Reusable components
│   ├── header.html        # Navigation header
│   ├── footer.html        # Footer
│   └── book-cta.html      # Book Now CTA component
├── _layouts/              # Page templates
│   ├── default.html       # Main template 
│   └── page.html          # Content page template
├── assets/                # Static assets
│   ├── css/               # Stylesheets
│   ├── js/                # JavaScript files
│   └── images/            # Images and logo
├── pages/                 # Site pages
│   ├── team.md            # The Team page
│   ├── pricing.md         # Pricing and hours
│   ├── location.md        # Location information
│   └── policies.md        # Clinic policies
├── index.html             # Homepage
├── README.md              # Project information
└── STRUCTURE.md           # This file
```

## Key Components

### Jekyll Configuration

The `_config.yml` file contains the site configuration including:
- Site title and description
- URL configuration
- Build settings
- Permalink structure (set to 'pretty' for clean URLs)

### Layouts and Templates

1. **default.html**: The main layout template used by all pages, containing:
   - Head section with meta tags and CSS
   - Header include
   - Main content area
   - Footer include
   - JavaScript includes

2. **page.html**: Content page template that extends default.html, adding:
   - Page header with title
   - Content structure for inner pages

### Includes (Reusable Components)

1. **header.html**: Site navigation with:
   - Logo and site name
   - Responsive navigation menu
   - "Book Now" CTA button
   - Mobile-friendly hamburger menu

2. **footer.html**: Site footer with:
   - Contact information
   - Business hours
   - Social media links
   - Copyright notice

3. **book-cta.html**: Reusable call-to-action component with:
   - Heading and description
   - "Book Now" button linking to external booking system

### Stylesheets

The CSS is organized with:
- CSS variables for consistent styling (colors, fonts)
- Mobile-first responsive design
- Modular components with specific styling
- Media queries for different device sizes

## Page Structure

### Homepage (index.html)
- Hero section with main CTA
- Services overview
- Brief about section
- Book Now CTA

### Content Pages
All content pages use the page.html layout and follow a consistent structure:
- Page header with title
- Content sections specific to the page
- Book Now CTA at the bottom

## Navigation Structure

- **Main Navigation:** Home, The Team, Pricing, Location, Policies
- **Book Now Button:** Present in header and as CTAs throughout the site
- **Footer Links:** Contact info, business hours, social media

## Design Decisions

1. **Color Scheme:**
   - Primary: #4a7c59 (Green - represents healing and nature)
   - Secondary: #c9e4ca (Light green - softer complement to primary)
   - Accent: #f9c784 (Warm yellow - for CTAs and highlights)
   - Text: #333333 (Dark gray - for readability)

2. **Typography:**
   - Main Font: Montserrat (sans-serif for clean, modern look)
   - Headings: Bold weight for emphasis
   - Body: Regular weight for readability

3. **Responsive Design:**
   - Mobile-first approach
   - Breakpoint at 768px for tablet/desktop layouts
   - Collapsible navigation menu on mobile
   - Flexible grid layouts that adapt to screen size

## External Services Integration

1. **Jane App Integration:**
   - "Book Now" buttons link to the clinic's Jane App scheduling system
   - Links open in a new tab to maintain the user's place on the website

## Adding New Pages

To add a new page to the website:

1. Create a new Markdown file in the `pages/` directory
2. Include the following front matter:
   ```yaml
   ---
   layout: page
   title: Your Page Title
   permalink: /your-page-url/
   ---
   ```
3. Add your content using Markdown and HTML as needed
4. Add a link to the page in the navigation menu (_includes/header.html)

## Future Enhancements

Potential future improvements for the website:

1. Blog section for health tips and clinic news
2. Online intake forms for new clients
3. Testimonials carousel on the homepage
4. Newsletter signup form
5. Additional service detail pages 