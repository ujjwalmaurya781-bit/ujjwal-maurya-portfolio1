/**
 * E-Commerce Design Case Study Page
 */
import { fetchImagesFromFolder, uploadFileToFolder, fetchSubdirsFromFolder } from '../src/utils.js';

const CLIENT_META = {
    "camx": {
        name: "CAMX",
        description: "High-reliability professional camera accessories and electronic equipment styling.",
        category: "Camera Accessories",
        summary: "Drafted a complete e-commerce product listings and custom brand storytelling blueprint showing high-tolerance engineering designs.",
        coverImg: "assets/ecommerce/camx/am-01/listing/Artboard 1.png"
    },
    "rumaisa": {
        name: "RUMAISA",
        description: "Exquisite and luxury fragrance bottle packaging, listing imagery, and conversion branding.",
        category: "Fragrances & Cosmetics",
        summary: "Designed luxury packaging listings and lifestyle infographics focusing on scents profiles, ingredients highlights, and premium bottle designs.",
        coverImg: "assets/ecommerce/rumaisa/perfume-01/listing/Artboard 1.png"
    },
    "petro-luxury": {
        name: "PETRO LUXURY",
        description: "Premium perfume brand showcasing elite aesthetics and lifestyle digital storefront designs.",
        category: "Luxury Fragrances",
        summary: "Crafted high-fidelity commercial creatives and product infographics representing elite perfumes, luxury lifestyles, and conversion banners.",
        coverImg: "assets/ecommerce/petro-luxury/product-01/listing/Artboard 1.png"
    },
    "amanzi": {
        name: "AMANZI",
        description: "Artisanal scents and premium body fragrances with sophisticated visual storytelling.",
        category: "Body Scents & Care",
        summary: "Developed visual listings and conversion-centric graphics to capture customer attention and establish premium product positioning.",
        coverImg: "assets/ecommerce/amanzi/product-01/listing/Artboard 1.png"
    },
    "leatherific": {
        name: "LEATHERIFIC",
        description: "Genuine leather accessories, tech sleeves, and crafted travel goods storefront visuals.",
        category: "Premium Leather Goods",
        summary: "Structured e-commerce infographics emphasizing full-grain leather textures, precise stitching craftsmanship, and utility specifications.",
        coverImg: "assets/ecommerce/leatherific/product-01/a-plus/Leatherific-Wrist-Prime-Plus-!_01.png"
    },
    "storage-containers": {
        name: "STORAGE CONTAINERS",
        description: "Smart home organization, kitchen storage, and space-saving utility design systems.",
        category: "Home & Kitchen",
        summary: "Drafted conversion-centric listings highlighting materials safety, space-saving layouts, modular stacking, and everyday convenience.",
        coverImg: "assets/ecommerce/storage-containers/product-01/listing/1.png"
    }
};

