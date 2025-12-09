import Link from 'next/link';
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { ArrowLeft, Check, ShieldCheck, Truck, BarChart3, ChevronRight, Download } from 'lucide-react';
import { ProductActions } from '@/components/products/product-actions';

// Force dynamic routing for this page
export const dynamic = 'force-dynamic';

interface Props {
    params: Promise<{ id: string }>;
}

import { Metadata } from 'next';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const product = await prisma.product.findUnique({
        where: { id },
        include: { brand: true, images: true } // Include images for OpenGraph
    });

    if (!product) {
        return {
            title: 'Product Not Found',
        };
    }

    return {
        title: product.name,
        description: product.description?.slice(0, 160) || `Buy ${product.name} from Royal Industrial Corporation. Authorized distributor for ${product.brand?.name || 'industrial products'}.`,
        openGraph: {
            images: product.images && product.images.length > 0 ? [product.images[0].url] : [],
        },
    };
}

export default async function ProductDetailPage({ params }: Props) {
    const { id } = await params;

    const product = await prisma.product.findUnique({
        where: { id },
        include: {
            brand: true,
            category: true,
            images: true, // Fetch images
        },
    });

    if (!product) {
        notFound();
    }

    return (
        <div className="bg-slate-950 min-h-screen py-10 pt-32 relative overflow-hidden">
            {/* Tech Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-royal-900/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Breadcrumb / Back */}
                <div className="mb-8 flex items-center justify-between border-b border-white/5 pb-4">
                    <Link href="/products" className="text-slate-400 hover:text-white flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-colors group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Catalog
                    </Link>
                    <span className="text-[10px] font-mono text-royal-500 uppercase tracking-widest bg-royal-900/20 px-2 py-1 border border-royal-900/50">SKU: {product.id.slice(0, 8)}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Image Section - Tech Frame */}
                    <div className="sticky top-32">
                        <div className="bg-slate-900/40 border border-white/10 backdrop-blur-sm p-1 rounded-none relative">
                            {/* Corners */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-royal-500 z-20" />
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-royal-500 z-20" />

                            <div className="aspect-square bg-slate-900/50 flex items-center justify-center relative overflow-hidden">
                                {product.images.length > 0 ? (
                                    <img
                                        src={product.images[0].url}
                                        alt={product.name}
                                        className="w-full h-full object-contain p-12 hover:scale-110 transition-transform duration-700 relative z-10 drop-shadow-2xl"
                                    />
                                ) : (
                                    <div className="text-center text-slate-600">
                                        <div className="w-32 h-32 bg-white/5 mx-auto mb-4 flex items-center justify-center text-4xl font-bold text-slate-700 font-oswald rounded-full">
                                            {product.name.charAt(0)}
                                        </div>
                                        <p className="text-xs font-mono uppercase tracking-widest">No Image Data</p>
                                    </div>
                                )}

                                {/* Brand Badge Overlay */}
                                {product.brand && (
                                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur border border-white/10 px-4 py-2 text-xs font-bold text-white uppercase tracking-wider z-10">
                                        {product.brand.name}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Thumbnails */}
                        {product.images.length > 1 && (
                            <div className="grid grid-cols-4 gap-4 mt-6">
                                {product.images.map((img, idx) => (
                                    <div key={img.id} className={`aspect-square bg-slate-900 border ${idx === 0 ? 'border-royal-500' : 'border-white/10'} p-2 cursor-pointer hover:border-royal-500 transition-colors`}>
                                        <img src={img.url} alt="" className="w-full h-full object-contain" />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Product Info - Blueprints */}
                    <div className="flex flex-col h-full justify-center text-white">
                        <div className="mb-8">
                            {product.category && (
                                <Link href={`/products?categoryId=${product.category.id}`} className="inline-block text-royal-400 font-bold text-xs uppercase tracking-[0.2em] mb-3 hover:text-white transition-colors border border-royal-500/30 bg-royal-500/10 px-3 py-1">
                                    {product.category.name}
                                </Link>
                            )}
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-[0.9] tracking-tighter font-oswald uppercase">
                                {product.name}
                            </h1>
                            <div className="flex items-center gap-6 text-sm py-4 border-y border-white/5">
                                <span className="text-green-400 font-bold uppercase tracking-wider flex items-center gap-2 text-xs">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> In Stock
                                </span>
                                <span className="text-slate-400 font-mono uppercase text-xs">Auth. Distributor</span>
                            </div>
                        </div>

                        <div className="prose prose-invert prose-lg max-w-none text-slate-400 mb-10 leading-relaxed font-light">
                            <p>{product.description || 'Professional grade industrial product. Engineered for performance and reliability in demanding environments.'}</p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                            {[
                                { icon: ShieldCheck, label: 'Genuine Origin', sub: 'Manufacturer Direct' },
                                { icon: Truck, label: 'Express Logistics', sub: 'Pan-India Delivery' },
                                { icon: BarChart3, label: 'Bulk Support', sub: 'Wholesale Pricing' },
                                { icon: Download, label: 'Tech Specs', sub: 'Datasheets Available' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group">
                                    <div className="text-royal-500 group-hover:text-white transition-colors">
                                        <item.icon size={24} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white text-sm uppercase tracking-wide font-oswald">{item.label}</h4>
                                        <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">{item.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Call to Action Box - Industrial Panel */}
                        <div className="bg-slate-900 border border-royal-500/30 p-8 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-royal-600/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-royal-600" />

                            <h3 className="text-2xl font-bold text-white mb-2 font-oswald uppercase tracking-wide">Procure This Item</h3>
                            <p className="text-slate-400 mb-6 text-sm max-w-md">
                                Request a formal quotation for bulk quantities. Our engineering team can also assist with application suitability.
                            </p>

                            <div className="max-w-md">
                                <ProductActions productName={product.name} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
