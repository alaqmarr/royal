import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { ArrowRight, Settings2 } from 'lucide-react';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'Applications & Purposes | Royal Industrial Corp',
    description: 'Find the right industrial solution for your specific application: Threadlocking, Gasketing, Bonding, Cleaning, and more.',
};

export default async function PurposesPage() {
    const purposes = await prisma.purpose.findMany({
        orderBy: { name: 'asc' },
        include: { _count: { select: { products: true } } }
    });

    return (
        <div className="min-h-screen bg-slate-950 pt-28">
            {/* Header Banner */}
            <div className="relative py-20 bg-royal-950 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-royal-600/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <span className="text-royal-500 font-bold uppercase tracking-[0.2em] text-xs mb-3 block font-mono">Solutions by Application</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-oswald uppercase">Industrial Purposes</h1>
                    <p className="text-slate-400 max-w-2xl text-lg font-light leading-relaxed border-l-2 border-royal-600 pl-6">
                        Find the right solution for your specific industrial application, from threadlocking to gasketing.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {purposes.map((purpose) => (
                        <Link
                            key={purpose.id}
                            href={`/products?purposeId=${purpose.id}`}
                            className="group bg-slate-900/40 backdrop-blur-sm border border-white/5 hover:border-royal-500/50 p-6 flex items-start gap-6 transition-all duration-300 hover:bg-slate-900/60 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-royal-500/5 rounded-full blur-2xl group-hover:bg-royal-500/10 transition-colors pointer-events-none" />

                            <div className="w-12 h-12 bg-royal-500/10 text-royal-500 border border-royal-500/20 flex-shrink-0 flex items-center justify-center group-hover:bg-royal-600 group-hover:text-white transition-all duration-300">
                                <Settings2 size={24} />
                            </div>

                            <div className="flex-1 relative z-10">
                                <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-slate-400 font-mono uppercase tracking-wider mb-2 inline-block">
                                    {purpose._count.products} Solutions
                                </span>

                                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-royal-400 transition-colors font-oswald uppercase tracking-wide">
                                    {purpose.name}
                                </h2>
                                <p className="text-slate-500 text-xs mb-4 font-light leading-relaxed">
                                    Specialized solutions for {purpose.name.toLowerCase()}.
                                </p>

                                <div className="flex items-center text-royal-500 font-bold text-xs uppercase tracking-widest group-hover:text-white transition-colors gap-2">
                                    Browse <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
