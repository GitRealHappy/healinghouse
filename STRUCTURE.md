# Healing House Website Structure

This document provides an overview of the Healing House website architecture, components, and design decisions to aid in future development and maintenance.

## Technology Stack

- **Static Site Generator:** Jekyll
- **Hosting:** GitHub Pages
- **Custom Domain:** Configured with GitHub Pages
- **Languages:** HTML, CSS, JavaScript, Markdown
- **Browser Support:** Modern browsers (Chrome, Firefox, Safari, Edge)
- **Google Maps:** Embedded responsive map

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
├── 404.html               # Custom 404 error page
├── CNAME                  # Custom domain configuration
├── README.md              # Project information
└── STRUCTURE.md           # This file
```

## Key Components

### Jekyll Configuration

The `_config.yml` file contains the site configuration including:
- Site title and description
- URL configuration with baseurl set for GitHub Pages
- Build settings
- Permalink structure (set to 'pretty' for clean URLs)

### Layouts and Templates

1. **default.html**: The main layout template used by all pages, containing:
   - Head section with meta tags and CSS
   - Google Fonts integration for Montserrat
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
   - Responsive navigation menu with clean URLs
   - "Book Now" CTA button linking to Jane App
   - Mobile-friendly hamburger menu with touch support

2. **footer.html**: Site footer with:
   - Contact information
   - Business hours
   - Social media links
   - Copyright notice with dynamic year

3. **book-cta.html**: Reusable call-to-action component with:
   - Heading and description
   - "Book Now" button linking to Jane App booking system

### Stylesheets

The CSS is organized with:
- CSS variables for consistent styling (colors, fonts)
- Mobile-first responsive design
- Modular components with specific styling
- Media queries for different device sizes
- Responsive map container for Google Maps
- Landscape mode optimizations
- Overflow control to prevent horizontal scrolling

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

### Location Page
- Address information
- Responsive Google Maps embed
- Directions and parking information

## Navigation Structure

- **Main Navigation:** Home, The Team, Pricing, Location, Policies
- **Book Now Button:** Present in header and as CTAs throughout the site
- **Footer Links:** Contact info, business hours, social media
- **Mobile Navigation:** Hamburger menu with improved touch support

## Mobile Optimizations

1. **Responsive Navigation:**
   - Touch-friendly hamburger menu
   - Proper event handling for mobile devices
   - Landscape mode support
   - Improved visibility and accessibility

2. **Responsive Maps:**
   - Aspect ratio-based responsive container
   - Mobile-specific layout adjustments
   - Prevents overflow issues on small screens

3. **Cross-Device Compatibility:**
   - Horizontal scroll prevention
   - Flexible layouts that adapt to screen size
   - Optimized tap targets for mobile users

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
   - Breakpoints at 768px for tablet and 900px for landscape
   - Collapsible navigation menu on mobile
   - Flexible grid layouts that adapt to screen size

## External Services Integration

1. **Jane App Integration:**
   - "Book Now" buttons link to the clinic's Jane App scheduling system
   - Links open in a new tab to maintain the user's place on the website

2. **Google Maps Integration:**
   - Embedded Google Maps for location visualization
   - Responsive container adapts to all screen sizes
   - Mobile-optimized interaction

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
6. Social media feed integration
7. Accessibility improvements (ARIA attributes, keyboard navigation)
8. Performance optimizations (image lazy loading, critical CSS) 