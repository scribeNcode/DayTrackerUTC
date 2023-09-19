function dateAndTime() {
  // current time
  const now = new Date();
  console.log(now);

  // to get current UTC Time in milliseconds
  let hour = now.getHours();
  let minute = now.getMinutes();
  let seconds = now.getSeconds();

  //update current Time
  document.getElementById("hour").textContent = `${hour} :`;
  document.getElementById("minute").textContent = `${minute} :`;
  document.getElementById("seconds").textContent = seconds;

  // get today's day
  const day = now.getDay();

  //todays date
  let todaysDate = now.getDate();

  //month
  let month = now.getMonth();

  //year
  let year = now.getFullYear();

  //possible days
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  //possible Months
  let possibleMonths = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  //Update currentDayOfTheWeek dom
  document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  ).textContent = `${days[day]},`;
  document.getElementById("date").textContent = todaysDate;
  document.getElementById("month").textContent = possibleMonths[month];
  document.getElementById("year").textContent = year;
}

//real time update of Time and Day
setInterval(dateAndTime, 1000);
