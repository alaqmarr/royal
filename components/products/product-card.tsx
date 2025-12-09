'use client';

import Link from 'next/link';
import { Tag, ArrowRight } from 'lucide-react';

interface ProductCardProps {
    product: {
        id: string;
        name: string;
        description: string | null;
        brandId: string | null;
        brand?: { name: string };
        category?: { name: string };
        purpose?: { name: string };
    };
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <Link
            href={`/products/${product.id}`}
            className="group block bg-white rounded-xl border border-slate-200/60 overflow-hidden hover:border-royal-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 relative"
        >
            <div className="aspect-[4/3] bg-slate-50 relative overflow-hidden flex items-center justify-center p-8">
                {/* Placeholder for Product Image */}
                <div className="w-full h-full bg-white rounded-lg shadow-sm flex items-center justify-center text-slate-300 group-hover:scale-105 transition-transform duration-500">
                    {/* Abstract Shape */}
                    <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center font-bold text-2xl text-slate-400">
                        {product.name.charAt(0)}
                    </div>
                </div>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2 opacity-100 transition-opacity">
                    {product.brand && (
                        <span className="inline-block bg-white/90 backdrop-blur border border-slate-200/50 text-slate-600 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                            {product.brand.name}
                        </span>
                    )}
                </div>
            </div>

            <div className="p-5">
                <div className="mb-3">
                    <h3 className="font-bold text-lg text-slate-900 leading-tight group-hover:text-royal-700 transition-colors mb-1">
                        {product.name}
                    </h3>
                    {product.category && (
                        <p className="text-xs font-medium text-slate-500">{product.category.name}</p>
                    )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-xs font-semibold text-royal-600 bg-royal-50 px-2 py-1 rounded group-hover:bg-royal-600 group-hover:text-white transition-colors">
                        Enquire Now
                    </span>
                    <ArrowRight size={16} className="text-slate-300 group-hover:text-royal-600 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
            </div>
        </Link>
    );
}
