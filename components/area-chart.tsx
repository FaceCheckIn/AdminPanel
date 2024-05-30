import { Line } from "react-chartjs-2"

const AreaChart: React.FC = ({ labels = [] }: any) => {
  const options = {
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  }

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "ورود",
        data: labels.map(() => Math.random() * 7),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  }

  return <Line options={options} data={data} />
}

export default AreaChart
