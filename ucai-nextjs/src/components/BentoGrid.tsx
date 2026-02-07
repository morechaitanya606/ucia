'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BentoItemProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export function BentoItem({ children, className = '', delay = 0 }: BentoItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ scale: 1.02 }}
            className={`glass-light rounded-2xl p-6 ${className}`}
        >
            {children}
        </motion.div>
    );
}

interface BentoGridProps {
    children: ReactNode;
    className?: string;
}

export function BentoGrid({ children, className = '' }: BentoGridProps) {
    return (
        <div className={`bento-grid ${className}`}>
            {children}
        </div>
    );
}

// Feature Card for Bento Grid
interface FeatureCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    gradient?: string;
}

export function FeatureCard({ icon, title, description, gradient = 'from-violet to-pink' }: FeatureCardProps) {
    return (
        <div className="h-full flex flex-col">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4`}>
                {icon}
            </div>
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-text-muted text-sm flex-grow">{description}</p>
        </div>
    );
}

// Stats Card for Bento Grid
interface StatCardProps {
    value: string;
    label: string;
    icon?: ReactNode;
}

export function StatCard({ value, label, icon }: StatCardProps) {
    return (
        <div className="h-full flex flex-col items-center justify-center text-center">
            {icon && <div className="mb-3 text-violet">{icon}</div>}
            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{value}</div>
            <div className="text-text-muted text-sm">{label}</div>
        </div>
    );
}

// Image Card for Bento Grid
interface ImageCardProps {
    src: string;
    alt: string;
    overlay?: ReactNode;
}

export function ImageCard({ src, alt, overlay }: ImageCardProps) {
    return (
        <div className="relative h-full min-h-[200px] overflow-hidden rounded-xl">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            {overlay && (
                <div className="absolute bottom-4 left-4 right-4">
                    {overlay}
                </div>
            )}
        </div>
    );
}
