console.log('hello there!');

let calObject = {
  "month": 1,
  "dayOfWeek": 4,
  "weekStart": 0,
  "dateOfMonth": 11,
  "year": 2017,
  "data": [
    [
      {"date": 1, "year": 2017, "month": 1, "weekday": 1, "timestamp": 1483254000000},
      {"date": 2, "year": 2017, "month": 1, "weekday": 2, "timestamp": 1483340400000},
      {"date": 3, "year": 2017, "month": 1, "weekday": 3, "timestamp": 1483426800000},
      {"date": 4, "year": 2017, "month": 1, "weekday": 4, "timestamp": 1483513200000},
      {"date": 5, "year": 2017, "month": 1, "weekday": 5, "timestamp": 1483599600000},
      {"date": 6, "year": 2017, "month": 1, "weekday": 6, "timestamp": 1483686000000},
      {"date": 7, "year": 2017, "month": 1, "weekday": 7, "timestamp": 1483772400000}
    ],
    [
      {"date": 8, "year": 2017, "month": 1, "weekday": 1, "timestamp": 1483858800000},
      {"date": 9, "year": 2017, "month": 1, "weekday": 2, "timestamp": 1483945200000},
      {"date": 10, "year": 2017, "month": 1, "weekday": 3, "timestamp": 1484031600000},
      {"date": 11, "year": 2017, "month": 1, "weekday": 4, "timestamp": 1484118000000},
      {"date": 12, "year": 2017, "month": 1, "weekday": 5, "timestamp": 1484204400000},
      {"date": 13, "year": 2017, "month": 1, "weekday": 6, "timestamp": 1484290800000},
      {"date": 14, "year": 2017, "month": 1, "weekday": 7, "timestamp": 1484377200000}
    ],
    [
      {"date": 15, "year": 2017, "month": 1, "weekday": 1, "timestamp": 1484463600000},
      {"date": 16, "year": 2017, "month": 1, "weekday": 2, "timestamp": 1484550000000},
      {"date": 17, "year": 2017, "month": 1, "weekday": 3, "timestamp": 1484636400000},
      {"date": 18, "year": 2017, "month": 1, "weekday": 4, "timestamp": 1484722800000},
      {"date": 19, "year": 2017, "month": 1, "weekday": 5, "timestamp": 1484809200000},
      {"date": 20, "year": 2017, "month": 1, "weekday": 6, "timestamp": 1484895600000},
      {"date": 21, "year": 2017, "month": 1, "weekday": 7, "timestamp": 1484982000000}
    ],
    [
      {"date": 22, "year": 2017, "month": 1, "weekday": 1, "timestamp": 1485068400000},
      {"date": 23, "year": 2017, "month": 1, "weekday": 2, "timestamp": 1485154800000},
      {"date": 24, "year": 2017, "month": 1, "weekday": 3, "timestamp": 1485241200000},
      {"date": 25, "year": 2017, "month": 1, "weekday": 4, "timestamp": 1485327600000},
      {"date": 26, "year": 2017, "month": 1, "weekday": 5, "timestamp": 1485414000000},
      {"date": 27, "year": 2017, "month": 1, "weekday": 6, "timestamp": 1485500400000},
      {"date": 28, "year": 2017, "month": 1, "weekday": 7, "timestamp": 1485586800000}
    ],
    [
      {"date": 29, "year": 2017, "month": 1, "weekday": 1, "timestamp": 1485673200000},
      {"date": 30, "year": 2017, "month": 1, "weekday": 2, "timestamp": 1485759600000},
      {"date": 31, "year": 2017, "month": 1, "weekday": 3, "timestamp": 1485846000000},
      {"date": 1, "year": 2017, "month": 2, "weekday": 4, "timestamp": 1485932400000},
      {"date": 2, "year": 2017, "month": 2, "weekday": 5, "timestamp": 1486018800000},
      {"date": 3, "year": 2017, "month": 2, "weekday": 6, "timestamp": 1486105200000},
      {"date": 4, "year": 2017, "month": 2, "weekday": 7, "timestamp": 1486191600000}
    ]
  ]
};

function renderCal(calendarDataObject) {
  // Generate the month title block with ui controls
  let month = `<div class="month">
    <div class="previous-view"><button class="previous-view-button">&lt;</button></div>
    <div class="month-name">${moment().month(calendarDataObject.month).format('MMMM')}</div>
    <div class="next-view"><button class="next-view-button">&gt;</button></div>
  </div>`;

  // Generate the day headers block using weekStart as defined in the data object
  let dayHeaders = [];
  for (let i = 0; i < 7; i++) {
    dayHeaders.push(`<div class="day-header">${moment().day(calendarDataObject.weekStart + i).format('ddd')}</div>`);
  }
  dayHeaders = `<div class="day-headers">${dayHeaders.join('')}</div>`;

  // Generate the days block
  let days = `<div class="days">`;
  calendarDataObject.data.forEach(function(week, i) {
    week.forEach(function(element, j) {
      let classes = ['day'];
      // Add class for whether this day is in the current or a previous/next month
      if (element.month === calendarDataObject.month && element.year === calendarDataObject.year) {
        classes.push('current-month');
      } else if (element.year < calendarDataObject.year) {
        classes.push('previous-month');
      } else if (element.year > calendarDataObject.year) {
        classes.push('next-month');
      } else if (element.month < calendarDataObject.month) {
        classes.push('previous-month');
      } else if (element.month > calendarDataObject.month) {
        classes.push('next-month');
      }
      // Add class for weekday/weekend
      // @TODO: should probably standardize on numeric weekday value
      if (element.weekday === 1 || element.weekday === 7) {
        classes.push('weekend');
      } else {
        classes.push('weekday');
      }
      days += `<div class="${classes.join(' ')}"><span class="date">${element.date}</span></div>`;
    });
  });
  days += `</div>`;

  // Generate the entire calendar rendered HTML
  let calendar = `<div class="calendar">${month}${dayHeaders}${days}</div>`;

  return calendar;
}

// Scratch, thinking about breaking this out into individual pieces
// function renderDay(day) {
//   let template = `<div class="days"></div>`;
//   template = `<div class="day">${day.date}</div>`;
// }
//
// function renderDayHeader(startOfWeek, format = 'ddd') {
//   let template = ``;
//   template  = `<div class="dayOfWeek"></div>`;
//   return moment().day(startOfWeek).format(format);
// }
//
// console.log(renderDayHeader(1));

console.log(renderCal(calObject));

let calendarWrapper = document.getElementById('calendar-wrapper');
calendarWrapper.innerHTML = renderCal(calObject);

// Event delegation and other more complicated things may be annoying without jQuery
// We might look into other solutions for simple pieces we want, or might use jQuery in prototyping?
calendarWrapper.addEventListener('click', function(e){
  // the below will return true for what we want, but adding the class to the .day element
  // w/o jquery is a bit of a pain, will return to later
  // if (e.target.matches('.day, .day *')) {
  if (e.target.matches('.day')) {
    let currentTarget = e.target;
    // Using an if statement to check the class
    if (currentTarget.classList.contains('active')) {
      currentTarget.classList.remove('active');
    } else {
      currentTarget.classList.add('active');
    }
  }
});