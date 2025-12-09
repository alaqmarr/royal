import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { ArrowRight, Box } from 'lucide-react';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'Product Categories | Royal Industrial Corp',
    description: 'Browse industrial products by category: Adhesives, Sealants, Lubricants, Tapes, and Safety Equipment.',
};

export default async function CategoriesPage() {
    const categories = await prisma.category.findMany({
        orderBy: { name: 'asc' },
        include: { _count: { select: { products: true } } }
    });

    return (
        <div className="min-h-screen bg-slate-950 pt-28">
            {/* Header Banner */}
            <div className="relative py-20 bg-royal-950 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
                <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-royal-600/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <span className="text-royal-500 font-bold uppercase tracking-[0.2em] text-xs mb-3 block font-mono">Inventory Catalog</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-oswald uppercase">Product Categories</h1>
                    <p className="text-slate-400 max-w-2xl text-lg font-light leading-relaxed border-l-2 border-royal-600 pl-6">
                        Explore our comprehensive range of specialized industrial solutions, from adhesives to heavy-duty maintenance.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((cat) => (
                        <Link
                            key={cat.id}
                            href={`/products?categoryId=${cat.id}`}
                            className="group bg-slate-900/40 backdrop-blur-sm border border-white/5 hover:border-royal-500/50 p-8 flex flex-col transition-all duration-300 hover:bg-slate-900/60 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-royal-500/5 rounded-full blur-2xl group-hover:bg-royal-500/10 transition-colors" />

                            <div className="flex justify-between items-start mb-6 relative z-10">
                                <div className="w-14 h-14 bg-royal-500/10 text-royal-500 border border-royal-500/20 rounded flex items-center justify-center font-bold text-2xl group-hover:text-white group-hover:bg-royal-600 transition-all font-oswald uppercase">
                                    {cat.name.charAt(0)}
                                </div>
                                <span className="bg-white/5 border border-white/10 text-slate-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest font-mono">
                                    {cat._count.products} Items
                                </span>
                            </div>

                            <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-royal-400 transition-colors font-oswald uppercase tracking-wide relative z-10">
                                {cat.name}
                            </h2>
                            <p className="text-slate-500 text-sm mb-8 font-light leading-relaxed relative z-10">
                                Browse high-quality {cat.name} from top brands.
                            </p>

                            <div className="mt-auto flex items-center text-royal-500 font-bold text-xs uppercase tracking-widest group-hover:text-white transition-colors gap-2 relative z-10">
                                View Products <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
