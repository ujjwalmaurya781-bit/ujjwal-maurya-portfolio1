/**
 * Router Component
 * Handles hash changes and dynamic view loading.
 */
import { renderHome, initHome } from '../pages/home.js';
import { renderPortfolioView, initPortfolioView } from '../pages/portfolio-view.js';
import { renderAdmin, initAdmin } from '../pages/admin.js';
import { renderProjectDetail, initProjectDetail } from '../pages/project-detail.js';
import { initScrollObserver, initHeroParallax } from './utils.js';

const routes = {
    'home': renderHome,
    'brand-comm': renderPortfolioView,
    'ecommerce': renderPortfolioView,
    'campaigns': renderPortfolioView,
    'renders': renderPortfolioView,
    'admin': renderAdmin
};

export function initRouter() {
    const appRoot = document.getElementById('app-root');
    let currentRoute = null;
    let currentSubRoute = null;
    
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

        // If base route and subroute didn't change, just scroll to anchor and update nav
        if (currentRoute === route && currentSubRoute === subRoute) {
            if (anchor) {
                const targetElement = document.getElementById(anchor);
                if (targetElement) {
                    const headerOffset = 150;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            } else {
                window.scrollTo(0, 0);
            }
            updateActiveNavLink(route, anchor);
            if (window.rebindCursor) {
                window.rebindCursor();
            }
            return;
        }

        currentRoute = route;
        currentSubRoute = subRoute;

        const isProjectRoute = subRoute && ['brand-comm', 'ecommerce', 'campaigns', 'renders', 'ai-creative'].includes(route);
        const renderPage = isProjectRoute ? renderProjectDetail : routes[route];

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
                if (isProjectRoute) {
                    initProjectDetail(subRoute);
                } else if (route === 'home') {
                    initHeroParallax();
                    initHome();
                } else if (route === 'brand-comm') {
                    initPortfolioView('brand-comm');
                } else if (route === 'ecommerce') {
                    initPortfolioView('ecommerce');
                } else if (route === 'campaigns') {
                    initPortfolioView('campaigns');
                } else if (route === 'renders') {
                    initPortfolioView('renders');
                } else if (route === 'admin') {
                    initAdmin();
                }

                // Handle Sub-Anchor scrolling
                if (anchor) {
                    const targetElement = document.getElementById(anchor);
                    if (targetElement) {
                        setTimeout(() => {
                            const headerOffset = 150;
                            const elementPosition = targetElement.getBoundingClientRect().top;
                            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                            window.scrollTo({
                                top: offsetPosition,
                                behavior: 'smooth'
                            });
                        }, 200);
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
