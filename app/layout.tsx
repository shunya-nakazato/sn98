import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import cn from '@/common/utils/cn';
import NavigationMenu from './_components/NavigationMenu';
import Header from './_components/Header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'SN98',
  description: "SN98's blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          'antialiased',
          'w-screen h-screen',
          'overflow-hidden'
        )}
      >
        <main className="w-full h-full overflow-y-scroll">
          <Header />
          <div className="w-full p-3 pb-24">{children}</div>
        </main>
        <NavigationMenu />
      </body>
    </html>
  );
}
