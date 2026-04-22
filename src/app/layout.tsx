import type { Metadata } from "next";
import "./globals.css";
import "@fontsource-variable/inter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { buildMetadata } from "@/lib/seo";
import MuiProvider from "@/providers/MuiProvider";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <MuiProvider>
          <ReactQueryProvider>
            <div className="min-h-dvh">
              <Navbar />
              {children}
              <Footer />
            </div>
          </ReactQueryProvider>
        </MuiProvider>
      </body>
    </html>
  );
}
