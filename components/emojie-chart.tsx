import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, Tooltip } from "chart.js"

ChartJS.register(Tooltip)

const EmojiChart: React.FC<any> = ({ mode, inputData }) => {
  function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  const labels = [
    "Furious",
    "Neutral",
    "Sadness",
    "Angry",
    "Happy",
    "Delighted",
  ]

  const data = {
    labels,
    datasets: [
      {
        label: mode === "enter" ? "حالت ورود" : "حالت خروج",
        data: inputData,
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
        min: 0,
        max: 10,
      },
    },
  }
  return (
    <Bar
      data={data}
      options={options}
      style={{ minWidth: 380, maxWidth: 380 }}
    />
  )
}

export default EmojiChart
