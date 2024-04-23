import type { Metadata } from "next"
import { Vazirmatn } from "next/font/google"
import "./globals.css"

const inter = Vazirmatn({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "مدیریت افراد",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
