'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, LucideIcon } from 'lucide-react';

interface ProjectCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    gradient: string;
    href: string;
    stats?: { value: string; label: string }[];
    className?: string;
}

export default function ProjectCard({
    title,
    description,
    icon: Icon,
    gradient,
    href,
    stats,
    className = '',
}: ProjectCardProps) {
    return (
        <Link href={href} className="block group">
            <motion.div
                whileHover={{ y: -8, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className={`relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-500 ${className}`}
            >
                {/* Gradient background on hover */}
                <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${gradient}`}
                />

                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block">
                    <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-shine" />
                </div>

                <div className="relative p-5 sm:p-6 md:p-8">
                    {/* Header Row */}
                    <div className="flex items-start justify-between mb-4 sm:mb-6">
                        {/* Icon */}
                        <div
                            className={`w-12 h-12 sm:w-14 md:w-16 sm:h-14 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center ${gradient} shadow-lg`}
                        >
                            <Icon className="w-6 h-6 sm:w-7 md:w-8 sm:h-7 md:h-8 text-white" />
                        </div>

                        {/* Arrow */}
                        <motion.div
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-violet-600 transition-colors duration-300"
                            whileHover={{ scale: 1.1 }}
                        >
                            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white transition-colors" />
                        </motion.div>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-violet-700 transition-colors duration-300">
                        {title}
                    </h3>
                    <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 line-clamp-2">
                        {description}
                    </p>

                    {/* Stats */}
                    {stats && (
                        <div className="flex gap-6 sm:gap-8 pt-4 sm:pt-6 border-t border-gray-100">
                            {stats.map((stat) => (
                                <div key={stat.label} className="relative">
                                    <motion.div
                                        className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900"
                                        initial={{ opacity: 0.8 }}
                                        whileHover={{ opacity: 1, scale: 1.05 }}
                                    >
                                        {stat.value}
                                    </motion.div>
                                    <div className="text-xs sm:text-sm text-gray-400 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Border gradient on hover */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-transparent group-hover:border-violet-200 transition-colors duration-300 pointer-events-none" />
            </motion.div>
        </Link>
    );
}
