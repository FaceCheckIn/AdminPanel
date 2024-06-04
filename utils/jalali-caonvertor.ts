export const jalaliConvertor = (date: string) => {
  const englishToPersianMap: any = {
    "0": "۰",
    "1": "۱",
    "2": "۲",
    "3": "۳",
    "4": "۴",
    "5": "۵",
    "6": "۶",
    "7": "۷",
    "8": "۸",
    "9": "۹",
  }
  let res = ""
  if (date) {
    const weekDay = date.split(" ")[2]
    switch (weekDay) {
      case "Saturday":
        res = "شنبه"
        break
      case "Sunday":
        res = "یک‌شنبه"
        break
      case "Monday":
        res = "دوشنبه"
        break
      case "Tuesday":
        res = "سه‌شنبه"
        break
      case "Wednesday":
        res = "چهارشنبه"
        break
      case "Thursday":
        res = "پنج‌شنبه"
        break
      case "Friday":
        res = "جمعه"
        break
      default:
        res = "Invalid date"
    }
  }
  res = `${res} ${date.split(" ")[0]}/${date.split(" ")[3]}/${
    date.split(" ")[1]
  }
    
  
    
  `

  res = res.replace(/[0-9]/g, function (digit) {
    return englishToPersianMap[digit]
  })

  return res
}
