/**
 * Social Media Communication Page Controller (Brand Communication)
 */
import { initDynamicGallery } from '../src/utils.js';

const socialBrands = [
    {
        id: "aagaz-locks",
        name: "Aagaz Locks",
        industry: "Locks & Security Hardware",
        objective: "Created social media campaigns, product promotions, awareness creatives, and dealer engagement creatives for Aagaz Locks.",
        approach: "High-impact portrait graphics highlighting secure lock technology, modern finishes, and industrial strength standards.",
        folderPath: "assets/brand-communication/aagaz-locks/",
        coverImg: "assets/brand-communication/aagaz-locks/aagaz_creative_1.jpg",
        images: []
    },
    {
        id: "goldwood-ply",
        name: "Goldwood Ply",
        industry: "Plywood & Home Infrastructure",
        objective: "Designed engaging visual campaigns, product showcases, festival designs, and dealer promotions representing premium plywood durability.",
        approach: "Warm timber textures, structural overlays, and clean corporate product positioning.",
        folderPath: "assets/brand-communication/goldwood-ply/",
        coverImg: "assets/brand-communication/goldwood-ply/post-01.jpg",
        images: []
    },
    {
        id: "madhav-food-products",
        name: "Madhav Food Products",
        industry: "Consumer Packaged Foods",
        objective: "Crafted vibrant consumer-facing food creatives, festival promos, product story layouts, and promotional graphics.",
        approach: "Bright organic food hues, appetizing design elements, and high-impact visual messaging.",
        folderPath: "assets/brand-communication/madhav-food-products/",
        coverImg: "assets/brand-communication/madhav-food-products/madhav-mamara-post.jpg",
        images: []
    },
    {
        id: "uninox-houseware",
        name: "Uninox Houseware",
        industry: "Premium Kitchenware & Utensils",
        objective: "Produced aesthetic product promotions, festival campaigns, kitchen visual concepts, and social media branding creatives.",
        approach: "Sleek metallic reflections, clean layouts, modern kitchen compositions, and product utility highlights.",
        folderPath: "assets/brand-communication/uninox-houseware/",
        coverImg: "assets/brand-communication/uninox-houseware/uninox-independenc.jpg",
        images: []
    },
    {
        id: "kelvin-pumps",
        name: "Kelvin Pumps",
        industry: "Industrial Pumps & Water Solutions",
        objective: "Designed product-focused social media campaigns, technical promotional creatives, dealer engagement graphics, and branding assets for Kelvin Pumps.",
        approach: "Technical and clean engineering diagrams, high-contrast product renders with cool metallic reflections, structural schematics, and bold industrial typography.",
        folderPath: "assets/brand-communication/kelvin-pumps/",
        coverImg: "assets/brand-communication/kelvin-pumps/post-01.jpg",
        images: []
    },
    {
        id: "radicab-cables",
        name: "RADICAB CABLES",
        industry: "Electrical Cables & Wire Solutions",
        objective: "Designed product promotion campaigns, dealer communication creatives, industrial marketing assets, cable product showcases, and brand engagement visuals for Radicab Cables.",
        approach: "Clean industrial layouts, technical product highlighting, strong brand visibility, electrical infrastructure themes, and conversion-focused communication.",
        folderPath: "assets/brands/radicab-cables/",
        coverImg: "assets/brands/radicab-cables/cover.jpg",
        images: []
    }
];

