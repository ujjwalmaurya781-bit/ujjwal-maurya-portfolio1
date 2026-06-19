/**
 * AI Creative Work Page Controller
 */
import { initDynamicGallery } from '../src/utils.js';

const aiProjects = [
    {
        id: "futuristic-shoe",
        name: "Futuristic Footwear Design",
        industry: "Athletic Wear Concept",
        objective: "Explored AI-driven industrial product design and texture generation, merging generative design with custom graphic adjustments.",
        approach: "Text-to-image mesh generation to draft structure, followed by manual color adjustment, neon overlay filters, and texture enhancements in Photoshop.",
        folderPath: "assets/ai-creative/", // scans folder but we filter specifically
        coverImage: "assets/ai-creative/futuristic_shoe.png",
        images: ["assets/ai-creative/futuristic_shoe.png"]
    },
    {
        id: "perfume-splash",
        name: "Luxury Perfume Visual",
        industry: "Cosmetics Campaign Concept",
        objective: "Designed premium advertising packshots by combining AI rendering workflows with standard packaging compositing.",
        approach: "Prompted organic textures (basalt rocks, orange blossoms, water splashes), blended with luxury bottle layouts, and edited lighting gradients.",
        folderPath: "assets/ai-creative/",
        coverImage: "assets/ai-creative/perfume_splash.png",
        images: ["assets/ai-creative/perfume_splash.png"]
    }
];

export function renderAICreative(subRoute) {
    if (!subRoute) {
        // Category Page View (List of Projects)
        const projectListHtml = aiProjects.map((project, index) => {
            return `
            <a href="#ai-creative/${project.id}" class="category-brand-card fade-in-section">
                <div class="category-brand-img-wrapper">
                    <img src="${project.coverImage}" alt="${project.name}" loading="lazy">
                </div>
                <div class="category-brand-info">
                    <span class="category-brand-tag">${project.industry}</span>
                    <h3 class="category-brand-name">${project.name}</h3>
                    <p class="category-brand-desc">${project.objective}</p>
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
                <span class="case-study-category">PORTFOLIO CATEGORY 05</span>
                <h1 class="case-study-title">AI Creative Work</h1>
                <p style="color: var(--color-text-muted); font-size: 1.15rem; max-width: 650px; font-weight: 300; margin-bottom: var(--space-md);">
                    Generative design, product concept drafts, and workflow integrations showing how AI enhances professional design output. Select a concept project below.
                </p>
                <a href="#home#selected-work" class="btn btn-secondary" style="padding: 0.75rem 1.5rem; font-size: 0.75rem;">
                    &larr; Back to Portfolio
                </a>
            </div>
        </section>

        <!-- Projects Grid -->
        <section class="category-brands-section" style="padding: var(--space-xl) 8vw;">
            <div class="container">
                <h2 style="font-family: var(--font-heading); color: var(--color-text-light); text-transform: uppercase; font-size: 1.5rem; margin-bottom: var(--space-lg); letter-spacing: 0.1em; border-bottom: 1px solid var(--color-border); padding-bottom: var(--space-xs);">SELECTED CLIENT WORK</h2>
                <div class="category-brand-grid">
                    ${projectListHtml}
                </div>
            </div>
        </section>
        `;
    } else {
        // Individual Project View
        const project = aiProjects.find(p => p.id === subRoute);
        if (!project) {
            window.location.hash = '#ai-creative';
            return '';
        }

        return `
        <!-- Project Hero -->
        <section class="case-study-hero" style="background-image: linear-gradient(180deg, rgba(10, 10, 10, 0.4) 0%, rgba(10, 10, 10, 0.95) 100%), radial-gradient(circle at center, #1a1a1a 0%, #050505 100%); min-height: 40vh;">
            <div class="container case-study-title-block">
                <span class="case-study-category">AI Concept Case Study</span>
                <h1 class="case-study-title">${project.name}</h1>
                <p style="color: var(--color-text-muted); font-size: 1.15rem; max-width: 650px; font-weight: 300; margin-bottom: var(--space-md);">
                    ${project.industry}
                </p>
                <a href="#ai-creative" class="btn btn-secondary" style="padding: 0.75rem 1.5rem; font-size: 0.75rem;">
                    &larr; Back to AI Creative Work
                </a>
            </div>
        </section>

        <!-- Project Details & Showcase -->
        <section class="brand-detail-section" id="${project.id}" style="padding: var(--space-xl) 8vw; border-bottom: 1px solid var(--color-border);">
            <div class="container">
                <div class="brand-detail-header" style="margin-bottom: var(--space-lg);">
                    <!-- Metadata Info Grid -->
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: var(--space-md); border-top: 1px solid var(--color-border); padding-top: var(--space-md); margin-bottom: var(--space-md);">
                        <div>
                            <h4 style="font-family: var(--font-heading); color: var(--color-text-dark); font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 8px;">Industry</h4>
                            <p style="font-size: 1.1rem; font-weight: 600; color: var(--color-accent);">${project.industry}</p>
                        </div>
                        <div>
                            <h4 style="font-family: var(--font-heading); color: var(--color-text-dark); font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 8px;">Concept Objective</h4>
                            <p style="font-size: 0.95rem; font-weight: 300; line-height: 1.6; color: var(--color-text-muted);">${project.objective}</p>
                        </div>
                        <div>
                            <h4 style="font-family: var(--font-heading); color: var(--color-text-dark); font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 8px;">Workflow / Approach</h4>
                            <p style="font-size: 0.95rem; font-weight: 300; line-height: 1.6; color: var(--color-text-muted);">${project.approach}</p>
                        </div>
                    </div>
                </div>

                <h4 style="font-family: var(--font-heading); color: var(--color-text-light); font-size: 0.85rem; letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 24px; font-weight: 600;">Creative Work Visual</h4>
                
                <!-- Masonry-style Grid showing single large visual -->
                <div class="masonry-grid" id="grid-${project.id}">
                    <!-- Loaded dynamically -->
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

export function initAICreative(subRoute) {
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

    const project = aiProjects.find(p => p.id === subRoute);
    if (!project) return;

    function openLightbox(imgIndex) {
        activeImages = project.images;
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

    // Set static images list to DOM
    const grid = document.getElementById(`grid-${project.id}`);
    if (grid) {
        grid.innerHTML = project.images.map((imgSrc, imgIndex) => {
            return `
                <div class="masonry-item" data-img-index="${imgIndex}">
                    <img src="${imgSrc}" alt="Creative Asset" loading="lazy" class="gallery-image">
                </div>
            `;
        }).join('');

        const items = grid.querySelectorAll('.masonry-item');
        items.forEach(item => {
            item.addEventListener('click', () => {
                const imgIndex = item.getAttribute('data-img-index');
                openLightbox(imgIndex);
            });
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
