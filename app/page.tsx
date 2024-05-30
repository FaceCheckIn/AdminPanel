"use client"

import Header from "@/components/header"
import UsersList from "@/components/users"
import { Chart as ChartJS, registerables } from "chart.js"
import { useEffect, useState } from "react"
import dayjs from "dayjs"
import jalaliday from "jalaliday"
import { jalaliConvertor } from "@/utils/jalali-caonvertor"
import BarChart from "@/components/bar-chart"
import Image from "next/image"
import AreaChart from "@/components/area-chart"
import { useRouter } from "next/navigation"

dayjs.extend(jalaliday)

export default function Home() {
  const [user, setUser] = useState<any>(null)
  const date = dayjs()
  const router = useRouter()
  const jalaliDate = date.calendar("jalali")

  ChartJS.register(...registerables)

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuth")
    if (!isAuth) router.replace("/login")
  })

  return (
    <div dir="rtl" className="font-vazir overflow-hidden">
      <Header date={jalaliConvertor(jalaliDate.format("YYYY MM dddd"))} />
      <div className="flex">
        <div className="w-2/3 p-4">
          {user ? (
            <div className="flex flex-col">
              <div className="flex items-center justify-start">
                <Image
                  width={44}
                  height={44}
                  className=" rounded-full"
                  src={user.image}
                  alt=""
                />
                <h4 className="mx-3">{user.name}</h4>
                {user.isActive ? (
                  <div className="animate-pulse mt-1 bg-green-700 rounded-full size-4"></div>
                ) : (
                  <div className="bg-red-500 rounded-full size-4"></div>
                )}
              </div>
              <AreaChart />
              <AreaChart />
            </div>
          ) : (
            <BarChart />
          )}
        </div>
        <div className="w-1/3">
          <UsersList setSelectedUser={setUser} selectedUser={user} />
        </div>
      </div>
    </div>
  )
}
