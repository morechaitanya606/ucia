'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Play, MapPin, Users, Sparkles } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-pink-50" />
                <motion.div
                    className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-violet-200/40 to-pink-200/40 blur-3xl"
                    animate={{
                        scale: [1, 1.1, 1],
                        x: [0, 30, 0],
                        y: [0, -20, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-cyan-200/30 to-violet-200/30 blur-3xl"
                    animate={{
                        scale: [1, 1.15, 1],
                        x: [0, -20, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                />
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-32">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-8"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span>Transforming Communities Since 2020</span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8"
                        >
                            <span className="text-gray-900">Empowering</span>
                            <br />
                            <span className="bg-gradient-to-r from-violet-600 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                                Rural India
                            </span>
                            <br />
                            <span className="text-gray-900">Through Innovation</span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl text-gray-600 leading-relaxed mb-10 max-w-lg"
                        >
                            UICA bridges the gap between technology and tradition,
                            creating sustainable livelihoods and preserving cultural heritage
                            across Maharashtra.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-wrap gap-4 mb-12"
                        >
                            <Link
                                href="/projects"
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 to-pink-500 text-white font-semibold rounded-full shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/30 transition-all duration-300 hover:-translate-y-0.5"
                            >
                                <span>Explore Our Work</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-700 font-semibold rounded-full border border-gray-200 hover:border-violet-300 hover:bg-violet-50 transition-all duration-300"
                            >
                                <Play className="w-5 h-5 text-violet-600" />
                                <span>Watch Our Story</span>
                            </Link>
                        </motion.div>

                        {/* Quick Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex items-center gap-8"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center">
                                    <Users className="w-6 h-6 text-violet-600" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-gray-900">1000+</div>
                                    <div className="text-sm text-gray-500">Lives Impacted</div>
                                </div>
                            </div>
                            <div className="w-px h-12 bg-gray-200" />
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                                    <MapPin className="w-6 h-6 text-pink-600" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-gray-900">25+</div>
                                    <div className="text-sm text-gray-500">Villages Reached</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Content - Visual Element */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative hidden lg:block"
                    >
                        {/* Main Card Stack */}
                        <div className="relative">
                            {/* Background Cards */}
                            <motion.div
                                className="absolute -top-8 -left-8 w-80 h-64 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-500 opacity-20"
                                animate={{ rotate: [0, 2, 0], y: [0, -5, 0] }}
                                transition={{ duration: 6, repeat: Infinity }}
                            />
                            <motion.div
                                className="absolute -bottom-8 -right-8 w-80 h-64 rounded-3xl bg-gradient-to-br from-pink-400 to-rose-500 opacity-20"
                                animate={{ rotate: [0, -2, 0], y: [0, 5, 0] }}
                                transition={{ duration: 7, repeat: Infinity, delay: 1 }}
                            />

                            {/* Main Image Card */}
                            <div className="relative bg-gradient-to-br from-violet-600 via-purple-600 to-pink-500 rounded-3xl p-1 shadow-2xl">
                                <div className="bg-white rounded-[22px] p-8 h-[450px] flex flex-col justify-between">
                                    {/* Top Section */}
                                    <div>
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-3 h-3 rounded-full bg-red-400" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                            <div className="w-3 h-3 rounded-full bg-green-400" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                            Project RUDRA
                                        </h3>
                                        <p className="text-gray-500">
                                            AI & GIS training for rural youth
                                        </p>
                                    </div>

                                    {/* Visual Element */}
                                    <div className="flex-1 flex items-center justify-center">
                                        <div className="relative w-48 h-48">
                                            <motion.div
                                                className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-400 to-pink-400 opacity-30"
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ duration: 3, repeat: Infinity }}
                                            />
                                            <motion.div
                                                className="absolute inset-4 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 opacity-50"
                                                animate={{ scale: [1, 1.15, 1] }}
                                                transition={{ duration: 3, repeat: Infinity, delay: 0.2 }}
                                            />
                                            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center">
                                                <span className="text-white text-4xl font-bold">500+</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom Stats */}
                                    <div className="grid grid-cols-3 gap-4">
                                        {[
                                            { label: 'Trained', value: '500+' },
                                            { label: 'Villages', value: '25+' },
                                            { label: 'Projects', value: '4' },
                                        ].map((stat) => (
                                            <div key={stat.label} className="text-center p-3 rounded-xl bg-gray-50">
                                                <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                                                <div className="text-xs text-gray-500">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="text-sm text-gray-400 tracking-wide">Scroll to explore</span>
                    <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex items-start justify-center p-2">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1.5 h-3 bg-violet-500 rounded-full"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
