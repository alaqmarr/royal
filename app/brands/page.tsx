import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { Metadata } from 'next';
import { BadgeCheck, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Authorized Brands | Royal Industrial Corp',
    description: 'Explore our range of authorized industrial brands including Loctite, CRC, 3M, Pidilite, and more.',
};

export default async function BrandsPage() {
    const brands = await prisma.brand.findMany({
        orderBy: { name: 'asc' },
        include: { _count: { select: { products: true } } }
    });

    return (
        <div className="min-h-screen bg-slate-950 pt-28">
            {/* Header Banner */}
            <div className="relative py-20 bg-royal-950 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
                <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-royal-600/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <span className="text-royal-500 font-bold uppercase tracking-[0.2em] text-xs mb-3 block font-mono">Our Partners</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-oswald uppercase">Authorized Brands</h1>
                    <p className="text-slate-400 max-w-2xl text-lg font-light leading-relaxed border-l-2 border-royal-600 pl-6">
                        We are authorized distributors for the world's leading industrial manufacturers, ensuring authentic products and warranty support.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {brands.map((brand) => (
                        <Link
                            key={brand.id}
                            href={`/products?brandId=${brand.id}`}
                            className="group bg-slate-900/40 backdrop-blur-sm border border-white/5 hover:border-royal-500/50 p-6 flex flex-col items-center text-center transition-all duration-300 hover:bg-slate-900/60 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-royal-500/50 transition-all duration-500" />

                            <div className="w-full h-32 bg-black/20 rounded border border-white/5 mb-6 flex items-center justify-center relative overflow-hidden group-hover:bg-black/30 transition-colors">
                                {/* Placeholder for Logo */}
                                <span className="text-xl font-bold text-slate-500 group-hover:text-white transition-colors font-oswald uppercase tracking-widest z-10 relative">
                                    {brand.name}
                                </span>
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,107,158,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] group-hover:bg-[position:200%_0,0_0] bg-no-repeat transition-[background-position] duration-[1500ms]" />
                            </div>

                            <div className="flex items-center gap-2 mb-2">
                                <h2 className="text-xl font-bold text-white group-hover:text-royal-400 transition-colors font-oswald uppercase tracking-wide">
                                    {brand.name}
                                </h2>
                                <BadgeCheck size={16} className="text-royal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            <p className="text-xs text-slate-500 mb-6 font-mono uppercase tracking-wider">
                                {brand._count.products} Products Available
                            </p>

                            <div className="mt-auto opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 text-royal-400 flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                                View Catalog <ArrowRight size={14} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
