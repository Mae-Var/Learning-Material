const dayWeek = {
    monday: 'Monday',
    tuesday: 'Tuesday',
    wednesday: 'Wednesday',
    thursday: 'Thursday',
    friday: 'Friday',
    saturday: 'Saturday',
    sunday: 'Sunday',
    'ffs--asd': 'Undefined - please type in a valid day of the week.',
};

const getSleepHours = day => {

    switch (day) {
        case dayWeek.monday:
            return 8;
        case dayWeek.tuesday:
            return 8;
        case dayWeek.wednesday:
            return 8;
        case dayWeek.thursday:
            return 8;
        case dayWeek.friday:
            return 8;
        case dayWeek.saturday:
            return 5;
        case dayWeek.sunday:
            return 8;
    }
    return dayWeek["ffs--asd"];
};

/* const getActualSleepHours = () => getSleepHours(dayWeek.monday) + getSleepHours(dayWeek.tuesday) + getSleepHours(dayWeek.wednesday) + getSleepHours(dayWeek.thursday) + getSleepHours(dayWeek.friday) + getSleepHours(dayWeek.saturday) + getSleepHours(dayWeek.sunday);
 */

getActualSleepHours = () => 8 + 8 + 8 + 8 + 8 + 8 + 8;

/*
const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
};
*/

const getIdealSleepHours = idealHours => idealHours * 7;

const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(8);

    if (actualSleepHours === idealSleepHours) {
        return `You have slept for ${actualSleepHours} hours this week, which is the perfect amount of sleep for you!`;
    } else if (actualSleepHours > idealSleepHours) {
        return `You have slept for ${actualSleepHours} hours this week, which is ${actualSleepHours - idealSleepHours} hours more than you needed! Sleep less, bruv!`;
    } else if (actualSleepHours < idealSleepHours) {
        return `You've slept only ${actualSleepHours} hours this week! You needed ${idealSleepHours - actualSleepHours} more hours of sleep, bruv!`;
    }
    return 'There was an unexpected error';
};


console.log(calculateSleepDebt());