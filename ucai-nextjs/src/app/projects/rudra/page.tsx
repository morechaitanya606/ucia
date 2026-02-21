'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
    Cpu,
    CheckCircle2,
    ArrowLeft,
    ArrowRight,
    Target,
    Users,
    BookOpen,
    Laptop,
    Leaf,
    Palette,
    X,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

const project = {
    title: 'Project RUDRA',
    subtitle: 'Rural & Urban Development through Resilience and Action',
    description: 'Our flagship initiative designed to transform rural and urban communities by providing comprehensive training and development programs. We focus on equipping youth and women with cutting-edge skills while preserving traditional knowledge.',
    gradient: 'from-violet to-pink',
    stats: [
        { value: '500+', label: 'Trained Individuals' },
        { value: '25+', label: 'Villages Covered' },
        { value: '80%', label: 'Employment Rate' },
        { value: '15+', label: 'Partners' },
    ],
    features: [
        { icon: Laptop, title: 'AI & Technology Training', description: 'Cutting-edge skills in AI, data analysis, and digital tools' },
        { icon: Leaf, title: 'GIS for Smart Farming', description: 'Geographic information systems for agricultural optimization' },
        { icon: BookOpen, title: 'Sustainable Agriculture', description: 'Modern and traditional farming techniques combined' },
        { icon: Palette, title: 'Traditional Arts & Crafts', description: 'Preserving heritage through skill development' },
        { icon: Users, title: 'Community Development', description: 'Building self-reliant and connected communities' },
        { icon: Target, title: 'Entrepreneurship', description: 'Business skills and market linkages for local enterprises' },
    ],
    timeline: [
        { phase: 'Phase 1', title: 'Assessment & Planning', description: 'Village surveys, needs assessment, and curriculum design' },
        { phase: 'Phase 2', title: 'Training Delivery', description: 'Intensive skill-building workshops and hands-on learning' },
        { phase: 'Phase 3', title: 'Implementation', description: 'Project execution and real-world application' },
        { phase: 'Phase 4', title: 'Sustainability', description: 'Long-term support, mentorship, and market connections' },
    ],
    images: [
        { src: '/images/projects/rudra/rudra-1.jpg', alt: 'RUDRA team with forest department officials' },
        { src: '/images/projects/rudra/rudra-2.jpg', alt: 'Technology training in the field' },
        { src: '/images/projects/rudra/rudra-3.jpg', alt: 'Field work with forest rangers' },
        { src: '/images/projects/rudra/rudra-4.jpg', alt: 'Meeting with department officials' },
        { src: '/images/projects/rudra/rudra-5.jpg', alt: 'Community engagement session' },
        { src: '/images/projects/rudra/rudra-6.jpg', alt: 'Training and collaboration' },
    ],
};

export default function RudraPage() {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    return (
        <main className="min-h-screen pt-24">
            {/* Hero */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-2 text-text-muted hover:text-foreground transition-colors mb-8"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Projects
                        </Link>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="w-24 h-24 rounded-2xl overflow-hidden mb-6 bg-white/10 p-1">
                                <Image src="/images/projects/rudra/logo.png" alt="RUDRA Logo" width={96} height={96} className="object-contain w-full h-full" />
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-4">{project.title}</h1>
                            <p className="text-violet text-xl font-medium mb-6">{project.subtitle}</p>
                            <p className="text-text-muted text-lg mb-8">{project.description}</p>
                            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
                                Get Involved
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="glass-light rounded-3xl p-8"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Target className="w-5 h-5 text-violet" />
                                <span className="text-sm font-medium text-text-dim">Impact Metrics</span>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {project.stats.map((stat) => (
                                    <div key={stat.label} className="text-center p-4 rounded-2xl bg-surface/50">
                                        <div className={`text-3xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mb-1`}>
                                            {stat.value}
                                        </div>
                                        <div className="text-sm text-text-dim">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-24 px-6 bg-surface/30">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4">Focus Areas</h2>
                        <p className="text-text-muted max-w-2xl mx-auto">
                            Comprehensive training across multiple domains to create well-rounded, skilled individuals.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {project.features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-light rounded-2xl p-6"
                            >
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4`}>
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                                <p className="text-text-muted text-sm">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Photo Gallery */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4">Gallery</h2>
                        <p className="text-text-muted max-w-2xl mx-auto">
                            Moments from our field work, training sessions, and community engagement.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {project.images.map((image, index) => (
                            <motion.div
                                key={image.src}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                                onClick={() => setLightboxIndex(index)}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 768px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="text-white text-sm font-medium">{image.alt}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4"
                        onClick={() => setLightboxIndex(null)}
                    >
                        <button
                            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
                            onClick={() => setLightboxIndex(null)}
                        >
                            <X className="w-5 h-5 text-white" />
                        </button>

                        <button
                            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
                            onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex === 0 ? project.images.length - 1 : lightboxIndex - 1); }}
                        >
                            <ChevronLeft className="w-6 h-6 text-white" />
                        </button>

                        <button
                            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
                            onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex === project.images.length - 1 ? 0 : lightboxIndex + 1); }}
                        >
                            <ChevronRight className="w-6 h-6 text-white" />
                        </button>

                        <motion.div
                            key={lightboxIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="relative w-full max-w-5xl aspect-[4/3]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={project.images[lightboxIndex].src}
                                alt={project.images[lightboxIndex].alt}
                                fill
                                className="object-contain rounded-lg"
                                sizes="90vw"
                            />
                        </motion.div>

                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm">
                            {lightboxIndex + 1} / {project.images.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Timeline */}
            <section className="py-24 px-6 bg-surface/30">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4">Program Structure</h2>
                        <p className="text-text-muted">Our structured approach ensures lasting impact.</p>
                    </motion.div>

                    <div className="space-y-6">
                        {project.timeline.map((item, index) => (
                            <motion.div
                                key={item.phase}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex gap-6 items-start"
                            >
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shrink-0`}>
                                    <CheckCircle2 className="w-6 h-6 text-white" />
                                </div>
                                <div className="glass-light rounded-xl p-6 flex-1">
                                    <div className="text-violet text-sm font-medium mb-1">{item.phase}</div>
                                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                    <p className="text-text-muted text-sm">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`max-w-4xl mx-auto text-center rounded-3xl p-12 bg-gradient-to-br ${project.gradient}`}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Join Project RUDRA
                    </h2>
                    <p className="text-white/90 mb-8 max-w-xl mx-auto">
                        Be part of transforming communities through skill development and sustainable practices.
                    </p>
                    <Link
                        href="/contact"
                        className="px-8 py-4 bg-white text-violet font-bold rounded-xl hover:bg-white/90 transition-colors inline-block"
                    >
                        Contact Us
                    </Link>
                </motion.div>
            </section>
        </main>
    );
}
