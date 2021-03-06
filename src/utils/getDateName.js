/*
 * @Author: pwjworks
 * @Date: 2020-02-08 02:48:06
 * @Last Modified by:   pwjworks
 * @Last Modified time: 2020-02-08 02:48:06
 */
/**
 *获得日期全称
 *
 * @export
 * @param {*} date
 * @returns
 */
export function getMonthName (date) {
  var month = new Array(12)
  month[0] = 'January'
  month[1] = 'February'
  month[2] = 'March'
  month[3] = 'April'
  month[4] = 'May'
  month[5] = 'June'
  month[6] = 'July'
  month[7] = 'August'
  month[8] = 'September'
  month[9] = 'October'
  month[10] = 'November'
  month[11] = 'December'
  return month[date.getMonth()]
}

/**
 *获得星期全称
 *
 * @export
 * @param {*} date
 * @returns
 */
export function getWeekDayName (date) {
  var weekday = new Array(7)
  weekday[0] = 'Sunday'
  weekday[1] = 'Monday'
  weekday[2] = 'Tuesday'
  weekday[3] = 'Wednesday'
  weekday[4] = 'Thursday'
  weekday[5] = 'Friday'
  weekday[6] = 'Saturday'
  return weekday[date.getDay()]
}

/**
 *获得星期的英文简称
 *
 * @export
 * @param {*} day
 * @returns
 */
export function getWeekDayEnName (day) {
  var weekday = new Array(7)

  weekday['星期一'] = 'MON'
  weekday['星期二'] = 'TUE'
  weekday['星期三'] = 'WED'
  weekday['星期四'] = 'THU'
  weekday['星期五'] = 'FRI'
  weekday['星期六'] = 'SAT'
  weekday['星期日'] = 'SUN'
  return weekday[day]
}
