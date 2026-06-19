/**
 * Home Page View
 */
import { renderMarquee } from '../components/marquee.js';
import { renderProjectCard } from '../components/project-card.js';
import { fetchImagesFromFolder } from '../src/utils.js';

const marqueeItems = [
    "BRAND COMMUNICATION",
    "SOCIAL MEDIA CAMPAIGNS",
    "AMAZON A+ CONTENT",
    "PRODUCT STORYTELLING",
    "ADVERTISING CREATIVES",
    "VISUAL BRANDING"
];

const projects = [
    {
        id: "campaigns",
        num: "01",
        category: "Social Media Campaigns",
        title: "Advertising & Launch Graphics",
        description: "Large-format advertising campaigns, marketing banners, launch campaigns, fitness advertising, and promotional creatives.",
        coverImage: "",
        link: "#campaigns"
    },
    {
        id: "brand-comm",
        num: "02",
        category: "Brand Communication",
        title: "Social Campaigns & Brand Identity",
        description: "Social media visual campaigns, product promos, awareness creatives, festival graphics, and corporate dealer promotions.",
        coverImage: "",
        link: "#brand-comm"
    },
    {
        id: "ecommerce-design",
        num: "03",
        category: "E-commerce Design",
        title: "Listing Pages & Storefronts",
        description: "Amazon Listing Images, Amazon A+ Content modules, infographics, product storytelling layouts, and conversion-focused creatives.",
        coverImage: "",
        link: "#ecommerce"
    },
    {
        id: "renders",
        num: "04",
        category: "Product Rendering",
        title: "3D CGI Renders & Packshots",
        description: "Packaging renders, lifestyles, product visualization, structural details, and high-fidelity CGI arrangements.",
        coverImage: "",
        link: "#renders"
    }
];

const experiences = [
    {
        date: "APRIL 2026 - PRESENT",
        company: "Freelance",
        title: "Graphic Designer & Visual Storyteller",
        description: "Collaborating with brands and businesses on social media campaigns, brand communication, advertising creatives, Amazon A+ content, e-commerce graphics, and visual storytelling projects."
    },
    {
        date: "FEBRUARY 2026 - APRIL 2026",
        company: "NextZen Digital",
        title: "Graphic Designer",
        description: "Created social media campaigns, e-commerce creatives, performance marketing graphics, and visual branding materials for growing businesses."
    },
    {
        date: "MAY 2025 - JANUARY 2026",
        company: "Keyword India",
        title: "Graphic Designer",
        description: "Worked on social media campaigns, advertising creatives, marketing collateral, and brand communication assets for multiple clients and industries."
    },
    {
        date: "2024 - 2025",
        company: "Self-Managed YouTube Channel & Ayush Bhandari",
        title: "Content Creator & Content Ideation",
        description: "Developed content strategies, managed creative concepts, created thumbnails, explored audience psychology, and built a strong foundation in storytelling and visual communication."
    }
];

