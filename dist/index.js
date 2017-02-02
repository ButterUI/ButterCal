(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
;(function () {
  "use strict";

  function ButterCal(options) {
    this.WEEKSTART = options.weekstart || 0;

    this.calInit();
  }

  ButterCal.prototype.calInit = function () {
    let currentMonth = this.getCalMonth();

    console.log(currentMonth);
    console.log(this.formatWeekday(3, 'dddd'));
  };

  /**
   * Creates a calendar object with additional metadata.
   *
   * @param date
   * @param weekStart Int - The day that weeks start on. defaults to 0 (Sunday).
   * @returns {{month: (int), dayOfWeek: (int), dateOfMonth: (int), year: (int), data: Array}}
   */
  ButterCal.prototype.getCalMonth = function (date) {
    let weekStart = this.WEEKSTART;

    const dayOfWeek = moment(date).day();
    const year = moment(date).year();
    const month = moment(date).month();
    const lastMonth = month - 1 > 1 ? month - 1 : 12;
    const lastMonthYear = month - 1 > 1 ? year : year - 1;
    const daysInMonth = this._daysInMonth(month, year);
    const daysInLastMonth = this._daysInMonth(lastMonth, lastMonthYear);
    const weeksInMonth = Math.ceil(daysInMonth / 7);
    const calendar = new Array(weeksInMonth);

    let iterations = 0;

    // Iterate over weeks...
    for (let i = 0; i < calendar.length; i++) {
      let week = [];

      // Iterate over days of week...
      for (let j = weekStart; j < 7; j++) {
        iterations++;
        let day = {};

        if (i === 0 && j < dayOfWeek) {
          // Back-fill the end of last month
          day['date'] = daysInLastMonth - dayOfWeek + j + 1;
          day['year'] = lastMonthYear;
          day['month'] = lastMonth;
          iterations = 0;
        } else if (iterations > daysInMonth) {
          // Fill in last week of month starting from 1.
          day['date'] = iterations - daysInMonth;
          day['year'] = year;
          day['month'] = month;
        } else {
          day['date'] = iterations;
          day['year'] = year;
          day['month'] = month;
        }

        day['weekday'] = dayOfWeek;
        day['timestamp'] = +moment([day.year, day.month - 1, day.date]);

        week.push(day);
      }

      calendar[i] = week;
    }

    return {
      month: month,
      dayOfWeek: dayOfWeek,
      dateOfMonth: moment(date).date(),
      year: year,
      data: calendar
    };
  };

  /**
   * Get a formatted string representing the passed day of the week.
   *
   * @param day - Int representing a day in the week.
   * @param format - Moment.js format string.
   * @returns {string}
   */
  ButterCal.prototype.formatWeekday = function (day, format) {
    return moment().day(day + this.WEEKSTART).format(format);
  };

  //---------------------------------
  // PRIVATE FUNCTIONS
  //---------------------------------

  /**
   * Get the number of days in a month.
   * @param {int} m - Month
   * @param {int} y = Year
   * @returns {number}
   */
  ButterCal.prototype._daysInMonth = function (m, y) {
    return m === 2 ? y & 3 || !(y % 25) && y & 15 ? 28 : 29 : 30 + (m + (m >> 3) & 1);
  };

  // Call butterCal
  window.butterCal = ButterCal;
  var cal = new ButterCal({
    weekstart: 1
  });
})();
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YW5uZXIvU2l0ZXMvc2FuZGJveC9CdXR0ZXJDYWwvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy90YW5uZXIvU2l0ZXMvc2FuZGJveC9CdXR0ZXJDYWwvc3JjL2pzL2Zha2VfNDQxMzAyYjIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIjsoZnVuY3Rpb24gKCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBmdW5jdGlvbiBCdXR0ZXJDYWwob3B0aW9ucykge1xuICAgIHRoaXMuV0VFS1NUQVJUID0gb3B0aW9ucy53ZWVrc3RhcnQgfHwgMDtcblxuICAgIHRoaXMuY2FsSW5pdCgpO1xuICB9XG5cbiAgQnV0dGVyQ2FsLnByb3RvdHlwZS5jYWxJbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBjdXJyZW50TW9udGggPSB0aGlzLmdldENhbE1vbnRoKCk7XG5cbiAgICBjb25zb2xlLmxvZyhjdXJyZW50TW9udGgpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybWF0V2Vla2RheSgzLCAnZGRkZCcpKTtcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGNhbGVuZGFyIG9iamVjdCB3aXRoIGFkZGl0aW9uYWwgbWV0YWRhdGEuXG4gICAqXG4gICAqIEBwYXJhbSBkYXRlXG4gICAqIEBwYXJhbSB3ZWVrU3RhcnQgSW50IC0gVGhlIGRheSB0aGF0IHdlZWtzIHN0YXJ0IG9uLiBkZWZhdWx0cyB0byAwIChTdW5kYXkpLlxuICAgKiBAcmV0dXJucyB7e21vbnRoOiAoaW50KSwgZGF5T2ZXZWVrOiAoaW50KSwgZGF0ZU9mTW9udGg6IChpbnQpLCB5ZWFyOiAoaW50KSwgZGF0YTogQXJyYXl9fVxuICAgKi9cbiAgQnV0dGVyQ2FsLnByb3RvdHlwZS5nZXRDYWxNb250aCA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgbGV0IHdlZWtTdGFydCA9IHRoaXMuV0VFS1NUQVJUO1xuXG4gICAgY29uc3QgZGF5T2ZXZWVrID0gbW9tZW50KGRhdGUpLmRheSgpO1xuICAgIGNvbnN0IHllYXIgPSBtb21lbnQoZGF0ZSkueWVhcigpO1xuICAgIGNvbnN0IG1vbnRoID0gbW9tZW50KGRhdGUpLm1vbnRoKCk7XG4gICAgY29uc3QgbGFzdE1vbnRoID0gbW9udGggLSAxID4gMSA/IG1vbnRoIC0gMSA6IDEyO1xuICAgIGNvbnN0IGxhc3RNb250aFllYXIgPSBtb250aCAtIDEgPiAxID8geWVhciA6IHllYXIgLSAxO1xuICAgIGNvbnN0IGRheXNJbk1vbnRoID0gdGhpcy5fZGF5c0luTW9udGgobW9udGgsIHllYXIpO1xuICAgIGNvbnN0IGRheXNJbkxhc3RNb250aCA9IHRoaXMuX2RheXNJbk1vbnRoKGxhc3RNb250aCwgbGFzdE1vbnRoWWVhcik7XG4gICAgY29uc3Qgd2Vla3NJbk1vbnRoID0gTWF0aC5jZWlsKGRheXNJbk1vbnRoIC8gNyk7XG4gICAgY29uc3QgY2FsZW5kYXIgPSBuZXcgQXJyYXkod2Vla3NJbk1vbnRoKTtcblxuICAgIGxldCBpdGVyYXRpb25zID0gMDtcblxuICAgIC8vIEl0ZXJhdGUgb3ZlciB3ZWVrcy4uLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FsZW5kYXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCB3ZWVrID0gW107XG5cbiAgICAgIC8vIEl0ZXJhdGUgb3ZlciBkYXlzIG9mIHdlZWsuLi5cbiAgICAgIGZvciAobGV0IGogPSB3ZWVrU3RhcnQ7IGogPCA3OyBqKyspIHtcbiAgICAgICAgaXRlcmF0aW9ucysrO1xuICAgICAgICBsZXQgZGF5ID0ge307XG5cbiAgICAgICAgaWYgKGkgPT09IDAgJiYgaiA8IGRheU9mV2Vlaykge1xuICAgICAgICAgIC8vIEJhY2stZmlsbCB0aGUgZW5kIG9mIGxhc3QgbW9udGhcbiAgICAgICAgICBkYXlbJ2RhdGUnXSA9IGRheXNJbkxhc3RNb250aCAtIGRheU9mV2VlayArIGogKyAxO1xuICAgICAgICAgIGRheVsneWVhciddID0gbGFzdE1vbnRoWWVhcjtcbiAgICAgICAgICBkYXlbJ21vbnRoJ10gPSBsYXN0TW9udGg7XG4gICAgICAgICAgaXRlcmF0aW9ucyA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlcmF0aW9ucyA+IGRheXNJbk1vbnRoKSB7XG4gICAgICAgICAgLy8gRmlsbCBpbiBsYXN0IHdlZWsgb2YgbW9udGggc3RhcnRpbmcgZnJvbSAxLlxuICAgICAgICAgIGRheVsnZGF0ZSddID0gaXRlcmF0aW9ucyAtIGRheXNJbk1vbnRoO1xuICAgICAgICAgIGRheVsneWVhciddID0geWVhcjtcbiAgICAgICAgICBkYXlbJ21vbnRoJ10gPSBtb250aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkYXlbJ2RhdGUnXSA9IGl0ZXJhdGlvbnM7XG4gICAgICAgICAgZGF5Wyd5ZWFyJ10gPSB5ZWFyO1xuICAgICAgICAgIGRheVsnbW9udGgnXSA9IG1vbnRoO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF5Wyd3ZWVrZGF5J10gPSBkYXlPZldlZWs7XG4gICAgICAgIGRheVsndGltZXN0YW1wJ10gPSArbW9tZW50KFtkYXkueWVhciwgZGF5Lm1vbnRoIC0gMSwgZGF5LmRhdGVdKTtcblxuICAgICAgICB3ZWVrLnB1c2goZGF5KTtcbiAgICAgIH1cblxuICAgICAgY2FsZW5kYXJbaV0gPSB3ZWVrO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBtb250aDogbW9udGgsXG4gICAgICBkYXlPZldlZWs6IGRheU9mV2VlayxcbiAgICAgIGRhdGVPZk1vbnRoOiBtb21lbnQoZGF0ZSkuZGF0ZSgpLFxuICAgICAgeWVhcjogeWVhcixcbiAgICAgIGRhdGE6IGNhbGVuZGFyXG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGEgZm9ybWF0dGVkIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIHBhc3NlZCBkYXkgb2YgdGhlIHdlZWsuXG4gICAqXG4gICAqIEBwYXJhbSBkYXkgLSBJbnQgcmVwcmVzZW50aW5nIGEgZGF5IGluIHRoZSB3ZWVrLlxuICAgKiBAcGFyYW0gZm9ybWF0IC0gTW9tZW50LmpzIGZvcm1hdCBzdHJpbmcuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBCdXR0ZXJDYWwucHJvdG90eXBlLmZvcm1hdFdlZWtkYXkgPSBmdW5jdGlvbiAoZGF5LCBmb3JtYXQpIHtcbiAgICByZXR1cm4gbW9tZW50KCkuZGF5KGRheSArIHRoaXMuV0VFS1NUQVJUKS5mb3JtYXQoZm9ybWF0KTtcbiAgfTtcblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBQUklWQVRFIEZVTkNUSU9OU1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG51bWJlciBvZiBkYXlzIGluIGEgbW9udGguXG4gICAqIEBwYXJhbSB7aW50fSBtIC0gTW9udGhcbiAgICogQHBhcmFtIHtpbnR9IHkgPSBZZWFyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBCdXR0ZXJDYWwucHJvdG90eXBlLl9kYXlzSW5Nb250aCA9IGZ1bmN0aW9uIChtLCB5KSB7XG4gICAgcmV0dXJuIG0gPT09IDIgPyB5ICYgMyB8fCAhKHkgJSAyNSkgJiYgeSAmIDE1ID8gMjggOiAyOSA6IDMwICsgKG0gKyAobSA+PiAzKSAmIDEpO1xuICB9O1xuXG4gIC8vIENhbGwgYnV0dGVyQ2FsXG4gIHdpbmRvdy5idXR0ZXJDYWwgPSBCdXR0ZXJDYWw7XG4gIHZhciBjYWwgPSBuZXcgQnV0dGVyQ2FsKHtcbiAgICB3ZWVrc3RhcnQ6IDFcbiAgfSk7XG59KSgpOyJdfQ==
