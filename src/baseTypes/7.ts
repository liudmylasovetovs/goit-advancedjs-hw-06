/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum WeekDays {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

const isWeekend = (day: WeekDays): boolean => {
  return day === WeekDays.Saturday || day === WeekDays.Sunday;
}

console.log(isWeekend(WeekDays.Monday)); 
console.log(isWeekend(WeekDays.Tuesday));
console.log(isWeekend(WeekDays.Saturday)); 
console.log(isWeekend(WeekDays.Sunday)); 