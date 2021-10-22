function day(year, month, day) {
    let previousDay = new Date(year, month + 1, day - 1);
    let newYear = previousDay.getFullYear();
    let newMonth = previousDay.getMonth() - 1;
    let newDate = previousDay.getDate();
    console.log(`${newYear}-${newMonth}-${newDate}`);
}

day(2016, 9, 30);