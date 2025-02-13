function isLeapYear(year) {
    if (year % 4 == 0 && year % 400 == 0) {
        return `${year} is a leap year.`;
    }
    else if (year % 4 == 0 && year % 100 == 0) {
        return `${year} is not a leap year.`;
    } else if (year % 4 == 0 && year % 100 != 0) {
        return `${year} is a leap year.`;
    }
    else {
        return `${year} is not a leap year.`;
    }
};

let year;

year = 2024;
let result = isLeapYear(year);
console.log(result);
year = 2025;
result = isLeapYear(year);
console.log(result);

year = 2000;
result = isLeapYear(year);
console.log(result);
year = 1900;
result = isLeapYear(year);
console.log(result);

