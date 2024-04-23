"use client"

import Image from "next/image"
import Link from "next/link"
import pkj from "@/package.json"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import { Formik } from "formik"
import * as Yup from "yup"
import EyeIcon from "@/public/eye"
import EyeSlashIcon from "@/public/eye-slash"

const LoginForm: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const pathName = usePathname()
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email!")
      .required("Please enter your email!"),
    password: Yup.string().required("Please enter your password!"),
  })

  const onSubmit = (values: any) => {
    setLoading(true)
    // login(values)
    //   .then(() => {
    //     toast.success("You login successfully!")
    //     localStorage.setItem("user", JSON.stringify(data?.account))
    //     localStorage.setItem("tokens", JSON.stringify(data?.tokens))
    //     router.push("/")
    //   })
    //   .catch((e) => {
    //     console.log(e)
    //     toast.error("Username or password is not valid!")
    //   })
    //   .finally(() => setLoading(false))
  }

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validateOnBlur={false}
      validateOnChange={false}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
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
              <label className="block text-black text-base mb-2">ایمیل:</label>
              <input
                className="bg-gray-10 text-black focus:outline-none focus:shadow-outline border border-[#dddddd] rounded-2xl py-4 px-4 block w-full appearance-none"
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {!!errors.email && (
                <p className="text-sm text-[#CB201F]">{errors.email}</p>
              )}
            </div>
            <div className="mt-4 relative">
              <label className="block text-black text-base mb-2">
                کلمه عبور:
              </label>
              <input
                className="bg-gray-10 text-black focus:outline-none focus:shadow-outline border border-[#dddddd] rounded-2xl py-4 px-4 block w-full appearance-none"
                type={passwordVisible ? "text" : "password"}
                placeholder="کلمه عبور خود را وارد کنید"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {!!errors.password && (
                <p className="text-sm text-[#CB201F]">{errors.password}</p>
              )}
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
              onClick={() => handleSubmit()}
              // htmlType="submit"
              className="focus:outline-none active:outline-none focus:shadow-none bg-primary w-full py-3 rounded-lg bg-lime-600"
            >
              ورود
            </button>
            <p className="text-gray-20 mt-6 text-center">نسخه {pkj.version}</p>
          </div>
        </>
      )}
    </Formik>
  )
}

export default LoginForm
