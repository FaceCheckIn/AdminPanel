import Header from "@/components/header"
import Sidebar from "@/components/sidebar"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div dir="rtl">
      <Header />
      <Sidebar />
      <div className="flex overflow-hidden bg-white pt-16 md:ps-44 ps-0">
        {children}
      </div>
    </div>
  )
}
