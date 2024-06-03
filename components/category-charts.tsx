import AreaChart from "./area-chart"
import EmojiChart from "./emojie-chart"

const CategoryCharts: React.FC<{ labels: string[] }> = ({ labels }) => {
  return (
    <div className="flex flex-row-reverse justify-end w-full">
      <div className="flex items-start justify-between px-4">
        <div className="flex justify-between w-full">
          <div className="h-auto max-w-[700px]">
            <div className="flex justify-between">
              <EmojiChart mode="enter" />
              <AreaChart labels={labels} mode="enter" />
            </div>
            <div className="flex justify-between">
              <EmojiChart mode="exit" />
              <AreaChart labels={labels} mode="exit" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryCharts
