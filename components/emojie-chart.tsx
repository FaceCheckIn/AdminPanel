import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, Tooltip } from "chart.js"

ChartJS.register(Tooltip)

const EmojiChart: React.FC<{ mode: "enter" | "exit" }> = ({ mode }) => {
  function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const data = {
    labels: ["😃", "🙂", "😕", "😖", "😭", "😊"],
    datasets: [
      {
        label: mode === "enter" ? "حالت ورود" : "حالت خروج",
        data: [1, 2, 3, 4, 5, 6].map((_) => getRandomNumber(1, 6)),
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
      },
    },
  }
  return <Bar data={data} options={options} style={{ maxWidth: 380 }} />
}

export default EmojiChart
