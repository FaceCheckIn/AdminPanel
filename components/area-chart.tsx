import { Line } from "react-chartjs-2"
import { digitsEnToFa } from "@persian-tools/persian-tools"
import dayjs from "dayjs"

const AreaChart: React.FC<any> = ({ labels = [], mode, inputData }) => {
  console.log(
    inputData?.map(({ time }: any) => Number(time.split(":")[1])) * 1.6
  )

  const emojis = ["😃", "🙂", "😕", "😖", "😭", "😊"]

  const data = {
    labels: labels,
    datasets: [
      {
        label: mode === "enter" ? "میانگین ساعات ورود" : "میانگین ساعات خروج",
        fill: true,
        data: inputData?.map(({ time }: any) =>
          Number(
            `${Number(time.split(":")[0])}.${Math.floor(
              parseInt(time.split(":")[1][0]) * 1.6
            )}`
          )
        ),
        backgroundColor:
          mode === "enter"
            ? ["rgba(75, 192, 192, 0.2)"]
            : ["rgba(255, 99, 132, 0.2)"],
        borderColor:
          mode === "enter" ? ["rgb(75, 192, 192)"] : ["rgb(255, 99, 132)"],
        borderWidth: 1,
      },
    ],
  }
  const options = {
    scales: {
      y: {
        beginAtZero: false,
        min: mode === "enter" ? 7 : 13,
        max: mode === "enter" ? 12 : 18,
      },
      x: {
        ticks: {
          callback: function (value: any) {
            const res = labels.map((label: any) => {
              const jalali = dayjs(label)
                .calendar("jalali")
                .format("YYYY/MM/DD")
              return digitsEnToFa(jalali)
            })
            return res[value]
          },
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          title: function () {
            const randomEmoji =
              emojis[Math.floor(Math.random() * emojis.length)]
            return randomEmoji
          },
          label: () => "",
        },
      },
      legend: {
        position: "top" as const,
      },
    },
  }

  return <Line options={options} data={data} />
}

export default AreaChart
