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
   - Google Fonts integration for Montserrat and Amatic SC
   - Header include
   - Main content area
   - Footer include
   - JavaScript includes

2. **page.html**: Content page template that extends default.html, adding:
   - Page header with title
   - Content structure for inner pages

### Includes (Reusable Components)

1. **header.html**: Site navigation with:
   - Logo and site name (site title uses Amatic SC font)
   - Responsive navigation menu with clean URLs
   - "Book Now" CTA button linking to Jane App
   - Mobile-friendly hamburger menu activated at 850px viewport width:
     - Slides from top on smaller mobile screens (<= 600px)
     - Slides from right on tablet screens (601px - 850px)
   - JavaScript for menu toggle simplified to rely on CSS `:checked` state.

2. **footer.html**: Site footer with:
   - Contact information
   - Business hours (recently updated)
   - Clinic logo display
   - Copyright notice with dynamic year

3. **book-cta.html**: Reusable call-to-action component with:
   - Heading and description
   - "Book Now" button linking to Jane App booking system

### Stylesheets

The CSS is organized with:
- CSS variables for consistent styling (colors, fonts, including Amatic SC for site title)
- Mobile-first responsive design
- Modular components with specific styling (e.g., header, footer, services cards, team member cards)
- Media queries for different device sizes, including:
  - Hamburger menu activation at <= 850px
  - Specific mobile menu animation at <= 600px (slide from top)
  - Specific tablet menu animation between 601px - 850px (slide from right)
  - Adjustments for full navigation on tablets between 851px - 966px
- Responsive map container for Google Maps
- Landscape mode optimizations
- Overflow control to prevent horizontal scrolling
- Styles for collapsible content sections (e.g., team bios)

## Page Structure

### Homepage (index.html)
- Hero section with main CTA
- Services overview
- Brief about section
- Book Now CTA

### Content Pages
All content pages use the page.html layout and follow a consistent structure:
- Page header with title
- Content sections specific to the page (general spacing improved for readability)
- Book Now CTA at the bottom

### Team Page (pages/team.md)
- Displays profiles of Registered Massage Therapists.
- Features collapsible therapist bios with "Read More" / "Read Less" functionality for improved readability and engagement.
- Each therapist profile includes a photo, title, detailed bio (expandable), list of specialties, and an individual "Book Now" button linking to the Jane App.
- Includes a separate section for other practitioners, such as Certified Usui Reiki Masters, with similar profile structure (photo, title, bio, specialties, booking link).
- Uses a responsive grid layout for team member cards.

### Location Page
- Address information
- Responsive Google Maps embed
- Directions (driving directions formatted as an ordered list) and parking information

## Navigation Structure

- **Main Navigation:** Home, The Team, Pricing, Location, Policies
- **Book Now Button:** Present in header and as CTAs throughout the site
- **Footer Links:** Contact info, business hours, clinic logo
- **Mobile Navigation:** Hamburger menu activated at 850px.
  - Slides from top on screens <= 600px.
  - Slides from right on screens between 601px - 850px.
  - JavaScript toggle relies on CSS `:checked` state for visual changes.

## Mobile Optimizations

1. **Responsive Navigation:**
   - Touch-friendly hamburger menu activated at 850px.
   - Menu animation:
     - Slides from top on mobile screens (<= 600px).
     - Slides from right on tablet screens (601px - 850px).
   - JavaScript event handling simplified to CSS `:checked` state.
   - Landscape mode support (primarily handled by breakpoint adjustments).
   - Improved visibility and accessibility.

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
   - Primary: #8A6552 (Rich warm brown - primary brand color)
   - Secondary: #D2C4B5 (Soft taupe - secondary elements)
   - Accent: #C19277 (Warm terracotta - accent/CTA elements)
   - Text: #3E332E (Deep brown - main text)
   - Light: #F9F6F2 (Warm off-white - backgrounds)
   - Dark: #2D2420 (Dark chocolate - footer, dark areas)
   - Gray: #EDE8E2 (Cream/beige - light backgrounds)

2. **Typography:**
   - Main Font: Montserrat (sans-serif for clean, modern look)
   - Site Title Font: Amatic SC (cursive, for a distinct brand feel in the header)
   - Headings: Bold weight for emphasis
   - Body: Regular weight for readability

3. **Responsive Design:**
   - Mobile-first approach
   - Key Breakpoints:
     - Full navigation with minor adjustments: 851px - 966px
     - Hamburger menu activation: <= 850px
     - Tablet-specific menu animation (slide from right): 601px - 850px
     - Mobile-specific menu animation (slide from top): <= 600px
   - Collapsible navigation menu on mobile/tablet screens.
   - Flexible grid layouts that adapt to screen size
   - Use of collapsible sections (e.g., team member bios) for better content management on smaller screens and reduced initial information overload.

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