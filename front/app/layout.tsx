import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { robotoCondensed } from "@/config/fonts";
import clsx from "clsx";
import "./background.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "box-border min-h-screen bg-background font-sans antialiased",
          robotoCondensed.variable
        )}
      >
        <div className="relative flex flex-col h-full">
          <main className="container mx-auto max-w-7xl p-12 flex-grow max-h-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
