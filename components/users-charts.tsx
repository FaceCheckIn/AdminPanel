import AreaChart from "./area-chart"
import EmojiChart from "./emojie-chart"

const UsersCharts: React.FC<any> = ({
  labels,
  enterSentiment,
  exitSentiment,
  enterChart,
  exitChart,
}) => {
  return (
    <div className="flex flex-col justify-end w-full">
      <div className="flex justify-between max-w-[500px]">
        <EmojiChart mode="enter" inputData={enterSentiment} />
        <AreaChart labels={labels} mode="enter" inputData={enterChart} />
      </div>
      <div className="flex justify-between max-w-[500px]">
        <EmojiChart mode="exit" inputData={exitSentiment} />
        <AreaChart labels={labels} mode="exit" inputData={exitChart} />
      </div>
    </div>
  )
}

export default UsersCharts
