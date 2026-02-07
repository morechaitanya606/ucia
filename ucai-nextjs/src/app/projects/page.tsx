'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';

// Project data
const projects = [
    {
        id: 'rudra',
        title: 'RUDRA',
        subtitle: 'Rural & Urban Development',
        description: 'Technology, AI, GIS training for rural communities',
        category: 'Development',
        year: '2024',
        color: '#7c3aed',
        gradient: 'from-violet-600 to-purple-900',
        image: '/api/placeholder/1920/1080',
        href: '/projects/rudra',
    },
    {
        id: 'hema',
        title: 'HEMA',
        subtitle: 'Handloom Empowerment',
        description: 'Reviving Khadi tradition with women artisans',
        category: 'Empowerment',
        year: '2024',
        color: '#ec4899',
        gradient: 'from-pink-500 to-rose-900',
        image: '/api/placeholder/1920/1080',
        href: '/projects/hema',
    },
    {
        id: 'afiu',
        title: 'AFIU',
        subtitle: 'Active Fellow Intelligence',
        description: 'Youth-led village innovation programs',
        category: 'Innovation',
        year: '2024',
        color: '#0891b2',
        gradient: 'from-cyan-500 to-blue-900',
        image: '/api/placeholder/1920/1080',
        href: '/projects/afiu',
    },
    {
        id: 'audit',
        title: 'GREEN AUDIT',
        subtitle: 'Environmental Services',
        description: 'Sustainability consulting for businesses',
        category: 'Sustainability',
        year: '2024',
        color: '#059669',
        gradient: 'from-emerald-500 to-teal-900',
        image: '/api/placeholder/1920/1080',
        href: '/projects/audit',
    },
];

// Custom cursor (desktop only)
function CustomCursor({ isHovering }: { isHovering: boolean }) {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isVisible, setIsVisible] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        // Detect touch device
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

// Project slide component
function ProjectSlide({
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
                {/* Background gradient with parallax-ready container */}
                <motion.div
                    className="absolute inset-0 scale-110"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: isActive ? 1 : 1.1 }}
                    transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    {/* Gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />

                    {/* Large number in background */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.span
                            className="text-[50vw] font-black text-white/[0.03] select-none"
                            style={{ fontFamily: 'system-ui', lineHeight: 0.8 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            {String(index + 1).padStart(2, '0')}
                        </motion.span>
                    </div>

                    {/* Noise texture */}
                    <div
                        className="absolute inset-0 opacity-[0.02]"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23n)'/%3E%3C/svg%3E")`,
                        }}
                    />
                </motion.div>

                {/* Vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12 md:p-16 lg:p-24">
                    {/* Category & Year */}
                    <motion.div
                        className="flex items-center gap-4 mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: isActive ? 1 : 0.5, y: isActive ? 0 : 30 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <span className="text-white/60 text-xs sm:text-sm tracking-[0.2em] uppercase font-medium">
                            {project.category}
                        </span>
                        <span className="w-8 sm:w-16 h-px bg-white/30" />
                        <span className="text-white/60 text-xs sm:text-sm font-light">
                            {project.year}
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h2
                        className="text-5xl sm:text-7xl md:text-8xl lg:text-[12rem] font-black text-white leading-[0.8] tracking-tighter mb-4"
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: isActive ? 1 : 0.3, y: isActive ? 0 : 80 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                    >
                        {project.title}
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        className="text-lg sm:text-xl md:text-2xl text-white/70 font-light max-w-md"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 40 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {project.subtitle}
                    </motion.p>
                </div>

                {/* Project counter - Top right */}
                <div className="absolute top-8 right-8 sm:top-12 sm:right-12 md:top-16 md:right-16">
                    <motion.span
                        className="text-white/40 text-sm tracking-widest font-light"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        {String(index + 1).padStart(2, '0')} — {String(projects.length).padStart(2, '0')}
                    </motion.span>
                </div>

                {/* View project - Bottom right */}
                <motion.div
                    className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 md:bottom-16 md:right-16"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 20 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="flex items-center gap-3 text-white/60 group-hover:text-white transition-colors duration-300">
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

