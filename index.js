function dateAndTime(){
    // current time
    const now = new Date();

    // to get current UTC Time in milliseconds
    let milli = now.getTime()

    //update current UTC Time
    document.querySelector('[data-testid="CurrentUTCTime"]').textContent = milli

    // get today's day
    const day = now.getDay()

    //possible days
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    
    //Update currentDayOfTheWeek dom
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = days[day]

}

setInterval(dateAndTime, 1000)