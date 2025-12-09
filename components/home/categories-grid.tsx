'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Box, ShieldCheck, Wrench, Droplets, Zap, Layers } from 'lucide-react';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const categories = [
    { id: 'adhesives', title: 'Adhesives & Bonding', icon: Box, desc: 'Structural bonding and instant adhesives.', color: 'text-blue-500' },
    { id: 'sprays', title: 'Industrial Sprays', icon: ShieldCheck, desc: 'Lubrication, cleaning, and protection.', color: 'text-emerald-500' },
    { id: 'tools', title: 'Power Tools', icon: Wrench, desc: 'High-performance tools for heavy-duty.', color: 'text-orange-500' },
    { id: 'sealants', title: 'Sealants & Gaskets', icon: Droplets, desc: 'Leak-proof sealing solutions.', color: 'text-cyan-500' },
    { id: 'tapes', title: 'Industrial Tapes', icon: Layers, desc: 'Masking, duct, and electrical tapes.', color: 'text-indigo-500' },
    { id: 'lubricants', title: 'Lubricants', icon: Zap, desc: 'Reduce friction and wear.', color: 'text-violet-500' },
];

export function CategoriesGrid() {
    return (
        <section className="py-24 bg-royal-950 border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div>
                        <span className="text-royal-500 font-bold uppercase tracking-widest text-sm mb-3 block font-oswald">Our Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white font-oswald tracking-tight">ENGINEERED <span className="text-slate-600">SOLUTIONS</span></h2>
                    </div>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {categories.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={fadeInUp}
                            className="group relative bg-slate-900/50 p-10 border border-white/5 hover:border-royal-500/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden shadow-lg hover:shadow-royal-900/50"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className={`w-14 h-14 bg-white/5 rounded-none border border-white/10 flex items-center justify-center ${item.color} mb-8 group-hover:bg-royal-600 group-hover:text-white group-hover:border-royal-500 transition-colors duration-300`}>
                                    <item.icon size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 font-oswald uppercase tracking-wide">{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed mb-8 border-l-2 border-white/5 pl-4">{item.desc}</p>
                                <Link href={`/products?category=${item.id}`} className="inline-flex items-center gap-2 font-bold text-royal-500 uppercase tracking-wider text-sm group-hover:gap-3 transition-all group-hover:text-white">
                                    Explore <ArrowRight size={16} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
