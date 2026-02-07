'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Play, MapPin, Users, Sparkles, ChevronDown } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-pink-50" />
                <motion.div
                    className="absolute top-0 right-0 w-[300px] sm:w-[500px] md:w-[800px] h-[300px] sm:h-[500px] md:h-[800px] rounded-full bg-gradient-to-br from-violet-200/50 to-pink-200/50 blur-3xl"
                    animate={{
                        scale: [1, 1.1, 1],
                        x: [0, 20, 0],
                        y: [0, -15, 0],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="absolute -bottom-20 -left-20 w-[250px] sm:w-[400px] md:w-[600px] h-[250px] sm:h-[400px] md:h-[600px] rounded-full bg-gradient-to-br from-cyan-200/40 to-violet-200/40 blur-3xl"
                    animate={{
                        scale: [1, 1.12, 1],
                        x: [0, -15, 0],
                        y: [0, 20, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                />
            </div>

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.02)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:50px_50px]" />

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 pt-24 pb-16 sm:py-24 lg:py-32">
                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-violet-100 to-pink-100 text-violet-700 text-xs sm:text-sm font-medium mb-5 sm:mb-6"
                        >
                            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            <span>Transforming Communities</span>
                        </motion.div>

                        {/* Main Heading - Mobile Optimized */}
                        <motion.h1
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-[2.5rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-5 sm:mb-6"
                        >
                            <span className="text-gray-900">Empowering</span>
                            <br />
                            <span className="bg-gradient-to-r from-violet-600 via-pink-500 to-violet-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                                Rural India
                            </span>
                            <br className="hidden sm:block" />
                            <span className="text-gray-900 sm:hidden"> Through</span>
                            <span className="text-gray-900 hidden sm:inline">Through Innovation</span>
                            <br className="sm:hidden" />
                            <span className="text-gray-900 sm:hidden">Innovation</span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                            className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-7 sm:mb-8 max-w-md mx-auto lg:mx-0"
                        >
                            Bridging technology and tradition to create sustainable livelihoods across Maharashtra.
                        </motion.p>

                        {/* CTA Buttons - Mobile First */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex flex-col sm:flex-row gap-3 mb-10 sm:mb-12 max-w-sm mx-auto lg:mx-0"
                        >
                            <Link
                                href="/projects"
                                className="group flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 bg-gradient-to-r from-violet-600 to-pink-500 text-white font-semibold rounded-2xl shadow-lg shadow-violet-500/20 hover:shadow-xl hover:shadow-violet-500/25 active:scale-[0.98] transition-all duration-200"
                            >
                                <span>Explore Projects</span>
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 transition-transform" />
                            </Link>
                            <Link
                                href="/about"
                                className="flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 bg-white/80 backdrop-blur text-gray-700 font-semibold rounded-2xl border border-gray-200 hover:border-violet-200 hover:bg-violet-50/50 active:scale-[0.98] transition-all duration-200"
                            >
                                <Play className="w-4 h-4 text-violet-600" />
                                <span>Our Story</span>
                            </Link>
                        </motion.div>

                        {/* Quick Stats - Mobile Optimized */}
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className="flex items-center justify-center lg:justify-start gap-6 sm:gap-10"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center shadow-lg shadow-violet-500/20">
                                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <div>
                                    <div className="text-xl sm:text-2xl font-bold text-gray-900">1000+</div>
                                    <div className="text-xs sm:text-sm text-gray-500">Lives Impacted</div>
                                </div>
                            </div>
                            <div className="w-px h-10 bg-gray-200" />
                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center shadow-lg shadow-pink-500/20">
                                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <div>
                                    <div className="text-xl sm:text-2xl font-bold text-gray-900">25+</div>
                                    <div className="text-xs sm:text-sm text-gray-500">Villages</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Content - Visual Card (Hidden on mobile, shown on lg) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="hidden lg:block flex-1 max-w-lg"
                    >
                        <div className="relative">
                            {/* Floating background cards */}
                            <motion.div
                                className="absolute -top-6 -left-6 w-72 h-56 rounded-3xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 blur-sm"
                                animate={{ rotate: [0, 2, 0], y: [0, -5, 0] }}
                                transition={{ duration: 5, repeat: Infinity }}
                            />
                            <motion.div
                                className="absolute -bottom-6 -right-6 w-72 h-56 rounded-3xl bg-gradient-to-br from-pink-400/20 to-rose-500/20 blur-sm"
                                animate={{ rotate: [0, -2, 0], y: [0, 5, 0] }}
                                transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
                            />

                            {/* Main Card */}
                            <div className="relative bg-gradient-to-br from-violet-600 via-purple-600 to-pink-500 rounded-3xl p-1 shadow-2xl shadow-violet-500/20">
                                <div className="bg-white rounded-[22px] p-6 h-[380px] flex flex-col">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">Project RUDRA</h3>
                                    <p className="text-gray-500 text-sm mb-4">AI & GIS training for rural youth</p>

                                    <div className="flex-1 flex items-center justify-center">
                                        <div className="relative w-36 h-36">
                                            <motion.div
                                                className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-400/30 to-pink-400/30"
                                                animate={{ scale: [1, 1.15, 1] }}
                                                transition={{ duration: 2.5, repeat: Infinity }}
                                            />
                                            <motion.div
                                                className="absolute inset-3 rounded-full bg-gradient-to-br from-violet-500/50 to-pink-500/50"
                                                animate={{ scale: [1, 1.1, 1] }}
                                                transition={{ duration: 2.5, repeat: Infinity, delay: 0.15 }}
                                            />
                                            <div className="absolute inset-6 rounded-full bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center shadow-lg">
                                                <span className="text-white text-3xl font-bold">500+</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-3">
                                        {[
                                            { label: 'Trained', value: '500+' },
                                            { label: 'Villages', value: '25+' },
                                            { label: 'Projects', value: '4' },
                                        ].map((stat) => (
                                            <div key={stat.label} className="text-center py-2.5 px-2 rounded-xl bg-gray-50">
                                                <div className="text-base font-bold text-gray-900">{stat.value}</div>
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

            {/* Scroll Indicator - Mobile friendly */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="flex flex-col items-center gap-1.5"
                >
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                </motion.div>
            </motion.div>
        </section>
    );
}
