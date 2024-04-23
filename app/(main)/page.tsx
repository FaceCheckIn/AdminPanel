"use client"

import { Chart as ChartJS, registerables } from "chart.js"
import { Bar } from "react-chartjs-2"

export default function Home() {
  ChartJS.register(...registerables)

  const data = {
    labels: [
      ["شنبه", "cds"],
      ["یکشنبه", "cds"],
      ["دوشنبه", "cds"],
      ["سه شنبه", "cds"],
      ["چهارشنبه", "cds"],
      ["پنج شنبه", "cds"],
      ["جمعه", "cds"],
    ],
    datasets: [
      {
        data: [30, 20, 30, 40, 50, 60, 70],
      },
    ],
  }

  return (
    <div className="w-full h-full flex justify-start flex-col items-start">
      <h1 className="text-center"></h1>
      <Bar data={data} />
    </div>
  )
}
