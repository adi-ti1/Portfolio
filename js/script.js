document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    
    // Create hamburger menu for mobile if it doesn't exist
    if (!hamburger) {
        const header = document.querySelector('header');
        const hamburgerDiv = document.createElement('div');
        hamburgerDiv.className = 'hamburger';
        
        for (let i = 0; i < 4; i++) {
            const span = document.createElement('span');
            hamburgerDiv.appendChild(span);
        }
        
        // Insert hamburger before the navigation
        header.insertBefore(hamburgerDiv, nav);
        
        // Update the hamburger variable
        const updatedHamburger = document.querySelector('.hamburger');
        
        // Add event listener to the newly created hamburger
        updatedHamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
        });
    } else {
        // If hamburger already exists in HTML
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }
    
    // Close mobile nav when clicking on a nav link
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            if (hamburger) {
                hamburger.classList.remove('active');
            } else {
                document.querySelector('.hamburger').classList.remove('active');
            }
        });
    });
    
    // Active Navigation Link
    function setActiveLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav ul li a');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 150)) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Initial call to set active link
    setActiveLink();
    
    // Set active link on scroll
    window.addEventListener('scroll', setActiveLink);
    
    // Scroll to Top Button
    function createScrollTopButton() {
        const scrollTopButton = document.createElement('div');
        scrollTopButton.className = 'scroll-top';
        scrollTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
        document.body.appendChild(scrollTopButton);
        
        // Show/hide scroll to top button
        window.addEventListener('scroll', function() {
            if (window.scrollY > 500) {
                scrollTopButton.classList.add('active');
            } else {
                scrollTopButton.classList.remove('active');
            }
        });
        
        // Scroll to top when button is clicked
        scrollTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Create scroll to top button
    createScrollTopButton();
    
    // Form Submission
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For now, we'll just show an alert
            alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Add animations to elements when they enter the viewport
    function animateOnScroll() {
        const animatedElements = document.querySelectorAll('.skill-item, .project-card, .timeline-item, .certificate-card');
        
        animatedElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 50) {
                element.classList.add('animated');
            }
        });
    }
    
    // Add a class to make animation work
    document.querySelectorAll('.skill-item, .project-card, .timeline-item, .certificate-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Function to make elements appear when scrolled to
    function checkAnimation() {
        document.querySelectorAll('.skill-item, .project-card, .timeline-item, .certificate-card').forEach(el => {
            const elementPosition = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 50) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initial check
    checkAnimation();
    
    // Check on scroll
    window.addEventListener('scroll', checkAnimation);
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            // Handle case for "#" only
            if (targetId === '#') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const targetPosition = targetElement.offsetTop - 70; // Adjust for header height
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Original code from paste.txt
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    
    // Create hamburger menu for mobile if it doesn't exist
    if (!hamburger) {
        const header = document.querySelector('header');
        const hamburgerDiv = document.createElement('div');
        hamburgerDiv.className = 'hamburger';
        
        for (let i = 0; i < 4; i++) {
            const span = document.createElement('span');
            hamburgerDiv.appendChild(span);
        }
        
        // Insert hamburger before the navigation
        header.insertBefore(hamburgerDiv, nav);
        
        // Update the hamburger variable
        const updatedHamburger = document.querySelector('.hamburger');
        
        // Add event listener to the newly created hamburger
        updatedHamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
        });
    } else {
        // If hamburger already exists in HTML
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }
    
    // Close mobile nav when clicking on a nav link
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
            if (hamburger) {
                hamburger.classList.remove('active');
            } else {
                document.querySelector('.hamburger').classList.remove('active');
            }
        });
    });
    
    // Active Navigation Link
    function setActiveLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav ul li a');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 150)) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Initial call to set active link
    setActiveLink();
    
    // Set active link on scroll
    window.addEventListener('scroll', setActiveLink);
    
    // Scroll to Top Button
    function createScrollTopButton() {
        const scrollTopButton = document.createElement('div');
        scrollTopButton.className = 'scroll-top';
        scrollTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
        document.body.appendChild(scrollTopButton);
        
        // Show/hide scroll to top button
        window.addEventListener('scroll', function() {
            if (window.scrollY > 500) {
                scrollTopButton.classList.add('active');
            } else {
                scrollTopButton.classList.remove('active');
            }
        });
        
        // Scroll to top when button is clicked
        scrollTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Create scroll to top button
    createScrollTopButton();
    
    // Form Submission
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For now, we'll just show an alert
            alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Add animations to elements when they enter the viewport
    function animateOnScroll() {
        const animatedElements = document.querySelectorAll('.skill-item, .project-card, .timeline-item, .certificate-card');
        
        animatedElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 50) {
                element.classList.add('animated');
            }
        });
    }
    
    // Add a class to make animation work
    document.querySelectorAll('.skill-item, .project-card, .timeline-item, .certificate-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Function to make elements appear when scrolled to
    function checkAnimation() {
        document.querySelectorAll('.skill-item, .project-card, .timeline-item, .certificate-card').forEach(el => {
            const elementPosition = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 50) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Initial check
    checkAnimation();
    
    // Check on scroll
    window.addEventListener('scroll', checkAnimation);
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            // Handle case for "#" only
            if (targetId === '#') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const targetPosition = targetElement.offsetTop - 70; // Adjust for header height
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // NEW CODE FOR CERTIFICATE MODAL POPUP
    // ---------------------------------------
    
    // Create the modal if it doesn't exist
    function createCertificateModal() {
        // Check if modal already exists
        if (document.getElementById('certificateModal')) return;
        
        // Create modal elements
        const modal = document.createElement('div');
        modal.id = 'certificateModal';
        modal.className = 'modal';
        
        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';
        
        const closeButton = document.createElement('span');
        closeButton.className = 'close-button';
        closeButton.innerHTML = '&times;';
        
        const modalImageContainer = document.createElement('div');
        modalImageContainer.className = 'modal-image-container';
        
        const modalImage = document.createElement('img');
        modalImage.id = 'modalImage';
        modalImage.src = '';
        modalImage.alt = 'Certificate';
        
        const modalInfo = document.createElement('div');
        modalInfo.className = 'modal-info';
        
        const modalTitle = document.createElement('h3');
        modalTitle.id = 'modalTitle';
        
        const modalIssuer = document.createElement('p');
        modalIssuer.id = 'modalIssuer';
        
        // Append elements
        modalImageContainer.appendChild(modalImage);
        modalInfo.appendChild(modalTitle);
        modalInfo.appendChild(modalIssuer);
        
        modalContent.appendChild(closeButton);
        modalContent.appendChild(modalImageContainer);
        modalContent.appendChild(modalInfo);
        
        modal.appendChild(modalContent);
        
        // Add modal to body
        document.body.appendChild(modal);
        
        // Add event listeners for modal
        setupModalEventListeners();
    }
    
    // Setup modal event listeners
    function setupModalEventListeners() {
        const modal = document.getElementById('certificateModal');
        const closeButton = modal.querySelector('.close-button');
        
        // Close modal when clicking the close button
        closeButton.addEventListener('click', closeModal);
        
        // Close modal when clicking outside of it
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });
        
        // Close modal when pressing Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && modal.style.display === 'block') {
                closeModal();
            }
        });
        
        // Prevent modal from closing when clicking inside the modal content
        modal.querySelector('.modal-content').addEventListener('click', function(event) {
            event.stopPropagation();
        });
    }
    
    // Function to open modal
    function openModal(imageSrc, title, issuer) {
        const modal = document.getElementById('certificateModal');
        const modalImage = document.getElementById('modalImage');
        const modalTitle = document.getElementById('modalTitle');
        const modalIssuer = document.getElementById('modalIssuer');
        
        modalImage.src = imageSrc;
        modalTitle.textContent = title;
        modalIssuer.textContent = issuer;
        modal.style.display = 'block';
        
        // Disable scrolling on the body
        document.body.style.overflow = 'hidden';
    }
    
    // Function to close modal
    function closeModal() {
        const modal = document.getElementById('certificateModal');
        modal.style.display = 'none';
        
        // Re-enable scrolling on the body
        document.body.style.overflow = 'auto';
    }
    
    // Add event listeners to all certificate cards
    function setupCertificateCards() {
        // Find all certificate cards
        const certificateCards = document.querySelectorAll('.certificate-card');
        
        // For each card, add data attributes if not present and add click event
        certificateCards.forEach(card => {
            const imgElement = card.querySelector('.certificate-image img');
            const titleElement = card.querySelector('.certificate-content h3');
            const issuerElement = card.querySelector('.certificate-content p:not(.certificate-date)');
            
            // Set data attributes if they don't exist
            if (!card.hasAttribute('data-image') && imgElement) {
                card.setAttribute('data-image', imgElement.src);
            }
            
            if (!card.hasAttribute('data-title') && titleElement) {
                card.setAttribute('data-title', titleElement.textContent);
            }
            
            if (!card.hasAttribute('data-issuer') && issuerElement) {
                card.setAttribute('data-issuer', issuerElement.textContent);
            }
            
            // Add click event listener
            card.addEventListener('click', function() {
                const imageSrc = this.getAttribute('data-image');
                const title = this.getAttribute('data-title');
                const issuer = this.getAttribute('data-issuer');
                
                openModal(imageSrc, title, issuer);
            });
        });
    }
    
    // Initialize certificate modal functionality
    createCertificateModal();
    setupCertificateCards();
});