export default function ProjectsPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Hide global navbar and footer
    useEffect(() => {
        const navbar = document.querySelector('nav');
        const footer = document.querySelector('footer');
        const bgGradient = document.querySelector('.background-gradient');

        if (navbar) navbar.style.display = 'none';
        if (footer) footer.style.display = 'none';
        if (bgGradient) (bgGradient as HTMLElement).style.display = 'none';

        // Set body styles
        document.body.style.overflow = 'hidden';
        document.body.style.cursor = 'none';

        return () => {
            if (navbar) navbar.style.display = '';
            if (footer) footer.style.display = '';
            if (bgGradient) (bgGradient as HTMLElement).style.display = '';
            document.body.style.overflow = '';
            document.body.style.cursor = '';
        };
    }, []);

    // Handle scroll
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const scrollLeft = container.scrollLeft;
            const maxScroll = container.scrollWidth - container.clientWidth;
            const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
            setScrollProgress(progress);

            const slideWidth = window.innerWidth;
            const index = Math.round(scrollLeft / slideWidth);
            setCurrentIndex(Math.min(Math.max(index, 0), projects.length - 1));
        };

        container.addEventListener('scroll', handleScroll, { passive: true });
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    // Custom smooth scroll function for slower animation
    const smoothScrollTo = (element: HTMLElement, targetLeft: number, duration: number = 1200) => {
        const startLeft = element.scrollLeft;
        const distance = targetLeft - startLeft;
        const startTime = performance.now();

        const easeOutCubic = (t: number): number => {
            return 1 - Math.pow(1 - t, 3);
        };

        const animateScroll = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            element.scrollLeft = startLeft + distance * easeOutCubic(progress);

            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        };

        requestAnimationFrame(animateScroll);
    };

    // Convert vertical scroll to horizontal - SNAP TO NEXT SLIDE
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let isScrolling = false;
        let scrollTimeout: NodeJS.Timeout;

        const handleWheel = (e: WheelEvent) => {
            e.preventDefault();

            // Prevent rapid firing
            if (isScrolling) return;

            const delta = e.deltaY || e.deltaX;

            // Only trigger if scroll is significant
            if (Math.abs(delta) < 10) return;

            isScrolling = true;

            // Determine direction and snap to next/prev slide
            const slideWidth = window.innerWidth;
            const currentSlide = Math.round(container.scrollLeft / slideWidth);
            let targetSlide = currentSlide;

            if (delta > 0) {
                // Scrolling down/right - go to next
                targetSlide = Math.min(currentSlide + 1, projects.length - 1);
            } else {
                // Scrolling up/left - go to previous
                targetSlide = Math.max(currentSlide - 1, 0);
            }

            // Use custom smooth scroll for slower animation
            smoothScrollTo(container, slideWidth * targetSlide, 1200);

            // Reset after animation completes
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
    }, []);

    // Keyboard navigation
    useEffect(() => {
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
    }, [currentIndex]);

    const scrollToProject = (index: number) => {
        if (!containerRef.current) return;
        containerRef.current.scrollTo({
            left: window.innerWidth * index,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {/* Custom cursor */}
            <CustomCursor isHovering={isHovering} />

            {/* Full-screen container */}
            <div className="fixed inset-0 bg-black z-[100]">
                {/* Custom Header */}
                <header className="fixed top-0 left-0 right-0 z-[150] p-6 sm:p-8 md:p-12 flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-white text-xl sm:text-2xl font-bold tracking-tight hover:opacity-70 transition-opacity"
                        style={{ cursor: 'none' }}
                    >
                        UICA
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                className={`text-sm tracking-wide transition-colors ${item === 'Projects' ? 'text-white' : 'text-white/50 hover:text-white'
                                    }`}
                                style={{ cursor: 'none' }}
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </header>

                {/* Mobile menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/95 z-[140] flex items-center justify-center"
                        >
                            <nav className="flex flex-col items-center gap-8">
                                {['Home', 'Projects', 'About', 'Contact'].map((item) => (
                                    <Link
                                        key={item}
                                        href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                        className="text-3xl font-bold text-white"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>

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
                            <ProjectSlide
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

                {/* Navigation dots - Right side */}
                <div className="fixed right-6 sm:right-8 top-1/2 -translate-y-1/2 z-[150] flex-col gap-4 hidden sm:flex">
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
                            {/* Tooltip */}
                            <span className="absolute right-10 top-1/2 -translate-y-1/2 text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                {project.title}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Progress bar - Bottom */}
                <div className="fixed bottom-0 left-0 right-0 h-1 bg-white/10 z-[150]">
                    <motion.div
                        className="h-full bg-white"
                        animate={{ width: `${scrollProgress * 100}%` }}
                        transition={{ duration: 0.1 }}
                    />
                </div>

                {/* Scroll hint - Only at start */}
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
                                <span className="hidden sm:inline">Scroll</span>
                                <span className="sm:hidden">Swipe</span>
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

            {/* Global styles for this page */}
            <style jsx global>{`
                body {
                    overflow: hidden !important;
                }
                *::-webkit-scrollbar {
                    display: none !important;
                }
                /* Only hide cursor on desktop/non-touch devices */
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
