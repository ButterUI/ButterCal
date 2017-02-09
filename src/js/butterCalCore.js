;(function(){
  "use strict";

  function ButterCalCore(options) {
    this.WEEKSTART = options.weekstart || 0;

    this.calInit();
  }

  ButterCalCore.prototype.calInit = function() {
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
  ButterCalCore.prototype.getCalMonth = function(date) {
    let weekStart = this.WEEKSTART;

    const dayOfWeek = moment(date).day();
    const year = moment(date).year();
    const month = moment(date).month();
    const lastMonth = month - 1 > 1 ? month - 1 :  12;
    const lastMonthYear = month - 1 > 1 ? year : year - 1;
    const daysInMonth = this._daysInMonth(month, year);
    const daysInLastMonth = this._daysInMonth(lastMonth, lastMonthYear);
    const weeksInMonth = Math.ceil(daysInMonth/7);
    const calendar = new Array(weeksInMonth);

    let iterations = 0;

    // Iterate over weeks...
    for (let i=0; i<calendar.length; i++) {
      let week = [];

      // Iterate over days of week...
      for (let j=weekStart; j<7; j++) {
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
        day['timestamp'] = +moment([day.year, day.month-1, day.date]);

        week.push(day);
      }

      calendar[i] = week;
    }

    return {
      month: month,
      dayOfWeek: dayOfWeek,
      dateOfMonth: moment(date).date(),
      year: year,
      data: calendar,
    };
  };

  /**
   * Get a formatted string representing the passed day of the week.
   *
   * @param day - Int representing a day in the week.
   * @param format - Moment.js format string.
   * @returns {string}
   */
  ButterCalCore.prototype.formatWeekday = function(day, format) {
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
  ButterCalCore.prototype._daysInMonth = function(m, y) {
    return m===2?y&3||!(y%25)&&y&15?28:29:30+(m+(m>>3)&1);
  };

  // Call butterCal
  window.butterCal = ButterCalCore;

  var cal = new ButterCalCore({
    weekstart: 1
  });
})();

