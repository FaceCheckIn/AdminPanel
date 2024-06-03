import { DateValue, RangeCalendar, RangeValue } from "@nextui-org/calendar"
import {
  today,
  getLocalTimeZone,
  startOfWeek,
  startOfMonth,
  endOfWeek,
  endOfMonth,
} from "@internationalized/date"
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  ButtonGroup,
  Button,
} from "@nextui-org/react"
import CalendarIcon from "@/public/calendar-icon"
import { useLocale } from "@react-aria/i18n"
import { Dispatch, SetStateAction } from "react"

interface Props {
  onChange: (start: DateValue, end: DateValue) => void
  value: RangeValue<DateValue>
  focusedValue: DateValue
  setFocusedValue: Dispatch<SetStateAction<DateValue>>
  setValue: Dispatch<SetStateAction<RangeValue<DateValue>>>
}

const RangeCalendarPicker: React.FC<Props> = ({
  onChange,
  value,
  focusedValue,
  setFocusedValue,
  setValue,
}) => {
  let { locale } = useLocale()
  let now = today(getLocalTimeZone())
  let prevMonth = now.subtract({ months: 1 })

  let prevWeek = {
    start: startOfWeek(now.subtract({ weeks: 1 }), locale),
    end: endOfWeek(now.subtract({ weeks: 1 }), locale),
  }
  let thisMonth = { start: startOfMonth(now), end: endOfMonth(now) }

  let PrevMonthValue = {
    start: startOfMonth(prevMonth),
    end: endOfMonth(prevMonth),
  }

  return (
    <Dropdown>
      <DropdownTrigger>
        <button className="outline-none">
          <CalendarIcon />
        </button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" closeOnSelect={false}>
        <DropdownItem>
          <RangeCalendar
            value={value}
            focusedValue={focusedValue}
            onChange={(val) => {
              setValue(val)
              onChange(val.start, val.end)
            }}
            onFocusChange={setFocusedValue}
            topContent={
              <ButtonGroup
                fullWidth
                className="px-3 max-w-full pb-2 pt-3 bg-content1 [&>button]:text-default-500 [&>button]:border-default-200/60"
                radius="full"
                size="sm"
                variant="bordered"
              >
                <Button
                  onClick={() => {
                    setValue(prevWeek)
                    setFocusedValue(prevWeek.end)
                    onChange(prevWeek.start, prevWeek.end)
                  }}
                >
                  هفته قبلی
                </Button>
                <Button
                  onClick={() => {
                    setValue(thisMonth)
                    setFocusedValue(thisMonth.start)
                    onChange(thisMonth.start, thisMonth.end)
                  }}
                >
                  ماه فعلی
                </Button>
                <Button
                  onClick={() => {
                    setValue(PrevMonthValue)
                    setFocusedValue(PrevMonthValue.start)
                    onChange(PrevMonthValue.start, PrevMonthValue.end)
                  }}
                >
                  ماه قبلی
                </Button>
              </ButtonGroup>
            }
          />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

export default RangeCalendarPicker
