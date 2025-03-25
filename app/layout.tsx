import type { Metadata } from "next";
import { Source_Sans_3 as FontSans } from "next/font/google";
import "./globals.css";

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SumMate - Effortless PDF Summarization",
  description: "SumMate is an app to summarizing PDF documentsSumMate is your reliable tool for instantly summarizing PDF documents. Save time and get to the key points quickly with our user-friendly, secure platform. Ideal for professionals, students, and anyone needing efficient content extraction from PDFs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${fontSans.variable} font-sans antialiased`}
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster 
            richColors
            position="top-right"
            offset={{ top: "10vh" }}
          />
        </body>
      </html>
    </ClerkProvider>
  );
}
