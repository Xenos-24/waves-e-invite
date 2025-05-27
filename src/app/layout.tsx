
import type { Metadata } from 'next';
import { caveat, kalam, poppins } from '@/lib/fonts';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { cn } from '@/lib/utils';
import { MusicToggleButton } from '@/components/MusicToggleButton';
// Removed MusicHintArrow import

export const metadata: Metadata = {
  title: 'E-invite',
  description: 'A special e-invitation, made with love.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(caveat.variable, kalam.variable, poppins.variable)}>
      <head><link rel="icon" type="image/png" href="/favicon.png" /></head>
      <body className="antialiased font-handwriting-body">
        <MusicToggleButton />
        {/* Removed MusicHintArrow component here */}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
