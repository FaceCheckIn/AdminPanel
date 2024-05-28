import Image from "next/image"

const Header: React.FC = () => {
  return (
    <nav className="bg-white border-b border-gray-200 relative z-30 w-full flex ps-6 py-2">
      <Image alt="logo" src="/logo.png" width={50} height={140} />
      <div className="px-3 py-3 lg:px-5 lg:pl-3 flex justify-between items-center font-semibold text-lg">
        پنل مدیریتی سیری
      </div>
    </nav>
  )
}

export default Header
