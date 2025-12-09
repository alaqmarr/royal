'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Loader2, MessageCircle } from 'lucide-react';
import { clsx } from 'clsx';

interface EnquireModalProps {
    isOpen: boolean;
    onClose: () => void;
    productName: string;
}

export function EnquireModal({ isOpen, onClose, productName }: EnquireModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...data,
                    subject: `Product Enquiry: ${productName}`,
                }),
            });

            if (!res.ok) throw new Error('Failed to send message');

            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
                onClose();
            }, 3000);
        } catch (err) {
            setError('Something went wrong. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm"
                        onClick={onClose}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg z-50 px-4"
                    >
                        <div className="bg-slate-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-royal-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                            <div className="p-5 border-b border-white/5 flex justify-between items-center bg-slate-900/50">
                                <h3 className="font-bold text-white font-oswald uppercase tracking-wide text-lg">
                                    Enquire about <span className="text-royal-400">{productName}</span>
                                </h3>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="p-6 relative z-10">
                                {isSuccess ? (
                                    <div className="text-center py-8">
                                        <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                                            <Send size={28} />
                                        </div>
                                        <h4 className="text-xl font-bold text-white mb-2 font-oswald uppercase tracking-wide">Enquiry Sent!</h4>
                                        <p className="text-slate-400 font-light">We will get back to you shortly.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label htmlFor="name" className="block text-xs font-bold text-royal-500 uppercase tracking-wider font-mono mb-2">Name</label>
                                            <input
                                                required
                                                type="text"
                                                name="name"
                                                id="name"
                                                className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded text-white focus:border-royal-500 focus:ring-1 focus:ring-royal-500 outline-none transition-all placeholder:text-slate-600"
                                                placeholder="Your Name"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-xs font-bold text-royal-500 uppercase tracking-wider font-mono mb-2">Email</label>
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded text-white focus:border-royal-500 focus:ring-1 focus:ring-royal-500 outline-none transition-all placeholder:text-slate-600"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-xs font-bold text-royal-500 uppercase tracking-wider font-mono mb-2">Phone</label>
                                            <input
                                                required
                                                type="tel"
                                                name="phone"
                                                id="phone"
                                                className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded text-white focus:border-royal-500 focus:ring-1 focus:ring-royal-500 outline-none transition-all placeholder:text-slate-600"
                                                placeholder="Mobile Number"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="message" className="block text-xs font-bold text-royal-500 uppercase tracking-wider font-mono mb-2">Message</label>
                                            <textarea
                                                name="message"
                                                id="message"
                                                rows={3}
                                                className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded text-white focus:border-royal-500 focus:ring-1 focus:ring-royal-500 outline-none resize-none transition-all placeholder:text-slate-600"
                                                defaultValue={`I am interested in ${productName}. Please share more details and pricing.`}
                                            />
                                        </div>

                                        {error && (
                                            <p className="text-red-400 text-sm bg-red-500/10 p-2 border border-red-500/30">{error}</p>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-royal-600 hover:bg-royal-500 text-white font-bold py-3.5 rounded transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 uppercase tracking-widest text-sm"
                                        >
                                            {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : 'Send Enquiry'}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

export function WhatsAppButton({ productName, className }: { productName: string, className?: string }) {
    const message = `Hi, I am interested in ${productName}. Please share more details and pricing.`;
    const href = `https://wa.me/919849044455?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
                "flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-6 rounded-lg transition-colors",
                className
            )}
        >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <span>Enquire via WhatsApp</span>
        </a>
    );
}
