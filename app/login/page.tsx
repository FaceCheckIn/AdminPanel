import Image from "next/image"
import Link from "next/link"
import LoginForm from "./_components/login-form"

const LoginPage: React.FC = () => {
  return (
    <div className="flex bg-white overflow-hidden w-full h-screen">
      <div
        className="w-full p-8 lg:w-2/3 h-auto flex flex-col justify-between items-center relative shadow-2xl"
        dir="rtl"
      >
        <div className="flex justify-between items-center w-[94%] absolute top-4">
          <Link
            href="/"
            className="bg-gray-10 px-4 py-2 rounded-lg max-w-52 flex justify-center items-center text-gray-20 font-semibold text-sm"
          >
            بازگشت
          </Link>
        </div>
        <LoginForm />
      </div>
      <div className="hidden lg:block lg:w-1/3 h-auto">
        <Image
          src="/login-modal.png"
          width={340}
          height={647}
          alt="man working with phone"
          className="w-full h-full"
        />
      </div>
    </div>
  )
}

export default LoginPage
