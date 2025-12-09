'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Products', href: '/products' },
        { name: 'Brands', href: '/brands' },
        { name: 'Purposes', href: '/purposes' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <>
            <header
                className={clsx(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                    scrolled
                        ? "bg-slate-950/80 backdrop-blur-md border-white/10 py-3 shadow-xl"
                        : "bg-transparent border-transparent py-6"
                )}
            >
                <div className="container mx-auto px-4 flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 bg-royal-600 text-white rounded-lg flex items-center justify-center font-bold text-xl shadow-lg shadow-royal-500/20 group-hover:scale-105 transition-transform border border-white/10">
                            R
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-xl text-white leading-none tracking-tight font-oswald">
                                ROYAL
                            </span>
                            <span className="text-[10px] text-royal-400 uppercase tracking-widest font-semibold">
                                Industrial Corp.
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={clsx(
                                        "text-sm font-bold uppercase tracking-wider transition-colors duration-300 relative group font-oswald",
                                        isActive
                                            ? "text-white"
                                            : "text-slate-400 hover:text-white"
                                    )}
                                >
                                    {link.name}
                                    <span className={clsx(
                                        "absolute -bottom-1 left-0 h-0.5 bg-royal-500 transition-all duration-300",
                                        isActive ? "w-full shadow-[0_0_10px_rgba(98,125,152,0.5)]" : "w-0 group-hover:w-full"
                                    )} />
                                </Link>
                            );
                        })}
                    </nav>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <a
                            href="tel:+919849044455"
                            className="hidden lg:flex items-center gap-2 text-sm font-bold text-white bg-white/5 border border-white/10 px-5 py-2.5 rounded-full hover:bg-royal-600 hover:border-royal-500 transition-all hover:shadow-[0_0_20px_rgba(72,101,129,0.4)]"
                        >
                            <Phone size={14} className="text-royal-400" />
                            <span className="font-oswald tracking-wide">+91-9849044455</span>
                        </a>

                        <button
                            className="md:hidden p-2 text-white bg-white/10 backdrop-blur rounded-lg border border-white/10"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl pt-28 px-6 md:hidden border-b border-white/10"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-between text-2xl font-bold text-white pb-4 border-b border-white/5 font-oswald uppercase tracking-wide hover:text-royal-400 transition-colors"
                                >
                                    {link.name}
                                    <ChevronRight className="text-royal-600" />
                                </Link>
                            ))}

                            <div className="mt-8 bg-white/5 p-6 rounded-2xl space-y-4 border border-white/10">
                                <h4 className="text-royal-400 font-bold uppercase tracking-wider text-xs">Contact Us</h4>
                                <a href="tel:+919849044455" className="flex items-center gap-3 text-lg font-medium text-slate-200">
                                    <div className="w-10 h-10 bg-royal-900 rounded-full flex items-center justify-center text-royal-400 shadow-sm border border-white/10"><Phone size={18} /></div>
                                    +91-9849044455
                                </a>
                                <a href="mailto:info@royalindustrialcorp.com" className="flex items-center gap-3 text-lg font-medium text-slate-200">
                                    <div className="w-10 h-10 bg-royal-900 rounded-full flex items-center justify-center text-royal-400 shadow-sm border border-white/10"><Mail size={18} /></div>
                                    info@royalindustrialcorp.com
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
