console.log("Welcome To EmployeeWage!!");

const wagePerHour = 20;
const fullDayHours = 8;
const partTimeHours = 4;
const workingDaysPerMonth = 20;

let totalWage = 0;
let dailyWageMap = new Map();

let empDailyHourWage = new Map();
let empDailyWage = new Map();

for (let day = 1; day <= workingDaysPerMonth; day++) {
    let employeeAttendance;
    let check = Math.floor(Math.random() * 3);

    switch (check) {
        case 0:
            employeeAttendance = "Absent";
            break;
        case 1:
            employeeAttendance = "Part-Time";
            break;
        case 2:
            employeeAttendance = "Full-Time";
            break;
        default:
            employeeAttendance = "Invalid";
    }

    let employeeWage = 0;

    switch (employeeAttendance) {
        case "Part-Time":
            employeeWage = wagePerHour * partTimeHours;
            break;
        case "Full-Time":
            employeeWage = wagePerHour * fullDayHours;
            break;
    }

    dailyWageMap.set("Day " + day, employeeWage);
    totalWage += employeeWage;

    empDailyHourWage.set(workingDaysPerMonth, wagePerHour);
    empDailyWage.set(workingDaysPerMonth, employeeWage);
}

<<<<<<< HEAD
console.log("Daily Wage Map: ", dailyWageMap);
console.log("Total Wage for the Month: " + totalWage);
=======
//Using Reduce and ForEach
let totalWageUsingReduce = dailyWageArray.reduce((total, wage) => total + wage, 0);
console.log("Daily Wage Array: " + dailyWageArray);
console.log("Total Wage for the Month (using reduce): " + totalWageUsingReduce);


//Using Map Functions

let dailyWageWithDay = dailyWageArray.map((wage, index) => `Day ${index + 1}: ${wage}`);
console.log("Daily Wage with Day: " + dailyWageWithDay);


//Shows Only Days Where Empolyee Earn Only 160;

let fullTimeWageDays = dailyWageArray
    .map((wage, index) => (wage === wagePerHour * fullDayHours ? index + 1 : null))
    .filter(day => day !== null);

console.log("Days when Full-time wage of 160 was earned: " + fullTimeWageDays);


//Find First Time wage Using Find Functions

let firstFullTimeWageDay = dailyWageArray.findIndex(wage => wage === wagePerHour * fullDayHours);
console.log("First occurrence when Full Time Wage was earned: Day " + (firstFullTimeWageDay + 1));

//Checking Every Element is truly holdig full time Wage

let isAllFullTimeWage = dailyWageArray.every(wage => wage === wagePerHour * fullDayHours);
console.log("Is every element of Full Time Wage truly holding Full-time wage? " + isAllFullTimeWage);

//Checking Partime Wage of Employee Using Some Funtion

let hasPartTimeWage = dailyWageArray.some(wage => wage === wagePerHour * partTimeHours);
console.log("Is there any Part Time Wage? " + hasPartTimeWage);


//finding number of working day employee 

let numberOfDaysWorked = dailyWageArray.filter(wage => wage > 0).length;
console.log("Number of days the Employee worked: " + numberOfDaysWorked);

//Arrow Function

const findTotal = (total, dailyWageWithDay) => {
    return dailyWageWithDay + total;
}
let count = 0;
let totaHour = Array.from(empDailyHourWage.values()).reduce(findTotal, 0);
let totalSalary = dailyWageArray.filter(dailyWage => dailyWage > 0).reduce((total, dailyWage) => total + dailyWage, 0);

console.log("Total Hour: " + totaHour + " TotalSalary: " + totalSalary);
//UC-9

let nonWorkingDay = new Array();
let partWorkingDay = new Array();
let fullWoringDay = new Array();

empDailyHourWage.forEach((value, key, map) => {
    if (value == 8) fullWoringDay.push(key);
    else if (value == 4) partWorkingDay.push(key);
    else nonWorkingDay.push(key);

});

console.log("FullWorking: " + fullWoringDay);
console.log("PartWorking: " + partWorkingDay);
console.log("NonWorking:  " + nonWorkingDay);
>>>>>>> UC-9
