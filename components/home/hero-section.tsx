'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export function HeroSection() {
    return (
        <section className="relative min-h-[92vh] flex items-center bg-slate-950 text-white overflow-hidden pt-20">
            {/* Dark Industrial Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-royal-900/30 via-slate-950 to-black z-0" />

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 mix-blend-overlay" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />

            {/* Glowing Accents */}
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-royal-600/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse box-shadow-[0_0_10px_#3b82f6]" />
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-slate-300 font-oswald">Authorized Distributor</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] mb-8 tracking-tighter font-oswald text-white">
                            INDUSTRIAL <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-400 via-white to-royal-200">EXCELLENCE</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-400 mb-12 leading-relaxed max-w-lg border-l-2 border-royal-600 pl-6">
                            Premier partner for Loctite, CRC, 3M, and high-performance maintenance products. Engineering support you can trust since 2000.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5">
                            <Link
                                href="/products"
                                className="group bg-royal-600 text-white px-8 py-5 rounded-none font-bold text-lg hover:bg-royal-500 transition-all flex items-center justify-center gap-3 font-oswald uppercase tracking-wide skew-x-[-10deg]"
                            >
                                <span className="skew-x-[10deg] flex items-center gap-2">
                                    Browse Catalog <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>
                            <Link
                                href="/contact"
                                className="group px-8 py-5 rounded-none font-bold text-lg border border-white/20 hover:bg-white/5 transition-all flex items-center justify-center text-white backdrop-blur-sm font-oswald uppercase tracking-wide skew-x-[-10deg]"
                            >
                                <span className="skew-x-[10deg] flex items-center gap-2">
                                    Request Quote <ChevronRight size={20} className="text-royal-400 group-hover:text-white transition-colors" />
                                </span>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Hero Graphic */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="hidden lg:block relative h-[600px]"
                    >
                        {/* Abstract Tech Graphic Layout */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-lg aspect-[4/5] bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm p-1">
                            <div className="w-full h-full bg-slate-950/50 relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581093458791-9f302245d8b1?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 mix-blend-luminosity grayscale hover:grayscale-0 transition-all duration-700" />
                                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent">
                                    <div className="text-4xl font-bold font-oswald text-white mb-2">25+ YEARS</div>
                                    <div className="text-sm text-slate-400 uppercase tracking-widest font-semibold">Of Industrial Trust</div>
                                </div>
                            </div>

                            {/* Floating Card */}
                            <div className="absolute -left-12 top-20 p-6 bg-slate-900/90 border border-white/10 backdrop-blur-xl shadow-2xl max-w-xs">
                                <div className="text-royal-400 text-xs font-bold uppercase tracking-widest mb-2">Featured Partner</div>
                                <div className="text-2xl font-bold font-oswald text-white mb-1">LOCTITE®</div>
                                <div className="text-sm text-slate-400">Authorized Distinction</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