export function renderBrandComm(subRoute) {
    if (!subRoute) {
        // Category Page View (Grid of Brands)
        const brandListHtml = socialBrands.map((brand, index) => {
            const coverImg = brand.coverImg || "";
            const imgHtml = !coverImg 
                ? `<div class="category-brand-img-wrapper no-image"></div>`
                : `<div class="category-brand-img-wrapper"><img src="${coverImg}" alt="${brand.name}" loading="lazy"></div>`;

            return `
            <a href="#brand-comm/${brand.id}" class="category-brand-card fade-in-section">
                ${imgHtml}
                <div class="category-brand-info">
                    <span class="category-brand-tag">${brand.industry}</span>
                    <h3 class="category-brand-name">${brand.name}</h3>
                    <p class="category-brand-desc">${brand.objective}</p>
                    <div class="category-brand-cta-text">
                        <span>View Case Study</span>
                        <span class="category-brand-cta-arrow">&rarr;</span>
                    </div>
                </div>
            </a>
            `;
        }).join('');

        return `
        <!-- Category Hero -->
        <section class="case-study-hero" style="background-image: linear-gradient(180deg, rgba(10, 10, 10, 0.4) 0%, rgba(10, 10, 10, 0.95) 100%), radial-gradient(circle at center, #1a1a1a 0%, #050505 100%); min-height: 40vh;">
            <div class="container case-study-title-block">
                <span class="case-study-category">PORTFOLIO CATEGORY 02</span>
                <h1 class="case-study-title">Brand Communication</h1>
                <p style="color: var(--color-text-muted); font-size: 1.15rem; font-weight: 300; margin-bottom: var(--space-md);">
                    Visual campaigns, product promotions, dealer engagement designs, and brand communication assets. Select a brand below to view its case study and creative gallery.
                </p>
                <a href="#home#selected-work" class="btn btn-secondary" style="padding: 0.75rem 1.5rem; font-size: 0.75rem;">
                    &larr; Back to Portfolio
                </a>
            </div>
        </section>

        <!-- Brands Grid -->
        <section class="category-brands-section" style="padding: var(--space-xl) 4vw;">
            <div class="container">
                <h2 style="font-family: var(--font-heading); color: var(--color-text-light); text-transform: uppercase; font-size: 1.5rem; margin-bottom: var(--space-lg); letter-spacing: 0.1em; border-bottom: 1px solid var(--color-border); padding-bottom: var(--space-xs);">SELECTED CLIENT WORK</h2>
                <div class="category-brand-grid">
                    ${brandListHtml}
                </div>
            </div>
        </section>
        `;
    } else {
        // Individual Brand Case Study View
        const brand = socialBrands.find(b => b.id === subRoute);
        if (!brand) {
            window.location.hash = '#brand-comm';
            return '';
        }

        return `
        <!-- Brand Case Study Hero -->
        <section class="case-study-hero" style="background-image: linear-gradient(180deg, rgba(10, 10, 10, 0.4) 0%, rgba(10, 10, 10, 0.95) 100%), radial-gradient(circle at center, #1a1a1a 0%, #050505 100%); min-height: 40vh;">
            <div class="container case-study-title-block">
                <span class="case-study-category">Brand Case Study</span>
                <h1 class="case-study-title">${brand.name}</h1>
                <p style="color: var(--color-text-muted); font-size: 1.15rem; font-weight: 300; margin-bottom: var(--space-md);">
                    ${brand.industry}
                </p>
                <a href="#brand-comm" class="btn btn-secondary" style="padding: 0.75rem 1.5rem; font-size: 0.75rem;">
                    &larr; Back to Brand Communication
                </a>
            </div>
        </section>

        <!-- Brand Details & Gallery -->
        <section class="brand-detail-section" id="${brand.id}" style="padding: var(--space-xl) 4vw; border-bottom: 1px solid var(--color-border);">
            <div class="container">
                <div class="brand-detail-header" style="margin-bottom: var(--space-lg);">
                    <!-- Metadata Info Grid -->
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: var(--space-md); border-top: 1px solid var(--color-border); padding-top: var(--space-md); margin-bottom: var(--space-md);">
                        <div>
                            <h4 style="font-family: var(--font-heading); color: var(--color-text-dark); font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 8px;">Industry</h4>
                            <p style="font-size: 1.1rem; font-weight: 600; color: var(--color-accent);">${brand.industry}</p>
                        </div>
                        <div>
                            <h4 style="font-family: var(--font-heading); color: var(--color-text-dark); font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 8px;">Campaign Objective</h4>
                            <p style="font-size: 0.95rem; font-weight: 300; line-height: 1.6; color: var(--color-text-muted);">${brand.objective}</p>
                        </div>
                        <div>
                            <h4 style="font-family: var(--font-heading); color: var(--color-text-dark); font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 8px;">Design Approach</h4>
                            <p style="font-size: 0.95rem; font-weight: 300; line-height: 1.6; color: var(--color-text-muted);">${brand.approach}</p>
                        </div>
                    </div>
                </div>

                <h4 style="font-family: var(--font-heading); color: var(--color-text-light); font-size: 0.85rem; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 24px; font-weight: 600;">Creative Assets Gallery</h4>
                
                <!-- Masonry Gallery -->
                <div class="masonry-grid" id="grid-${brand.id}">
                    <!-- Loaded dynamically -->
                </div>

                <!-- Show More/Less Button Container -->
                <div id="toggle-container-${brand.id}" style="display: none; text-align: center; margin-top: var(--space-lg);">
                    <button class="btn btn-secondary toggle-gallery-btn" data-brand="${brand.id}" id="toggle-btn-${brand.id}">
                        <span>Show More</span>
                    </button>
                </div>
            </div>
        </section>

        <!-- Lightbox Dynamic Overlay Container -->
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
}

export function initBrandComm(subRoute) {
    if (!subRoute) {
        return;
    }

    const lightbox = document.getElementById('lightbox-overlay');
    const lightboxImg = document.getElementById('lightbox-image');
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev-btn');
    const nextBtn = document.getElementById('lightbox-next-btn');

    if (!lightbox || !lightboxImg) return;

    let activeImages = [];
    let currentImgIndex = 0;

    const brand = socialBrands.find(b => b.id === subRoute);
    if (!brand) return;

    function openLightbox(imgIndex) {
        if (!brand.images || brand.images.length === 0) return;

        activeImages = brand.images;
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

    initDynamicGallery(brand.id, brand.folderPath, (images) => {
        brand.images = images;

        const toggleContainer = document.getElementById(`toggle-container-${brand.id}`);
        const toggleBtn = document.getElementById(`toggle-btn-${brand.id}`);
        
        if (toggleContainer && toggleBtn) {
            if (images.length > 6) {
                toggleContainer.style.display = 'block';
                toggleBtn.querySelector('span').textContent = 'Show More';
            } else {
                toggleContainer.style.display = 'none';
            }
        }

        const grid = document.getElementById(`grid-${brand.id}`);
        if (grid) {
            const items = grid.querySelectorAll('.masonry-item');
            items.forEach(item => {
                item.addEventListener('click', () => {
                    const imgIndex = item.getAttribute('data-img-index');
                    openLightbox(imgIndex);
                });
            });
        }
    }, "Upload Creative");

    const toggleBtn = document.getElementById(`toggle-btn-${brand.id}`);
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const grid = document.getElementById(`grid-${brand.id}`);
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
