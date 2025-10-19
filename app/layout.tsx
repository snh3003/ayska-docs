import type { Metadata } from "next";
import { ThemeProvider, BaseStyles } from '@primer/react';
import StyledComponentsRegistry from '@/lib/registry';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "Ayska Documentation",
  description: "Complete documentation for the Ayska Field App - Field Activity Tracking Made Simple",
  keywords: ["Ayska", "Field App", "Documentation", "React Native", "TypeScript"],
  authors: [{ name: "Ayska Team" }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <StyledComponentsRegistry>
          <ThemeProvider colorMode="auto">
            <BaseStyles>
              {children}
            </BaseStyles>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
