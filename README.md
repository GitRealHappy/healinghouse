# Healing House Website

This repository contains the website for Healing House, a massage therapy clinic in Abbotsford, BC, Canada.

## Website Overview

The Healing House website is a simple, elegant site built with Jekyll and hosted on GitHub Pages. The site includes:

- Homepage with a hero section and "Book Now" CTA
- Team page showcasing therapists
- Pricing and business hours
- Location information with directions
- Clinic policies

## Technology Stack

- **Static Site Generator:** Jekyll
- **Hosting:** GitHub Pages
- **Languages:** HTML, CSS, JavaScript, Markdown
- **Responsive Design:** Mobile-friendly with a clean, modern interface

## Setup Instructions

### Local Development

1. **Install Ruby and Jekyll**
   ```bash
   # Install Ruby (if not already installed)
   # macOS (using Homebrew):
   brew install ruby
   
   # Install Jekyll and Bundler
   gem install jekyll bundler
   ```

2. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/healinghouse.git
   cd healinghouse
   ```

3. **Install dependencies**
   ```bash
   bundle install
   ```

4. **Run the development server**
   ```bash
   bundle exec jekyll serve
   ```

5. **View the site**
   Open your browser and go to `http://localhost:4000`

### Deployment to GitHub Pages

1. **Configure GitHub Pages**
   - Go to the repository settings on GitHub
   - Scroll down to the "GitHub Pages" section
   - Select the branch you want to publish (usually `main` or `gh-pages`)
   - Save the settings

2. **Custom Domain Setup (Optional)**
   - Add your domain name in the GitHub Pages settings
   - Create a CNAME file in the root directory with your domain
   - Configure your DNS settings with your domain provider

## Site Structure

For detailed information about the site structure, components, and design decisions, see [STRUCTURE.md](STRUCTURE.md).

## Making Changes

### Content Updates

- Edit Markdown files in the `pages/` directory to update page content
- Modify `index.html` to update the homepage
- Update `_includes/footer.html` to change contact information or hours

### Design Changes

- CSS styles are in `assets/css/style.css`
- Update color variables in the `:root` section to change the color scheme
- Responsive breakpoints are set at 768px

## License

This project is proprietary and owned by Healing House. All rights reserved.