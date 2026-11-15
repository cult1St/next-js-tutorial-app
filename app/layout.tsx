import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Frontend App",
  description: "A simple frontend application built with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        
          <a className="skip" href="#main">
            Skip to content
          </a>
          <div className="announcement">
            Good design. Everyday living.{" "}
            <span>Free delivery on orders over ₦100,000 ↗</span>
          </div>
          <header className="container header">
            <a className="logo" href="index.html">
              form<span>.</span>
            </a>
            <nav aria-label="Main navigation">
              <a href="index.html#shop">Shop all</a>
              <a href="index.html#story">Our story</a>
              <a href="product.html">Featured product</a>
            </nav>
            <a className="header-link" href="index.html#shop">
              Explore the collection ↗
            </a>
          </header>
        

        {children}
        <footer className="container">
          <div>
            <Link className="logo" href="/" >
              form<span>.</span>
            </Link>
            <p>Good objects. Better everyday.</p>
          </div>
          <p>© 2026 Form Studio. A classroom demo.</p>
          <Link href="/#shop">Back to shop ↑</Link>
        </footer>

      </body>
    </html>
  );
}