const skills = [
    {
        name: "Photoshop",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="skill-icon"><rect x="3" y="3" width="18" height="18" rx="4" stroke="#31a8ff"></rect><path d="M7 8h3a2 2 0 1 1 0 4H7v4M7 11h3" stroke="#31a8ff"></path><path d="M13 14.2c.3.3.8.5 1.3.5.6 0 1-.3 1-.7 0-.4-.3-.6-.9-.8-.7-.2-1.4-.4-1.4-1.2 0-.7.6-1.3 1.4-1.3.5 0 .9.2 1.2.4" stroke="#31a8ff"></path></svg>`
    },
    {
        name: "Illustrator",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="skill-icon"><rect x="3" y="3" width="18" height="18" rx="4" stroke="#ff9a00"></rect><path d="M7 15l2.5-6.5L12 15M8 13h3" stroke="#ff9a00"></path><line x1="15" y1="10" x2="15" y2="15" stroke="#ff9a00"></line><circle cx="15" cy="8" r="0.5" fill="#ff9a00" stroke="#ff9a00"></circle></svg>`
    },
    {
        name: "After Effects",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="skill-icon"><rect x="3" y="3" width="18" height="18" rx="4" stroke="#9999ff"></rect><path d="M6 15l2-5.5L10 15M7 13.5h2" stroke="#9999ff"></path><path d="M13.5 13h2.5c0-.8-.4-1.4-1.2-1.4-.8 0-1.2.6-1.2 1.4zm0 0c0 .8.4 1.4 1.2 1.4.5 0 .9-.3 1.1-.6" stroke="#9999ff"></path></svg>`
    },
    {
        name: "Premiere Pro",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="skill-icon"><rect x="3" y="3" width="18" height="18" rx="4" stroke="#ea77ff"></rect><path d="M6 8h2.5a1.75 1.75 0 0 1 0 3.5H6v3.5M6 11.5h2.5" stroke="#ea77ff"></path><path d="M13 11v4M13 12c.3-.6.8-1 1.4-1h.6" stroke="#ea77ff"></path></svg>`
    },
    {
        name: "AI Creative Tools",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="skill-icon"><path d="M12 2v4M12 18v4M4 12h4M18 12h4" stroke="var(--color-accent)"></path><path d="M12 6c0 3 3 6 6 6-3 0-6 3-6 6 0-3-3-6-6-6 3 0 6-3 6-6z" stroke="var(--color-accent)" fill="rgba(255, 107, 0, 0.1)"></path><path d="M19 5c0 1.5 1 2.5 2.5 2.5-1.5 0-2.5 1-2.5 2.5 0-1.5-1-2.5-2.5-2.5 1.5 0 2.5-1 2.5-2.5z" stroke="var(--color-accent)"></path></svg>`
    },
    {
        name: "Brand Communication",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="skill-icon"><circle cx="12" cy="7" r="3" stroke="var(--color-accent)"></circle><circle cx="6" cy="17" r="3" stroke="var(--color-accent)"></circle><circle cx="18" cy="17" r="3" stroke="var(--color-accent)"></circle><line x1="10.2" y1="9.5" x2="7.8" y2="14.5" stroke="var(--color-text-dark)"></line><line x1="13.8" y1="9.5" x2="16.2" y2="14.5" stroke="var(--color-text-dark)"></line><line x1="9" y1="17" x2="15" y2="17" stroke="var(--color-text-dark)"></line></svg>`
    },
    {
        name: "Amazon A+ Content",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="skill-icon"><rect x="3" y="3" width="18" height="6" rx="1" stroke="var(--color-accent)"></rect><rect x="3" y="11" width="8" height="10" rx="1" stroke="var(--color-accent)"></rect><rect x="13" y="11" width="8" height="4" rx="1" stroke="var(--color-text-dark)"></rect><rect x="13" y="17" width="8" height="4" rx="1" stroke="var(--color-text-dark)"></rect></svg>`
    },
    {
        name: "Visual Storytelling",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="skill-icon"><rect x="3" y="4" width="18" height="16" rx="2" stroke="var(--color-accent)"></rect><path d="M8 4v16M16 4v16M3 8h5M16 8h5M3 12h5M16 12h5M3 16h5M16 16h5" stroke="var(--color-text-dark)"></path><polygon points="11,9 15,12 11,15" stroke="var(--color-accent)" fill="rgba(255, 107, 0, 0.1)"></polygon></svg>`
    }
];

