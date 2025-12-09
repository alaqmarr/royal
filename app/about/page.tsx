import { CheckCircle2, Award, Users, Warehouse, TrendingUp } from 'lucide-react';
import Link from 'next/link';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | Royal Industrial Corp',
    description: 'Learn about Royal Industrial Corporation, Secunderabad\'s leading industrial distributor since 2000. Authorized partners for Loctite, CRC, 3M.',
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-slate-950 pt-28">
            {/* Hero Section - Industrial Dark */}
            <div className="relative py-20 lg:py-32 bg-royal-950 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
                <div className="absolute right-0 top-0 w-[800px] h-[800px] bg-royal-600/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-royal-500/50 to-transparent" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-royal-500/10 border border-royal-500/30 text-royal-400 text-xs font-mono uppercase tracking-widest mb-6 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-royal-500 animate-pulse" />
                        Est. 2000
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight font-oswald uppercase">
                        Powering Industry with <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-royal-400">Genuine Trust</span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light border-l-2 border-royal-600 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
                        Royal Industrial Corporation is Secunderabad's premier distributor for global industrial brands, delivering genuine solutions for assembly, maintenance, and repair since the turn of the millennium.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 relative z-20">
                {/* Stats Grid - Glass Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24 -mt-24">
                    {[
                        { label: 'Years Experience', value: '25+', icon: Award },
                        { label: 'Global Brands', value: '15+', icon: TrendingUp },
                        { label: 'Dist. Products', value: '1000+', icon: Warehouse },
                        { label: 'Active Clients', value: '500+', icon: Users },
                    ].map((stat, i) => (
                        <div key={i} className="bg-slate-900/80 backdrop-blur-md p-6 border border-white/10 hover:border-royal-500/50 text-center group transition-all duration-300 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <stat.icon className="mx-auto text-royal-500 mb-3 group-hover:scale-110 transition-transform duration-300" size={24} />
                            <div className="text-3xl md:text-5xl font-bold text-white mb-1 font-oswald tracking-tight">{stat.value}</div>
                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <div className="order-2 lg:order-1 relative group">
                        <div className="absolute inset-0 bg-royal-600/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="relative aspect-[4/3] bg-slate-900 border border-white/10 p-2">
                            {/* Corners */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-royal-500 z-20" />
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-royal-500 z-20" />

                            {/* Placeholder for Office/Warehouse Image - Dark Mode */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="px-4 py-2 bg-black/50 backdrop-blur border border-white/20 text-white font-mono text-xs uppercase tracking-widest">
                                    Strategic Inventory Hub
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 space-y-8">
                        <div>
                            <span className="text-royal-500 font-bold uppercase tracking-widest text-xs mb-2 block font-mono">Our Legacy</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.1] font-oswald uppercase">
                                Authorized Distribution Partner for <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal-400 to-white">Global Leaders</span>
                            </h2>
                        </div>

                        <div className="space-y-6 text-slate-400 leading-relaxed font-light text-lg">
                            <p>
                                Founded in 2000 under the visionary leadership of <strong className="text-white">Mr. Mustafa Najmuddin Kuwarawala</strong>, Royal Industrial Corporation has evolved from a local trader to a powerhouse within the industrial supply chain.
                            </p>
                            <p>
                                We define our success by the trust of our partners. As authorized distributors for brands like <strong className="text-white">Loctite, CRC, and 3M</strong>, we don't just sell products; we deliver technical assurance, proper storage integrity, and supply chain reliability that critical industries depend on.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-4">
                            {['Adhesives', 'Sealants', 'Lubricants', 'Tapes', 'Safety', 'Maintenance'].map(tag => (
                                <span key={tag} className="px-4 py-2 bg-white/5 text-slate-300 text-xs font-bold uppercase tracking-wider border border-white/10 hover:border-royal-500/50 hover:bg-white/10 transition-all cursor-default">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Values / The Standard */}
                <div className="relative border border-white/10 bg-gradient-to-b from-royal-950/50 to-slate-950 p-8 md:p-16 overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-royal-900/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

                    <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
                        <span className="text-royal-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-3 block font-mono">Core Philosophy</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-oswald uppercase tracking-wide">The Royal Standard</h2>
                        <p className="text-slate-400 font-light">Our commitment to excellence goes beyond the products we catalogue.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        {[
                            { title: '100% Authentic', desc: 'Direct sourcing from manufacturers ensuring zero counterfeit risk.' },
                            { title: 'Technical Expertise', desc: 'Our team helps you select the right grade for your specific application.' },
                            { title: 'Rapid Logistics', desc: 'Centrally located warehouse for swift dispatch across the region.' },
                        ].map((feature, i) => (
                            <div key={i} className="bg-slate-900/50 backdrop-blur-sm border border-white/5 p-8 hover:bg-white/5 hover:border-royal-500/30 transition-all group">
                                <CheckCircle2 className="text-royal-600 mb-6 group-hover:text-royal-400 transition-colors" size={32} />
                                <h3 className="text-xl font-bold text-white mb-3 font-oswald uppercase tracking-wide">{feature.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
