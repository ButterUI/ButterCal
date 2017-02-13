(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
console.log('hello there!');

let calObject = {
  "month": 1,
  "dayOfWeek": 4,
  "weekStart": 0,
  "dateOfMonth": 11,
  "year": 2017,
  "data": [[{ "date": 1, "year": 2017, "month": 1, "weekday": 1, "timestamp": 1483254000000 }, { "date": 2, "year": 2017, "month": 1, "weekday": 2, "timestamp": 1483340400000 }, { "date": 3, "year": 2017, "month": 1, "weekday": 3, "timestamp": 1483426800000 }, { "date": 4, "year": 2017, "month": 1, "weekday": 4, "timestamp": 1483513200000 }, { "date": 5, "year": 2017, "month": 1, "weekday": 5, "timestamp": 1483599600000 }, { "date": 6, "year": 2017, "month": 1, "weekday": 6, "timestamp": 1483686000000 }, { "date": 7, "year": 2017, "month": 1, "weekday": 7, "timestamp": 1483772400000 }], [{ "date": 8, "year": 2017, "month": 1, "weekday": 1, "timestamp": 1483858800000 }, { "date": 9, "year": 2017, "month": 1, "weekday": 2, "timestamp": 1483945200000 }, { "date": 10, "year": 2017, "month": 1, "weekday": 3, "timestamp": 1484031600000 }, { "date": 11, "year": 2017, "month": 1, "weekday": 4, "timestamp": 1484118000000 }, { "date": 12, "year": 2017, "month": 1, "weekday": 5, "timestamp": 1484204400000 }, { "date": 13, "year": 2017, "month": 1, "weekday": 6, "timestamp": 1484290800000 }, { "date": 14, "year": 2017, "month": 1, "weekday": 7, "timestamp": 1484377200000 }], [{ "date": 15, "year": 2017, "month": 1, "weekday": 1, "timestamp": 1484463600000 }, { "date": 16, "year": 2017, "month": 1, "weekday": 2, "timestamp": 1484550000000 }, { "date": 17, "year": 2017, "month": 1, "weekday": 3, "timestamp": 1484636400000 }, { "date": 18, "year": 2017, "month": 1, "weekday": 4, "timestamp": 1484722800000 }, { "date": 19, "year": 2017, "month": 1, "weekday": 5, "timestamp": 1484809200000 }, { "date": 20, "year": 2017, "month": 1, "weekday": 6, "timestamp": 1484895600000 }, { "date": 21, "year": 2017, "month": 1, "weekday": 7, "timestamp": 1484982000000 }], [{ "date": 22, "year": 2017, "month": 1, "weekday": 1, "timestamp": 1485068400000 }, { "date": 23, "year": 2017, "month": 1, "weekday": 2, "timestamp": 1485154800000 }, { "date": 24, "year": 2017, "month": 1, "weekday": 3, "timestamp": 1485241200000 }, { "date": 25, "year": 2017, "month": 1, "weekday": 4, "timestamp": 1485327600000 }, { "date": 26, "year": 2017, "month": 1, "weekday": 5, "timestamp": 1485414000000 }, { "date": 27, "year": 2017, "month": 1, "weekday": 6, "timestamp": 1485500400000 }, { "date": 28, "year": 2017, "month": 1, "weekday": 7, "timestamp": 1485586800000 }], [{ "date": 29, "year": 2017, "month": 1, "weekday": 1, "timestamp": 1485673200000 }, { "date": 30, "year": 2017, "month": 1, "weekday": 2, "timestamp": 1485759600000 }, { "date": 31, "year": 2017, "month": 1, "weekday": 3, "timestamp": 1485846000000 }, { "date": 1, "year": 2017, "month": 2, "weekday": 4, "timestamp": 1485932400000 }, { "date": 2, "year": 2017, "month": 2, "weekday": 5, "timestamp": 1486018800000 }, { "date": 3, "year": 2017, "month": 2, "weekday": 6, "timestamp": 1486105200000 }, { "date": 4, "year": 2017, "month": 2, "weekday": 7, "timestamp": 1486191600000 }]]
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
  calendarDataObject.data.forEach(function (week, i) {
    week.forEach(function (element, j) {
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
calendarWrapper.addEventListener('click', function (e) {
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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnRob255c2ltb25lL1NpdGVzL3NhbmRib3gvYnV0dGVyLXVpL0J1dHRlckNhbC9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL2FudGhvbnlzaW1vbmUvU2l0ZXMvc2FuZGJveC9idXR0ZXItdWkvQnV0dGVyQ2FsL3NyYy9qcy9mYWtlX2IxZTVmY2RiLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNvbnNvbGUubG9nKCdoZWxsbyB0aGVyZSEnKTtcblxubGV0IGNhbE9iamVjdCA9IHtcbiAgXCJtb250aFwiOiAxLFxuICBcImRheU9mV2Vla1wiOiA0LFxuICBcIndlZWtTdGFydFwiOiAwLFxuICBcImRhdGVPZk1vbnRoXCI6IDExLFxuICBcInllYXJcIjogMjAxNyxcbiAgXCJkYXRhXCI6IFtbeyBcImRhdGVcIjogMSwgXCJ5ZWFyXCI6IDIwMTcsIFwibW9udGhcIjogMSwgXCJ3ZWVrZGF5XCI6IDEsIFwidGltZXN0YW1wXCI6IDE0ODMyNTQwMDAwMDAgfSwgeyBcImRhdGVcIjogMiwgXCJ5ZWFyXCI6IDIwMTcsIFwibW9udGhcIjogMSwgXCJ3ZWVrZGF5XCI6IDIsIFwidGltZXN0YW1wXCI6IDE0ODMzNDA0MDAwMDAgfSwgeyBcImRhdGVcIjogMywgXCJ5ZWFyXCI6IDIwMTcsIFwibW9udGhcIjogMSwgXCJ3ZWVrZGF5XCI6IDMsIFwidGltZXN0YW1wXCI6IDE0ODM0MjY4MDAwMDAgfSwgeyBcImRhdGVcIjogNCwgXCJ5ZWFyXCI6IDIwMTcsIFwibW9udGhcIjogMSwgXCJ3ZWVrZGF5XCI6IDQsIFwidGltZXN0YW1wXCI6IDE0ODM1MTMyMDAwMDAgfSwgeyBcImRhdGVcIjogNSwgXCJ5ZWFyXCI6IDIwMTcsIFwibW9udGhcIjogMSwgXCJ3ZWVrZGF5XCI6IDUsIFwidGltZXN0YW1wXCI6IDE0ODM1OTk2MDAwMDAgfSwgeyBcImRhdGVcIjogNiwgXCJ5ZWFyXCI6IDIwMTcsIFwibW9udGhcIjogMSwgXCJ3ZWVrZGF5XCI6IDYsIFwidGltZXN0YW1wXCI6IDE0ODM2ODYwMDAwMDAgfSwgeyBcImRhdGVcIjogNywgXCJ5ZWFyXCI6IDIwMTcsIFwibW9udGhcIjogMSwgXCJ3ZWVrZGF5XCI6IDcsIFwidGltZXN0YW1wXCI6IDE0ODM3NzI0MDAwMDAgfV0sIFt7IFwiZGF0ZVwiOiA4LCBcInllYXJcIjogMjAxNywgXCJtb250aFwiOiAxLCBcIndlZWtkYXlcIjogMSwgXCJ0aW1lc3RhbXBcIjogMTQ4Mzg1ODgwMDAwMCB9LCB7IFwiZGF0ZVwiOiA5LCBcInllYXJcIjogMjAxNywgXCJtb250aFwiOiAxLCBcIndlZWtkYXlcIjogMiwgXCJ0aW1lc3RhbXBcIjogMTQ4Mzk0NTIwMDAwMCB9LCB7IFwiZGF0ZVwiOiAxMCwgXCJ5ZWFyXCI6IDIwMTcsIFwibW9udGhcIjogMSwgXCJ3ZWVrZGF5XCI6IDMsIFwidGltZXN0YW1wXCI6IDE0ODQwMzE2MDAwMDAgfSwgeyBcImRhdGVcIjogMTEsIFwieWVhclwiOiAyMDE3LCBcIm1vbnRoXCI6IDEsIFwid2Vla2RheVwiOiA0LCBcInRpbWVzdGFtcFwiOiAxNDg0MTE4MDAwMDAwIH0sIHsgXCJkYXRlXCI6IDEyLCBcInllYXJcIjogMjAxNywgXCJtb250aFwiOiAxLCBcIndlZWtkYXlcIjogNSwgXCJ0aW1lc3RhbXBcIjogMTQ4NDIwNDQwMDAwMCB9LCB7IFwiZGF0ZVwiOiAxMywgXCJ5ZWFyXCI6IDIwMTcsIFwibW9udGhcIjogMSwgXCJ3ZWVrZGF5XCI6IDYsIFwidGltZXN0YW1wXCI6IDE0ODQyOTA4MDAwMDAgfSwgeyBcImRhdGVcIjogMTQsIFwieWVhclwiOiAyMDE3LCBcIm1vbnRoXCI6IDEsIFwid2Vla2RheVwiOiA3LCBcInRpbWVzdGFtcFwiOiAxNDg0Mzc3MjAwMDAwIH1dLCBbeyBcImRhdGVcIjogMTUsIFwieWVhclwiOiAyMDE3LCBcIm1vbnRoXCI6IDEsIFwid2Vla2RheVwiOiAxLCBcInRpbWVzdGFtcFwiOiAxNDg0NDYzNjAwMDAwIH0sIHsgXCJkYXRlXCI6IDE2LCBcInllYXJcIjogMjAxNywgXCJtb250aFwiOiAxLCBcIndlZWtkYXlcIjogMiwgXCJ0aW1lc3RhbXBcIjogMTQ4NDU1MDAwMDAwMCB9LCB7IFwiZGF0ZVwiOiAxNywgXCJ5ZWFyXCI6IDIwMTcsIFwibW9udGhcIjogMSwgXCJ3ZWVrZGF5XCI6IDMsIFwidGltZXN0YW1wXCI6IDE0ODQ2MzY0MDAwMDAgfSwgeyBcImRhdGVcIjogMTgsIFwieWVhclwiOiAyMDE3LCBcIm1vbnRoXCI6IDEsIFwid2Vla2RheVwiOiA0LCBcInRpbWVzdGFtcFwiOiAxNDg0NzIyODAwMDAwIH0sIHsgXCJkYXRlXCI6IDE5LCBcInllYXJcIjogMjAxNywgXCJtb250aFwiOiAxLCBcIndlZWtkYXlcIjogNSwgXCJ0aW1lc3RhbXBcIjogMTQ4NDgwOTIwMDAwMCB9LCB7IFwiZGF0ZVwiOiAyMCwgXCJ5ZWFyXCI6IDIwMTcsIFwibW9udGhcIjogMSwgXCJ3ZWVrZGF5XCI6IDYsIFwidGltZXN0YW1wXCI6IDE0ODQ4OTU2MDAwMDAgfSwgeyBcImRhdGVcIjogMjEsIFwieWVhclwiOiAyMDE3LCBcIm1vbnRoXCI6IDEsIFwid2Vla2RheVwiOiA3LCBcInRpbWVzdGFtcFwiOiAxNDg0OTgyMDAwMDAwIH1dLCBbeyBcImRhdGVcIjogMjIsIFwieWVhclwiOiAyMDE3LCBcIm1vbnRoXCI6IDEsIFwid2Vla2RheVwiOiAxLCBcInRpbWVzdGFtcFwiOiAxNDg1MDY4NDAwMDAwIH0sIHsgXCJkYXRlXCI6IDIzLCBcInllYXJcIjogMjAxNywgXCJtb250aFwiOiAxLCBcIndlZWtkYXlcIjogMiwgXCJ0aW1lc3RhbXBcIjogMTQ4NTE1NDgwMDAwMCB9LCB7IFwiZGF0ZVwiOiAyNCwgXCJ5ZWFyXCI6IDIwMTcsIFwibW9udGhcIjogMSwgXCJ3ZWVrZGF5XCI6IDMsIFwidGltZXN0YW1wXCI6IDE0ODUyNDEyMDAwMDAgfSwgeyBcImRhdGVcIjogMjUsIFwieWVhclwiOiAyMDE3LCBcIm1vbnRoXCI6IDEsIFwid2Vla2RheVwiOiA0LCBcInRpbWVzdGFtcFwiOiAxNDg1MzI3NjAwMDAwIH0sIHsgXCJkYXRlXCI6IDI2LCBcInllYXJcIjogMjAxNywgXCJtb250aFwiOiAxLCBcIndlZWtkYXlcIjogNSwgXCJ0aW1lc3RhbXBcIjogMTQ4NTQxNDAwMDAwMCB9LCB7IFwiZGF0ZVwiOiAyNywgXCJ5ZWFyXCI6IDIwMTcsIFwibW9udGhcIjogMSwgXCJ3ZWVrZGF5XCI6IDYsIFwidGltZXN0YW1wXCI6IDE0ODU1MDA0MDAwMDAgfSwgeyBcImRhdGVcIjogMjgsIFwieWVhclwiOiAyMDE3LCBcIm1vbnRoXCI6IDEsIFwid2Vla2RheVwiOiA3LCBcInRpbWVzdGFtcFwiOiAxNDg1NTg2ODAwMDAwIH1dLCBbeyBcImRhdGVcIjogMjksIFwieWVhclwiOiAyMDE3LCBcIm1vbnRoXCI6IDEsIFwid2Vla2RheVwiOiAxLCBcInRpbWVzdGFtcFwiOiAxNDg1NjczMjAwMDAwIH0sIHsgXCJkYXRlXCI6IDMwLCBcInllYXJcIjogMjAxNywgXCJtb250aFwiOiAxLCBcIndlZWtkYXlcIjogMiwgXCJ0aW1lc3RhbXBcIjogMTQ4NTc1OTYwMDAwMCB9LCB7IFwiZGF0ZVwiOiAzMSwgXCJ5ZWFyXCI6IDIwMTcsIFwibW9udGhcIjogMSwgXCJ3ZWVrZGF5XCI6IDMsIFwidGltZXN0YW1wXCI6IDE0ODU4NDYwMDAwMDAgfSwgeyBcImRhdGVcIjogMSwgXCJ5ZWFyXCI6IDIwMTcsIFwibW9udGhcIjogMiwgXCJ3ZWVrZGF5XCI6IDQsIFwidGltZXN0YW1wXCI6IDE0ODU5MzI0MDAwMDAgfSwgeyBcImRhdGVcIjogMiwgXCJ5ZWFyXCI6IDIwMTcsIFwibW9udGhcIjogMiwgXCJ3ZWVrZGF5XCI6IDUsIFwidGltZXN0YW1wXCI6IDE0ODYwMTg4MDAwMDAgfSwgeyBcImRhdGVcIjogMywgXCJ5ZWFyXCI6IDIwMTcsIFwibW9udGhcIjogMiwgXCJ3ZWVrZGF5XCI6IDYsIFwidGltZXN0YW1wXCI6IDE0ODYxMDUyMDAwMDAgfSwgeyBcImRhdGVcIjogNCwgXCJ5ZWFyXCI6IDIwMTcsIFwibW9udGhcIjogMiwgXCJ3ZWVrZGF5XCI6IDcsIFwidGltZXN0YW1wXCI6IDE0ODYxOTE2MDAwMDAgfV1dXG59O1xuXG5mdW5jdGlvbiByZW5kZXJDYWwoY2FsZW5kYXJEYXRhT2JqZWN0KSB7XG4gIC8vIEdlbmVyYXRlIHRoZSBtb250aCB0aXRsZSBibG9jayB3aXRoIHVpIGNvbnRyb2xzXG4gIGxldCBtb250aCA9IGA8ZGl2IGNsYXNzPVwibW9udGhcIj5cbiAgICA8ZGl2IGNsYXNzPVwicHJldmlvdXMtdmlld1wiPjxidXR0b24gY2xhc3M9XCJwcmV2aW91cy12aWV3LWJ1dHRvblwiPiZsdDs8L2J1dHRvbj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibW9udGgtbmFtZVwiPiR7bW9tZW50KCkubW9udGgoY2FsZW5kYXJEYXRhT2JqZWN0Lm1vbnRoKS5mb3JtYXQoJ01NTU0nKX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibmV4dC12aWV3XCI+PGJ1dHRvbiBjbGFzcz1cIm5leHQtdmlldy1idXR0b25cIj4mZ3Q7PC9idXR0b24+PC9kaXY+XG4gIDwvZGl2PmA7XG5cbiAgLy8gR2VuZXJhdGUgdGhlIGRheSBoZWFkZXJzIGJsb2NrIHVzaW5nIHdlZWtTdGFydCBhcyBkZWZpbmVkIGluIHRoZSBkYXRhIG9iamVjdFxuICBsZXQgZGF5SGVhZGVycyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgIGRheUhlYWRlcnMucHVzaChgPGRpdiBjbGFzcz1cImRheS1oZWFkZXJcIj4ke21vbWVudCgpLmRheShjYWxlbmRhckRhdGFPYmplY3Qud2Vla1N0YXJ0ICsgaSkuZm9ybWF0KCdkZGQnKX08L2Rpdj5gKTtcbiAgfVxuICBkYXlIZWFkZXJzID0gYDxkaXYgY2xhc3M9XCJkYXktaGVhZGVyc1wiPiR7ZGF5SGVhZGVycy5qb2luKCcnKX08L2Rpdj5gO1xuXG4gIC8vIEdlbmVyYXRlIHRoZSBkYXlzIGJsb2NrXG4gIGxldCBkYXlzID0gYDxkaXYgY2xhc3M9XCJkYXlzXCI+YDtcbiAgY2FsZW5kYXJEYXRhT2JqZWN0LmRhdGEuZm9yRWFjaChmdW5jdGlvbiAod2VlaywgaSkge1xuICAgIHdlZWsuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCwgaikge1xuICAgICAgbGV0IGNsYXNzZXMgPSBbJ2RheSddO1xuICAgICAgLy8gQWRkIGNsYXNzIGZvciB3aGV0aGVyIHRoaXMgZGF5IGlzIGluIHRoZSBjdXJyZW50IG9yIGEgcHJldmlvdXMvbmV4dCBtb250aFxuICAgICAgaWYgKGVsZW1lbnQubW9udGggPT09IGNhbGVuZGFyRGF0YU9iamVjdC5tb250aCAmJiBlbGVtZW50LnllYXIgPT09IGNhbGVuZGFyRGF0YU9iamVjdC55ZWFyKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaCgnY3VycmVudC1tb250aCcpO1xuICAgICAgfSBlbHNlIGlmIChlbGVtZW50LnllYXIgPCBjYWxlbmRhckRhdGFPYmplY3QueWVhcikge1xuICAgICAgICBjbGFzc2VzLnB1c2goJ3ByZXZpb3VzLW1vbnRoJyk7XG4gICAgICB9IGVsc2UgaWYgKGVsZW1lbnQueWVhciA+IGNhbGVuZGFyRGF0YU9iamVjdC55ZWFyKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaCgnbmV4dC1tb250aCcpO1xuICAgICAgfSBlbHNlIGlmIChlbGVtZW50Lm1vbnRoIDwgY2FsZW5kYXJEYXRhT2JqZWN0Lm1vbnRoKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaCgncHJldmlvdXMtbW9udGgnKTtcbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudC5tb250aCA+IGNhbGVuZGFyRGF0YU9iamVjdC5tb250aCkge1xuICAgICAgICBjbGFzc2VzLnB1c2goJ25leHQtbW9udGgnKTtcbiAgICAgIH1cbiAgICAgIC8vIEFkZCBjbGFzcyBmb3Igd2Vla2RheS93ZWVrZW5kXG4gICAgICAvLyBAVE9ETzogc2hvdWxkIHByb2JhYmx5IHN0YW5kYXJkaXplIG9uIG51bWVyaWMgd2Vla2RheSB2YWx1ZVxuICAgICAgaWYgKGVsZW1lbnQud2Vla2RheSA9PT0gMSB8fCBlbGVtZW50LndlZWtkYXkgPT09IDcpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKCd3ZWVrZW5kJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGFzc2VzLnB1c2goJ3dlZWtkYXknKTtcbiAgICAgIH1cbiAgICAgIGRheXMgKz0gYDxkaXYgY2xhc3M9XCIke2NsYXNzZXMuam9pbignICcpfVwiPjxzcGFuIGNsYXNzPVwiZGF0ZVwiPiR7ZWxlbWVudC5kYXRlfTwvc3Bhbj48L2Rpdj5gO1xuICAgIH0pO1xuICB9KTtcbiAgZGF5cyArPSBgPC9kaXY+YDtcblxuICAvLyBHZW5lcmF0ZSB0aGUgZW50aXJlIGNhbGVuZGFyIHJlbmRlcmVkIEhUTUxcbiAgbGV0IGNhbGVuZGFyID0gYDxkaXYgY2xhc3M9XCJjYWxlbmRhclwiPiR7bW9udGh9JHtkYXlIZWFkZXJzfSR7ZGF5c308L2Rpdj5gO1xuXG4gIHJldHVybiBjYWxlbmRhcjtcbn1cblxuLy8gU2NyYXRjaCwgdGhpbmtpbmcgYWJvdXQgYnJlYWtpbmcgdGhpcyBvdXQgaW50byBpbmRpdmlkdWFsIHBpZWNlc1xuLy8gZnVuY3Rpb24gcmVuZGVyRGF5KGRheSkge1xuLy8gICBsZXQgdGVtcGxhdGUgPSBgPGRpdiBjbGFzcz1cImRheXNcIj48L2Rpdj5gO1xuLy8gICB0ZW1wbGF0ZSA9IGA8ZGl2IGNsYXNzPVwiZGF5XCI+JHtkYXkuZGF0ZX08L2Rpdj5gO1xuLy8gfVxuLy9cbi8vIGZ1bmN0aW9uIHJlbmRlckRheUhlYWRlcihzdGFydE9mV2VlaywgZm9ybWF0ID0gJ2RkZCcpIHtcbi8vICAgbGV0IHRlbXBsYXRlID0gYGA7XG4vLyAgIHRlbXBsYXRlICA9IGA8ZGl2IGNsYXNzPVwiZGF5T2ZXZWVrXCI+PC9kaXY+YDtcbi8vICAgcmV0dXJuIG1vbWVudCgpLmRheShzdGFydE9mV2VlaykuZm9ybWF0KGZvcm1hdCk7XG4vLyB9XG4vL1xuLy8gY29uc29sZS5sb2cocmVuZGVyRGF5SGVhZGVyKDEpKTtcblxuY29uc29sZS5sb2cocmVuZGVyQ2FsKGNhbE9iamVjdCkpO1xuXG5sZXQgY2FsZW5kYXJXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbGVuZGFyLXdyYXBwZXInKTtcbmNhbGVuZGFyV3JhcHBlci5pbm5lckhUTUwgPSByZW5kZXJDYWwoY2FsT2JqZWN0KTtcblxuLy8gRXZlbnQgZGVsZWdhdGlvbiBhbmQgb3RoZXIgbW9yZSBjb21wbGljYXRlZCB0aGluZ3MgbWF5IGJlIGFubm95aW5nIHdpdGhvdXQgalF1ZXJ5XG4vLyBXZSBtaWdodCBsb29rIGludG8gb3RoZXIgc29sdXRpb25zIGZvciBzaW1wbGUgcGllY2VzIHdlIHdhbnQsIG9yIG1pZ2h0IHVzZSBqUXVlcnkgaW4gcHJvdG90eXBpbmc/XG5jYWxlbmRhcldyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAvLyB0aGUgYmVsb3cgd2lsbCByZXR1cm4gdHJ1ZSBmb3Igd2hhdCB3ZSB3YW50LCBidXQgYWRkaW5nIHRoZSBjbGFzcyB0byB0aGUgLmRheSBlbGVtZW50XG4gIC8vIHcvbyBqcXVlcnkgaXMgYSBiaXQgb2YgYSBwYWluLCB3aWxsIHJldHVybiB0byBsYXRlclxuICAvLyBpZiAoZS50YXJnZXQubWF0Y2hlcygnLmRheSwgLmRheSAqJykpIHtcbiAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJy5kYXknKSkge1xuICAgIGxldCBjdXJyZW50VGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgLy8gVXNpbmcgYW4gaWYgc3RhdGVtZW50IHRvIGNoZWNrIHRoZSBjbGFzc1xuICAgIGlmIChjdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgIGN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfVxuICB9XG59KTsiXX0=
