'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface ImpactStoryProps {
    quote: string;
    name: string;
    role: string;
    project: string;
    gradient?: string;
}

export function ImpactStory({ quote, name, role, project, gradient = 'from-violet to-pink' }: ImpactStoryProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-6 md:p-8 rounded-2xl glass-light overflow-hidden"
        >
            {/* Quote Icon */}
            <div className={`absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center opacity-20`}>
                <Quote className="w-6 h-6 text-white" />
            </div>

            {/* Quote */}
            <blockquote className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
                "{quote}"
            </blockquote>

            {/* Attribution */}
            <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-lg`}>
                    {name.charAt(0)}
                </div>
                <div>
                    <p className="font-bold text-foreground">{name}</p>
                    <p className="text-sm text-text-muted">{role}</p>
                    <p className={`text-xs font-medium bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                        {project}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

interface ImpactStoriesSectionProps {
    stories: ImpactStoryProps[];
}

export function ImpactStoriesSection({ stories }: ImpactStoriesSectionProps) {
    return (
        <section className="py-24 px-6" aria-labelledby="impact-stories-heading">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="tag mb-4 inline-block">Real Stories</span>
                    <h2 id="impact-stories-heading" className="text-4xl md:text-5xl font-bold mb-4">
                        Lives <span className="gradient-text">Transformed</span>
                    </h2>
                    <p className="text-text-muted max-w-2xl mx-auto">
                        Hear from the people whose lives have been changed through our programs.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {stories.map((story, index) => (
                        <motion.div
                            key={story.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <ImpactStory {...story} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
