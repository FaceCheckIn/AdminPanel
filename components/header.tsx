import Link from "next/link"

const Header = () => {
  return (
    <nav className="bg-white border-b border-gray-200 relative z-30 w-full">
      <div className="px-3 py-3 lg:px-5 lg:pl-3 flex justify-between items-center">
        سیستم تشخیص ساعات ورود
        <Link href="/login" className="bg-lime-100 px-4 py-1 rounded-lg">
          ورود
        </Link>
      </div>
    </nav>
  )
}

export default Header
