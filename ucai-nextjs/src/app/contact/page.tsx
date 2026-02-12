'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Mail,
    Phone,
    MapPin,
    Send,
    CheckCircle2,
    Loader2,
    MessageSquare,
    Sparkles
} from 'lucide-react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            // In production, replace with actual API call:
            // const response = await fetch('/api/contact', {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify(formData),
            // });

            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });

            // Reset after 3 seconds
            setTimeout(() => setStatus('idle'), 3000);
        } catch {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email Us',
            value: 'contact.info@uica.in',
            href: 'mailto:contact.info@uica.in',
        },
        {
            icon: Phone,
            label: 'Call Us',
            value: '+91 70284 78109',
            href: 'tel:+917028478109',
        },
        {
            icon: MapPin,
            label: 'Visit Us',
            value: 'Pune, Maharashtra, India',
            href: '#',
        },
    ];

    return (
        <main className="min-h-screen pt-24">
            {/* Header */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="tag mb-6 inline-flex items-center gap-2"
                    >
                        <Sparkles className="w-4 h-4" />
                        Get in Touch
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        Contact <span className="gradient-text">Us</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-text-muted text-lg max-w-2xl mx-auto"
                    >
                        Have a question, want to partner with us, or interested in volunteering?
                        We&apos;d love to hear from you.
                    </motion.p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-8 px-6 pb-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-2"
                        >
                            <h2 className="text-2xl font-bold mb-6">Let&apos;s Connect</h2>
                            <p className="text-text-muted mb-8">
                                Whether you&apos;re looking to support our initiatives, partner with us,
                                or simply learn more about what we do, we&apos;re here to help.
                            </p>

                            <div className="space-y-6">
                                {contactInfo.map((item, index) => (
                                    <motion.a
                                        key={item.label}
                                        href={item.href}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                        className="flex items-start gap-4 p-4 rounded-xl glass-light hover:bg-surface-light transition-colors group"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-violet/10 flex items-center justify-center group-hover:bg-violet/20 transition-colors">
                                            <item.icon className="w-5 h-5 text-violet" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-text-dim mb-1">{item.label}</div>
                                            <div className="font-medium">{item.value}</div>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Social */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="mt-12"
                            >
                                <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                                <p className="text-text-muted text-sm">
                                    Stay updated with our latest initiatives and impact stories on social media.
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-3"
                        >
                            <div className="glass-light rounded-3xl p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet to-pink flex items-center justify-center">
                                        <MessageSquare className="w-5 h-5 text-white" />
                                    </div>
                                    <h2 className="text-xl font-bold">Send us a Message</h2>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="input-modern"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="input-modern"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                            Subject
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="input-modern"
                                        >
                                            <option value="">Select a topic</option>
                                            <option value="volunteer">Volunteering</option>
                                            <option value="partnership">Partnership</option>
                                            <option value="donation">Donation</option>
                                            <option value="fellowship">Fellowship</option>
                                            <option value="general">General Inquiry</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="input-modern resize-none"
                                            placeholder="Tell us how we can help..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'loading' || status === 'success'}
                                        className={`btn-primary w-full flex items-center justify-center gap-2 ${status === 'success' ? 'bg-emerald' : ''
                                            }`}
                                    >
                                        {status === 'loading' && (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                Sending...
                                            </>
                                        )}
                                        {status === 'success' && (
                                            <>
                                                <CheckCircle2 className="w-5 h-5" />
                                                Message Sent!
                                            </>
                                        )}
                                        {status === 'idle' && (
                                            <>
                                                <Send className="w-5 h-5" />
                                                Send Message
                                            </>
                                        )}
                                        {status === 'error' && 'Try Again'}
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
