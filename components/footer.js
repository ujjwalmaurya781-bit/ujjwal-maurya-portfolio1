/**
 * Footer Component
 * Renders the editorial-style footer block.
 */
export function renderFooter() {
    return `
    <div class="footer-container">
        <div class="footer-left-col">
            <h3 class="footer-brand-name">Ujjwal Maurya</h3>
            <p class="footer-brand-title" style="margin-bottom: 24px;">Brand Designer &amp; Visual Storyteller</p>
            <h4 class="footer-col-header" style="margin-bottom: 12px;">Available for:</h4>
            <ul class="footer-services-list">
                <li>Branding</li>
                <li>Social Media</li>
                <li>Amazon Content</li>
                <li>AI Creative Production</li>
            </ul>
        </div>
        
        <div class="footer-mid-col">
            <h4 class="footer-col-header">Connect</h4>
            <div class="footer-social-links-vertical">
                <a href="mailto:ujjwalmaurya781@gmail.com" target="_blank" rel="noopener" class="footer-link">Email</a>
                <a href="https://www.linkedin.com/in/ujjwal-maurya-3a997521a" target="_blank" rel="noopener" class="footer-link">LinkedIn</a>
                <a href="https://www.behance.net/ujjwalmaurya2" target="_blank" rel="noopener" class="footer-link">Behance</a>
                <a href="https://www.instagram.com/krishhhhhmaurya" target="_blank" rel="noopener" class="footer-link">Instagram</a>
            </div>
        </div>
        
        <div class="footer-right-col">
            <p class="footer-copyright" style="margin-top: 0;">&copy; 2026</p>
            <div class="footer-scroll-top-wrapper" style="margin-top: var(--space-md);">
                <button class="back-to-top" id="back-to-top">Back to Top &uarr;</button>
            </div>
        </div>
    </div>
    `;
}

export function initFooter() {
    const footer = document.getElementById('app-footer');
    footer.innerHTML = renderFooter();

    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}
