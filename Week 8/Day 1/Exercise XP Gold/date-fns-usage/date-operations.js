import { addHours, addDays, subMonths, differenceInDays } from 'date-fns';


const currentDate = addDays((new Date()), 5).toString()
console.log(currentDate)

export {currentDate}
