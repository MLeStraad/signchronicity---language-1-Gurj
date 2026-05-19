
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Signchronicity - NHS Digital Assistant',
  description: 'Rigidly compliant NHS communication and translation guide.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#005EB8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body min-h-screen bg-background flex flex-col antialiased selection:bg-[#005EB8] selection:text-white">
        {children}
      </body>
    </html>
  );
}
