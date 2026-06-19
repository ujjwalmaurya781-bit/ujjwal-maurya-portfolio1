/**
 * Router Component
 * Handles hash changes and dynamic view loading.
 */
import { renderHome, initHome } from '../pages/home.js';
import { renderBrandComm, initBrandComm } from '../pages/brand-comm.js';
import { renderEcommerce, initEcommerce } from '../pages/ecommerce.js';
import { renderCampaigns, initCampaigns } from '../pages/campaigns.js';
import { renderRenders, initRenders } from '../pages/renders.js';
import { initScrollObserver, initHeroParallax } from './utils.js';

const routes = {
    'home': renderHome,
    'brand-comm': renderBrandComm,
    'ecommerce': renderEcommerce,
    'campaigns': renderCampaigns,
    'renders': renderRenders
};

export function initRouter() {
    const appRoot = document.getElementById('app-root');
    
    // Add page transition wrapper class
    appRoot.classList.add('page-fade');

    function handleRouting() {
        const hash = window.location.hash || '#home';
        
        let routeAndSub = hash.replace(/^#/, '');
        let anchor = null;

        // Parse route, subroute and anchors
        if (hash.startsWith('#home#')) {
            const parts = hash.split('#').filter(Boolean);
            routeAndSub = 'home';
            anchor = parts[1];
        } else if (hash.includes('#') && hash.lastIndexOf('#') > 0) {
            const parts = hash.split('#').filter(Boolean);
            routeAndSub = parts[0];
            anchor = parts[1];
        }

        const segments = routeAndSub.split('/');
        const route = segments[0] || 'home';
        const subRoute = segments[1]; // e.g., 'goldwood-ply' or undefined

        const renderPage = routes[route];

        if (renderPage) {
            // Fade out
            appRoot.classList.remove('active');

            setTimeout(() => {
                // Update HTML, passing subRoute context
                appRoot.innerHTML = renderPage(subRoute);
                
                // Set page transition active
                appRoot.classList.add('active');

                // Initialize animations and parallax for specific view
                initScrollObserver();
                if (route === 'home') {
                    initHeroParallax();
                    initHome();
                } else if (route === 'brand-comm') {
                    initBrandComm(subRoute);
                } else if (route === 'ecommerce') {
                    initEcommerce(subRoute);
                } else if (route === 'campaigns') {
                    initCampaigns(subRoute);
                } else if (route === 'renders') {
                    initRenders(subRoute);
                }

                // Handle Sub-Anchor scrolling
                if (anchor) {
                    const targetElement = document.getElementById(anchor);
                    if (targetElement) {
                        setTimeout(() => {
                            targetElement.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                    }
                } else {
                    // Scroll to top on direct page change
                    window.scrollTo(0, 0);
                }

                // Sync Navbar Active Links
                updateActiveNavLink(route, anchor);

                // Rebind custom cursor handlers
                if (window.rebindCursor) {
                    window.rebindCursor();
                }
            }, 200);
        } else {
            // Fallback to home
            window.location.hash = '#home';
        }
    }

    // Bind event listeners
    window.addEventListener('hashchange', handleRouting);
    window.addEventListener('DOMContentLoaded', handleRouting);
    
    // Initial call
    handleRouting();
}

function updateActiveNavLink(route, anchor) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        const href = link.getAttribute('href');
        if (anchor && href.includes(`#${route}#${anchor}`)) {
            link.classList.add('active');
        } else if (!anchor && href === `#${route}`) {
            link.classList.add('active');
        } else if (!anchor && route === 'home' && href === '#home') {
            link.classList.add('active');
        }
    });
}
