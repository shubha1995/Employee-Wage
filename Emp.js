// Added number of working hours equal to 160 and working days 20
const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;
const MAX_WORK_HRS = 160;
const Number_Of_Working_Days = 20;
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HRS;
            break;
        case IS_FULL_TIME:
            return FULL_TIME_HRS;
            break;
        default:
            return 0;
    }
}
let totalEmpHrs = 0;
let totalWorkingDays = 0;
while (totalEmpHrs < MAX_WORK_HRS && totalWorkingDays < Number_Of_Working_Days) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
}
let empWage = totalEmpHrs * WAGE_PER_HR;
console.log("Total days: " + totalWorkingDays +
    " Total hrs: " + totalEmpHrs + " emp wage: " + empWage);