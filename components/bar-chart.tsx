import { Bar } from "react-chartjs-2"

const BarChart: React.FC = () => {
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

  return <Bar data={data} />
}

export default BarChart
