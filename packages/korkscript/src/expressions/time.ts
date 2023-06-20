import {BasicExpression} from "./types"

export const Milliseconds = new BasicExpression(
    ["ms", "miliseconds", "getMs()", "getMilliseconds()"], "new Date().getTime()"
)

export const Date = new BasicExpression(
    ["date", "getDate()"], "new Date().toString()"
)

export const Day = new BasicExpression(
    ["day", "getDay", "currentDay", "getCurrentDay()"], "new Date().getDay()"
)

export const Year = new BasicExpression(
    ["year", "fullYear", "currentYear", "getYear()", "getFullYear()", "getCurrentYear()"], "new Date().getFullYear()"
)

export const Minutes = new BasicExpression(
    ["minutes", "mins", "getMinutes()", "getMins()"], "new Date().getMinutes()"
)

export const Month = new BasicExpression(
    ["month", "currentMonth", "getMonth()", "getCurrentMonth()"]
)