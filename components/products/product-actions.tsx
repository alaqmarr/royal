'use client';

import { useState } from 'react';
import { EnquireModal, WhatsAppButton } from '@/components/products/enquire-modal';
import { Mail } from 'lucide-react';

interface ProductActionsProps {
    productName: string;
}

export function ProductActions({ productName }: ProductActionsProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="flex flex-col sm:flex-row gap-4">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex-1 bg-royal-700 hover:bg-royal-800 text-white font-bold py-3.5 px-6 rounded-lg text-center transition-colors shadow-lg shadow-royal-900/20 flex items-center justify-center gap-2"
                >
                    <Mail size={20} />
                    Enquire Now
                </button>
                <div className="flex-1">
                    <WhatsAppButton productName={productName} className="w-full h-full" />
                </div>
            </div>

            <EnquireModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                productName={productName}
            />
        </>
    );
}
