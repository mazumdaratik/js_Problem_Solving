function leapYear(year){
    
    if (year % 400 === 0){
        return `${year} is Leap Year.`;
    } else if(year % 100 === 0){
        return `${year} is not Leap Year.`;
    } else if(year % 4 === 0){
        return `${year} is Leap Year.`;
    } else {
        return `${year} is not leap year.`;
    }
}
console.log(leapYear(2023));