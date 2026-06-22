import React, { useRef, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// --- Asset Resources (Actual Project Thumbnails) ---
const HERO_ORBIT_ASSETS = [
  { id: 'amanzi', title: 'Amanzi Fragrances', category: 'Ecommerce', src: 'assets/ecommerce/amanzi/product-01/listing/Artboard 1.png', link: '#ecommerce/amanzi' },
  { id: 'rumaisa', title: 'Rumaisa Scent', category: 'Ecommerce', src: 'assets/ecommerce/rumaisa/amara/listing/Artboard 1.png', link: '#ecommerce/rumaisa' },
  { id: 'camx', title: 'CAMX Amazon Listing', category: 'Ecommerce', src: 'assets/ecommerce/camx/am-01/listing/Artboard 1.png', link: '#ecommerce/camx' },
  { id: 'petro', title: 'Petro Luxury Perfume', category: 'Ecommerce', src: 'assets/ecommerce/petro-luxury/product-01/listing/Artboard 1.png', link: '#ecommerce/petro-luxury' },
  { id: 'elitemotion', title: 'Elite Motion Gym Chalk', category: 'Ecommerce', src: 'assets/ecommerce/elitemotion/listing/Alightmotion Chalk_Basic-1.png', link: '#ecommerce/elitemotion' }
];

const DEPTH_SCROLL_ASSETS = [
  { id: 1, src: 'assets/brand-communication/goldwood-ply/post-01.jpg', alt: 'Goldwood Ply Branding', depth: 0.15, rotation: -6, xOffset: '-25%', yOffset: '-15%' },
  { id: 2, src: 'assets/campaigns/muscle-smith/Focus preworkout mobile v2(f).png', alt: 'Muscle Smith', depth: 0.35, rotation: 8, xOffset: '25%', yOffset: '-20%' },
  { id: 3, src: 'assets/ecommerce/camx/am-02/listing/Artboard 1.png', alt: 'CAMX Box Package', depth: 0.22, rotation: -4, xOffset: '-20%', yOffset: '18%' },
  { id: 4, src: 'assets/ecommerce/rumaisa/amara/listing/Artboard 2.png', alt: 'Rumaisa Premium Scent', depth: 0.4, rotation: 5, xOffset: '22%', yOffset: '15%' }
];

const CAROUSEL_ASSETS = [
  { id: 1, src: 'assets/ecommerce/camx/am-01/listing/Artboard 1.png' },
  { id: 2, src: 'assets/ecommerce/rumaisa/amara/listing/Artboard 1.png' },
  { id: 3, src: 'assets/ecommerce/petro-luxury/product-01/listing/Artboard 1.png' },
  { id: 4, src: 'assets/ecommerce/elitemotion/listing/Alightmotion Chalk_Basic-1.png' },
  { id: 5, src: 'assets/campaigns/muscle-smith/Focus preworkout mobile v2(f).png' },
  { id: 6, src: 'assets/brand-communication/goldwood-ply/post-01.jpg' },
  { id: 7, src: 'assets/ecommerce/camx/am-02/listing/Artboard 1.png' },
  { id: 8, src: 'assets/ecommerce/rumaisa/amara/listing/Artboard 2.png' }
];

const PROCESS_STEPS = [
  { num: '01', title: 'Research', desc: 'Analyzing listings, target demographics, visual positioning, and audience psychology.', icon: `<svg class="w-6 h-6 text-[#FF6B00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>` },
  { num: '02', title: 'Strategy', desc: 'Structuring conversion paths, creative storyboards, and identifying key visual highlights.', icon: `<svg class="w-6 h-6 text-[#FF6B00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>` },
  { num: '03', title: 'Visual Systems', desc: 'Drafting high-fidelity mockups, composite designs, custom typography layouts, and Packaging renders.', icon: `<svg class="w-6 h-6 text-[#FF6B00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>` },
  { num: '04', title: 'Testing', desc: 'Validating readability, contrast performance, and ensuring visual clarity across mobile screens.', icon: `<svg class="w-6 h-6 text-[#FF6B00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>` },
  { num: '05', title: 'Launch', desc: 'Deploying high-resolution creative modules, listing designs, storefronts, and campaigns.', icon: `<svg class="w-6 h-6 text-[#FF6B00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>` }
];

const FEATURED_CATEGORIES = [
  { id: 'brand-comm', num: '01', category: 'Brand Communication', title: 'Social Campaigns & Brand Identity', desc: 'Social media campaigns, product promos, awareness creatives, festival graphics, and corporate promotions.', src: 'assets/brand-communication/goldwood-ply/post-01.jpg', link: '#brand-comm' },
  { id: 'ecommerce', num: '02', category: 'E-commerce Design', title: 'Listing Pages & Storefronts', desc: 'Amazon Listing Images, Amazon A+ Content, infographics, product storytelling layouts, and conversion-focused creatives.', src: 'assets/ecommerce/camx/am-01/listing/Artboard 1.png', link: '#ecommerce' },
  { id: 'campaigns', num: '03', category: 'Social Media Campaigns', title: 'Advertising & Launch Graphics', desc: 'Large-format campaigns, marketing banners, launch campaigns, fitness advertising, and promotional creatives.', src: 'assets/campaigns/muscle-smith/Focus preworkout mobile v2(f).png', link: '#campaigns' },
  { id: 'renders', num: '04', category: 'Product Rendering', title: '3D CGI Renders & Packshots', desc: 'Packaging renders, lifestyle product visualization, structural details, and high-fidelity CGI arrangements.', src: 'assets/renders/Artboard 1.jpg', link: '#renders' }
];

// --- Sub-Component: 3D Magnetic Button ---
const MagneticButton = ({ children, href, className = '', onClick, onMouseEnter, onMouseLeave }) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);
    setPosition({ x: x * 0.35, y: y * 0.35 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    if (onMouseLeave) onMouseLeave();
  };

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
      return;
    }
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const offset = 100;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementRect - bodyRect - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.a
      ref={buttonRef}
      href={href || '#'}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={onMouseEnter}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 180, damping: 14 }}
      className={`inline-flex items-center justify-center cursor-pointer ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
};

// --- Sub-Component: 3D Tilting Featured Card (Conforms to Critical Artwork Rule) ---
const FeaturedCard = ({ cat, onMouseEnter, onMouseLeave }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const rotateX = useTransform(y, [0, 1], [8, -8]);
  const rotateY = useTransform(x, [0, 1], [-8, 8]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
    if (onMouseLeave) onMouseLeave();
  };

  return (
    <motion.a
      ref={cardRef}
      href={cat.link}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={onMouseEnter}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="group relative bg-white/[0.01] border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl shadow-2xl flex flex-col p-5 transition-all duration-300 hover:border-[#FF6B00]/40 hover:shadow-[0_0_40px_rgba(255,107,0,0.12)] w-full"
    >
      {/* Glass Sweep Animation Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent -translate-x-full group-hover:animate-[sweep_1.5s_ease-out] pointer-events-none" />

      {/* Card Image Area (CONFORMS TO CRITICAL ARTWORK RULE: Uses object-fit: contain to preserve original ratios) */}
      <div className="relative w-full h-[220px] bg-zinc-950/40 overflow-hidden rounded-xl flex items-center justify-center border border-white/5">
        <img
          src={cat.src}
          alt={cat.title}
          className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-700 select-none pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Info Area */}
      <div className="flex-grow flex flex-col justify-between pt-4">
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-[10px] text-[#FF6B00] font-semibold tracking-[0.2em] uppercase font-heading">
              {cat.category}
            </span>
            <span className="text-xs text-white/20 font-bold font-heading">
              {cat.num}
            </span>
          </div>
          <h3 className="text-base font-bold text-white tracking-tight uppercase font-heading group-hover:text-[#FF8533] transition-colors">
            {cat.title}
          </h3>
          <p className="text-white/40 text-[11px] leading-relaxed font-body mt-1.5 line-clamp-3 group-hover:text-white/60 transition-colors">
            {cat.desc}
          </p>
        </div>

        <div className="flex items-center gap-1 text-white/30 group-hover:text-white text-[10px] uppercase font-bold tracking-widest font-heading mt-4 transition-colors">
          <span>Explore Category</span>
          <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      </div>
    </motion.a>
  );
};

// --- Sub-Component: Animated Scroll Counter ---
const StatCounter = ({ endValue, suffix = '', active }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) {
      setCount(0);
      return;
    }
    let start = 0;
    const end = parseFloat(endValue);
    const steps = 50;
    const stepDuration = 1000 / steps;
    const increment = end / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      start += increment;
      if (currentStep >= steps) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [endValue, active]);

  return <span>{count}{suffix}</span>;
};

// --- Main Homepage Component ---
export default function HomeV2() {
  const [statsActive, setStatsActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Custom Cursor state
  const [cursorType, setCursorType] = useState('default'); // 'default', 'hover-card', 'hover-cta'
  const [cursorText, setCursorText] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  const cursorRef = useRef(null);
  const spotlightRef = useRef(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const cursorPos = useRef({ x: -100, y: -100 });

  // Orbit rotation controls
  const orbitWrapperRef = useRef(null);
  const orbitSpeed = useRef(0.003); // radians per frame
  const isOrbitHovered = useRef(false);

  // GSAP scroll story controls
  const scrollTriggerContainerRef = useRef(null);
  const phase1Ref = useRef(null);
  const phase2Ref = useRef(null);
  const phase3Ref = useRef(null);
  const phase4Ref = useRef(null);
  const cardsGroupRef = useRef(null);

  // Horizontal scroll timeline refs
  const horizontalTriggerRef = useRef(null);
  const horizontalScrollSectionRef = useRef(null);
  const statsSectionRef = useRef(null);

  useEffect(() => {
    // Check if device is mobile (no custom cursor)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // 1. Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      gestureOrientation: 'vertical'
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Bind Lenis scroll to ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length ? lenis.scrollTo(value, { immediate: true }) : lenis.scroll;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      }
    });

    // 2. Custom Cursor Frame Updates
    let cursorAnimId;
    const updateCursor = () => {
      const dx = mousePos.current.x - cursorPos.current.x;
      const dy = mousePos.current.y - cursorPos.current.y;
      cursorPos.current.x += dx * 0.15;
      cursorPos.current.y += dy * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0)`;
      }
      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0)`;
      }
      cursorAnimId = requestAnimationFrame(updateCursor);
    };
    cursorAnimId = requestAnimationFrame(updateCursor);

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 3. Orbit Rotation RequestAnimationFrame loop
    let orbitAngle = 0;
    let orbitAnimId;
    const rotateOrbit = () => {
      const speed = isOrbitHovered.current ? 0.0006 : 0.0025;
      orbitAngle += speed;
      if (orbitWrapperRef.current) {
        orbitWrapperRef.current.style.setProperty('--orbit-angle', `${orbitAngle}rad`);
      }
      orbitAnimId = requestAnimationFrame(rotateOrbit);
    };
    orbitAnimId = requestAnimationFrame(rotateOrbit);

    // 4. GSAP Scroll Trigger for Section 2 (300vh Scroll Story)
    let gsapStoryContext;
    gsapStoryContext = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollTriggerContainerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true
        }
      });

      // Phase 1 -> 2
      tl.to(phase1Ref.current, { opacity: 0, y: -40, duration: 1 })
        .fromTo(phase2Ref.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 }, '-=0.3')
        
        // Phase 2 -> 3
        .to(phase2Ref.current, { opacity: 0, y: -40, duration: 1 }, '+=1')
        .fromTo(phase3Ref.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 }, '-=0.3')
        
        // Phase 3 -> 4
        .to(phase3Ref.current, { opacity: 0, y: -40, duration: 1 }, '+=1')
        .fromTo(phase4Ref.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 }, '-=0.3')
        
        // Categories organize reveal (floating card assembly)
        .fromTo(cardsGroupRef.current, { scale: 0.9, opacity: 0, y: 50 }, { scale: 1, opacity: 1, y: 0, duration: 1 }, '-=0.1');

    }, scrollTriggerContainerRef);

    // 5. GSAP Horizontal Scroll Pinning (Section 3: How I Design)
    let gsapTimelineContext;
    if (window.innerWidth >= 768) {
      gsapTimelineContext = gsap.context(() => {
        const scrollWidth = horizontalScrollSectionRef.current.scrollWidth;
        const translateAmt = scrollWidth - window.innerWidth;

        gsap.to(horizontalScrollSectionRef.current, {
          x: -translateAmt,
          ease: 'none',
          scrollTrigger: {
            trigger: horizontalTriggerRef.current,
            start: 'top top',
            end: () => `+=${translateAmt}`,
            scrub: 0.8,
            pin: true,
            invalidateOnRefresh: true
          }
        });
      }, horizontalTriggerRef);
    }

    // 6. Intersection Observer for Stats Counter
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setStatsActive(true);
        }
      });
    }, { threshold: 0.25 });

    if (statsSectionRef.current) {
      statsObserver.observe(statsSectionRef.current);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(cursorAnimId);
      cancelAnimationFrame(orbitAnimId);
      lenis.destroy();
      gsapStoryContext?.revert();
      gsapTimelineContext?.revert();
      statsObserver.disconnect();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="bg-[#030303] text-white w-full relative min-h-screen select-none font-body">

      {/* Global CSS Style Injections */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(150%); }
        }
        @keyframes slideLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-infinite {
          animation: slideLeft 28s linear infinite;
        }
        .animate-marquee-infinite:hover {
          animation-play-state: paused;
        }
        .noise-overlay {
          position: fixed;
          top: -50%; left: -50%; right: -50%; bottom: -50%;
          width: 200%; height: 200%;
          background: transparent url('data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)" opacity="0.03"/%3E%3C/svg%3E') repeat;
          opacity: 0.14;
          pointer-events: none;
          z-index: 9999;
          animation: noiseAnim .2s infinite;
        }
        @keyframes noiseAnim {
          0%, 100% { transform:translate(0,0) }
          10% { transform:translate(-1%,-2%) }
          25% { transform:translate(-3%,1%) }
          40% { transform:translate(2%,-3%) }
          60% { transform:translate(-2%,2%) }
          85% { transform:translate(1%,3%) }
        }
      `}} />

      {/* Grain / Noise Filter */}
      <div className="noise-overlay" />

      {/* Custom Spotlight Element */}
      {!isMobile && (
        <div
          ref={spotlightRef}
          style={{
            position: 'fixed',
            top: 0, left: 0,
            width: '320px', height: '320px',
            marginLeft: '-160px', marginTop: '-160px',
            background: 'radial-gradient(circle, rgba(255,107,0,0.06) 0%, rgba(255,107,0,0) 70%)',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 8,
            transition: 'opacity 0.25s ease'
          }}
        />
      )}

      {/* Custom Cursor Ring */}
      {!isMobile && (
        <div
          ref={cursorRef}
          className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{
            width: cursorType === 'hover-cta' ? '76px' : cursorType === 'hover-card' ? '48px' : '20px',
            height: cursorType === 'hover-cta' ? '32px' : cursorType === 'hover-card' ? '48px' : '20px',
            marginLeft: cursorType === 'hover-cta' ? '-38px' : cursorType === 'hover-card' ? '-24px' : '-10px',
            marginTop: cursorType === 'hover-cta' ? '-16px' : cursorType === 'hover-card' ? '-24px' : '-10px',
            border: cursorType === 'hover-cta' ? 'none' : '1.5px solid #FF6B00',
            borderRadius: cursorType === 'hover-cta' ? '20px' : '50%',
            background: cursorType === 'hover-cta' ? '#FF6B00' : cursorType === 'hover-card' ? 'rgba(255, 107, 0, 0.1)' : 'transparent',
            boxShadow: cursorType === 'hover-card' ? '0 0 15px rgba(255, 107, 0, 0.3)' : 'none'
          }}
        >
          {cursorType === 'hover-cta' && (
            <span className="text-[9px] font-black uppercase tracking-[0.1em] text-white font-heading">
              {cursorText || 'VIEW'}
            </span>
          )}
        </div>
      )}

      {/* Ambient background glows */}
      <div className="absolute top-[10%] left-[-10%] w-[60vw] h-[60vh] bg-[#FF6B00]/[0.015] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[60vw] h-[60vh] bg-[#FF6B00]/[0.015] rounded-full blur-[140px] pointer-events-none" />

      {/* ====================================================================
          SECTION 1 — CINEMATIC ORBIT HERO (100vh)
          ==================================================================== */}
      <section
        onMouseEnter={() => { if (!isMobile) setCursorType('default'); }}
        className="relative h-screen w-full flex flex-col items-center justify-center bg-black overflow-hidden border-b border-white/5 select-none"
        style={{ perspective: '1200px' }}
      >
        {/* Orbit Grid / Wrapper */}
        <div
          ref={orbitWrapperRef}
          onMouseEnter={() => { isOrbitHovered.current = true; }}
          onMouseLeave={() => { isOrbitHovered.current = false; }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateX(15deg) rotateY(-5deg)'
          }}
        >
          {/* Circular Track Ring Indicator */}
          <div
            className="absolute border border-white/[0.04] rounded-full"
            style={{
              width: '600px',
              height: '600px',
              transform: 'rotateX(90deg)'
            }}
          />

          {/* Orbiting Project Cards */}
          {HERO_ORBIT_ASSETS.map((proj, idx) => {
            const angleOffset = (idx * 360) / HERO_ORBIT_ASSETS.length;
            return (
              <div
                key={proj.id}
                className="absolute pointer-events-auto transition-transform duration-500 ease-out"
                style={{
                  transformStyle: 'preserve-3d',
                  // Billboard equation: orbit angle controls position, opposite rotation maintains forward facing
                  transform: `rotateY(calc(var(--orbit-angle) + ${angleOffset}deg)) translateZ(300px) rotateY(calc(-1 * (var(--orbit-angle) + ${angleOffset}deg)))`
                }}
              >
                <a
                  href={proj.link}
                  onMouseEnter={() => {
                    if (!isMobile) {
                      setCursorType('hover-cta');
                      setCursorText('VIEW');
                    }
                  }}
                  onMouseLeave={() => {
                    if (!isMobile) {
                      setCursorType('default');
                      setCursorText('');
                    }
                  }}
                  className="block w-[140px] h-[190px] md:w-[160px] md:h-[220px] bg-[#121212]/90 border border-white/10 hover:border-[#FF6B00]/40 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-[1.08] hover:shadow-[0_0_30px_rgba(255,107,0,0.25)] relative group cursor-pointer"
                  style={{
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <img
                    src={proj.src}
                    alt={proj.title}
                    className="w-full h-full object-cover select-none pointer-events-none opacity-45 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
                  
                  {/* Subtle hover titles inside cards */}
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <span className="text-[7px] text-[#FF6B00] font-heading font-black tracking-widest uppercase">{proj.category}</span>
                    <h4 className="text-[10px] text-white font-heading font-bold uppercase truncate mt-0.5">{proj.title}</h4>
                  </div>
                </a>
              </div>
            );
          })}
        </div>

        {/* Center Title Hero Details */}
        <div className="relative text-center flex flex-col items-center justify-center max-w-4xl px-8 z-20 pointer-events-none select-none">
          <motion.span
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 1, letterSpacing: '0.35em' }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="text-[#FF6B00] text-xs font-bold uppercase tracking-[0.35em] mb-4 font-heading"
          >
            DESIGN UNIVERSE
          </motion.span>

          <h1 className="text-white text-5xl md:text-[5.5rem] font-black tracking-tight leading-[0.9] max-w-3xl uppercase font-heading">
            UJJWAL MAURYA
          </h1>

          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-xs md:text-sm font-bold text-white/50 uppercase tracking-[0.18em] font-heading mt-2">
            <span>Visual Designer</span>
            <span>•</span>
            <span>Brand Storyteller</span>
            <span>•</span>
            <span>Creative Technologist</span>
          </div>

          <p className="text-white/40 text-xs md:text-sm max-w-lg mt-6 leading-relaxed font-body font-light">
            Designing experiences that transform products into stories.
          </p>
        </div>
      </section>

      {/* ====================================================================
          SECTION 2 — CINEMATIC SCROLL STORY (300vh Pinned)
          ==================================================================== */}
      <div ref={scrollTriggerContainerRef} className="relative z-20 bg-black min-h-[300vh] w-full flex flex-col justify-start">
        <div className="h-screen w-full sticky top-0 flex flex-col items-center justify-center overflow-hidden">
          
          {/* Subtle overlay Glow */}
          <div className="absolute w-[60vw] h-[60vh] rounded-full bg-[#FF6B00]/[0.015] filter blur-[150px] pointer-events-none" />

          {/* Phase 1 Pane: Every Brand Starts With An Idea */}
          <div ref={phase1Ref} className="absolute inset-0 flex items-center justify-center max-w-4xl px-8 mx-auto text-center z-10 pointer-events-none">
            <h2 className="text-white text-4xl md:text-6xl font-black font-heading uppercase leading-[1.1] tracking-tight">
              EVERY BRAND STARTS<br />WITH AN <span className="text-[#FF6B00]">IDEA</span>
            </h2>
          </div>

          {/* Phase 2 Pane: Ideas Become Stories (Floating Assets Parallax) */}
          <div ref={phase2Ref} className="absolute inset-0 flex flex-col items-center justify-center opacity-0 z-10 pointer-events-none">
            <div className="text-center max-w-3xl px-8 mb-10">
              <h2 className="text-white text-3xl md:text-5xl font-black font-heading uppercase leading-[1.1]">
                IDEAS BECOME <span className="text-[#FF6B00]">STORIES</span>
              </h2>
            </div>
            
            {/* 3D Depth Floating Thumbnail Layer */}
            <div className="relative w-full max-w-6xl h-[50vh] flex items-center justify-center">
              {DEPTH_SCROLL_ASSETS.map((asset) => (
                <div
                  key={asset.id}
                  className="absolute pointer-events-auto transition-transform duration-300 ease-out"
                  style={{
                    left: `calc(50% + ${asset.xOffset})`,
                    top: `calc(50% + ${asset.yOffset})`,
                    transform: `translate(-50%, -50%) rotate(${asset.rotation}deg) scale(${0.8 + asset.depth * 0.5})`,
                    boxShadow: `0 20px 40px rgba(0,0,0,0.5)`,
                    zIndex: Math.floor(asset.depth * 10)
                  }}
                >
                  <img
                    src={asset.src}
                    alt={asset.alt}
                    className="w-[140px] md:w-[220px] rounded-lg border border-white/10 opacity-70 hover:opacity-100 transition-opacity select-none pointer-events-none"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Phase 3 Pane: Stories Become Experiences (Assets Grouping) */}
          <div ref={phase3Ref} className="absolute inset-0 flex flex-col items-center justify-center opacity-0 z-10 pointer-events-none">
            <div className="text-center max-w-3xl px-8 mb-6">
              <h2 className="text-white text-3xl md:text-5xl font-black font-heading uppercase leading-[1.1]">
                STORIES BECOME<br />
                <span className="text-[#FF6B00]">EXPERIENCES.</span>
              </h2>
              <p className="text-white/50 text-xs md:text-sm font-light mt-3 max-w-md mx-auto">
                Design is more than decoration. It is communication.
              </p>
            </div>
          </div>

          {/* Phase 4 Pane: I Design That Journey (Category Cards Reveal) */}
          <div ref={phase4Ref} className="absolute inset-0 flex flex-col items-center justify-center opacity-0 z-10 w-full max-w-6xl mx-auto px-6">
            <div className="text-center mb-10 pointer-events-none">
              <span className="text-[#FF6B00] text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] font-heading">
                THE RESOLUTION
              </span>
              <h2 className="text-white text-3xl md:text-5xl font-black font-heading uppercase tracking-tight mt-1">
                I DESIGN THAT JOURNEY.
              </h2>
            </div>

            {/* Assemble of Category Cards (Standard layout mapping) */}
            <div
              ref={cardsGroupRef}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full pointer-events-auto"
            >
              {FEATURED_CATEGORIES.map((cat) => (
                <a
                  key={cat.id}
                  href={cat.link}
                  onMouseEnter={() => { if (!isMobile) setCursorType('hover-card'); }}
                  onMouseLeave={() => { if (!isMobile) setCursorType('default'); }}
                  className="bg-white/[0.02] border border-white/5 hover:border-[#FF6B00]/40 rounded-xl p-4 md:p-6 backdrop-blur-md transition-all duration-300 text-center flex flex-col items-center justify-center aspect-square shadow-xl group hover:shadow-[0_0_25px_rgba(255,107,0,0.15)]"
                >
                  <span className="text-[9px] text-[#FF6B00] font-heading font-black tracking-widest uppercase mb-2">Category {cat.num}</span>
                  <h3 className="text-xs md:text-sm text-white font-heading font-black uppercase leading-tight group-hover:text-[#FF8533] transition-colors">{cat.category}</h3>
                  <span className="text-[9px] text-white/20 uppercase font-heading font-bold tracking-widest mt-4 group-hover:text-white/50 transition-colors">Enter Viewer &rarr;</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ====================================================================
          SECTION 3 — HOW I DESIGN (Apple-style Horizontal Scroll)
          ==================================================================== */}
      <div ref={horizontalTriggerRef} className="relative z-20 bg-[#050505] border-t border-b border-white/5">
        <div className="w-full flex flex-col justify-center min-h-screen">
          <div className="container max-w-6xl px-8 mb-8">
            <span className="text-[#FF6B00] text-xs font-semibold tracking-[0.25em] uppercase font-heading">
              METHODOLOGY
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase text-white mt-1 tracking-tight font-heading">
              HOW I DESIGN
            </h2>
          </div>

          {/* Desktop Pinned Horizontal Scroll Section */}
          <div className="overflow-hidden w-full flex items-center">
            <div
              ref={horizontalScrollSectionRef}
              className="flex gap-6 px-8 md:px-24 py-10 w-max"
            >
              {PROCESS_STEPS.map((step, idx) => (
                <div
                  key={step.num}
                  onMouseEnter={() => { if (!isMobile) setCursorType('hover-card'); }}
                  onMouseLeave={() => { if (!isMobile) setCursorType('default'); }}
                  className="w-[280px] md:w-[320px] bg-white/[0.01] border border-white/5 rounded-2xl p-6 flex flex-col justify-between h-[280px] backdrop-blur-xl hover:border-[#FF6B00]/20 transition-all duration-300 relative group"
                >
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <div
                        className="w-11 h-11 rounded-xl bg-white/[0.02] flex items-center justify-center border border-white/10 group-hover:border-[#FF6B00]/20 transition-colors"
                        dangerouslySetInnerHTML={{ __html: step.icon }}
                      />
                      <span className="text-2xl font-black text-white/5 group-hover:text-[#FF6B00]/10 font-heading transition-colors">{step.num}</span>
                    </div>
                    <h3 className="text-base font-bold text-white uppercase tracking-tight font-heading mb-2">
                      {step.title}
                    </h3>
                    <p className="text-white/40 text-[11px] leading-relaxed font-body font-light group-hover:text-white/60 transition-colors">
                      {step.desc}
                    </p>
                  </div>

                  <div className="text-[9px] text-white/20 uppercase font-bold tracking-widest font-heading">
                    Step {step.num} {idx < PROCESS_STEPS.length - 1 && <span className="text-[#FF6B00] ml-1">&rarr;</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ====================================================================
          SECTION 4 — DESIGNER STATS
          ==================================================================== */}
      <section
        ref={statsSectionRef}
        className="py-16 bg-[#030303] border-b border-white/5 relative z-20"
      >
        <div className="container max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 border-l border-white/5">
              <span className="text-4xl md:text-5xl font-black text-[#FF6B00] font-heading">
                <StatCounter endValue="8" suffix="+" active={statsActive} />
              </span>
              <p className="text-[10px] text-white/40 uppercase tracking-widest font-heading mt-2">Brands Worked With</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 border-l border-white/5">
              <span className="text-4xl md:text-5xl font-black text-[#FF6B00] font-heading">
                <StatCounter endValue="25" suffix="+" active={statsActive} />
              </span>
              <p className="text-[10px] text-white/40 uppercase tracking-widest font-heading mt-2">Projects Delivered</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 border-l border-white/5">
              <span className="text-4xl md:text-5xl font-black text-[#FF6B00] font-heading">
                <StatCounter endValue="1000" suffix="+" active={statsActive} />
              </span>
              <p className="text-[10px] text-white/40 uppercase tracking-widest font-heading mt-2">Creatives Designed</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 border-l border-white/5">
              <span className="text-4xl md:text-5xl font-black text-[#FF6B00] font-heading">
                <StatCounter endValue="5" suffix="+" active={statsActive} />
              </span>
              <p className="text-[10px] text-white/40 uppercase tracking-widest font-heading mt-2">Industries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 5 — SELECTED WORK (Preserves original structure & content)
          ==================================================================== */}
      <section id="selected-work" className="py-24 bg-[#050505] relative z-20">
        <div className="container max-w-6xl mx-auto px-8">
          
          <div className="flex justify-between items-end border-b border-white/5 pb-6 mb-12">
            <div>
              <span className="text-[#FF6B00] text-xs font-semibold tracking-[0.25em] uppercase font-heading">
                PORTFOLIO
              </span>
              <h2 className="text-3xl md:text-4xl font-black uppercase text-white mt-1 tracking-tight font-heading">
                FEATURED WORK
              </h2>
            </div>
            <span className="text-xs text-white/30 font-medium tracking-wider font-heading">
              04 / CATEGORIES
            </span>
          </div>

          {/* Category cards grid. Enhanced with 3D tilts & sweeps, maintaining original content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FEATURED_CATEGORIES.map((cat) => (
              <FeaturedCard
                key={cat.id}
                cat={cat}
                onMouseEnter={() => { if (!isMobile) setCursorType('hover-cta'); setCursorText('VIEW'); }}
                onMouseLeave={() => { if (!isMobile) setCursorType('default'); setCursorText(''); }}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ====================================================================
          SECTION 6 — PREMIUM ASSET CAROUSEL (Infinite scrolling strip)
          ==================================================================== */}
      <section className="py-12 bg-black border-t border-b border-white/5 overflow-hidden w-full relative z-20 flex flex-col justify-center select-none">
        <div className="text-center mb-6">
          <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-heading font-medium">
            CLIENT &amp; CREATIVE SHOWCASE
          </span>
        </div>

        {/* Infinite scrolling horizontal strip */}
        <div className="flex overflow-hidden w-full relative select-none">
          <div
            className="flex gap-6 w-max animate-marquee-infinite"
            onMouseEnter={() => { if (!isMobile) setCursorType('hover-card'); }}
            onMouseLeave={() => { if (!isMobile) setCursorType('default'); }}
          >
            {/* Set 1 */}
            {CAROUSEL_ASSETS.map((asset) => (
              <div
                key={`c1-${asset.id}`}
                className="w-[180px] h-[120px] md:w-[240px] md:h-[160px] bg-zinc-950 rounded-xl overflow-hidden border border-white/5 hover:border-[#FF6B00]/40 transition-all duration-300 relative group cursor-pointer"
              >
                <img
                  src={asset.src}
                  alt="Portfolio asset"
                  loading="lazy"
                  className="w-full h-full object-cover select-none pointer-events-none group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
            {/* Set 2 (Duplicated for looping) */}
            {CAROUSEL_ASSETS.map((asset) => (
              <div
                key={`c2-${asset.id}`}
                className="w-[180px] h-[120px] md:w-[240px] md:h-[160px] bg-zinc-950 rounded-xl overflow-hidden border border-white/5 hover:border-[#FF6B00]/40 transition-all duration-300 relative group cursor-pointer"
              >
                <img
                  src={asset.src}
                  alt="Portfolio asset"
                  loading="lazy"
                  className="w-full h-full object-cover select-none pointer-events-none group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 7 — WHY WORK WITH ME (Animated Reveal)
          ==================================================================== */}
      <section className="py-24 bg-[#050505] relative z-20 border-b border-white/5 flex items-center justify-center">
        <div className="container max-w-4xl mx-auto px-8 text-center flex flex-col items-center">
          <span className="text-[#FF6B00] text-xs font-semibold tracking-[0.25em] uppercase font-heading mb-6">
            CORE VALUE
          </span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.0, ease: 'easeOut' }}
            className="text-white text-2xl md:text-4xl font-black leading-snug md:leading-snug uppercase font-heading tracking-tight"
          >
            I don't just design graphics.<br />
            I build <span className="text-[#FF6B00]">visual systems</span> that help brands communicate, convert and grow.
          </motion.h2>

          {/* Specialties listed below */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-10 text-white/40 text-[11px] md:text-xs font-heading font-bold uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
              <span>Ecommerce Listings</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
              <span>Amazon A+ Content</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
              <span>Brand Communication</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
              <span>Product Storytelling</span>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          SECTION 8 — FINAL CTA (Ending panel with CTAs)
          ==================================================================== */}
      <section id="contact" className="py-28 bg-[#030303] relative z-20 flex items-center justify-center overflow-hidden">
        {/* Soft CTA Glow background */}
        <div className="absolute w-[50vw] h-[50vh] rounded-full bg-[#FF6B00]/[0.02] filter blur-[160px] pointer-events-none" />

        <div className="container max-w-4xl mx-auto px-8 text-center flex flex-col items-center relative z-20">
          <span className="text-[#FF6B00] text-xs font-semibold tracking-[0.25em] uppercase font-heading mb-3">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-white mt-1 tracking-tight font-heading mb-8">
            Let's Build<br />Something Memorable.
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <MagneticButton
              href="#selected-work"
              onMouseEnter={() => { if (!isMobile) setCursorType('hover-cta'); setCursorText('GO'); }}
              onMouseLeave={() => { if (!isMobile) setCursorType('default'); setCursorText(''); }}
              className="bg-[#FF6B00] text-white border border-[#FF6B00] px-8 py-3.5 text-xs font-bold uppercase tracking-wider font-heading hover:bg-transparent hover:text-[#FF6B00] hover:shadow-[0_0_35px_rgba(255,107,0,0.25)] rounded"
            >
              Selected Work
            </MagneticButton>
            <MagneticButton
              href="mailto:ujjwalmaurya781@gmail.com"
              onMouseEnter={() => { if (!isMobile) setCursorType('hover-cta'); setCursorText('MAIL'); }}
              onMouseLeave={() => { if (!isMobile) setCursorType('default'); setCursorText(''); }}
              className="bg-transparent border border-white/15 hover:border-white/30 text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider font-heading rounded"
            >
              Contact
            </MagneticButton>
            <MagneticButton
              onClick={() => setIsModalOpen(true)}
              onMouseEnter={() => { if (!isMobile) setCursorType('hover-cta'); setCursorText('OPEN'); }}
              onMouseLeave={() => { if (!isMobile) setCursorType('default'); setCursorText(''); }}
              className="bg-transparent border border-white/15 hover:border-white/30 text-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider font-heading rounded hero-download-btn"
            >
              Resume
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* --- Interactive Resume Preview Modal (React Implementation) --- */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[9999] flex items-center justify-center p-4 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-[#0b0b0b] border border-white/10 rounded-2xl w-full max-w-4xl p-6 md:p-8 cursor-default flex flex-col md:flex-row gap-8 max-h-[90vh] overflow-y-auto"
            >
              {/* Close button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-white/40 hover:text-white text-2xl transition-colors"
              >
                &times;
              </button>

              {/* Left Column: Preview */}
              <div className="w-full md:w-1/2 flex items-center justify-center bg-white/[0.01] border border-white/5 rounded-xl p-4 min-h-[300px]">
                <img
                  src="assets/resume/resume-preview.jpg"
                  alt="Ujjwal Maurya Resume"
                  className="max-w-full max-h-[400px] object-contain rounded"
                  onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                />
                <div className="hidden text-white/30 text-xs italic">
                  Resume Preview Not Available
                </div>
              </div>

              {/* Right Column: details */}
              <div className="w-full md:w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-black font-heading text-white">Ujjwal Maurya</h3>
                  <p className="text-[#FF6B00] text-xs font-semibold tracking-wider font-heading mt-1">Brand Designer &amp; Visual Storyteller</p>
                  <div className="h-[1px] bg-white/10 my-4" />

                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-white/40 font-heading mb-2">Professional Summary</h4>
                  <p className="text-white/50 text-xs leading-relaxed font-body font-light mb-6">
                    Visual Designer &amp; Brand Communication Specialist with 1.5+ years of experience. High proficiency in Adobe Creative Suite, crafting high-impact social media campaigns, advertising creatives, and e-commerce storytelling. Combining strategic design with visual storytelling to create premium brand experiences.
                  </p>
                </div>

                <a
                  href="assets/resume/Ujjwal-Maurya-Resume.pdf"
                  download="Ujjwal-Maurya-Resume.pdf"
                  className="w-full py-3.5 bg-[#FF6B00] hover:bg-[#FF8533] text-white font-bold text-center rounded text-xs uppercase tracking-wider font-heading transition-colors"
                >
                  Download Resume PDF
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

// --- Dynamic SPA Integration Mount Function ---
export function mountHomeV2(container) {
  const root = createRoot(container);
  root.render(<HomeV2 />);
  return root;
}
