'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, ArrowRight } from 'lucide-react';

export default function ContactClient() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error('Failed to send message');

            setIsSubmitting(false);
            setIsSuccess(true);
            (e.target as HTMLFormElement).reset();
        } catch (err) {
            setError('Something went wrong. Please try again.');
            setIsSubmitting(false);
        }
    }

    return (
        <div className="min-h-screen bg-slate-950 py-12 md:py-20 pt-28">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-royal-500 font-bold tracking-[0.2em] uppercase text-xs mb-3 block font-mono">Customer Support</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-oswald uppercase">Connect With Us</h1>
                    <p className="text-slate-400 text-lg font-light">
                        Have a specific industrial requirement? Our technical team is ready to assist you with quotes and product specifications.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {/* Contact Info Cards */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-slate-900/50 p-8 border border-white/5 flex items-start gap-5 hover:border-royal-500/50 transition-colors group"
                        >
                            <div className="bg-royal-500/10 p-3 text-royal-500 border border-royal-500/20 group-hover:text-white group-hover:bg-royal-600 transition-colors">
                                <Phone size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold text-white mb-1 font-oswald uppercase tracking-wide text-lg">Speak to Sales</h3>
                                <p className="text-slate-500 text-xs uppercase tracking-wider mb-2 font-mono">Mon-Sat | 9am - 8pm</p>
                                <a href="tel:+919849044455" className="text-slate-300 font-bold hover:text-royal-400 transition-colors block text-lg font-mono">+91 98490 44455</a>
                                <a href="tel:+914066384455" className="text-slate-400 font-medium hover:text-royal-400 transition-colors block mt-1 text-sm font-mono">+91 40 6638 4455</a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-slate-900/50 p-8 border border-white/5 flex items-start gap-5 hover:border-royal-500/50 transition-colors group"
                        >
                            <div className="bg-royal-500/10 p-3 text-royal-500 border border-royal-500/20 group-hover:text-white group-hover:bg-royal-600 transition-colors">
                                <Mail size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold text-white mb-1 font-oswald uppercase tracking-wide text-lg">Email Support</h3>
                                <p className="text-slate-500 text-xs uppercase tracking-wider mb-2 font-mono">Quotes & Tech Specs</p>
                                <a href="mailto:royal_ind_corp@yahoo.com" className="text-slate-300 font-bold hover:text-royal-400 transition-colors break-all">royal_ind_corp@yahoo.com</a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-slate-900/50 p-8 border border-white/5 flex items-start gap-5 hover:border-royal-500/50 transition-colors group"
                        >
                            <div className="bg-royal-500/10 p-3 text-royal-500 border border-royal-500/20 group-hover:text-white group-hover:bg-royal-600 transition-colors">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold text-white mb-1 font-oswald uppercase tracking-wide text-lg">Store Location</h3>
                                <p className="text-slate-400 text-sm leading-relaxed font-light">
                                    5-1-294, Breweries Building,<br />
                                    Behind Old Gandhi Statue,<br />
                                    Rani Gunj, Secunderabad - 500003
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="bg-slate-900 border border-white/10 p-8 md:p-12 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-royal-600/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                            <div className="flex justify-between items-end mb-8 relative z-10">
                                <div>
                                    <h2 className="text-3xl font-bold text-white font-oswald uppercase tracking-wide">Send Message</h2>
                                    <div className="h-1 w-20 bg-royal-600 mt-2" />
                                </div>
                            </div>

                            {isSuccess ? (
                                <div className="bg-green-500/10 border border-green-500/30 p-8 text-center backdrop-blur-sm">
                                    <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/50">
                                        <CheckCircle size={32} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 font-oswald uppercase tracking-wide">Enquiry Submitted</h3>
                                    <p className="text-slate-300 mb-6">Thank you for contacting us. We will get back to you shortly.</p>
                                    <button
                                        onClick={() => setIsSuccess(false)}
                                        className="text-white hover:text-green-400 font-bold text-sm uppercase tracking-widest transition-colors flex items-center gap-2 mx-auto"
                                    >
                                        Send another <ArrowRight size={14} />
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-xs font-bold text-royal-500 uppercase tracking-wider font-mono">Full Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                className="w-full px-4 py-3 bg-slate-950 border border-white/10 text-white focus:border-royal-500 focus:ring-1 focus:ring-royal-500 outline-none transition-all placeholder:text-slate-700"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-xs font-bold text-royal-500 uppercase tracking-wider font-mono">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                className="w-full px-4 py-3 bg-slate-950 border border-white/10 text-white focus:border-royal-500 focus:ring-1 focus:ring-royal-500 outline-none transition-all placeholder:text-slate-700"
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-xs font-bold text-royal-500 uppercase tracking-wider font-mono">Subject</label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            required
                                            className="w-full px-4 py-3 bg-slate-950 border border-white/10 text-white focus:border-royal-500 focus:ring-1 focus:ring-royal-500 outline-none transition-all placeholder:text-slate-700"
                                            placeholder="Inquiry about Loctite Adhesives..."
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-xs font-bold text-royal-500 uppercase tracking-wider font-mono">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 bg-slate-950 border border-white/10 text-white focus:border-royal-500 focus:ring-1 focus:ring-royal-500 outline-none transition-all placeholder:text-slate-700 resize-none"
                                            placeholder="Please provide details about your requirement..."
                                        />
                                    </div>

                                    {error && (
                                        <div className="p-3 bg-red-500/10 text-red-400 text-sm border border-red-500/30">
                                            {error}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-royal-600 text-white font-bold py-4 hover:bg-royal-500 transition-all shadow-[0_4px_20px_-5px_rgba(59,130,246,0.3)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 uppercase tracking-widest text-sm"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="animate-spin" size={18} /> Processing...
                                            </>
                                        ) : (
                                            <>
                                                <Send size={18} /> Send Message
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mt-20 border border-white/10 h-[400px] relative transition-all duration-700 bg-slate-900 p-1">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.671891077755!2d78.4842!3d17.4300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a0665555555%3A0x1234567890abcdef!2sRani%20Gunj%2C%20Secunderabad!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="opacity-70 hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute top-0 left-0 bg-royal-600 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest z-10">Store Location</div>
                </div>
            </div>
        </div>
    );
}