document.addEventListener('DOMContentLoaded', function () {
    // Mobile Navigation Toggle
    const nav = document.querySelector('nav');
    let hamburger = document.querySelector('.hamburger');

    if (!hamburger) {
        const header = document.querySelector('header');
        const hamburgerDiv = document.createElement('div');
        hamburgerDiv.className = 'hamburger';

        for (let i = 0; i < 4; i++) {
            const span = document.createElement('span');
            hamburgerDiv.appendChild(span);
        }

        header.insertBefore(hamburgerDiv, nav);
        hamburger = document.querySelector('.hamburger');
    }

    hamburger.addEventListener('click', function () {
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Close mobile nav on link click
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function () {
            nav.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Set active nav link on scroll
    function setActiveLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('nav ul li a');
        let currentSection = '';

        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 150) {
                currentSection = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveLink);
    setActiveLink();

    // Scroll to Top Button
    const scrollTopButton = document.createElement('div');
    scrollTopButton.className = 'scroll-top';
    scrollTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollTopButton);

    window.addEventListener('scroll', function () {
        scrollTopButton.classList.toggle('active', window.scrollY > 500);
    });

    scrollTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Contact Form Submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
            contactForm.reset();
        });
    }

    // Animate elements on scroll
    const animatedElements = document.querySelectorAll('.skill-item, .project-card, .timeline-item, .certificate-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    function checkAnimation() {
        animatedElements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 50) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    }

    window.addEventListener('scroll', checkAnimation);
    checkAnimation();

    // Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const targetPosition = targetElement.offsetTop - 70;
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                }
            }
        });
    });
});
