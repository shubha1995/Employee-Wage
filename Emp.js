//Store the Daily Wage along with the Total Wage

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

function CalculateWage(empHrs) {
    return empHrs * WAGE_PER_HR;
}
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
while (totalEmpHrs < MAX_WORK_HRS && totalWorkingDays < Number_Of_Working_Days) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(CalculateWage(empHrs));
}
let totalEmpWage = CalculateWage(totalEmpHrs);
console.log("Total days: " + totalWorkingDays +
    " Total hrs: " + totalEmpHrs + " emp wage: " + totalEmpWage);