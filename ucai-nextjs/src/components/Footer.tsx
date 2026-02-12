'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';
import { Logo } from '@/components/Logo';

const footerLinks = {
    projects: [
        { label: 'Project RUDRA', href: '/projects' },
        { label: 'Project HEMA', href: '/projects' },
        { label: 'Project AFIU', href: '/projects' },
        { label: 'Green Audit', href: '/projects' },
    ],
    company: [
        { label: 'About Us', href: '/about' },
        { label: 'Contact', href: '/contact' },
        { label: 'Donate', href: '/donate' },
    ],
    focusAreas: ['Wildlife', 'Capacity Building', 'GIS'],
};

export default function Footer() {
    return (
        <footer className="relative border-t border-gray-100 bg-gray-50/50">
            {/* Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

            <div className="max-w-6xl mx-auto px-5 sm:px-6 py-12 sm:py-16">
                {/* Mobile: Stacked, Desktop: Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
                    {/* Brand - Full width on mobile */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="col-span-2 lg:col-span-1"
                    >
                        <Link href="/" className="inline-block mb-3">
                            <Logo />
                        </Link>
                        <p className="text-gray-500 text-sm mb-4 max-w-xs">
                            Empowering communities through sustainable development.
                        </p>
                        {/* Focus Areas */}
                        <div className="flex flex-wrap gap-1.5">
                            {footerLinks.focusAreas.map((area) => (
                                <span key={area} className="text-xs px-2.5 py-1 rounded-full bg-violet-100 text-violet-700">
                                    {area}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Projects */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3 sm:mb-4">
                            Projects
                        </h3>
                        <ul className="space-y-2 sm:space-y-3">
                            {footerLinks.projects.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-600 hover:text-violet-600 transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Company */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                    >
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3 sm:mb-4">
                            Company
                        </h3>
                        <ul className="space-y-2 sm:space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-600 hover:text-violet-600 transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact - Hidden label on mobile for space */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="col-span-2 sm:col-span-1"
                    >
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3 sm:mb-4">
                            Contact
                        </h3>
                        <ul className="space-y-2 sm:space-y-3">
                            <li>
                                <a href="mailto:contact.info@uica.in" className="flex items-center gap-2 text-sm text-gray-600 hover:text-violet-600 transition-colors">
                                    <Mail className="w-4 h-4 text-violet-500" />
                                    contact.info@uica.in
                                </a>
                            </li>
                            <li>
                                <a href="tel:+917028478109" className="flex items-center gap-2 text-sm text-gray-600 hover:text-violet-600 transition-colors">
                                    <Phone className="w-4 h-4 text-violet-500" />
                                    +91 70284 78109
                                </a>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-gray-600">
                                <MapPin className="w-4 h-4 text-violet-500 mt-0.5 flex-shrink-0" />
                                <span>Pune, Maharashtra, India</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 }}
                    className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3"
                >
                    <p className="text-xs sm:text-sm text-gray-400">
                        © {new Date().getFullYear()} UICA. All rights reserved.
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400 flex items-center gap-1">
                        Made with <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" /> for a better world
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
