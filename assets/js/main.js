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
        if (currentLocation.startsWith(linkPath) && linkPath !== '/') {
            link.classList.add('active');
        } else if (currentLocation === '/' && linkPath === '/') {
            link.classList.add('active');
        }
    });
    
    // Mobile menu toggle
    const navToggle = document.getElementById('nav-toggle');
    const navToggleLabel = document.querySelector('.nav-toggle-label');
    
    if (navToggleLabel && navToggle) {
        navToggleLabel.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            navToggle.checked = !navToggle.checked;
        });
    }
    
    // The 'change' event on navToggle is implicitly handled by CSS's :checked selector.
    // No separate JS listener for 'change' on navToggle is needed for visual styles if CSS handles it.

    // Close menu when clicking outside (if navToggle exists)
    if (navToggle) {
        document.addEventListener('click', function(e) {
            const isNavLinks = e.target.closest('.nav-links');
            const isNavToggleLabel = e.target.closest('.nav-toggle-label');
            
            if (!isNavLinks && !isNavToggleLabel && navToggle.checked) {
                navToggle.checked = false;
            }
        });
    }

    // Read More functionality for Team Bios and RMT Info
    const readMoreButtons = document.querySelectorAll('.read-more-btn');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Handle team bio read more
            const bioTextDiv = this.closest('.bio-text');
            if (bioTextDiv) {
                const moreTextDiv = bioTextDiv.querySelector('.more-text');
                const dotsSpan = bioTextDiv.querySelector('.bio-intro .dots');

                if (moreTextDiv) {
                    moreTextDiv.classList.toggle('expanded');
                    const isExpanded = moreTextDiv.classList.contains('expanded');
                    this.textContent = isExpanded ? 'Read Less' : 'Read More';
                    this.setAttribute('aria-expanded', isExpanded);
                    if (dotsSpan) {
                        dotsSpan.style.display = isExpanded ? 'none' : 'inline';
                    }
                }
            }
            
            // Handle RMT info read more
            const serviceInfoDiv = this.closest('.rmt-info, .reiki-info, .pathweaving-info');
            if (serviceInfoDiv) {
                const moreTextDiv = serviceInfoDiv.querySelector('.more-text');
                if (moreTextDiv) {
                    moreTextDiv.classList.toggle('expanded');
                    const isExpanded = moreTextDiv.classList.contains('expanded');
                    
                    // Set appropriate button text based on service type
                    if (serviceInfoDiv.classList.contains('rmt-info')) {
                        this.textContent = isExpanded ? 'Show Less' : 'What is Registered Massage Therapy?';
                    } else if (serviceInfoDiv.classList.contains('reiki-info')) {
                        this.textContent = isExpanded ? 'Show Less' : 'What is Certified Usui Master Reiki?';
                    } else if (serviceInfoDiv.classList.contains('pathweaving-info')) {
                        this.textContent = isExpanded ? 'Show Less' : 'What is Pathweaving?';
                    }
                    
                    this.setAttribute('aria-expanded', isExpanded);
                }
            }
        });
    });
});