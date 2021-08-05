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
let empDailyHrsMap = new Map();
// UC10 store daily wage work hours day in a object
let empDailyHrsAndWageArr = new Array();
while (totalEmpHrs <= MAX_WORK_HRS && totalWorkingDays < Number_Of_Working_Days) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyHrsAndWageArr.push(
        {
            dayNum: totalWorkingDays,
            dailyHours: empHrs,
            dailyWage: CalculateWage(empHrs),
            toString() {
                return '\nDay' + this.dayNum + ' => working hours is '
                    + this.dailyHours + ' And wage earned =' + this.dailyWage
            },
        });
}
console.log("UC10 store daily wage, work, hours day in a object: " + empDailyHrsAndWageArr);
// UC 7.a (ii) Use Array.reduce method to calculate total emp wage
let totalWage = empDailyHrsAndWageArr
    .filter(obj => obj.dailyWage > 0)
    .reduce((totalWage, obj) => totalWage += obj.dailyWage, 0);
console.log("\nUC 7.a Total Wage: " + totalWage);
// UC 7.b Calculate total hours and wage using arrow functions
let totalHours = empDailyHrsAndWageArr
    .filter(obj => obj.dailyHours > 0)
    .reduce((totalHours, obj) => totalHours += obj.dailyHours, 0);
console.log("\nUC 11. A Calculate total hours and wage using arrow functions");
console.log("Total Hours: " + totalHours + "   Total Wage: " + totalWage);
// UC 7.c Show the full working days 
console.log("\nUC 7. C Show the full working days");
let fulltimeWorkArray = empDailyHrsAndWageArr.filter(obj => obj.dailyWage == 160)
console.log(fulltimeWorkArray);
// UC 7.d find the first occurence of full time wage 
console.log("\n7. D--first occurence of full time wage on " + empDailyHrsAndWageArr
    .find(obj => obj.dailyWage == 160));
// UC 7.e Check if every element of full time wage is truly holding full time wage
console.log("7E--Check if every element of full time wage is truly holding full time wage: "
    + fulltimeWorkArray.every(obj => obj.dailyWage == 160));
// UC 7F Check if the wage array contains any part time wage
console.log("UC 7F Check of any part time wage was earned or not: " +
    empDailyHrsAndWageArr.some(obj => obj.dailyWage == 80));
// UC 7.G Find the number of days employee worked
function totalDaysWorked(numOfDays, obj) {
    if (obj.dailyHours > 0) {
        numOfDays++;
    }
    return numOfDays;
}
let daysEmpWorked = empDailyHrsAndWageArr.reduce(totalDaysWorked, 0);
console.log("UC 7.G Number of days employee worked: " + daysEmpWorked);