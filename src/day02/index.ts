const year = 2022;
const holidays = ["01/06", "04/01", "12/25"];

// function countHours(year: number, holidays: string[]): number {
//   return holidays.reduce((acc, day) => {
//     const dateString = `${day}/${year}`;
//     const date = new Date(dateString);
//     const dayOfTheWeek = date.getDay();
//     const isWorkingDay = dayOfTheWeek > 0 && dayOfTheWeek < 6;
//     return (acc += isWorkingDay ? 2 : 0);
//   }, 0);
// }

/** 
Score: 91
2,783 ops/s (Higher is better)
Cognitive complexity: 1 (Lower is better)
*/

function countHours(year: number, holidays: string[]): number {
  let result = 0;
  for (const holiday of holidays) {
    result += new Date(`${holiday}/${year}`).getDay() % 6 == 0 ? 0 : 2;
  }
  return result;
}

console.log(countHours(year, holidays));
