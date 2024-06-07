"use client"

import pkj from "@/package.json"
import { useRouter } from "next/navigation"
import { useState } from "react"
import EyeIcon from "@/public/eye"
import EyeSlashIcon from "@/public/eye-slash"
import HttpsService from "../../../../http-service/axios"
import toast from "react-hot-toast"

const httpService = HttpsService.build()

const LoginForm: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [id, setId] = useState("")
  const [pass, setPass] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const onSubmit = async () => {
    setLoading(true)
    await httpService
      .post("users/login/", {
        identification_code: id,
        password: pass,
      })
      .then(({ data }) => {
        localStorage.setItem("isAuth", "true")
        localStorage.setItem("user", JSON.stringify(data.user))
        localStorage.setItem("tokens", JSON.stringify(data.tokens))
        httpService.setToken(data.tokens.access)
        router.push("/")
      })
      .catch(() => {
        toast.error("کدملی یا کلمه عبور صحیح نمی باشد!")
      })
      .finally(() => setLoading(false))
  }

  return (
    <>
      <div className="w-full max-w-lg" dir="rtl">
        <div className="flex flex-col items-center justify-start w-full">
          <h2 className="text-2xl font-semibold text-black text-left mt-4">
            خوش آمدید
            <span className="text-primary-100">!</span>
          </h2>
          <p className="text-sm mt-2 text-gray-20 text-left">
            اطلاعات خود را وارد کنید
          </p>
        </div>

        <div className="mt-4">
          <label className="block text-black text-base mb-2">کدملی:</label>
          <input
            className="bg-gray-10 text-black focus:outline-none focus:shadow-outline border border-[#dddddd] rounded-2xl py-4 px-4 block w-full appearance-none"
            placeholder="کدملی خود را وارد کنید"
            onChange={(e) => setId(e.target.value)}
            value={id}
          />
        </div>
        <div className="mt-4 relative">
          <label className="block text-black text-base mb-2">کلمه عبور:</label>
          <input
            className="bg-gray-10 text-black focus:outline-none focus:shadow-outline border border-[#dddddd] rounded-2xl py-4 px-4 block w-full appearance-none"
            type={passwordVisible ? "text" : "password"}
            placeholder="کلمه عبور خود را وارد کنید"
            name="password"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
          />
          <button
            className="absolute bg-white border border-gray2  rounded-xl top-10 left-2 p-2"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? <EyeIcon /> : <EyeSlashIcon />}
          </button>
        </div>
      </div>
      <div className="mt-12 w-full max-w-lg">
        <button
          onClick={onSubmit}
          type="submit"
          className="focus:outline-none active:outline-none focus:shadow-none bg-lime-600 w-full py-3 rounded-lg text-primary-100 font-semibold text-white"
          disabled={loading}
        >
          ورود
          {loading && (
            <svg
              aria-hidden="true"
              role="status"
              className="inline mr-2 w-4 h-4 text-gray-200 animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              ></path>
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="#2C7743"
              ></path>
            </svg>
          )}
        </button>
        <p className="text-gray-20 mt-6 text-center">نسخه {pkj.version}</p>
      </div>
    </>
  )
}

export default LoginForm
