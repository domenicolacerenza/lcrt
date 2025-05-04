import type { Metadata } from "next";
import './globals.css';
import Header from "@/components/Header";
import Sketch from "@/components/stella";
import AudioLoop from "@/components/Audio";
import Menu from "@/components/Menu";
import Mouse from "@/components/Mouse";

export const metadata: Metadata = {
  title: "LCRT | Electronic & Deconstructed Club Soundscapes",
  description: "LCRT is the experimental electronic project of Nico Lacerenza, blending deconstructed club, avant-garde soundscapes, and independent sonic exploration.",
  applicationName: "LCRT XYZ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

        {/* Application Name */}
        <title>LCRT | Electronic & Deconstructed Club Soundscapes</title>
        <meta charSet="UTF-8" />
        <meta name="application-name" content="LCRT XYZ" />

        <link rel="preload" href="/js/p5.js" as="script" />
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="256x256" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="120x120" href="/apple-touch-icon-120x120.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Other meta tags (keep these if needed) */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="LCRT XYZ" />
        <meta name="description" content="LCRT is the experimental electronic project of Nico Lacerenza, blending deconstructed club, avant-garde soundscapes, and independent sonic exploration." />
        <meta name="author" content="Nico Lacerenza | LCRT" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />

       
      </head>
      <body className="flex min-h-screen flex-col items-center justify-between">
        {children}
        <Sketch></Sketch>
        <Mouse />
        <Menu></Menu>
        <Header></Header>
        <AudioLoop></AudioLoop>
      </body>
    </html>
  );
}
