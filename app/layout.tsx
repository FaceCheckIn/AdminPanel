import type { Metadata } from "next"
import { Vazirmatn } from "next/font/google"
import "./globals.css"

const vazir = Vazirmatn({ subsets: ["latin"], variable: "--font-vazir" })

export const metadata: Metadata = {
  title: "سیری",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={vazir.className}>{children}</body>
    </html>
  )
}
