'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

// Project data
const projects = [
    {
        id: 'rudra',
        title: 'RUDRA',
        subtitle: 'Rural & Urban Development',
        description: 'Comprehensive technology, AI, and GIS training programs for rural communities, enabling digital transformation.',
        category: 'Development',
        year: '2024',
        color: '#7c3aed',
        gradient: 'from-violet-600 to-purple-900',
        href: '/projects/rudra',
        stats: { value: '500+', label: 'Trained' },
    },
    {
        id: 'hema',
        title: 'HEMA',
        subtitle: 'Handloom Empowerment',
        description: 'Reviving Khadi heritage and empowering women artisans through skill development and market access.',
        category: 'Empowerment',
        year: '2024',
        color: '#ec4899',
        gradient: 'from-pink-500 to-rose-900',
        href: '/projects/hema',
        stats: { value: '300+', label: 'Women' },
    },
    {
        id: 'afiu',
        title: 'AFIU',
        subtitle: 'Active Fellow Intelligence',
        description: 'Youth-led village innovation programs creating sustainable solutions through community engagement.',
        category: 'Innovation',
        year: '2024',
        color: '#0891b2',
        gradient: 'from-cyan-500 to-blue-900',
        href: '/projects/afiu',
        stats: { value: '100+', label: 'Fellows' },
    },
    {
        id: 'audit',
        title: 'GREEN AUDIT',
        subtitle: 'Environmental Services',
        description: 'Professional sustainability consulting including energy audits, zero-waste strategies, and ESG compliance.',
        category: 'Sustainability',
        year: '2024',
        color: '#059669',
        gradient: 'from-emerald-500 to-teal-900',
        href: '/projects/audit',
        stats: { value: '200+', label: 'Audits' },
    },
];

// Custom cursor (desktop only)
function CustomCursor({ isHovering }: { isHovering: boolean }) {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isVisible, setIsVisible] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(true);

    useEffect(() => {
        setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }, []);

    useEffect(() => {
        if (isTouchDevice) return;

        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };
        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isTouchDevice]);

    if (isTouchDevice || !isVisible) return null;

    return (
        <motion.div
            className="fixed pointer-events-none z-[9999]"
            animate={{
                x: position.x - (isHovering ? 50 : 6),
                y: position.y - (isHovering ? 50 : 6),
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
        >
            <motion.div
                className="rounded-full bg-white flex items-center justify-center"
                animate={{
                    width: isHovering ? 100 : 12,
                    height: isHovering ? 100 : 12,
                }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                style={{ mixBlendMode: 'difference' }}
            >
                <AnimatePresence>
                    {isHovering && (
                        <motion.span
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            className="text-black text-sm font-semibold"
                        >
                            View
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
}

// Mobile Project Card
function MobileProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1 }}
        >
            <Link href={project.href} className="block group">
                <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${project.gradient} min-h-[70vh] flex flex-col justify-end p-6`}>
                    {/* Background number */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
                        <span className="text-[60vw] font-black text-white leading-none">
                            {String(index + 1).padStart(2, '0')}
                        </span>
                    </div>

                    {/* Noise texture */}
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23n)'/%3E%3C/svg%3E")`,
                        }}
                    />

                    {/* Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Content */}
                    <div className="relative z-10">
                        {/* Category & Year */}
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-white/60 text-xs tracking-[0.2em] uppercase font-medium">
                                {project.category}
                            </span>
                            <span className="w-6 h-px bg-white/30" />
                            <span className="text-white/60 text-xs">{project.year}</span>
                        </div>

                        {/* Title */}
                        <h2 className="text-5xl sm:text-6xl font-black text-white leading-none tracking-tight mb-3">
                            {project.title}
                        </h2>

                        {/* Subtitle */}
                        <p className="text-lg text-white/80 font-medium mb-3">
                            {project.subtitle}
                        </p>

                        {/* Description */}
                        <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
                            {project.description}
                        </p>

                        {/* Stats + CTA */}
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-3xl font-bold text-white">{project.stats.value}</div>
                                <div className="text-xs text-white/50">{project.stats.label}</div>
                            </div>
                            <div className="flex items-center gap-2 text-white font-medium">
                                <span>View Project</span>
                                <ArrowRight className="w-5 h-5 group-active:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

// Desktop Project Slide
function DesktopProjectSlide({
    project,
    index,
    onHover,
    onLeave,
    isActive,
}: {
    project: typeof projects[0];
    index: number;
    onHover: () => void;
    onLeave: () => void;
    isActive: boolean;
}) {
    return (
        <div className="relative flex-shrink-0 w-screen h-screen snap-center">
            <Link
                href={project.href}
                className="block relative w-full h-full overflow-hidden group"
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
            >
                {/* Background */}
                <motion.div
                    className="absolute inset-0 scale-110"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: isActive ? 1 : 1.1 }}
                    transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.span
                            className="text-[40vw] font-black text-white/[0.03] select-none leading-none"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            {String(index + 1).padStart(2, '0')}
                        </motion.span>
                    </div>
                    <div
                        className="absolute inset-0 opacity-[0.02]"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23n)'/%3E%3C/svg%3E")`,
                        }}
                    />
                </motion.div>

                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-12 lg:p-24">
                    {/* Category & Year */}
                    <motion.div
                        className="flex items-center gap-4 mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: isActive ? 1 : 0.5, y: isActive ? 0 : 30 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <span className="text-white/60 text-sm tracking-[0.2em] uppercase font-medium">
                            {project.category}
                        </span>
                        <span className="w-16 h-px bg-white/30" />
                        <span className="text-white/60 text-sm font-light">{project.year}</span>
                    </motion.div>

                    {/* Title */}
                    <motion.h2
                        className="text-7xl md:text-8xl lg:text-[10rem] font-black text-white leading-[0.85] tracking-tighter mb-4"
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: isActive ? 1 : 0.3, y: isActive ? 0 : 80 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                    >
                        {project.title}
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        className="text-xl md:text-2xl text-white/80 font-medium max-w-lg"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 40 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {project.subtitle}
                    </motion.p>

                    {/* Description */}
                    <motion.p
                        className="text-white/50 text-base mt-4 max-w-md"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 40 }}
                        transition={{ duration: 0.8, delay: 0.25 }}
                    >
                        {project.description}
                    </motion.p>
                </div>

                {/* Project counter */}
                <div className="absolute top-12 right-12 lg:top-16 lg:right-16">
                    <motion.span
                        className="text-white/40 text-sm tracking-widest font-light"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        {String(index + 1).padStart(2, '0')} — {String(projects.length).padStart(2, '0')}
                    </motion.span>
                </div>

                {/* View project indicator */}
                <motion.div
                    className="absolute bottom-12 right-12 lg:bottom-16 lg:right-16"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 20 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="flex items-center gap-3 text-white/60 group-hover:text-white transition-colors">
                        <span className="text-sm tracking-wide font-medium">View Project</span>
                        <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <ArrowUpRight className="w-5 h-5" />
                        </motion.div>
                    </div>
                </motion.div>
            </Link>
        </div>
    );
}

