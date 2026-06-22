/**
 * Home Page View
 */
import { renderMarquee } from '../components/marquee.js';
import { renderProjectCard } from '../components/project-card.js';
import { fetchImagesFromFolder } from '../src/utils.js';
import { mountHomeV2 } from './HomeV2.jsx';

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
    return `<div id="home-react-root"></div>`;
}

export let activeHomeRoot = null;

export async function initHome() {
    // Mount the React-based Cinematic Homepage Experience
    const homeContainer = document.getElementById('home-react-root');
    if (homeContainer) {
        activeHomeRoot = mountHomeV2(homeContainer);
    }

    // Bind cleanups upon route transitions
    const cleanupHome = () => {
        const hash = window.location.hash || '#home';
        let routeAndSub = hash.replace(/^#/, '');
        if (hash.startsWith('#home#')) {
            routeAndSub = 'home';
        }
        const route = routeAndSub.split('/')[0] || 'home';
        
        if (route === 'home') {
            return;
        }

        window.removeEventListener('hashchange', cleanupHome);
        if (activeHomeRoot) {
            activeHomeRoot.unmount();
            activeHomeRoot = null;
        }
    };
    window.addEventListener('hashchange', cleanupHome);
}
