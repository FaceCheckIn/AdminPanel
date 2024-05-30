import LogoutIcon from "@/public/arrow-right-on-rectangle"
import Image from "next/image"
import { useRouter } from "next/navigation"

const Header: React.FC<{ date: string }> = ({ date }) => {
  const router = useRouter()

  return (
    <nav className="bg-white border-b border-gray-200 relative z-30 w-full flex  justify-between items-center pe-4">
      <div className="px-3 py-3 lg:px-5 lg:pl-3 flex justify-between items-center font-semibold text-lg">
        <Image alt="logo" src="/logo.png" width={50} height={140} />
        پنل مدیریتی سیری
      </div>
      <div className="flex items-center justify-start">
        <p>{date}</p>
        <button
          className="ms-4"
          onClick={() => {
            localStorage.clear()
            router.replace("/login")
          }}
        >
          <LogoutIcon />
        </button>
      </div>
    </nav>
  )
}

export default Header