// Smooth scroll function
function smoothScrollTo(element: HTMLElement, to: number, duration: number) {
    const start = element.scrollLeft;
    const change = to - start;
    const startTime = performance.now();

    function easeOutCubic(t: number): number {
        return 1 - Math.pow(1 - t, 3);
    }

    function animateScroll(currentTime: number) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        element.scrollLeft = start + change * easeOutCubic(progress);
        if (progress < 1) {
            requestAnimationFrame(animateScroll);
        }
    }

    requestAnimationFrame(animateScroll);
}

export default function ProjectsPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(true);

    // Detect mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Track scroll for desktop
    useEffect(() => {
        if (isMobile) return;
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const scrollLeft = container.scrollLeft;
            const maxScroll = container.scrollWidth - container.clientWidth;
            setScrollProgress(maxScroll > 0 ? scrollLeft / maxScroll : 0);
            const index = Math.round(scrollLeft / window.innerWidth);
            setCurrentIndex(index);
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, [isMobile]);

    // Wheel -> horizontal scroll for desktop
    useEffect(() => {
        if (isMobile) return;
        const container = containerRef.current;
        if (!container) return;

        let isScrolling = false;
        let scrollTimeout: NodeJS.Timeout;

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();
            if (isScrolling) return;

            const delta = e.deltaY || e.deltaX;
            if (Math.abs(delta) < 10) return;

            isScrolling = true;
            const slideWidth = window.innerWidth;
            const currentSlide = Math.round(container.scrollLeft / slideWidth);
            let targetSlide = currentSlide;

            if (delta > 0) {
                targetSlide = Math.min(currentSlide + 1, projects.length - 1);
            } else {
                targetSlide = Math.max(currentSlide - 1, 0);
            }

            smoothScrollTo(container, slideWidth * targetSlide, 1200);

            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                isScrolling = false;
            }, 1300);
        };

        container.addEventListener('wheel', handleWheel, { passive: false });
        return () => {
            container.removeEventListener('wheel', handleWheel);
            clearTimeout(scrollTimeout);
        };
    }, [isMobile]);

    // Keyboard navigation for desktop
    useEffect(() => {
        if (isMobile) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!containerRef.current) return;
            const slideWidth = window.innerWidth;

            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                containerRef.current.scrollTo({
                    left: slideWidth * Math.min(currentIndex + 1, projects.length - 1),
                    behavior: 'smooth',
                });
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                containerRef.current.scrollTo({
                    left: slideWidth * Math.max(currentIndex - 1, 0),
                    behavior: 'smooth',
                });
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex, isMobile]);

    const scrollToProject = (index: number) => {
        if (!containerRef.current) return;
        containerRef.current.scrollTo({
            left: window.innerWidth * index,
            behavior: 'smooth',
        });
    };

    // MOBILE VIEW
    if (isMobile) {
        return (
            <div className="min-h-screen bg-gray-900">
                {/* Mobile Header */}
                <header className="fixed top-0 left-0 right-0 z-50 p-4 flex items-center justify-between bg-gradient-to-b from-black/50 to-transparent">
                    <Link href="/" className="text-white text-xl font-bold tracking-tight">
                        UICA
                    </Link>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-white p-2"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </header>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-gray-900 z-40 flex items-center justify-center"
                        >
                            <nav className="flex flex-col items-center gap-6">
                                {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                                    <Link
                                        key={item}
                                        href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                        className="text-2xl font-bold text-white"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Mobile Page Title */}
                <div className="pt-20 pb-8 px-5 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-black text-white mb-2"
                    >
                        Our Projects
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-sm"
                    >
                        Swipe up to explore our initiatives
                    </motion.p>
                </div>

                {/* Mobile Scroll Hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-center pb-6"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <ChevronDown className="w-6 h-6 text-gray-500" />
                    </motion.div>
                </motion.div>

                {/* Mobile Project Cards */}
                <div className="px-5 pb-12 space-y-6">
                    {projects.map((project, index) => (
                        <MobileProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* Back to Home CTA */}
                <div className="px-5 pb-16">
                    <Link
                        href="/"
                        className="flex items-center justify-center gap-2 w-full py-4 bg-white/10 text-white font-semibold rounded-2xl border border-white/10 active:scale-[0.98] transition-transform"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    // DESKTOP VIEW
    return (
        <>
            <CustomCursor isHovering={isHovering} />

            <div className="fixed inset-0 bg-black z-[100]">
                {/* Header */}
                <header className="fixed top-0 left-0 right-0 z-[150] p-8 md:p-12 flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-white text-2xl font-bold tracking-tight hover:opacity-70 transition-opacity"
                        style={{ cursor: 'none' }}
                    >
                        UICA
                    </Link>
                    <nav className="flex items-center gap-8">
                        {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                className={`text-sm tracking-wide transition-colors ${item === 'Projects' ? 'text-white' : 'text-white/50 hover:text-white'}`}
                                style={{ cursor: 'none' }}
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>
                </header>

                {/* Horizontal scroll container */}
                <div
                    ref={containerRef}
                    className="h-full w-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth"
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        WebkitOverflowScrolling: 'touch',
                    }}
                >
                    <div className="flex h-full">
                        {projects.map((project, index) => (
                            <DesktopProjectSlide
                                key={project.id}
                                project={project}
                                index={index}
                                onHover={() => setIsHovering(true)}
                                onLeave={() => setIsHovering(false)}
                                isActive={index === currentIndex}
                            />
                        ))}
                    </div>
                </div>

                {/* Navigation dots */}
                <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[150] flex flex-col gap-4">
                    {projects.map((project, i) => (
                        <button
                            key={project.id}
                            onClick={() => scrollToProject(i)}
                            className="group relative p-2"
                            style={{ cursor: 'none' }}
                        >
                            <motion.span
                                className="block rounded-full bg-white"
                                animate={{
                                    width: i === currentIndex ? 12 : 8,
                                    height: i === currentIndex ? 12 : 8,
                                    opacity: i === currentIndex ? 1 : 0.3,
                                }}
                                transition={{ duration: 0.3 }}
                            />
                            <span className="absolute right-10 top-1/2 -translate-y-1/2 text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                {project.title}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Progress bar */}
                <div className="fixed bottom-0 left-0 right-0 h-1 bg-white/10 z-[150]">
                    <motion.div
                        className="h-full bg-white"
                        animate={{ width: `${scrollProgress * 100}%` }}
                        transition={{ duration: 0.1 }}
                    />
                </div>

                {/* Scroll hint */}
                <AnimatePresence>
                    {currentIndex === 0 && scrollProgress < 0.05 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[150] flex flex-col items-center gap-3"
                        >
                            <motion.span
                                className="text-white/40 text-xs tracking-[0.3em] uppercase"
                                animate={{ x: [0, 15, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                Scroll
                            </motion.span>
                            <motion.div
                                className="w-12 h-px bg-white/30"
                                animate={{ scaleX: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Desktop styles */}
            <style jsx global>{`
                body {
                    overflow: hidden !important;
                }
                *::-webkit-scrollbar {
                    display: none !important;
                }
                @media (hover: hover) and (pointer: fine) {
                    * {
                        cursor: none !important;
                    }
                    a, button {
                        cursor: none !important;
                    }
                }
            `}</style>
        </>
    );
}
