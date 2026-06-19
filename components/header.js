/**
 * Header Component
 * Renders sticky navigation header and handles mobile responsive menu drawer.
 */
export function renderHeader() {
    return `
    <div class="nav-container">
        <div class="logo">
            <a href="#home" aria-label="Ujjwal Maurya Home">
                <svg viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="brand-logo-svg" style="height: 36px; width: auto; display: block;">
                    <!-- Combined interlocked U and M geometric monogram -->
                    <!-- U shape (White, slightly outer) -->
                    <path d="M12 10V24C12 28.42 15.58 32 20 32C24.42 32 28 28.42 28 24V10" stroke="white" stroke-width="3.5" stroke-linecap="round"/>
                    <!-- M shape (Orange, overlaying inside right side of U, creating a dynamic lettermark) -->
                    <path d="M28 32V18L35 25L42 18V32" stroke="var(--color-accent)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <!-- Sleek designer accent dot -->
                    <circle cx="49" cy="32" r="2.5" fill="var(--color-accent)"/>
                </svg>
            </a>
        </div>
        
        <button class="mobile-toggle" id="mobile-toggle" aria-label="Toggle Navigation">
            <span></span>
            <span></span>
            <span></span>
        </button>

        <ul class="nav-menu" id="nav-menu">
            <li><a href="#home" class="nav-link active" data-section="home">Home</a></li>
            <li><a href="#home#selected-work" class="nav-link" data-section="selected-work">Selected Work</a></li>
            <li><a href="#home#about" class="nav-link" data-section="about">About</a></li>
            <li><a href="#home#resume" class="nav-link" data-section="resume">Resume</a></li>
            <li><a href="#home#contact" class="nav-link" data-section="contact">Contact</a></li>
        </ul>
    </div>
    `;
}

export function initHeader() {
    const header = document.getElementById('app-header');
    header.innerHTML = renderHeader();

    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Sticky Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('open');
        navMenu.classList.toggle('open');
    });

    // Close Menu on Link Click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('open');
            navMenu.classList.remove('open');

            // Handle active state
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
}
