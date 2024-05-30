"use client"

import Header from "@/components/header"
import { RangeCalendar } from "@nextui-org/calendar"
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
import { today, getLocalTimeZone } from "@internationalized/date"

dayjs.extend(jalaliday)

export default function Home() {
  const [user, setUser] = useState<any>(null)
  const date = dayjs()
  const router = useRouter()
  let defaultDate = today(getLocalTimeZone())
  let [focusedDate, setFocusedDate] = useState(defaultDate)
  const jalaliDate = date.calendar("jalali")

  ChartJS.register(...registerables)

  console.log(focusedDate)

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
              <div className="flex justify-between items-center">
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
                <button className="me-8" onClick={() => setUser(null)}>
                  X
                </button>
              </div>
              <div className="flex items-start justify-between px-4">
                <div className="flex justify-between w-full">
                  <div className="w-[580px] h-auto">
                    <AreaChart labels={[]} />
                  </div>
                  <RangeCalendar
                    className="flex-row-reverse"
                    onFocusChange={setFocusedDate}
                    focusedValue={focusedDate}
                  />
                </div>
              </div>
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
