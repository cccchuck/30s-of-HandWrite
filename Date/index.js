/** Calculate the difference in seconds between two dates */
const getSecondsDiffBetweenDates = (initialDate, finalDate) => {
  return Math.floor((finalDate.getTime() - initialDate.getTime()) / 1000);
}

/** Calculate the difference in minutes between two dates */
const getMinutesDiffBetweenDates = (initialDate, finalDate) => {
  return Math.floor((finalDate.getTime() - initialDate.getTime()) / (1000 * 60));
}

/** Calculate the difference in hours between two dates */
const getHoursDiffBetweenDates = (initialDate, finalDate) => {
  return Math.floor((finalDate.getTime() - initialDate.getTime()) / (1000 * 60 * 60));
}

/** Calculate the difference in days between two dates */
const getDaysDiffBetweenDates = (initialDate, finalDate) => {
  return Math.floor((finalDate.getTime() - initialDate.getTime()) / (1000 * 60 * 60 * 24));
}

/** Calculate the difference in months between two dates */
const getMonthsDiffBetweenDates = (initialDate, finalDate) => {
  return Math.max((finalDate.getFullYear() - initialDate.getFullYear()) * 12 + 
                   finalDate.getMonth() - initialDate.getMonth(), 0)
}

console.log(getSecondsDiffBetweenDates(new Date(2021, 01, 09), new Date(2022, 02, 08)));
console.log(getMinutesDiffBetweenDates(new Date(2021, 01, 09), new Date(2022, 02, 08)));
console.log(getHoursDiffBetweenDates(new Date(2021, 01, 09), new Date(2022, 02, 08)));
console.log(getDaysDiffBetweenDates(new Date(2021, 01, 09), new Date(2022, 02, 08)));
console.log(getMonthsDiffBetweenDates(new Date(2021, 01, 09), new Date(2022, 02, 08)));