'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Phone, MapPin, Twitter, Instagram, Linkedin, Github, Heart } from 'lucide-react';
import { Logo } from '@/components/Logo';

const footerLinks = {
    projects: [
        { label: 'Project RUDRA', href: '/projects/rudra' },
        { label: 'Project HEMA', href: '/projects/hema' },
        { label: 'Project AFIU', href: '/projects/afiu' },
        { label: 'Environmental Auditing', href: '/projects/audit' },
    ],
    company: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Team', href: '/about#team' },
        { label: 'Careers', href: '/about#careers' },
        { label: 'Contact', href: '/contact' },
    ],
    social: [
        { icon: Instagram, href: 'https://instagram.com/uica.official', label: 'UICA Official' },
        { icon: Instagram, href: 'https://instagram.com/only_workshops', label: 'Only Workshops' },
        { icon: Instagram, href: 'https://instagram.com/geohawk_aerials', label: 'GeoHawk Aerials' },
        { icon: Instagram, href: 'https://instagram.com/lekin.in', label: 'Lekin.in' },
    ],
    focusAreas: ['Wildlife', 'Capacity Building', 'GIS'],
};

export default function Footer() {
    return (
        <footer className="relative border-t border-border bg-surface/50">
            {/* Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet to-transparent" />

            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1"
                    >
                        <Link href="/" className="inline-block mb-4">
                            <Logo />
                        </Link>
                        <p className="text-text-muted text-sm mb-4 max-w-xs">
                            Empowering communities through sustainable development and innovation.
                        </p>
                        {/* Focus Areas */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {footerLinks.focusAreas.map((area) => (
                                <span key={area} className="text-xs px-2 py-1 rounded-full bg-violet/10 text-violet border border-violet/20">
                                    {area}
                                </span>
                            ))}
                        </div>
                        {/* Social Links */}
                        <p className="text-xs text-text-dim mb-2">Follow our initiatives:</p>
                        <div className="flex flex-wrap items-center gap-2">
                            {footerLinks.social.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs px-3 py-1.5 rounded-lg bg-surface-light text-text-muted hover:text-pink hover:bg-pink/10 transition-colors flex items-center gap-1"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-3 h-3" />
                                    {social.label}
                                </a>
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
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-text-dim mb-4">
                            Projects
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.projects.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-text-muted hover:text-foreground transition-colors text-sm"
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
                        transition={{ delay: 0.2 }}
                    >
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-text-dim mb-4">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-text-muted hover:text-foreground transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-text-dim mb-4">
                            Contact
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-sm text-text-muted">
                                <Mail className="w-4 h-4 text-violet" />
                                <a href="mailto:contact@uica.org" className="hover:text-foreground transition-colors">
                                    contact@uica.org
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-text-muted">
                                <Phone className="w-4 h-4 text-violet" />
                                <a href="tel:+919876543210" className="hover:text-foreground transition-colors">
                                    +91 98765 43210
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-sm text-text-muted">
                                <MapPin className="w-4 h-4 text-violet mt-0.5" />
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
                    transition={{ delay: 0.4 }}
                    className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4"
                >
                    <p className="text-sm text-text-dim">
                        © {new Date().getFullYear()} UICA. All rights reserved.
                    </p>
                    <p className="text-sm text-text-dim flex items-center gap-1">
                        Made with <Heart className="w-4 h-4 text-pink fill-pink" /> for a better world
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