export function renderHome() {
    const projectCardsHtml = projects.map(p => renderProjectCard(p)).join('');

    const timelineHtml = experiences.map(exp => `
        <div class="timeline-item fade-in-section">
            <div class="timeline-meta">
                <span class="timeline-date">${exp.date}</span>
                <span class="timeline-company">${exp.company}</span>
            </div>
            <h4 class="timeline-title">${exp.title}</h4>
            <p class="timeline-desc">${exp.description}</p>
        </div>
    `).join('');

    const skillsHtml = skills.map(skill => `
        <div class="specialization-card">
            <div class="specialization-icon-wrapper">
                ${skill.icon}
            </div>
            <span class="specialization-label">${skill.name}</span>
        </div>
    `).join('');

    return `
    <!-- 1. HERO SECTION -->
    <section class="hero-section" id="home">
        <div class="container hero-grid">
            <div class="hero-content">
                <span class="hero-label">BRAND DESIGNER • VISUAL STORYTELLER • AI CREATIVE SPECIALIST</span>
                <h1 class="hero-title">UJJWAL<br>MAURYA</h1>
                <p class="hero-description">
                    Visual Designer &amp; Brand Communication Specialist crafting high-impact social media campaigns, advertising creatives, Amazon listing graphics, and visual storytelling experiences.
                </p>
                
                <!-- Horizontal Stats Row -->
                <div class="hero-stats-container">
                    <div class="hero-stat-card">
                        <span class="hero-stat-num">1.5+</span>
                        <span class="hero-stat-label">Years Experience</span>
                    </div>
                    <div class="hero-stat-card">
                        <span class="hero-stat-num">80+</span>
                        <span class="hero-stat-label">Projects Delivered</span>
                    </div>
                    <div class="hero-stat-card">
                        <span class="hero-stat-num">50+</span>
                        <span class="hero-stat-label">Brands Worked With</span>
                    </div>
                    <div class="hero-stat-card">
                        <span class="hero-stat-num">AI</span>
                        <span class="hero-stat-label">Powered Workflow</span>
                    </div>
                </div>

                <div class="hero-actions" style="margin-bottom: var(--space-md);">
                    <a href="#home#selected-work" class="btn btn-primary">
                        <span>View Work</span>
                        <span class="btn-icon">&rarr;</span>
                    </a>
                    <a href="javascript:void(0)" class="btn btn-secondary hero-download-btn">
                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="btn-icon-left" style="margin-right: 8px; vertical-align: middle;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        <span>Download Resume</span>
                    </a>
                </div>
                
                <!-- Hero Clickable Social Links Row -->
                <div class="hero-social-links" style="display: flex; gap: 16px; align-items: center;">
                    <a href="mailto:ujjwalmaurya781@gmail.com" target="_blank" rel="noopener" class="hero-social-icon-link" aria-label="Email Ujjwal">
                        <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/ujjwal-maurya-3a997521a" target="_blank" rel="noopener" class="hero-social-icon-link" aria-label="LinkedIn Profile">
                        <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a href="https://www.behance.net/ujjwalmaurya2" target="_blank" rel="noopener" class="hero-social-icon-link" aria-label="Behance Profile">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.224 8.448c.515 0 .973.076 1.373.228a2.533 2.533 0 0 1 1.002.668c.264.293.46.657.585 1.092.126.435.189.925.189 1.472 0 .548-.066 1.033-.199 1.458-.133.424-.336.782-.609 1.071a2.802 2.802 0 0 1-1.043.682c-.419.162-.924.243-1.516.243H3.067V8.448h5.157zm-1.09 3.033c0-.306-.03-.564-.092-.773a1.298 1.298 0 0 0-.293-.538 1.258 1.258 0 0 0-.52-.338c-.218-.083-.497-.124-.836-.124H5.197v3.527h1.037c.367 0 .66-.039.879-.118.219-.078.394-.2.525-.367.13-.167.222-.375.275-.625.053-.25.079-.533.079-.848c-.001.002-.001.002-.001.002zm1.096-4.526c.394 0 .736.031 1.028.092.292.062.537.159.736.293.199.134.351.314.457.538.106.225.159.508.159.851 0 .285-.038.533-.114.743a1.597 1.597 0 0 1-.36.562 1.936 1.936 0 0 1-.655.421c-.279.112-.647.168-1.106.168H5.197V6.955H8.23zm-.462 2.115c0-.18-.018-.328-.053-.446a.792.792 0 0 0-.171-.302.736.736 0 0 0-.307-.189c-.13-.046-.307-.069-.533-.069H5.197v2.022h1.564c.225 0 .399-.02.52-.059a.784.784 0 0 0 .3-.171c.097-.091.166-.211.205-.36a1.458 1.458 0 0 0 .06-.411v-.016zm12.333-.509h-4.945c.012-.416.082-.767.21-1.053.128-.286.309-.52.544-.702a2.38 2.38 0 0 1 .842-.405c.328-.088.7-.132 1.116-.132.394 0 .738.041 1.032.124.294.083.541.206.742.367.2.161.353.364.456.609.103.245.16.529.171.854.004-.002.032-.062.032-.062zm.315 2.115h1.996a6.388 6.388 0 0 1-.416 1.583 4.549 4.549 0 0 1-.94 1.383c-.413.413-.918.736-1.517.969-.598.232-1.29.349-2.077.349-.817 0-1.529-.12-2.136-.359a4.673 4.673 0 0 1-1.602-1.026 5.093 5.093 0 0 1-1.047-1.637c-.25-.639-.375-1.371-.375-2.196 0-.814.122-1.536.367-2.166a4.896 4.896 0 0 1 1.028-1.633 4.678 4.678 0 0 1 1.583-1.032c.602-.245 1.3-.367 2.094-.367.755 0 1.425.111 2.01.334.585.222 1.074.536 1.468.94.394.404.69.897.888 1.48.199.582.289 1.233.27 1.953h-7.653c0 .356.035.688.106.994.07.307.19.57.359.789.168.219.394.39.675.513.282.123.633.184 1.053.184.533 0 .963-.092 1.29-.276a2.27 2.27 0 0 0 .805-.724c.214-.298.358-.636.432-1.014.07-.384.101-.762.092-1.139zm-.375-7.534h-4.333v1.083h4.333V4.004z"></path></svg>
                    </a>
                    <a href="https://www.instagram.com/krishhhhhmaurya" target="_blank" rel="noopener" class="hero-social-icon-link" aria-label="Instagram Profile">
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    <a href="https://youtube.com/@buntyyyyyyy" target="_blank" rel="noopener" class="hero-social-icon-link" aria-label="YouTube Channel">
                        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                    </a>
                </div>
            </div>
            
            <!-- Floating Portrait Composition -->
            <div class="hero-portrait-wrapper">
                <div class="floating-circle-blur"></div>
                
                <!-- 14 Floating Design Showcase Cards (Behind and around portrait) -->
                <div class="floating-card-wrapper hero-showcase-wrapper hero-showcase-1-wrap hero-layer-1">
                    <div class="hero-showcase-card hero-showcase-1">
                        <img src="assets/brand-communication/aagaz-locks/aagaz_creative_1.jpg" alt="Aagaz Locks Creative">
                    </div>
                </div>
                
                <div class="floating-card-wrapper hero-showcase-wrapper hero-showcase-2-wrap hero-layer-2">
                    <div class="hero-showcase-card hero-showcase-2">
                        <img src="assets/brand-communication/goldwood-ply/post-01.jpg" alt="Goldwood Ply Creative">
                    </div>
                </div>
                
                <div class="floating-card-wrapper hero-showcase-wrapper hero-showcase-3-wrap hero-layer-3">
                    <div class="hero-showcase-card hero-showcase-3">
                        <img src="assets/brand-communication/madhav-food-products/madhav-mamara-post.jpg" alt="Madhav Foods Creative">
                    </div>
                </div>
                
                <div class="floating-card-wrapper hero-showcase-wrapper hero-showcase-4-wrap hero-layer-1">
                    <div class="hero-showcase-card hero-showcase-4">
                        <img src="assets/ecommerce/camx/am-01/listing/Artboard 1.png" alt="CAMX Amazon Creative">
                    </div>
                </div>
                
                <div class="floating-card-wrapper hero-showcase-wrapper hero-showcase-5-wrap hero-layer-2">
                    <div class="hero-showcase-card hero-showcase-5">
                        <img src="assets/campaigns/jewar-organics/jewar flour banner.jpg" alt="Jewar Organics Campaign">
                    </div>
                </div>
                
                <div class="floating-card-wrapper hero-showcase-wrapper hero-showcase-6-wrap hero-layer-3">
                    <div class="hero-showcase-card hero-showcase-6">
                        <img src="assets/campaigns/muscle-smith/Focus preworkout mobile v2(f).png" alt="Muscle Smith Campaign">
                    </div>
                </div>
                
                <div class="floating-card-wrapper hero-showcase-wrapper hero-showcase-7-wrap hero-layer-1">
                    <div class="hero-showcase-card hero-showcase-7">
                        <img src="assets/brand-communication/uninox-houseware/uninox-independenc.jpg" alt="Uninox Houseware Creative">
                    </div>
                </div>
                
                <div class="floating-card-wrapper hero-showcase-wrapper hero-showcase-8-wrap hero-layer-2">
                    <div class="hero-showcase-card hero-showcase-8">
                        <img src="assets/brand-communication/aagaz-locks/aagaz_creative_2.jpg" alt="Aagaz Locks Creative">
                    </div>
                </div>
                
                <div class="floating-card-wrapper hero-showcase-wrapper hero-showcase-9-wrap hero-layer-3">
                    <div class="hero-showcase-card hero-showcase-9">
                        <img src="assets/brand-communication/goldwood-ply/post-02.jpg" alt="Goldwood Ply Creative">
                    </div>
                </div>
                
                <div class="floating-card-wrapper hero-showcase-wrapper hero-showcase-10-wrap hero-layer-1">
                    <div class="hero-showcase-card hero-showcase-10">
                        <img src="assets/brand-communication/madhav-food-products/madhav-teachers-day.jpg" alt="Madhav Foods Creative">
                    </div>
                </div>
                
                <div class="floating-card-wrapper hero-showcase-wrapper hero-showcase-11-wrap hero-layer-2">
                    <div class="hero-showcase-card hero-showcase-11">
                        <img src="assets/ecommerce/camx/am-01/listing/Artboard 2.png" alt="CAMX Amazon Creative">
                    </div>
                </div>
                
                <div class="floating-card-wrapper hero-showcase-wrapper hero-showcase-12-wrap hero-layer-3">
                    <div class="hero-showcase-card hero-showcase-12">
                        <img src="assets/campaigns/jewar-organics/jewar holi special.jpg" alt="Jewar Organics Campaign">
                    </div>
                </div>
                
                <div class="floating-card-wrapper hero-showcase-wrapper hero-showcase-13-wrap hero-layer-1">
                    <div class="hero-showcase-card hero-showcase-13">
                        <img src="assets/campaigns/muscle-smith/whey protein mobile v1(f).png" alt="Muscle Smith Campaign">
                    </div>
                </div>
                
                <div class="floating-card-wrapper hero-showcase-wrapper hero-showcase-14-wrap hero-layer-2">
                    <div class="hero-showcase-card hero-showcase-14">
                        <img src="assets/brand-communication/uninox-houseware/uninox-new-sep01.jpg" alt="Uninox Houseware Creative">
                    </div>
                </div>
                
                <!-- Portrait Canvas (z-index 100) -->
                <div class="hero-portrait-canvas">
                    <!-- Premium Frame Backdrop (Behind cutout portrait) -->
                    <div class="portrait-frame-backdrop"></div>
                    <div class="portrait-image-container">
                        <img src="assets/ujjwal_portrait.png" alt="Ujjwal Maurya Profile Portrait">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 2. MOVING MARQUEE -->
    <section class="marquee-section">
        ${renderMarquee(marqueeItems)}
    </section>

    <!-- 3. SELECTED WORK SECTION -->
    <section id="selected-work">
        <div class="container">
            <div class="section-header">
                <div>
                    <span class="section-subtitle">Portfolio</span>
                    <h2 class="section-title">Selected Work</h2>
                </div>
                <div style="font-family: var(--font-heading); color: var(--color-text-dark); font-weight: 500;">
                    05 / WORK CATEGORIES
                </div>
            </div>
            
            <div class="project-grid">
                ${projectCardsHtml}
            </div>
        </div>
    </section>

    <!-- 4. ABOUT SECTION -->
    <section id="about" style="background-color: var(--color-bg-pitch);">
        <div class="container">
            <div class="section-header">
                <div>
                    <span class="section-subtitle">Biography</span>
                    <h2 class="section-title">About Me</h2>
                </div>
                <div style="font-family: var(--font-heading); color: var(--color-text-dark); font-weight: 500;">
                    JOURNEY
                </div>
            </div>

            <div class="about-grid">
                <!-- Left Column: Portrait -->
                <div class="about-portrait-wrapper fade-in-section">
                    <div class="about-portrait-card">
                        <div class="about-portrait-frame">
                            <img src="assets/ujjwal_portrait.png" alt="Ujjwal Maurya Portrait" class="about-portrait-img">
                        </div>
                        <div class="about-portrait-caption">Freelance Graphic Designer &amp; Visual Storyteller</div>
                    </div>
                </div>

                <!-- Right Column: Content -->
                <div class="about-content-wrapper">
                    <div class="about-editorial-text fade-in-section" style="margin-bottom: var(--space-md);">
                        Graphic Designer &amp; Visual Storyteller with <span>1.5+ years of experience</span> creating brand communication systems, social media campaigns, advertising creatives, Amazon A+ content, and e-commerce design solutions.
                    </div>
                    <div class="about-details fade-in-section">
                        <p class="about-bio-para" style="margin-bottom: var(--space-sm);">
                            My journey started through content creation, visual storytelling, and content ideation before evolving into professional graphic design. Over the years, I have worked with agencies, brands, and independent clients across hardware, FMCG, interiors, technology, lifestyle, and consumer product industries.
                        </p>
                        <p class="about-bio-para" style="margin-bottom: var(--space-md);">
                            I specialize in transforming business ideas into compelling visual experiences that connect strategy with creativity. From social media communication and advertising campaigns to Amazon listings and brand identity systems, my focus is always on creating work that is both visually engaging and commercially effective.
                        </p>
                        
                        <div class="about-stat-row">
                            <div class="about-stat-box">
                                <div class="about-stat-num">1.5+</div>
                                <div class="about-stat-label">Years Experience</div>
                            </div>
                            <div class="about-stat-box">
                                <div class="about-stat-num">80+</div>
                                <div class="about-stat-label">Projects Completed</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 5. RESUME SECTION -->
    <section id="resume">
        <div class="container">
            <div class="section-header">
                <div>
                    <span class="section-subtitle">Experience &amp; Skills</span>
                    <h2 class="section-title">Resume</h2>
                </div>
                <div style="font-family: var(--font-heading); color: var(--color-text-dark); font-weight: 500;">
                    CURRICULUM VITAE
                </div>
            </div>

            <div class="resume-grid">
                <!-- Vertical Timeline -->
                <div class="timeline">
                    ${timelineHtml}
                </div>

                <!-- Core Tooling & PDF Resume -->
                <div class="skills-container fade-in-section">
                    <h3 class="skills-title">Core Tooling</h3>
                    <p class="about-bio-para" style="font-size: 0.95rem; margin-bottom: var(--space-md); line-height: 1.7;">
                        High proficiency in Adobe Creative Suite, specifically Adobe Photoshop for composite design, Illustrator for vector identity files, and After Effects &amp; Premiere Pro for motion visual campaigns and content ideation.
                    </p>
                    <a href="javascript:void(0)" class="btn btn-secondary hero-download-btn" style="width: 100%; border-radius: 30px;">
                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="btn-icon-left" style="margin-right: 8px; vertical-align: middle;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        <span>Download Resume PDF</span>
                    </a>
                </div>
            </div>

            <!-- Full-Width Design Specializations Grid -->
            <div class="specializations-container fade-in-section" style="margin-top: var(--space-xl);">
                <h3 class="skills-title" style="margin-bottom: var(--space-lg);">Design Specializations</h3>
                <div class="specializations-grid">
                    ${skillsHtml}
                </div>
            </div>
        </div>
    </section>

    <!-- 6. CONTACT / LET'S WORK TOGETHER SECTION -->
    <section id="contact" class="premium-contact-section">
        <div class="contact-glow-blur"></div>
        <div class="container">
            <div class="contact-wrapper">
                <span class="section-subtitle" style="margin-bottom: var(--space-md);">Get In Touch</span>
                <h2 class="contact-hero-heading">LET'S WORK TOGETHER</h2>
                <a href="mailto:ujjwalmaurya781@gmail.com" target="_blank" rel="noopener" class="contact-email-link">
                    ujjwalmaurya781@gmail.com
                </a>
                
                <!-- CTA buttons with new tab opening -->
                <div class="contact-cta-buttons fade-in-section">
                    <a href="mailto:ujjwalmaurya781@gmail.com" target="_blank" rel="noopener" class="btn btn-primary cta-btn glow-button">
                        <svg class="cta-icon" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        <span>Email Me</span>
                    </a>
                    <a href="https://www.linkedin.com/in/ujjwal-maurya-3a997521a" target="_blank" rel="noopener" class="btn btn-secondary cta-btn">
                        <svg class="cta-icon" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://www.behance.net/ujjwalmaurya2" target="_blank" rel="noopener" class="btn btn-secondary cta-btn">
                        <svg class="cta-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M8.224 8.448c.515 0 .973.076 1.373.228a2.533 2.533 0 0 1 1.002.668c.264.293.46.657.585 1.092.126.435.189.925.189 1.472 0 .548-.066 1.033-.199 1.458-.133.424-.336.782-.609 1.071a2.802 2.802 0 0 1-1.043.682c-.419.162-.924.243-1.516.243H3.067V8.448h5.157zm-1.09 3.033c0-.306-.03-.564-.092-.773a1.298 1.298 0 0 0-.293-.538 1.258 1.258 0 0 0-.52-.338c-.218-.083-.497-.124-.836-.124H5.197v3.527h1.037c.367 0 .66-.039.879-.118.219-.078.394-.2.525-.367.13-.167.222-.375.275-.625.053-.25.079-.533.079-.848c-.001.002-.001.002-.001.002zm1.096-4.526c.394 0 .736.031 1.028.092.292.062.537.159.736.293.199.134.351.314.457.538.106.225.159.508.159.851 0 .285-.038.533-.114.743a1.597 1.597 0 0 1-.36.562 1.936 1.936 0 0 1-.655.421c-.279.112-.647.168-1.106.168H5.197V6.955H8.23zm-.462 2.115c0-.18-.018-.328-.053-.446a.792.792 0 0 0-.171-.302.736.736 0 0 0-.307-.189c-.13-.046-.307-.069-.533-.069H5.197v2.022h1.564c.225 0 .399-.02.52-.059a.784.784 0 0 0 .3-.171c.097-.091.166-.211.205-.36a1.458 1.458 0 0 0 .06-.411v-.016zm12.333-.509h-4.945c.012-.416.082-.767.21-1.053.128-.286.309-.52.544-.702a2.38 2.38 0 0 1 .842-.405c.328-.088.7-.132 1.116-.132.394 0 .738.041 1.032.124.294.083.541.206.742.367.2.161.353.364.456.609.103.245.16.529.171.854.004-.002.032-.062.032-.062zm.315 2.115h1.996a6.388 6.388 0 0 1-.416 1.583 4.549 4.549 0 0 1-.94 1.383c-.413.413-.918.736-1.517.969-.598.232-1.29.349-2.077.349-.817 0-1.529-.12-2.136-.359a4.673 4.673 0 0 1-1.602-1.026 5.093 5.093 0 0 1-1.047-1.637c-.25-.639-.375-1.371-.375-2.196 0-.814.122-1.536.367-2.166a4.896 4.896 0 0 1 1.028-1.633 4.678 4.678 0 0 1 1.583-1.032c.602-.245 1.3-.367 2.094-.367.755 0 1.425.111 2.01.334.585.222 1.074.536 1.468.94.394.404.69.897.888 1.48.199.582.289 1.233.27 1.953h-7.653c0 .356.035.688.106.994.07.307.19.57.359.789.168.219.394.39.675.513.282.123.633.184 1.053.184.533 0 .963-.092 1.29-.276a2.27 2.27 0 0 0 .805-.724c.214-.298.358-.636.432-1.014.07-.384.101-.762.092-1.139zm-.375-7.534h-4.333v1.083h4.333V4.004z"></path></svg>
                        <span>Behance</span>
                    </a>
                    <a href="https://www.instagram.com/krishhhhhmaurya" target="_blank" rel="noopener" class="btn btn-secondary cta-btn">
                        <svg class="cta-icon" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        <span>Instagram</span>
                    </a>
                </div>

                <!-- RESUME PREVIEW MODAL -->
                <div class="resume-modal-overlay" id="resume-modal">
                    <div class="resume-modal-container">
                        <button class="resume-modal-close" id="resume-modal-close" aria-label="Close Modal">&times;</button>
                        <div class="resume-modal-content">
                            <div class="resume-modal-preview">
                                <div class="resume-preview-img-wrapper" style="position: relative; width: 100%; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 12px; background: rgba(255, 255, 255, 0.01);">
                                    <img src="/assets/resume/resume-preview.jpg" alt="Ujjwal Maurya Resume Preview" class="resume-preview-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                                    <div class="resume-preview-fallback" style="display: none; width: 100%; height: 100%; align-items: center; justify-content: center; text-align: center; color: var(--color-text-muted); font-style: italic; min-height: 400px; font-family: var(--font-body); font-size: 0.9rem;">
                                        Resume Preview Not Available
                                    </div>
                                </div>
                            </div>
                            <div class="resume-modal-details">
                                <h3 class="resume-modal-title">Ujjwal Maurya</h3>
                                <p class="resume-modal-subtitle">Brand Designer &amp; Visual Storyteller</p>
                                <div class="resume-modal-divider"></div>
                                <h4 class="resume-modal-section-title">Professional Summary</h4>
                                <p class="resume-modal-text">
                                    Visual Designer &amp; Brand Communication Specialist with 1.5+ years of experience. High proficiency in Adobe Creative Suite, crafting high-impact social media campaigns, advertising creatives, and e-commerce storytelling. Combining strategic design with visual storytelling to create premium brand experiences.
                                </p>
                                <div class="resume-modal-actions">
                                    <a href="/assets/resume/Ujjwal-Maurya-Resume.pdf" download="Ujjwal-Maurya-Resume.pdf" class="btn btn-primary resume-modal-download-btn">
                                        <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="btn-icon-left" style="margin-right: 8px; vertical-align: middle;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                        <span>Download Resume</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
}

export async function initHome() {
    // Map project card IDs to their primary target folders to scan for cover images
    const projectFolderMappings = {
        'campaigns': 'assets/campaigns/jewar-organics/',
        'brand-comm': 'assets/brand-communication/goldwood-ply/',
        'ecommerce-design': 'assets/ecommerce/rumaisa/perfume-01/listing/',
        'renders': 'assets/renders/'
    };

    for (const [projectId, folderPath] of Object.entries(projectFolderMappings)) {
        const coverImg = document.getElementById(`cover-img-${projectId}`);
        const coverWrapper = document.getElementById(`cover-wrapper-${projectId}`);

        if (coverImg && coverWrapper) {
            const images = await fetchImagesFromFolder(folderPath);
            if (images && images.length > 0) {
                // Set the cover image as the first image in the folder
                coverImg.src = images[0];
                coverImg.style.display = 'block';
                coverWrapper.classList.remove('no-image');
            } else {
                // No images in the folder, hide image element and trigger the CSS fallback
                coverImg.style.display = 'none';
                coverWrapper.classList.add('no-image');
            }
        }
    }

    // Bind Resume Modal Overlay logic
    const modal = document.getElementById('resume-modal');
    const closeBtn = document.getElementById('resume-modal-close');
    const downloadBtns = document.querySelectorAll('.hero-download-btn');

    if (modal && closeBtn && downloadBtns.length > 0) {
        const openModal = (e) => {
            e.preventDefault();
            e.stopPropagation();
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Scroll lock
        };

        const closeModal = () => {
            modal.classList.remove('active');
            document.body.style.overflow = ''; // Scroll restore
        };

        downloadBtns.forEach(btn => {
            btn.addEventListener('click', openModal);
        });

        closeBtn.addEventListener('click', closeModal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // ESC Key listener
        const escListener = (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        };
        document.addEventListener('keydown', escListener);

        // Cleanup key listener when route changes (since SPA replaces elements)
        const cleanupModal = () => {
            document.removeEventListener('keydown', escListener);
            window.removeEventListener('hashchange', cleanupModal);
        };
        window.addEventListener('hashchange', cleanupModal);
    }
}
