(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
;(function () {
  "use strict";

  function ButterCalCore(options) {
    this.WEEKSTART = options.weekstart || 0;

    this.calInit();
  }

  ButterCalCore.prototype.calInit = function () {
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
  ButterCalCore.prototype.getCalMonth = function (date) {
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
  ButterCalCore.prototype.formatWeekday = function (day, format) {
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
  ButterCalCore.prototype._daysInMonth = function (m, y) {
    return m === 2 ? y & 3 || !(y % 25) && y & 15 ? 28 : 29 : 30 + (m + (m >> 3) & 1);
  };

  // Call butterCal
  window.butterCal = ButterCalCore;

  var cal = new ButterCalCore({
    weekstart: 1
  });
})();
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnRob255c2ltb25lL1NpdGVzL3NhbmRib3gvYnV0dGVyLXVpL0J1dHRlckNhbC9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL1VzZXJzL2FudGhvbnlzaW1vbmUvU2l0ZXMvc2FuZGJveC9idXR0ZXItdWkvQnV0dGVyQ2FsL3NyYy9qcy9mYWtlXzU4NjQ5OWRmLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIjsoZnVuY3Rpb24gKCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBmdW5jdGlvbiBCdXR0ZXJDYWxDb3JlKG9wdGlvbnMpIHtcbiAgICB0aGlzLldFRUtTVEFSVCA9IG9wdGlvbnMud2Vla3N0YXJ0IHx8IDA7XG5cbiAgICB0aGlzLmNhbEluaXQoKTtcbiAgfVxuXG4gIEJ1dHRlckNhbENvcmUucHJvdG90eXBlLmNhbEluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGN1cnJlbnRNb250aCA9IHRoaXMuZ2V0Q2FsTW9udGgoKTtcblxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRNb250aCk7XG4gICAgY29uc29sZS5sb2codGhpcy5mb3JtYXRXZWVrZGF5KDMsICdkZGRkJykpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgY2FsZW5kYXIgb2JqZWN0IHdpdGggYWRkaXRpb25hbCBtZXRhZGF0YS5cbiAgICpcbiAgICogQHBhcmFtIGRhdGVcbiAgICogQHBhcmFtIHdlZWtTdGFydCBJbnQgLSBUaGUgZGF5IHRoYXQgd2Vla3Mgc3RhcnQgb24uIGRlZmF1bHRzIHRvIDAgKFN1bmRheSkuXG4gICAqIEByZXR1cm5zIHt7bW9udGg6IChpbnQpLCBkYXlPZldlZWs6IChpbnQpLCBkYXRlT2ZNb250aDogKGludCksIHllYXI6IChpbnQpLCBkYXRhOiBBcnJheX19XG4gICAqL1xuICBCdXR0ZXJDYWxDb3JlLnByb3RvdHlwZS5nZXRDYWxNb250aCA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgbGV0IHdlZWtTdGFydCA9IHRoaXMuV0VFS1NUQVJUO1xuXG4gICAgY29uc3QgZGF5T2ZXZWVrID0gbW9tZW50KGRhdGUpLmRheSgpO1xuICAgIGNvbnN0IHllYXIgPSBtb21lbnQoZGF0ZSkueWVhcigpO1xuICAgIGNvbnN0IG1vbnRoID0gbW9tZW50KGRhdGUpLm1vbnRoKCk7XG4gICAgY29uc3QgbGFzdE1vbnRoID0gbW9udGggLSAxID4gMSA/IG1vbnRoIC0gMSA6IDEyO1xuICAgIGNvbnN0IGxhc3RNb250aFllYXIgPSBtb250aCAtIDEgPiAxID8geWVhciA6IHllYXIgLSAxO1xuICAgIGNvbnN0IGRheXNJbk1vbnRoID0gdGhpcy5fZGF5c0luTW9udGgobW9udGgsIHllYXIpO1xuICAgIGNvbnN0IGRheXNJbkxhc3RNb250aCA9IHRoaXMuX2RheXNJbk1vbnRoKGxhc3RNb250aCwgbGFzdE1vbnRoWWVhcik7XG4gICAgY29uc3Qgd2Vla3NJbk1vbnRoID0gTWF0aC5jZWlsKGRheXNJbk1vbnRoIC8gNyk7XG4gICAgY29uc3QgY2FsZW5kYXIgPSBuZXcgQXJyYXkod2Vla3NJbk1vbnRoKTtcblxuICAgIGxldCBpdGVyYXRpb25zID0gMDtcblxuICAgIC8vIEl0ZXJhdGUgb3ZlciB3ZWVrcy4uLlxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FsZW5kYXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCB3ZWVrID0gW107XG5cbiAgICAgIC8vIEl0ZXJhdGUgb3ZlciBkYXlzIG9mIHdlZWsuLi5cbiAgICAgIGZvciAobGV0IGogPSB3ZWVrU3RhcnQ7IGogPCA3OyBqKyspIHtcbiAgICAgICAgaXRlcmF0aW9ucysrO1xuICAgICAgICBsZXQgZGF5ID0ge307XG5cbiAgICAgICAgaWYgKGkgPT09IDAgJiYgaiA8IGRheU9mV2Vlaykge1xuICAgICAgICAgIC8vIEJhY2stZmlsbCB0aGUgZW5kIG9mIGxhc3QgbW9udGhcbiAgICAgICAgICBkYXlbJ2RhdGUnXSA9IGRheXNJbkxhc3RNb250aCAtIGRheU9mV2VlayArIGogKyAxO1xuICAgICAgICAgIGRheVsneWVhciddID0gbGFzdE1vbnRoWWVhcjtcbiAgICAgICAgICBkYXlbJ21vbnRoJ10gPSBsYXN0TW9udGg7XG4gICAgICAgICAgaXRlcmF0aW9ucyA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlcmF0aW9ucyA+IGRheXNJbk1vbnRoKSB7XG4gICAgICAgICAgLy8gRmlsbCBpbiBsYXN0IHdlZWsgb2YgbW9udGggc3RhcnRpbmcgZnJvbSAxLlxuICAgICAgICAgIGRheVsnZGF0ZSddID0gaXRlcmF0aW9ucyAtIGRheXNJbk1vbnRoO1xuICAgICAgICAgIGRheVsneWVhciddID0geWVhcjtcbiAgICAgICAgICBkYXlbJ21vbnRoJ10gPSBtb250aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkYXlbJ2RhdGUnXSA9IGl0ZXJhdGlvbnM7XG4gICAgICAgICAgZGF5Wyd5ZWFyJ10gPSB5ZWFyO1xuICAgICAgICAgIGRheVsnbW9udGgnXSA9IG1vbnRoO1xuICAgICAgICB9XG5cbiAgICAgICAgZGF5Wyd3ZWVrZGF5J10gPSBkYXlPZldlZWs7XG4gICAgICAgIGRheVsndGltZXN0YW1wJ10gPSArbW9tZW50KFtkYXkueWVhciwgZGF5Lm1vbnRoIC0gMSwgZGF5LmRhdGVdKTtcblxuICAgICAgICB3ZWVrLnB1c2goZGF5KTtcbiAgICAgIH1cblxuICAgICAgY2FsZW5kYXJbaV0gPSB3ZWVrO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBtb250aDogbW9udGgsXG4gICAgICBkYXlPZldlZWs6IGRheU9mV2VlayxcbiAgICAgIGRhdGVPZk1vbnRoOiBtb21lbnQoZGF0ZSkuZGF0ZSgpLFxuICAgICAgeWVhcjogeWVhcixcbiAgICAgIGRhdGE6IGNhbGVuZGFyXG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGEgZm9ybWF0dGVkIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIHBhc3NlZCBkYXkgb2YgdGhlIHdlZWsuXG4gICAqXG4gICAqIEBwYXJhbSBkYXkgLSBJbnQgcmVwcmVzZW50aW5nIGEgZGF5IGluIHRoZSB3ZWVrLlxuICAgKiBAcGFyYW0gZm9ybWF0IC0gTW9tZW50LmpzIGZvcm1hdCBzdHJpbmcuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBCdXR0ZXJDYWxDb3JlLnByb3RvdHlwZS5mb3JtYXRXZWVrZGF5ID0gZnVuY3Rpb24gKGRheSwgZm9ybWF0KSB7XG4gICAgcmV0dXJuIG1vbWVudCgpLmRheShkYXkgKyB0aGlzLldFRUtTVEFSVCkuZm9ybWF0KGZvcm1hdCk7XG4gIH07XG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gUFJJVkFURSBGVU5DVElPTlNcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogR2V0IHRoZSBudW1iZXIgb2YgZGF5cyBpbiBhIG1vbnRoLlxuICAgKiBAcGFyYW0ge2ludH0gbSAtIE1vbnRoXG4gICAqIEBwYXJhbSB7aW50fSB5ID0gWWVhclxuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKi9cbiAgQnV0dGVyQ2FsQ29yZS5wcm90b3R5cGUuX2RheXNJbk1vbnRoID0gZnVuY3Rpb24gKG0sIHkpIHtcbiAgICByZXR1cm4gbSA9PT0gMiA/IHkgJiAzIHx8ICEoeSAlIDI1KSAmJiB5ICYgMTUgPyAyOCA6IDI5IDogMzAgKyAobSArIChtID4+IDMpICYgMSk7XG4gIH07XG5cbiAgLy8gQ2FsbCBidXR0ZXJDYWxcbiAgd2luZG93LmJ1dHRlckNhbCA9IEJ1dHRlckNhbENvcmU7XG5cbiAgdmFyIGNhbCA9IG5ldyBCdXR0ZXJDYWxDb3JlKHtcbiAgICB3ZWVrc3RhcnQ6IDFcbiAgfSk7XG59KSgpOyJdfQ==
