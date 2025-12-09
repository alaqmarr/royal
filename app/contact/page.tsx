import { Metadata } from 'next';
import ContactClient from './contact-client';

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get in touch with Royal Industrial Corporation. Visit our store in Rani Gunj, Secunderabad or call us for quotes on Loctite, CRC, and 3M products.',
};

export default function ContactPage() {
    return <ContactClient />;
}
