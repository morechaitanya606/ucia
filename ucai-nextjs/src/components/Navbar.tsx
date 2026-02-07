'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart, Home, FolderOpen, Info, Mail } from 'lucide-react';
import { Logo } from '@/components/Logo';

const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/projects', label: 'Projects', icon: FolderOpen },
    { href: '/about', label: 'About', icon: Info },
    { href: '/contact', label: 'Contact', icon: Mail },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'glass py-3 sm:py-4'
                    : 'bg-transparent py-4 sm:py-6'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-5 sm:px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="block group">
                        <Logo />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="relative px-4 py-2 text-sm font-medium text-text-muted hover:text-foreground transition-colors"
                            >
                                {pathname === link.href && (
                                    <motion.span
                                        layoutId="navbar-indicator"
                                        className="absolute inset-0 bg-surface-light rounded-lg"
                                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{link.label}</span>
                            </Link>
                        ))}
                    </div>

                    {/* Donate CTA - Desktop */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link
                            href="/donate"
                            className="btn-primary text-sm flex items-center gap-2"
                            aria-label="Donate to UICA"
                        >
                            <Heart className="w-4 h-4" />
                            Donate Now
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2.5 -mr-2 text-foreground hover:bg-gray-100 rounded-xl transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu - Full Screen */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 md:hidden"
                    >
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-white"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Menu Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="relative h-full pt-20 pb-8 px-5 flex flex-col"
                        >
                            {/* Nav Links */}
                            <nav className="flex-1 py-6">
                                <div className="space-y-2">
                                    {navLinks.map((link, index) => {
                                        const Icon = link.icon;
                                        const isActive = pathname === link.href;
                                        return (
                                            <motion.div
                                                key={link.href}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                            >
                                                <Link
                                                    href={link.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className={`flex items-center gap-4 px-4 py-4 rounded-2xl text-lg font-medium transition-all ${isActive
                                                        ? 'bg-gradient-to-r from-violet-500 to-pink-500 text-white shadow-lg shadow-violet-500/20'
                                                        : 'text-gray-700 hover:bg-gray-100 active:bg-gray-100'
                                                        }`}
                                                >
                                                    <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                                                    {link.label}
                                                </Link>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </nav>

                            {/* Bottom CTAs */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.25 }}
                                className="space-y-3"
                            >
                                <Link
                                    href="/donate"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-violet-600 to-pink-500 text-white font-semibold rounded-2xl shadow-lg shadow-violet-500/20 active:scale-[0.98] transition-transform"
                                >
                                    <Heart className="w-5 h-5" />
                                    Donate Now
                                </Link>
                                <p className="text-center text-xs text-gray-400 pt-2">
                                    UICA — Transforming Communities
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
