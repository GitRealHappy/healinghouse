document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add active class to current page in navigation
    const currentLocation = window.location.pathname;
    const navLinkElements = document.querySelectorAll('.nav-links a');
    
    navLinkElements.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (currentLocation.includes(linkPath) && linkPath !== '/') {
            link.classList.add('active');
        } else if (currentLocation === '/' && linkPath === '/') {
            link.classList.add('active');
        }
    });
    
    // Mobile menu toggle
    const navToggle = document.getElementById('nav-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    
    if (navToggle) {
        navToggle.addEventListener('change', function() {
            if (this.checked) {
                navLinksContainer.style.transform = 'translateY(0)';
                navLinksContainer.style.opacity = '1';
            } else {
                navLinksContainer.style.transform = 'translateY(-150%)';
                navLinksContainer.style.opacity = '0';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            const isNavLinks = e.target.closest('.nav-links');
            const isNavToggleLabel = e.target.closest('.nav-toggle-label');
            
            if (!isNavLinks && !isNavToggleLabel && navToggle.checked) {
                navToggle.checked = false;
                navLinksContainer.style.transform = 'translateY(-150%)';
                navLinksContainer.style.opacity = '0';
            }
        });
    }
});