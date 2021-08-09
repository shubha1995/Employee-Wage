const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;
const MAX_WORK_HRS = 160;
const Number_Of_Working_Days = 20;
// Returns the working hours of the employee
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
// Returns the wage of the employee
function CalculateWage(empHrs) {
    return empHrs * WAGE_PER_HR;
}
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
while (totalEmpHrs < MAX_WORK_HRS && totalWorkingDays < Number_Of_Working_Days) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(CalculateWage(empHrs));
    empDailyWageMap.set(totalWorkingDays,CalculateWage(empHrs));
}
let totalEmpWage = CalculateWage(totalEmpHrs);
console.log("Total days: " + totalWorkingDays +
    " Total hrs: " + totalEmpHrs + " emp wage: " + totalEmpWage);
// UC8 store daily wage in map
console.log(empDailyWageMap);
console.log("UC8---Emp wage map with reduce: " + Array.from(empDailyWageMap.values().reduce(totalWages, 0)));
//UC 7.a (i) Use Array to  calculate total emp wage foreach traversal or reduce method
let totEmpWage = 0;
function sum(dailyWage) {
    totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC-7A-- Total days: " + totalWorkingDays +
    " Total hrs: " + totalEmpHrs + " emp wage: " + totEmpWage);
// For calculating total wage
function totalWages(totalWage, dailywage) {
    return totalWage + dailywage;
}
console.log("UC-7A--Emp wage with reduce: " + empDailyWageArr.reduce(totalWages, 0));
//UC 7.b show the day along with daily wage using Array.map function
let dailyCntr = 0;
// Returns day along with daily wage
function mapDayWithWage(dailywage) {
    dailyCntr++
    return dailyCntr + "=" + dailywage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("7b -- day along with daily wage");
console.log(mapDayWithWageArr);
// UC 7.c show days when full time wage was earned
// Checks if the wage is 160
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("7C filter  full time wage  earned");
console.log(fullDayWageArr);
// UC 7.d find the first occurence when full time wage was used
console.log("7D--first occurence of full time wage on " + mapDayWithWageArr.find(fullTimeWage));
// UC 7.e Check if every element of full time wage is truly holding full time wage
function isAllFullTimeWage(dailyWage) {
    return dailyWage.includes(160);
}
console.log("7E--Check if every element of full time wage is truly holding full time wage "
    + fullDayWageArr.every(isAllFullTimeWage));
// UC 7F Check if the wage contains any parttime wage
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("UC 7F Check of any part time wage was earned or not: " +
    mapDayWithWageArr.some(isAnyPartTimeWage));
// UC 7.G Find the number of days employee worked
function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0) {
        numOfDays++;
    }
    return numOfDays;
}
let daysEmpWorked = empDailyWageArr.reduce(totalDaysWorked, 0);
console.log("UC 7.G Number of days employee worked: " + daysEmpWorked);