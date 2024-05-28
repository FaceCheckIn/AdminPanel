"use client"

import Header from "@/components/header"
import UsersList from "@/components/users"
import { Chart as ChartJS, registerables } from "chart.js"
import { Bar } from "react-chartjs-2"

export default function Home() {
  ChartJS.register(...registerables)

  const data = {
    labels: [
      ["جمعه"],
      ["پنج شنبه"],
      ["چهارشنبه"],
      ["سه شنبه"],
      ["دوشنبه"],
      ["یکشنبه"],
      ["شنبه"],
    ],
    datasets: [
      {
        data: [30, 20, 30, 40, 50, 60, 70],
      },
    ],
  }

  return (
    <div dir="rtl" className="font-vazir">
      <Header />
      <div className="flex">
        <div className="bg-[red] w-1/2 h-screen"></div>
        <div className="w-1/2 h-screen">
          <UsersList />
        </div>
      </div>
    </div>
  )
}
