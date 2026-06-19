/**
 * Brand Campaigns Page Controller (Social Media Campaigns)
 */
import { initDynamicGallery } from '../src/utils.js';

const campaignBrands = [
    {
        id: "jewar-organics",
        name: "Jewar Organics",
        industry: "Organic Foods & Agriculture",
        objective: "Created advertising banners and promotional creatives for organic food products, focusing on brand awareness, product trust, and customer engagement.",
        approach: "Natural visual language, premium organic presentation, clean layouts, and freshness-focused branding.",
        folderPath: "assets/campaigns/jewar-organics/",
        coverImg: "assets/campaigns/jewar-organics/jewar flour banner.jpg",
        images: []
    },
    {
        id: "muscle-smith",
        name: "Muscle Smith",
        industry: "Fitness & Sports Nutrition",
        objective: "Designed high-impact advertising creatives for fitness and nutrition products to improve engagement and campaign performance.",
        approach: "Bold typography, energetic compositions, strong product focus, modern fitness branding.",
        folderPath: "assets/projects/muscle-smith/designs/",
        coverImg: "assets/projects/muscle-smith/designs/02.png",
        images: []
    }
];

export function renderCampaigns(subRoute) {
    if (!subRoute) {
        // Category Page View
        const brandListHtml = campaignBrands.map((brand, index) => {
            const coverImg = brand.coverImg || "";

            return `
            <a href="#campaigns/${brand.id}" class="category-brand-card fade-in-section">
                <div class="category-brand-img-wrapper">
                    <img src="${coverImg}" alt="${brand.name}" loading="lazy">
                </div>
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
                <span class="case-study-category">PORTFOLIO CATEGORY 01</span>
                <h1 class="case-study-title">Social Media Campaigns</h1>
                <p style="color: var(--color-text-muted); font-size: 1.15rem; font-weight: 300; margin-bottom: var(--space-md);">
                    Advertising posters, product launch visuals, creative branding banners, and commercial visual concepts. Select a brand below to view its campaign case study.
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
        const brand = campaignBrands.find(b => b.id === subRoute);
        if (!brand) {
            window.location.hash = '#campaigns';
            return '';
        }

        return `
        <!-- Brand Case Study Hero -->
        <section class="case-study-hero" style="background-image: linear-gradient(180deg, rgba(10, 10, 10, 0.4) 0%, rgba(10, 10, 10, 0.95) 100%), radial-gradient(circle at center, #1a1a1a 0%, #050505 100%); min-height: 40vh;">
            <div class="container case-study-title-block">
                <span class="case-study-category">Campaign Case Study</span>
                <h1 class="case-study-title">${brand.name}</h1>
                <p style="color: var(--color-text-muted); font-size: 1.15rem; font-weight: 300; margin-bottom: var(--space-md);">
                    ${brand.industry}
                </p>
                <a href="#campaigns" class="btn btn-secondary" style="padding: 0.75rem 1.5rem; font-size: 0.75rem;">
                    &larr; Back to Campaigns
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

export function initCampaigns(subRoute) {
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

    const brand = campaignBrands.find(b => b.id === subRoute);
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
    }, "Upload Campaign Creative");

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
