import Image from "next/image"
import Link from "next/link"
import LoginForm from "./_components/login-form"

const LoginPage: React.FC = () => {
  return (
    <div className="flex bg-white overflow-hidden w-full h-screen">
      <div className="hidden lg:block lg:w-1/3 h-auto">
        <Image
          src="/login-modal.png"
          width={340}
          height={647}
          alt="man working with phone"
          className="w-full h-full"
        />
      </div>
      <div
        className="w-full p-8 lg:w-2/3 h-auto flex flex-col justify-between items-center relative shadow-2xl"
        dir="rtl"
      >
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage
