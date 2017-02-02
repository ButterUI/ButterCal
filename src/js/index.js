;(function(){
  "use strict";

  function ButterCal() {
    this.calInit();
  }

  ButterCal.prototype.calInit = function() {
    this.WEEKDAYS = 'SUN MON TUE WED THU FRI SAT'.split(' ');
    let currentMonth = this.getCalMonth();

    console.log(currentMonth);
  };

  /**
   * Creates a calendar object with additional metadata.
   *
   * @param date
   * @param weekStart Int - The day that weeks start on. defaults to 0 (Sunday).
   * @returns {{month: (int), dayOfWeek: (int), dateOfMonth: (int), year: (int), data: Array}}
   */
  ButterCal.prototype.getCalMonth = function(date, weekStart) {
    // TODO: add weekstart option.
    weekStart = weekStart || 0;

    const dayOfWeek = moment(date).day();
    const year = moment(date).year();
    const month = moment(date).month();
    const lastMonth = month - 1 > 1 ? month - 1 :  12;
    const lastMonthYear = month - 1 > 1 ? year : year - 1;
    const daysInMonth = this._daysInMonth(month, year);
    const daysInLastMonth = this._daysInMonth(lastMonth, lastMonthYear);
    const weeksInMonth = Math.ceil(daysInMonth/7);
    const calendar = new Array(weeksInMonth);

    let totalIterations = 0;

    // Iterate over weeks...
    for (let i=0; i<calendar.length; i++) {
      let week = [];

      // Iterate over days of week...
      for (let j=0; j<7; j++) {
        totalIterations++;

        if (i === 0 && j < dayOfWeek) {
          // Back-fill the end of last month
          week.push(daysInLastMonth - dayOfWeek + j + 1);
        } else if (totalIterations > daysInMonth) {
          // Fill in last week of month starting from 1.
          week.push(totalIterations - daysInMonth);
        } else {
          week.push(totalIterations);
        }
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

  //---------------------------------
  // PRIVATE FUNCTIONS
  //---------------------------------

  /**
   * Get the number of days in a month.
   * @param {int} m - Month
   * @param {int} y = Year
   * @returns {number}
   */
  ButterCal.prototype._daysInMonth = function(m, y) {
    return m===2?y&3||!(y%25)&&y&15?28:29:30+(m+(m>>3)&1);
  };


  // Call butterCal
  window.butterCal = ButterCal;
  var cal = new ButterCal();
})();

