import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Noto_Sans, Source_Serif_4  } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _noto = Noto_Sans({ subsets: ["latin"] });
const _sourceSerif = Source_Serif_4({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kane Creative",
  description: "We make small businesses impossible to ignore.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
