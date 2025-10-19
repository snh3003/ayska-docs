import type { Metadata } from "next";
import { ThemeProvider, BaseStyles } from '@primer/react';
import StyledComponentsRegistry from '@/lib/registry';

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
    <html lang="en">
      <body suppressHydrationWarning={true}>
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
