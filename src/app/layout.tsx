import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Apex Singularity | The 50 Titans Meta-OS & Architectural Synthesis Hub',
  description: 'The master aggregation node and architectural singularity indexing all 50 Titans, verified with zero build errors and 100% live GitHub Pages static deployments.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#040408] text-[#f8fafc] min-h-screen flex flex-col relative selection:bg-amber-500 selection:text-black singularity-grid">
        {/* Ambient cosmic mesh */}
        <div className="fixed inset-0 singularity-mesh pointer-events-none z-0" />

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
