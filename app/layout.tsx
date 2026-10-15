import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Daya Makeup Studio | Rajouri',
  description: 'Skin-first bridal, soft glam, and event makeup in Rajouri, Jammu & Kashmir.',
};

export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
