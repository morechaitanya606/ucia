'use client';

import { motion } from 'framer-motion';
import { Heart, Users, Leaf, BookOpen, CheckCircle2, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const donationAmounts = [
    { amount: 500, impact: 'Provides learning materials for 1 student' },
    { amount: 1000, impact: 'Supports a woman artisan for a week' },
    { amount: 2500, impact: 'Funds environmental audit training' },
    { amount: 5000, impact: 'Trains 5 youth in sustainable farming' },
    { amount: 10000, impact: 'Sponsors a complete skill workshop' },
];

const impactAreas = [
    { icon: Users, title: 'Community Empowerment', description: 'Supporting rural and urban communities' },
    { icon: Leaf, title: 'Environmental Action', description: 'Sustainable development initiatives' },
    { icon: BookOpen, title: 'Skill Development', description: 'Training in traditional and modern skills' },
];

export default function DonatePage() {
    const [selectedAmount, setSelectedAmount] = useState<number | null>(2500);
    const [customAmount, setCustomAmount] = useState('');
    const [isRecurring, setIsRecurring] = useState(false);

    const currentAmount = customAmount ? parseInt(customAmount) : selectedAmount;

    return (
        <main className="min-h-screen pt-24">
            {/* Hero Section */}
            <section className="py-16 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink to-violet flex items-center justify-center mx-auto mb-6">
                            <Heart className="w-10 h-10 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            Make a <span className="gradient-text">Difference</span> Today
                        </h1>
                        <p className="text-text-muted text-lg max-w-2xl mx-auto">
                            Your donation empowers communities, preserves traditions, and creates sustainable change.
                            Every contribution, big or small, transforms lives.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Donation Form Section */}
            <section className="py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Left: Donation Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="glass-light rounded-3xl p-8"
                        >
                            <h2 className="text-2xl font-bold mb-6">Choose Your Contribution</h2>

                            {/* Amount Selection */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                                {donationAmounts.map((item) => (
                                    <button
                                        key={item.amount}
                                        onClick={() => {
                                            setSelectedAmount(item.amount);
                                            setCustomAmount('');
                                        }}
                                        className={`p-4 rounded-xl border-2 transition-all text-center ${selectedAmount === item.amount && !customAmount
                                                ? 'border-violet bg-violet/10 text-violet'
                                                : 'border-border hover:border-violet/50'
                                            }`}
                                        aria-label={`Donate ${item.amount} rupees`}
                                    >
                                        <div className="text-xl font-bold">₹{item.amount.toLocaleString()}</div>
                                    </button>
                                ))}
                            </div>

                            {/* Custom Amount */}
                            <div className="mb-6">
                                <label htmlFor="custom-amount" className="block text-sm font-medium text-text-muted mb-2">
                                    Or enter a custom amount
                                </label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">₹</span>
                                    <input
                                        id="custom-amount"
                                        type="number"
                                        value={customAmount}
                                        onChange={(e) => {
                                            setCustomAmount(e.target.value);
                                            setSelectedAmount(null);
                                        }}
                                        placeholder="Enter amount"
                                        className="input-modern pl-8"
                                        min="100"
                                        aria-describedby="amount-impact"
                                    />
                                </div>
                            </div>

                            {/* Impact Message */}
                            {currentAmount && (
                                <motion.div
                                    key={currentAmount}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    id="amount-impact"
                                    className="p-4 rounded-xl bg-emerald/10 border border-emerald/20 mb-6"
                                >
                                    <p className="text-emerald text-sm flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4" />
                                        {donationAmounts.find(d => d.amount === currentAmount)?.impact ||
                                            `Your ₹${currentAmount?.toLocaleString()} will create meaningful impact`}
                                    </p>
                                </motion.div>
                            )}

                            {/* Recurring Toggle */}
                            <div className="flex items-center justify-between p-4 rounded-xl bg-surface mb-6">
                                <div>
                                    <p className="font-medium">Make it monthly</p>
                                    <p className="text-sm text-text-muted">Provide sustained support</p>
                                </div>
                                <button
                                    onClick={() => setIsRecurring(!isRecurring)}
                                    className={`w-14 h-8 rounded-full transition-colors relative ${isRecurring ? 'bg-violet' : 'bg-border'
                                        }`}
                                    role="switch"
                                    aria-checked={isRecurring}
                                    aria-label="Enable monthly recurring donation"
                                >
                                    <span
                                        className={`absolute top-1 w-6 h-6 rounded-full bg-white transition-transform ${isRecurring ? 'translate-x-7' : 'translate-x-1'
                                            }`}
                                    />
                                </button>
                            </div>

                            {/* Donate Button */}
                            <button
                                className="w-full btn-primary py-4 text-lg flex items-center justify-center gap-3"
                                aria-label={`Donate ${currentAmount ? `₹${currentAmount.toLocaleString()}` : ''} ${isRecurring ? 'monthly' : 'one time'}`}
                            >
                                <Heart className="w-5 h-5" />
                                Donate {currentAmount ? `₹${currentAmount.toLocaleString()}` : ''}
                                {isRecurring ? ' Monthly' : ''}
                                <ArrowRight className="w-5 h-5" />
                            </button>

                            {/* Trust Indicators */}
                            <div className="mt-6 flex items-center justify-center gap-4 text-text-dim text-sm">
                                <div className="flex items-center gap-1">
                                    <Shield className="w-4 h-4" />
                                    Secure Payment
                                </div>
                                <div>80G Tax Benefits</div>
                            </div>
                        </motion.div>

                        {/* Right: Impact Areas */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-6"
                        >
                            <h2 className="text-2xl font-bold mb-4">Where Your Money Goes</h2>

                            {impactAreas.map((area, index) => (
                                <motion.div
                                    key={area.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    className="flex gap-4 p-6 rounded-2xl bg-surface border border-border"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet to-pink flex items-center justify-center shrink-0">
                                        <area.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-1">{area.title}</h3>
                                        <p className="text-text-muted text-sm">{area.description}</p>
                                    </div>
                                </motion.div>
                            ))}

                            {/* Testimonial */}
                            <div className="p-6 rounded-2xl glass-light mt-8">
                                <p className="text-text-muted italic mb-4">
                                    "UICA's training program changed my life. I now run my own weaving business
                                    and support my family. Thank you to all donors!"
                                </p>
                                <p className="font-medium text-sm">— Sunita, HEMA Graduate</p>
                            </div>

                            {/* Contact Link */}
                            <p className="text-text-muted text-sm">
                                Have questions?{' '}
                                <Link href="/contact" className="text-violet hover:underline">
                                    Contact us
                                </Link>
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
