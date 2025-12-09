import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 pt-24 pb-12 relative overflow-hidden border-t border-white/5">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-royal-600 to-transparent opacity-30" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-royal-900/20 rounded-full blur-[100px] pointer-events-none -mr-48 -mt-48" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-20">

                    {/* Brand Column */}
                    <div className="md:col-span-4">
                        <Link href="/" className="inline-flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-royal-600 text-white rounded-lg flex items-center justify-center font-bold text-xl border border-white/10 shadow-[0_0_15px_rgba(72,101,129,0.3)]">R</div>
                            <span className="text-2xl font-bold text-white tracking-tight font-oswald uppercase">ROYAL</span>
                        </Link>
                        <p className="text-slate-400 leading-relaxed mb-8 max-w-sm">
                            Your trusted partner for industrial adhesives, sealants, and maintenance solutions.
                            Authorized distributor for global leaders since 2000.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Linkedin, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-royal-400 hover:bg-royal-600 hover:text-white hover:border-royal-500 transition-all duration-300">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="md:col-span-2">
                        <h4 className="text-white font-bold mb-6 font-oswald tracking-wide uppercase">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="hover:text-royal-400 hover:translate-x-1 transition-all block">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-royal-400 hover:translate-x-1 transition-all block">Contact</Link></li>
                            <li><Link href="/privacy" className="hover:text-royal-400 hover:translate-x-1 transition-all block">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div className="md:col-span-3">
                        <h4 className="text-white font-bold mb-6 font-oswald tracking-wide uppercase">Products</h4>
                        <ul className="space-y-4">
                            <li><Link href="/products?categoryId=adhesives" className="hover:text-royal-400 hover:translate-x-1 transition-all block">Adhesives & Sealants</Link></li>
                            <li><Link href="/products?categoryId=sprays" className="hover:text-royal-400 hover:translate-x-1 transition-all block">Industrial Sprays</Link></li>
                            <li><Link href="/products?categoryId=tapes" className="hover:text-royal-400 hover:translate-x-1 transition-all block">Industrial Tapes</Link></li>
                            <li><Link href="/products/brands" className="hover:text-royal-400 hover:translate-x-1 transition-all block">View all Brands</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="md:col-span-3">
                        <h4 className="text-white font-bold mb-6 font-oswald tracking-wide uppercase">Get in Touch</h4>
                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <div className="mt-1"><MapPin className="shrink-0 text-royal-500" size={18} /></div>
                                <span className="text-sm text-slate-300 leading-relaxed">
                                    No. 5-5-189/190/8,<br />Batchu Sarojini Complex, <br />
                                    Rani Gunj, Secunderabad - 500003
                                </span>
                            </li>
                            <li className="flex gap-4 items-center">
                                <Phone className="shrink-0 text-royal-500" size={18} />
                                <a href="tel:+919849044455" className="hover:text-white transition-colors text-slate-300">+91-9849044455</a>
                            </li>
                            <li className="flex gap-4 items-center">
                                <Mail className="shrink-0 text-royal-500" size={18} />
                                <a href="mailto:info@royalindustrialcorp.com" className="hover:text-white transition-colors text-slate-300">info@royalindustrialcorp.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
                    <p>© {new Date().getFullYear()} Royal Industrial Corporation. All rights reserved.</p>
                    <div className="flex gap-8">
                        <span>GST: 36ACQPM0936M2Z1</span>
                        <a href="#" className="flex items-center gap-1 hover:text-royal-400 transition-colors">
                            Site Map <ArrowUpRight size={10} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
