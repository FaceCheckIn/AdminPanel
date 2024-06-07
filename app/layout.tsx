import type { Metadata } from "next"
import localFont from "next/font/local"
import Providers from "./provider"
import { Toaster } from "react-hot-toast"
import "./globals.css"

const vazir = localFont({
  src: "../public/fonts/Vazirmatn-Regular.ttf",
  variable: "--font-vazir",
})

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
      <body className={vazir.variable}>
        <Toaster position="top-center" />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
