/**
 * Product Rendering & Visualization Page Controller
 */
import { initDynamicGallery } from '../src/utils.js';

export function renderRenders() {
    return `
    <!-- Hero Header -->
    <section class="case-study-hero" style="background-image: linear-gradient(180deg, rgba(10, 10, 10, 0.4) 0%, rgba(10, 10, 10, 0.95) 100%), radial-gradient(circle at center, #1a1a1a 0%, #050505 100%); min-height: 45vh;">
        <div class="container case-study-title-block">
            <span class="case-study-category">CGI &amp; 3D WORK</span>
            <h1 class="case-study-title">Product Rendering</h1>
            <p style="color: var(--color-text-muted); font-size: 1.15rem; font-weight: 300; margin-bottom: var(--space-md);">
                Product renders, packaging renders, lifestyle compositions, CGI visuals, and commercial design presentations. Click any asset to preview in full resolution.
            </p>
            <a href="#home#selected-work" class="btn btn-secondary" style="padding: 0.75rem 1.5rem; font-size: 0.75rem;">
                &larr; Back to Portfolio
            </a>
        </div>
    </section>

    <!-- Main Rendering Showcase -->
    <section class="brand-detail-section" id="rendering-showcase">
        <div class="container">
            <div class="brand-detail-header" style="margin-bottom: var(--space-lg);">
                <span style="font-family: var(--font-heading); color: var(--color-accent); font-weight: 600; font-size: 0.85rem; letter-spacing: 0.2em; text-transform: uppercase;">GALLERY Showcase</span>
                <h3 class="brand-name" style="font-size: clamp(2.25rem, 4.5vw, 3.25rem); font-weight: 900; letter-spacing: -0.02em; margin: 10px 0; color: var(--color-text-light); text-transform: uppercase;">3D Renders &amp; CGI</h3>
                <p class="brand-desc" style="font-size: 0.95rem; font-weight: 300; line-height: 1.6; color: var(--color-text-muted);">
                    Packaging visualization, structural details, material detailing, and high-fidelity lifestyle arrangements crafted to enhance product storytelling.
                </p>
            </div>
            
            <!-- Masonry Grid -->
            <div class="masonry-grid" id="grid-renders">
                <!-- Loaded dynamically -->
            </div>

            <!-- Show More/Less Button Container -->
            <div id="toggle-container-renders" style="display: none; text-align: center; margin-top: var(--space-lg);">
                <button class="btn btn-secondary toggle-gallery-btn" data-brand="renders" id="toggle-btn-renders">
                    <span>Show More</span>
                </button>
            </div>
        </div>
    </section>

    <!-- Lightbox Overlay -->
    <div class="lightbox-overlay" id="lightbox-overlay">
        <button class="lightbox-close" id="lightbox-close" aria-label="Close Lightbox">&times;</button>
        <button class="lightbox-btn lightbox-prev-btn" id="lightbox-prev-btn" aria-label="Previous Image">&lsaquo;</button>
        <div class="lightbox-wrapper">
            <img class="lightbox-image" id="lightbox-image" src="" alt="Lightbox Preview">
        </div>
        <button class="lightbox-btn lightbox-next-btn" id="lightbox-next-btn" aria-label="Next Image">&rsaquo;</button>
    </div>
    `;
}

export function initRenders() {
    const lightbox = document.getElementById('lightbox-overlay');
    const lightboxImg = document.getElementById('lightbox-image');
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev-btn');
    const nextBtn = document.getElementById('lightbox-next-btn');

    if (!lightbox || !lightboxImg) return;

    let activeImages = [];
    let currentImgIndex = 0;

    function openLightbox(imgIndex) {
        if (activeImages.length === 0) return;

        currentImgIndex = parseInt(imgIndex, 10);
        updateLightboxContent();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        lightboxImg.src = '';
    }

    function updateLightboxContent() {
        if (currentImgIndex < 0) {
            currentImgIndex = activeImages.length - 1;
        } else if (currentImgIndex >= activeImages.length) {
            currentImgIndex = 0;
        }
        lightboxImg.src = activeImages[currentImgIndex];
    }

    // Init Dynamic Gallery
    initDynamicGallery('renders', 'assets/renders/', (images) => {
        activeImages = images;

        const toggleContainer = document.getElementById('toggle-container-renders');
        const toggleBtn = document.getElementById('toggle-btn-renders');
        
        if (toggleContainer && toggleBtn) {
            if (images.length > 6) {
                toggleContainer.style.display = 'block';
                toggleBtn.querySelector('span').textContent = 'Show More';
            } else {
                toggleContainer.style.display = 'none';
            }
        }

        const grid = document.getElementById('grid-renders');
        if (grid) {
            const items = grid.querySelectorAll('.masonry-item');
            items.forEach(item => {
                item.addEventListener('click', () => {
                    const imgIndex = item.getAttribute('data-img-index');
                    openLightbox(imgIndex);
                });
            });
        }
    }, "Upload Renders");

    // Toggle button handler
    const toggleBtn = document.getElementById('toggle-btn-renders');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const grid = document.getElementById('grid-renders');
            if (!grid) return;

            const items = grid.querySelectorAll('.masonry-item');
            let isExpanded = false;

            items.forEach((item, index) => {
                if (index >= 6) {
                    item.classList.toggle('gallery-item-hidden');
                    if (!item.classList.contains('gallery-item-hidden')) {
                        isExpanded = true;
                    }
                }
            });

            toggleBtn.querySelector('span').textContent = isExpanded ? 'Show Less' : 'Show More';
        });
    }

    closeBtn.addEventListener('click', closeLightbox);
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.classList.contains('lightbox-wrapper')) {
            closeLightbox();
        }
    });

    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentImgIndex--;
        updateLightboxContent();
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        currentImgIndex++;
        updateLightboxContent();
    });

    function handleKeyDown(e) {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            currentImgIndex--;
            updateLightboxContent();
        } else if (e.key === 'ArrowRight') {
            currentImgIndex++;
            updateLightboxContent();
        }
    }
    window.addEventListener('keydown', handleKeyDown);

    const cleanupRouter = () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('hashchange', cleanupRouter);
    };
    window.addEventListener('hashchange', cleanupRouter);
}