export function renderEcommerce(subRoute) {
    if (!subRoute) {
        // Category Page View
        const brandListHtml = Object.entries(CLIENT_META).map(([id, meta]) => {
            const coverImg = meta.coverImg || "";

            return `
            <a href="#ecommerce/${id}" class="category-brand-card fade-in-section">
                <div class="category-brand-img-wrapper">
                    <img src="${coverImg}" alt="${meta.name}" loading="lazy">
                </div>
                <div class="category-brand-info">
                    <span class="category-brand-tag">${meta.category}</span>
                    <h3 class="category-brand-name">${meta.name}</h3>
                    <p class="category-brand-desc">${meta.description}</p>
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
                <span class="case-study-category">PORTFOLIO CATEGORY 03</span>
                <h1 class="case-study-title">Amazon A+ Content &amp; Listing Pages</h1>
                <p style="color: var(--color-text-muted); font-size: 1.15rem; font-weight: 300; margin-bottom: var(--space-md);">
                    Amazon product listings, A+ Content layouts, infographical details, and brand storefront modules. Select a client below to view their listing case study.
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
        // Individual Client Case Study View
        const clientId = subRoute;
        const meta = CLIENT_META[clientId];
        if (!meta) {
            window.location.hash = '#ecommerce';
            return '';
        }

        return `
        <!-- Case Study Hero -->
        <section class="case-study-hero" style="background-image: linear-gradient(180deg, rgba(10, 10, 10, 0.4) 0%, rgba(10, 10, 10, 0.95) 100%), radial-gradient(circle at center, #1a1a1a 0%, #050505 100%); background-size: cover; background-position: center; min-height: 40vh;">
            <div class="container case-study-title-block">
                <span class="case-study-category">Amazon A+ Case Study</span>
                <h1 class="case-study-title">${meta.name}</h1>
                <p style="color: var(--color-text-muted); font-size: 1.15rem; font-weight: 300; margin-bottom: var(--space-md);">
                    ${meta.description}
                </p>
                <a href="#ecommerce" class="btn btn-secondary" style="padding: 0.75rem 1.5rem; font-size: 0.75rem;">
                    &larr; Back to Amazon A+ Content
                </a>
            </div>
        </section>

        <!-- Dynamic Clients Showcase Container -->
        <div id="ecommerce-brands-root" style="background-color: #050505; min-height: 50vh;">
            <div class="container" style="padding: var(--space-xl) 0; text-align: center; color: var(--color-text-muted);">
                <div class="spinner" style="border: 3px solid rgba(255,107,0,0.1); border-top: 3px solid var(--color-accent); border-radius: 50%; width: 40px; height: 40px; margin: 0 auto 20px auto; animation: spin 1s linear infinite;"></div>
                <p style="font-family: var(--font-heading); font-size: 0.9rem; letter-spacing: 0.1em; text-transform: uppercase;">Loading client database...</p>
            </div>
        </div>

        <!-- Lightbox Dynamic Overlay Container -->
        <div class="lightbox-overlay" id="lightbox-overlay">
            <button class="lightbox-close" id="lightbox-close" aria-label="Close Lightbox">&times;</button>
            <button class="lightbox-btn lightbox-prev-btn" id="lightbox-prev-btn" aria-label="Previous Image">&lsaquo;</button>
            <div class="lightbox-wrapper">
                <img class="lightbox-image" id="lightbox-image" src="" alt="Lightbox Preview">
            </div>
            <button class="lightbox-btn lightbox-next-btn" id="lightbox-next-btn" aria-label="Next Image">&rsaquo;</button>
        </div>

        <style>
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>
        `;
    }
}

export async function initEcommerce(subRoute) {
    if (!subRoute) {
        return;
    }

    const brandsRoot = document.getElementById('ecommerce-brands-root');
    if (!brandsRoot) return;

    // Lightbox elements
    const lightbox = document.getElementById('lightbox-overlay');
    const lightboxImg = document.getElementById('lightbox-image');
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev-btn');
    const nextBtn = document.getElementById('lightbox-next-btn');

    let activeImagesList = [];
    let activeImgIndex = 0;

    function openLightbox(imgUrl) {
        if (!lightbox || !lightboxImg) return;
        activeImgIndex = activeImagesList.indexOf(imgUrl);
        if (activeImgIndex === -1) {
            activeImagesList = [imgUrl];
            activeImgIndex = 0;
        }
        updateLightboxContent();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        if (!lightbox) return;
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        lightboxImg.src = '';
    }

    function updateLightboxContent() {
        if (activeImgIndex < 0) {
            activeImgIndex = activeImagesList.length - 1;
        } else if (activeImgIndex >= activeImagesList.length) {
            activeImgIndex = 0;
        }
        lightboxImg.src = activeImagesList[activeImgIndex];
    }

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            activeImgIndex--;
            updateLightboxContent();
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            activeImgIndex++;
            updateLightboxContent();
        });
    }
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox || e.target.classList.contains('lightbox-wrapper')) {
                closeLightbox();
            }
        });
    }

    function handleKeyDown(e) {
        if (!lightbox || !lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        else if (e.key === 'ArrowLeft') {
            activeImgIndex--;
            updateLightboxContent();
        } else if (e.key === 'ArrowRight') {
            activeImgIndex++;
            updateLightboxContent();
        }
    }
    window.addEventListener('keydown', handleKeyDown);

    const cleanupRouter = () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('hashchange', cleanupRouter);
    };
    window.addEventListener('hashchange', cleanupRouter);

    const clientId = subRoute;
    const meta = CLIENT_META[clientId] || {
        name: clientId.toUpperCase().replace('-', ' '),
        description: "Custom brand communication and e-commerce design layout.",
        category: "E-Commerce Product",
        summary: "Commercial visual presentation, feature listing design, and conversion-focused infographics."
    };

    brandsRoot.innerHTML = `
    <section class="brand-detail-section" id="section-${clientId}" style="padding: var(--space-xl) 4vw; border-bottom: 1px solid var(--color-border);">
        <div class="container">
            <!-- Brand Header -->
            <div style="margin-bottom: var(--space-md);">
                <span style="font-family: var(--font-heading); color: var(--color-accent); font-weight: 600; font-size: 0.9rem; letter-spacing: 0.25em; text-transform: uppercase;">E-COMMERCE CLIENT CASE STUDY</span>
                <h3 style="font-size: clamp(2.5rem, 5vw, 3.5rem); font-weight: 900; letter-spacing: -0.02em; margin: 15px 0 10px 0; color: var(--color-text-light); text-transform: uppercase;">${meta.name}</h3>
                <p style="font-size: 1.15rem; color: var(--color-text-muted); font-weight: 300; line-height: 1.6; margin-bottom: 25px;">${meta.description}</p>
            </div>

            <!-- Navigation Tabs -->
            <div class="product-tabs" id="tabs-${clientId}">
                <!-- Loaded dynamically -->
            </div>

            <!-- Showcase Panel -->
            <div class="product-showcase-panel" id="showcase-panel-${clientId}">
                <!-- Loaded dynamically on tab selection -->
            </div>
        </div>
    </section>
    `;

    const pSubdirs = await fetchSubdirsFromFolder(`assets/ecommerce/${clientId}`);
    let products = pSubdirs || [];
    if (products.length === 0) {
        if (clientId === "camx") {
            products = ["am-01", "am-02", "am-03", "am-04"];
        } else {
            products = ["product-01"];
        }
    }

    const tabsContainer = document.getElementById(`tabs-${clientId}`);
    if (tabsContainer) {
        tabsContainer.innerHTML = products.map((prodId, pIdx) => {
            const label = prodId.toUpperCase().replace('-', ' ');
            return `
                <button class="product-tab-btn ${pIdx === 0 ? 'active' : ''}" data-client="${clientId}" data-product="${prodId}">
                    ${label}
                </button>
            `;
        }).join('');

        const tabButtons = tabsContainer.querySelectorAll('.product-tab-btn');
        tabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                tabButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                loadProductShowcase(clientId, btn.getAttribute('data-product'));
            });
        });
    }

    if (products.length > 0) {
        loadProductShowcase(clientId, products[0]);
    }

    async function loadProductShowcase(cId, productId) {
        const showcasePanel = document.getElementById(`showcase-panel-${cId}`);
        if (!showcasePanel) return;

        showcasePanel.innerHTML = `
            <div style="text-align: center; padding: 40px; color: var(--color-text-muted);">
                <p style="font-family: var(--font-heading); font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase;">Loading product details...</p>
            </div>
        `;

        const listingFolderPath = `assets/ecommerce/${cId}/${productId}/listing/`;
        const aplusFolderPath = `assets/ecommerce/${cId}/${productId}/a-plus/`;

        const listingImages = await fetchImagesFromFolder(listingFolderPath);
        const aplusImages = await fetchImagesFromFolder(aplusFolderPath);

        const prodLabel = productId.toUpperCase().replace('-', ' ');

        showcasePanel.innerHTML = `
            <!-- Product Info Hero Grid -->
            <div class="product-metadata-grid">
                <div>
                    <h4 class="product-meta-title">Product Name</h4>
                    <p class="product-meta-value accent-text">${meta.name} - ${prodLabel}</p>
                </div>
                <div>
                    <h4 class="product-meta-title">Category &amp; Deliverables</h4>
                    <p class="product-meta-value"><strong>Category:</strong> ${meta.category}</p>
                    <p class="product-meta-value" style="margin-top: 5px;"><strong>Deliverables:</strong> Amazon Listing Design, Amazon A+ Content, Infographics, Technical Overlay Blueprint Sheets</p>
                </div>
                <div>
                    <h4 class="product-meta-title">Project Summary</h4>
                    <p class="product-meta-value">${meta.summary}</p>
                    <p class="product-meta-value" style="margin-top: 5px;"><strong>Role:</strong> Lead Graphic Designer</p>
                </div>
            </div>

            <!-- Listing Section -->
            <div style="margin-bottom: var(--space-xl);">
                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 10px;">
                    <h4 style="font-family: var(--font-heading); color: var(--color-text-light); font-size: 0.9rem; letter-spacing: 0.15em; text-transform: uppercase; margin: 0; font-weight: 700;">01 / Amazon Listing Images</h4>
                    <span style="font-size: 0.8rem; color: var(--color-text-dark); text-transform: uppercase; letter-spacing: 0.05em;">Vertical creatives (1080 &times; 1350)</span>
                </div>
                <div class="masonry-grid" id="listing-grid-${cId}-${productId}">
                    <!-- Dynamically populated -->
                </div>
            </div>

            <!-- A+ Content Section -->
            <div style="margin-top: var(--space-xl);">
                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 24px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 10px;">
                    <h4 style="font-family: var(--font-heading); color: var(--color-text-light); font-size: 0.9rem; letter-spacing: 0.15em; text-transform: uppercase; margin: 0; font-weight: 700;">02 / Amazon A+ Content</h4>
                    <span style="font-size: 0.8rem; color: var(--color-text-dark); text-transform: uppercase; letter-spacing: 0.05em;">Brand narratives &amp; modules</span>
                </div>
                <div class="aplus-container" id="aplus-grid-${cId}-${productId}">
                    <!-- Dynamically populated -->
                </div>
            </div>
        `;

        const listingGrid = document.getElementById(`listing-grid-${cId}-${productId}`);
        if (listingGrid) {
            if (listingImages && listingImages.length > 0) {
                listingGrid.innerHTML = listingImages.map((imgSrc, imgIdx) => `
                    <div class="masonry-item" data-img-url="${imgSrc}">
                        <img src="${imgSrc}" alt="Listing Image ${imgIdx + 1}" loading="lazy" class="gallery-image">
                    </div>
                `).join('');

                listingGrid.querySelectorAll('.masonry-item').forEach(item => {
                    item.addEventListener('click', () => {
                        activeImagesList = [...listingImages, ...aplusImages];
                        openLightbox(item.getAttribute('data-img-url'));
                    });
                });
            } else {
                listingGrid.innerHTML = `
                    <div class="upload-placeholder-card" id="upload-listing-${cId}-${productId}">
                        <div class="upload-placeholder-icon" style="color: var(--color-accent);">+</div>
                        <div class="upload-placeholder-text">Upload Listing Images</div>
                        <input type="file" id="input-listing-${cId}-${productId}" accept="image/*" multiple style="display: none;">
                    </div>
                `;
                const uploadCard = document.getElementById(`upload-listing-${cId}-${productId}`);
                const fileInput = document.getElementById(`input-listing-${cId}-${productId}`);
                if (uploadCard && fileInput) {
                    uploadCard.addEventListener('click', () => fileInput.click());
                    fileInput.addEventListener('change', async (e) => {
                        const files = Array.from(e.target.files);
                        if (files.length === 0) return;
                        uploadCard.style.pointerEvents = 'none';
                        uploadCard.querySelector('.upload-placeholder-text').textContent = 'Uploading...';
                        for (const file of files) {
                            await uploadFileToFolder(listingFolderPath, file);
                        }
                        loadProductShowcase(cId, productId);
                    });
                }
            }
        }

        const aplusGrid = document.getElementById(`aplus-grid-${cId}-${productId}`);
        if (aplusGrid) {
            if (aplusImages && aplusImages.length > 0) {
                aplusGrid.innerHTML = aplusImages.map((imgSrc, imgIdx) => `
                    <div class="aplus-module-card" data-img-url="${imgSrc}">
                        <img src="${imgSrc}" alt="A+ Module ${imgIdx + 1}" loading="lazy">
                    </div>
                `).join('');

                aplusGrid.querySelectorAll('.aplus-module-card').forEach(item => {
                    item.addEventListener('click', () => {
                        activeImagesList = [...listingImages, ...aplusImages];
                        openLightbox(item.getAttribute('data-img-url'));
                    });
                });
            } else {
                aplusGrid.innerHTML = `
                    <div class="upload-placeholder-card" id="upload-aplus-${cId}-${productId}" style="aspect-ratio: 97 / 30; min-height: 180px;">
                        <div class="upload-placeholder-icon" style="color: var(--color-accent);">+</div>
                        <div class="upload-placeholder-text">Upload A+ Content Modules</div>
                        <input type="file" id="input-aplus-${cId}-${productId}" accept="image/*" multiple style="display: none;">
                    </div>
                `;
                const uploadCard = document.getElementById(`upload-aplus-${cId}-${productId}`);
                const fileInput = document.getElementById(`input-aplus-${cId}-${productId}`);
                if (uploadCard && fileInput) {
                    uploadCard.addEventListener('click', () => fileInput.click());
                    fileInput.addEventListener('change', async (e) => {
                        const files = Array.from(e.target.files);
                        if (files.length === 0) return;
                        uploadCard.style.pointerEvents = 'none';
                        uploadCard.querySelector('.upload-placeholder-text').textContent = 'Uploading...';
                        for (const file of files) {
                            await uploadFileToFolder(aplusFolderPath, file);
                        }
                        loadProductShowcase(cId, productId);
                    });
                }
            }
        }

        if (window.rebindCursor) {
            window.rebindCursor();
        }
    }
}
