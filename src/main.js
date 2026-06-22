/**
 * Application Entry Point
 */
import '../styles/tailwind.css';
import { initHeader } from '../components/header.js';
import { initFooter } from '../components/footer.js';
import { initRouter } from './router.js';
import { initCustomCursor } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Navigation Header
    initHeader();

    // 2. Initialize Footer
    initFooter();

    // 3. Boot Dynamic SPA Router
    initRouter();

    // 4. Bind Custom Cursor Tracking
    initCustomCursor();
});
