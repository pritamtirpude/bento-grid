import React from 'react';
import type { Metadata } from 'next';
// eslint-disable-next-line camelcase
import { DM_Sans } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500']
});

export const metadata: Metadata = {
  title: 'Bento Grid',
  description: 'A bento grid design app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} min-h-screen bg-[#F6F5F6]`}>
        {children}
      </body>
    </html>
  );
}
