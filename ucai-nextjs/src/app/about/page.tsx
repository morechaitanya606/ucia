'use client';

import { motion } from 'framer-motion';
import {
    Users,
    Heart,
    Target,
    Lightbulb,
    Award,
    Globe,
    HandHeart,
    GraduationCap,
    Sparkles,
    ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const values = [
    {
        icon: Heart,
        title: 'Community First',
        description: 'Every decision is guided by the needs and aspirations of the communities we serve.',
        gradient: 'from-pink to-rose-500',
    },
    {
        icon: Lightbulb,
        title: 'Innovation',
        description: 'We leverage technology and creative thinking to amplify our impact.',
        gradient: 'from-amber-500 to-orange-500',
    },
    {
        icon: Globe,
        title: 'Sustainability',
        description: 'Building solutions that last, respecting both people and planet.',
        gradient: 'from-emerald to-teal-500',
    },
    {
        icon: Users,
        title: 'Collaboration',
        description: 'Partnering with communities, organizations, and individuals for collective impact.',
        gradient: 'from-cyan to-blue-500',
    },
];

const team = [
    {
        name: 'Leadership Team',
        description: 'Experienced professionals guiding our strategic vision',
        icon: Award,
    },
    {
        name: 'Field Coordinators',
        description: 'On-ground experts implementing projects across villages',
        icon: Target,
    },
    {
        name: 'Technical Experts',
        description: 'Specialists in AI, GIS, sustainability, and traditional arts',
        icon: Lightbulb,
    },
    {
        name: 'Fellows & Volunteers',
        description: 'Passionate individuals driving change in their communities',
        icon: Users,
    },
];

const involvement = [
    {
        title: 'Volunteer',
        description: 'Share your skills and time to make a direct impact in communities.',
        icon: HandHeart,
        gradient: 'from-violet to-pink',
        cta: 'Join as Volunteer',
    },
    {
        title: 'Fellowship',
        description: 'Apply for our youth fellowship program and lead community projects.',
        icon: GraduationCap,
        gradient: 'from-cyan to-violet',
        cta: 'Apply Now',
    },
    {
        title: 'Partner',
        description: 'Collaborate with us as a CSR partner, donor, or knowledge partner.',
        icon: Users,
        gradient: 'from-emerald to-cyan',
        cta: 'Become a Partner',
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-24">
            {/* Header */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="tag mb-6 inline-flex items-center gap-2">
                                <Sparkles className="w-4 h-4" />
                                About UICA
                            </span>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                                Innovation for{' '}
                                <span className="gradient-text">Social Impact</span>
                            </h1>
                            <p className="text-text-muted text-lg mb-8">
                                United Innovation and Care Association (UICA) is a non-profit organization
                                dedicated to transforming rural and urban communities through sustainable
                                development, skill training, and technology-driven solutions.
                            </p>
                            <p className="text-text-muted">
                                Founded with a vision to bridge the gap between traditional knowledge and
                                modern opportunities, we work across Maharashtra to empower youth, women,
                                and communities to build self-reliant, sustainable futures.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="glass-light rounded-3xl p-8">
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { value: '2020', label: 'Founded' },
                                        { value: '4', label: 'Active Projects' },
                                        { value: '1000+', label: 'Lives Impacted' },
                                        { value: '50+', label: 'Partners' },
                                    ].map((stat, i) => (
                                        <motion.div
                                            key={stat.label}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.4 + i * 0.1 }}
                                            className="text-center p-6 rounded-2xl bg-surface/50"
                                        >
                                            <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                                            <div className="text-sm text-text-dim">{stat.label}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 px-6 bg-surface/30">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass-light rounded-3xl p-8"
                        >
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet to-pink flex items-center justify-center mb-6">
                                <Target className="w-7 h-7 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                            <p className="text-text-muted">
                                To empower communities through innovative, sustainable solutions that
                                combine technology with traditional wisdom, creating pathways for
                                self-reliance and lasting positive change.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="glass-light rounded-3xl p-8"
                        >
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan to-violet flex items-center justify-center mb-6">
                                <Globe className="w-7 h-7 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                            <p className="text-text-muted">
                                A world where every community has the skills, resources, and
                                opportunities to thrive sustainably while preserving their
                                cultural heritage and protecting the environment.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Our <span className="gradient-text-cyan">Values</span>
                        </h2>
                        <p className="text-text-muted max-w-2xl mx-auto">
                            The principles that guide everything we do.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="glass-light rounded-2xl p-6 text-center"
                            >
                                <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-4`}>
                                    <value.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                                <p className="text-text-muted text-sm">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section id="team" className="py-24 px-6 bg-surface/30">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Our <span className="gradient-text">Team</span>
                        </h2>
                        <p className="text-text-muted max-w-2xl mx-auto">
                            Dedicated professionals and passionate volunteers working together for change.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-light rounded-2xl p-6"
                            >
                                <div className="w-12 h-12 rounded-xl bg-violet/10 flex items-center justify-center mb-4">
                                    <member.icon className="w-6 h-6 text-violet" />
                                </div>
                                <h3 className="text-lg font-bold mb-2">{member.name}</h3>
                                <p className="text-text-muted text-sm">{member.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Get Involved */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Get <span className="gradient-text-cyan">Involved</span>
                        </h2>
                        <p className="text-text-muted max-w-2xl mx-auto">
                            There are many ways to be part of our mission.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {involvement.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group glass-light rounded-2xl p-8 flex flex-col"
                            >
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6`}>
                                    <item.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-text-muted text-sm mb-6 flex-grow">{item.description}</p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 text-violet font-medium group-hover:gap-3 transition-all"
                                >
                                    {item.cta}
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
