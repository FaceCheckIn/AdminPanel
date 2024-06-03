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
import { Select, SelectItem } from "@nextui-org/select"
import { eachDayOfInterval } from "date-fns"
import { filterOptions } from "./utils"

dayjs.extend(jalaliday)

export default function Home() {
  const [user, setUser] = useState<any>(null)
  const date = dayjs()
  const router = useRouter()
  const [labels, setLabels] = useState<string[]>([])
  const jalaliDate = date.calendar("jalali")

  ChartJS.register(...registerables)

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuth")
    if (!isAuth) router.replace("/login")
  }, [router])

  function getDates(start: any, end: any) {
    if (!start || !end) return []

    const dates = eachDayOfInterval({
      start: new Date(start),
      end: new Date(end),
    })

    setLabels(dates.map((date) => dayjs(date).format("YYYY/MM/DD")))
  }

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
                    <div className="pulse mt-1 bg-green-700 rounded-full size-4"></div>
                  ) : (
                    <div className="pulse bg-red-500 rounded-full size-4"></div>
                  )}
                </div>
                <button className="me-8" onClick={() => setUser(null)}>
                  X
                </button>
              </div>
              <div className="flex flex-row-reverse">
                <div className="max-w-[500px]">
                  <RangeCalendar
                    onChange={(val) => getDates(val.start, val.end)}
                  />
                </div>
                <div className="flex items-start justify-between px-4">
                  <div className="flex justify-between w-full">
                    <div className="w-[580px] h-auto">
                      <AreaChart labels={labels} mode="enter" />
                      <AreaChart labels={labels} mode="exit" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <h2 className="font-semibold text-medium">گزارش جامع</h2>
              <div className="flex justify-between pe-8">
                <Select label="فیلتر بر اساس" className="max-w-[200px] mt-4">
                  {filterOptions.map((item) => (
                    <SelectItem key={item.value}>{item.label}</SelectItem>
                  ))}
                </Select>
                <RangeCalendar
                  onChange={(val) => getDates(val.start, val.end)}
                />
              </div>
              <BarChart labels={labels} mode="enter" />
              <BarChart labels={labels} mode="exit" />
            </>
          )}
        </div>
        <div className="w-1/3 pt-10 pe-4">
          <UsersList setSelectedUser={setUser} selectedUser={user} />
        </div>
      </div>
    </div>
  )
}
