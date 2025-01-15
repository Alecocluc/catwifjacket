import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cat Wif Jacket | $CWJ",
  description: "The coolest cat on Solana",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Cormorant:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        {children}
        <Script id="smooth-scroll">
          {`
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
              anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                  behavior: 'smooth'
                });
              });
            });
          `}
        </Script>
      </body>
    </html>
  )
}

