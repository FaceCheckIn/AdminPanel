"use client"

import Header from "@/components/header"
import { DateValue, RangeValue } from "@nextui-org/calendar"
import UsersList from "@/components/users"
import { Chart as ChartJS, registerables } from "chart.js"
import { useEffect, useState } from "react"
import dayjs from "dayjs"
import jalaliday from "jalaliday"
import { jalaliConvertor } from "@/utils/jalali-caonvertor"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Select, SelectItem } from "@nextui-org/select"
import { eachDayOfInterval } from "date-fns"
import { filterOptions } from "./utils"
import { today, getLocalTimeZone } from "@internationalized/date"
import CategoryCharts from "@/components/category-charts"
import RangeCalendarPicker from "@/components/range-calendar"
import { Avatar } from "@nextui-org/react"
import UsersCharts from "@/components/users-charts"
import { digitsEnToFa } from "@persian-tools/persian-tools"
import HttpService from "@/http-service/axios"

dayjs.extend(jalaliday)

const httpService = HttpService.build()

export default function Home() {
  const [user, setUser] = useState<any>(null)
  const date = dayjs()
  const router = useRouter()
  const [category, setCategory] = useState("")
  const jalaliDate = date.calendar("jalali")
  const [labels, setLabels] = useState<string[]>([])
  let [value, setValue] = useState<RangeValue<DateValue>>({
    start: today(getLocalTimeZone()),
    end: today(getLocalTimeZone()).add({ weeks: 1, days: 3 }),
  })
  let [focusedValue, setFocusedValue] = useState<DateValue>(
    today(getLocalTimeZone())
  )

  const currentUser = JSON.parse(localStorage.getItem("user"))
  const accessToken = JSON.parse(localStorage.getItem("tokens")).access

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

  const [users, setUsers] = useState([])

  const getUsers = async () => {
    await httpService
      .get("users/list/", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((data) => console.log(data))
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div dir="rtl" className="font-vazir overflow-hidden min-h-screen">
      <Header date={jalaliConvertor(jalaliDate.format("YYYY DD dddd MM"))} />
      <div className="flex justify-evenly">
        <div className="w-3/5 p-4">
          {user ? (
            <>
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
                <div className="flex items-center">
                  <RangeCalendarPicker
                    value={value}
                    focusedValue={focusedValue}
                    setFocusedValue={setFocusedValue}
                    setValue={setValue}
                    onChange={getDates}
                  />
                  <button
                    className="mx-8 mt-1 text-xl"
                    onClick={() => setUser(null)}
                  >
                    X
                  </button>
                </div>
              </div>
              <UsersCharts labels={labels} />
            </>
          ) : (
            <>
              <h2 className="font-semibold text-medium">گزارش جامع</h2>
              <div className="flex justify-between pe-8">
                <Select
                  label="فیلتر بر اساس"
                  className="max-w-[200px] mt-4"
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                >
                  {filterOptions.map((item) => (
                    <SelectItem key={item.value}>{item.label}</SelectItem>
                  ))}
                </Select>
                <RangeCalendarPicker
                  value={value}
                  focusedValue={focusedValue}
                  setFocusedValue={setFocusedValue}
                  setValue={setValue}
                  onChange={getDates}
                />
              </div>
              {category ? (
                <CategoryCharts labels={labels} />
              ) : (
                <div className="w-full h-full flex justify-center flex-col items-center border mt-3 max-h-64 rounded-lg">
                  <Avatar src={currentUser.image1} className="w-32 h-32" />
                  <h2 className="text-lg mt-4">
                    {currentUser.first_name} {currentUser.last_name}
                  </h2>
                  <span className="text-gray-500">
                    {digitsEnToFa(currentUser.identification_code)}
                  </span>
                  <span className="text-gray-900">{currentUser.role}</span>
                </div>
              )}
            </>
          )}
        </div>
        <div className="w-1/5 pt-10 pe-4">
          <UsersList
            setSelectedUser={setUser}
            selectedUser={user}
            users={users}
          />
        </div>
      </div>
    </div>
  )
}
