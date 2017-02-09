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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YW5uZXIvU2l0ZXMvc2FuZGJveC9CdXR0ZXJDYWwvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy90YW5uZXIvU2l0ZXMvc2FuZGJveC9CdXR0ZXJDYWwvc3JjL2pzL2Zha2VfNjZkMGUxODYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiOyhmdW5jdGlvbiAoKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGZ1bmN0aW9uIEJ1dHRlckNhbENvcmUob3B0aW9ucykge1xuICAgIHRoaXMuV0VFS1NUQVJUID0gb3B0aW9ucy53ZWVrc3RhcnQgfHwgMDtcblxuICAgIHRoaXMuY2FsSW5pdCgpO1xuICB9XG5cbiAgQnV0dGVyQ2FsQ29yZS5wcm90b3R5cGUuY2FsSW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgY3VycmVudE1vbnRoID0gdGhpcy5nZXRDYWxNb250aCgpO1xuXG4gICAgY29uc29sZS5sb2coY3VycmVudE1vbnRoKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm1hdFdlZWtkYXkoMywgJ2RkZGQnKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBjYWxlbmRhciBvYmplY3Qgd2l0aCBhZGRpdGlvbmFsIG1ldGFkYXRhLlxuICAgKlxuICAgKiBAcGFyYW0gZGF0ZVxuICAgKiBAcGFyYW0gd2Vla1N0YXJ0IEludCAtIFRoZSBkYXkgdGhhdCB3ZWVrcyBzdGFydCBvbi4gZGVmYXVsdHMgdG8gMCAoU3VuZGF5KS5cbiAgICogQHJldHVybnMge3ttb250aDogKGludCksIGRheU9mV2VlazogKGludCksIGRhdGVPZk1vbnRoOiAoaW50KSwgeWVhcjogKGludCksIGRhdGE6IEFycmF5fX1cbiAgICovXG4gIEJ1dHRlckNhbENvcmUucHJvdG90eXBlLmdldENhbE1vbnRoID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICBsZXQgd2Vla1N0YXJ0ID0gdGhpcy5XRUVLU1RBUlQ7XG5cbiAgICBjb25zdCBkYXlPZldlZWsgPSBtb21lbnQoZGF0ZSkuZGF5KCk7XG4gICAgY29uc3QgeWVhciA9IG1vbWVudChkYXRlKS55ZWFyKCk7XG4gICAgY29uc3QgbW9udGggPSBtb21lbnQoZGF0ZSkubW9udGgoKTtcbiAgICBjb25zdCBsYXN0TW9udGggPSBtb250aCAtIDEgPiAxID8gbW9udGggLSAxIDogMTI7XG4gICAgY29uc3QgbGFzdE1vbnRoWWVhciA9IG1vbnRoIC0gMSA+IDEgPyB5ZWFyIDogeWVhciAtIDE7XG4gICAgY29uc3QgZGF5c0luTW9udGggPSB0aGlzLl9kYXlzSW5Nb250aChtb250aCwgeWVhcik7XG4gICAgY29uc3QgZGF5c0luTGFzdE1vbnRoID0gdGhpcy5fZGF5c0luTW9udGgobGFzdE1vbnRoLCBsYXN0TW9udGhZZWFyKTtcbiAgICBjb25zdCB3ZWVrc0luTW9udGggPSBNYXRoLmNlaWwoZGF5c0luTW9udGggLyA3KTtcbiAgICBjb25zdCBjYWxlbmRhciA9IG5ldyBBcnJheSh3ZWVrc0luTW9udGgpO1xuXG4gICAgbGV0IGl0ZXJhdGlvbnMgPSAwO1xuXG4gICAgLy8gSXRlcmF0ZSBvdmVyIHdlZWtzLi4uXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYWxlbmRhci5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHdlZWsgPSBbXTtcblxuICAgICAgLy8gSXRlcmF0ZSBvdmVyIGRheXMgb2Ygd2Vlay4uLlxuICAgICAgZm9yIChsZXQgaiA9IHdlZWtTdGFydDsgaiA8IDc7IGorKykge1xuICAgICAgICBpdGVyYXRpb25zKys7XG4gICAgICAgIGxldCBkYXkgPSB7fTtcblxuICAgICAgICBpZiAoaSA9PT0gMCAmJiBqIDwgZGF5T2ZXZWVrKSB7XG4gICAgICAgICAgLy8gQmFjay1maWxsIHRoZSBlbmQgb2YgbGFzdCBtb250aFxuICAgICAgICAgIGRheVsnZGF0ZSddID0gZGF5c0luTGFzdE1vbnRoIC0gZGF5T2ZXZWVrICsgaiArIDE7XG4gICAgICAgICAgZGF5Wyd5ZWFyJ10gPSBsYXN0TW9udGhZZWFyO1xuICAgICAgICAgIGRheVsnbW9udGgnXSA9IGxhc3RNb250aDtcbiAgICAgICAgICBpdGVyYXRpb25zID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChpdGVyYXRpb25zID4gZGF5c0luTW9udGgpIHtcbiAgICAgICAgICAvLyBGaWxsIGluIGxhc3Qgd2VlayBvZiBtb250aCBzdGFydGluZyBmcm9tIDEuXG4gICAgICAgICAgZGF5WydkYXRlJ10gPSBpdGVyYXRpb25zIC0gZGF5c0luTW9udGg7XG4gICAgICAgICAgZGF5Wyd5ZWFyJ10gPSB5ZWFyO1xuICAgICAgICAgIGRheVsnbW9udGgnXSA9IG1vbnRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRheVsnZGF0ZSddID0gaXRlcmF0aW9ucztcbiAgICAgICAgICBkYXlbJ3llYXInXSA9IHllYXI7XG4gICAgICAgICAgZGF5Wydtb250aCddID0gbW9udGg7XG4gICAgICAgIH1cblxuICAgICAgICBkYXlbJ3dlZWtkYXknXSA9IGRheU9mV2VlaztcbiAgICAgICAgZGF5Wyd0aW1lc3RhbXAnXSA9ICttb21lbnQoW2RheS55ZWFyLCBkYXkubW9udGggLSAxLCBkYXkuZGF0ZV0pO1xuXG4gICAgICAgIHdlZWsucHVzaChkYXkpO1xuICAgICAgfVxuXG4gICAgICBjYWxlbmRhcltpXSA9IHdlZWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG1vbnRoOiBtb250aCxcbiAgICAgIGRheU9mV2VlazogZGF5T2ZXZWVrLFxuICAgICAgZGF0ZU9mTW9udGg6IG1vbWVudChkYXRlKS5kYXRlKCksXG4gICAgICB5ZWFyOiB5ZWFyLFxuICAgICAgZGF0YTogY2FsZW5kYXJcbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgYSBmb3JtYXR0ZWQgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgcGFzc2VkIGRheSBvZiB0aGUgd2Vlay5cbiAgICpcbiAgICogQHBhcmFtIGRheSAtIEludCByZXByZXNlbnRpbmcgYSBkYXkgaW4gdGhlIHdlZWsuXG4gICAqIEBwYXJhbSBmb3JtYXQgLSBNb21lbnQuanMgZm9ybWF0IHN0cmluZy5cbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIEJ1dHRlckNhbENvcmUucHJvdG90eXBlLmZvcm1hdFdlZWtkYXkgPSBmdW5jdGlvbiAoZGF5LCBmb3JtYXQpIHtcbiAgICByZXR1cm4gbW9tZW50KCkuZGF5KGRheSArIHRoaXMuV0VFS1NUQVJUKS5mb3JtYXQoZm9ybWF0KTtcbiAgfTtcblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyBQUklWQVRFIEZVTkNUSU9OU1xuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG51bWJlciBvZiBkYXlzIGluIGEgbW9udGguXG4gICAqIEBwYXJhbSB7aW50fSBtIC0gTW9udGhcbiAgICogQHBhcmFtIHtpbnR9IHkgPSBZZWFyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqL1xuICBCdXR0ZXJDYWxDb3JlLnByb3RvdHlwZS5fZGF5c0luTW9udGggPSBmdW5jdGlvbiAobSwgeSkge1xuICAgIHJldHVybiBtID09PSAyID8geSAmIDMgfHwgISh5ICUgMjUpICYmIHkgJiAxNSA/IDI4IDogMjkgOiAzMCArIChtICsgKG0gPj4gMykgJiAxKTtcbiAgfTtcblxuICAvLyBDYWxsIGJ1dHRlckNhbFxuICB3aW5kb3cuYnV0dGVyQ2FsID0gQnV0dGVyQ2FsQ29yZTtcblxuICB2YXIgY2FsID0gbmV3IEJ1dHRlckNhbENvcmUoe1xuICAgIHdlZWtzdGFydDogMVxuICB9KTtcbn0pKCk7Il19
