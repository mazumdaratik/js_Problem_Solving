function setAlarm(hour, minute){
    const now = new Date();
    const alarmDate = new Date();

    alarmDate.setHours(hour);
    alarmDate.setMinutes(minute);
    console.log(now, alarmDate);

    const difference = alarmDate - now;

    if(difference < 0){
        console.log('Please provide future time.')
        return ;
    }

    setTimeout ( () => {
        console.log(now, alarmDate, difference);
    }, difference);
}

setAlarm(13, 14)