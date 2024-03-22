require("./globals.css");
import Menu from "@/components/Menu";
import Header from "@/components/Header";
import AudioLoop from "@/components/Audio";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Application Name */}
        <title>LCRT XYZ</title>

        <meta name="application-name" content="LCRT XYZ" />

        {/* Favicon */}
        <link rel="icon" sizes="any" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="any" href="/icon.png" />


        {/* Other meta tags (keep these if needed) */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="LCRT XYZ" />
        <meta name="description" content="Nico Lacerenza - Visual Sound Artist" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Other link tags (keep these if needed) */}
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="me" href="https://mastodon.social/@nico_lcrt" />
        <link rel="me" href="https://social.boom.army/@l3ch3_v17r1n3" />
      </head>
      <main className="flex min-h-screen flex-col items-center justify-between p-6 bg-transparent ">
        {children}
        <Header></Header>
        <Menu></Menu>
        <AudioLoop></AudioLoop>
      </main>
    </html>
  );
}
