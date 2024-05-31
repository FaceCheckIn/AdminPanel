import { Line } from "react-chartjs-2"

const AreaChart: React.FC<{ labels: string[]; mode: "enter" | "exit" }> = ({
  labels = [],
  mode,
}) => {
  function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const emojis = ["😃", "🙂", "😕", "😖", "😭", "😊"]

  const data = {
    labels,
    datasets: [
      {
        label: mode === "enter" ? "میانگین ساعات ورود" : "میانگین ساعات خروج",
        fill: true,
        data:
          mode === "enter"
            ? labels.map((_) => getRandomNumber(6, 10))
            : labels.map((_) => getRandomNumber(16, 22)),
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
