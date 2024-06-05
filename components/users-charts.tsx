import AreaChart from "./area-chart"
import EmojiChart from "./emojie-chart"

const UsersCharts: React.FC<{ labels: string[] }> = ({ labels }) => {
  return (
    <div className="flex flex-col justify-end w-full">
      <div className="flex justify-between max-w-[500px]">
        <EmojiChart mode="enter" />
        <AreaChart labels={labels} mode="enter" />
      </div>
      <div className="flex justify-between max-w-[500px]">
        <EmojiChart mode="exit" />
        <AreaChart labels={labels} mode="exit" />
      </div>
    </div>
  )
}

export default UsersCharts
