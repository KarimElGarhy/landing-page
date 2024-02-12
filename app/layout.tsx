import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "./_components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Landing Page ",
  description: "just Landing page for training.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navbar */}
        <div className="shadow-lg">
          <div className="container mx-auto h-24 px-2">
            <Navbar />
          </div>
        </div>
        <div className="">
          <div className="container mx-auto px-2 lg:px-24 ">{children}</div>
        </div>
      </body>
    </html>
  )
}
