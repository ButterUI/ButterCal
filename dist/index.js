(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
;(function () {
  "use strict";

  function SmoothCal() {
    this.calInit();
  }

  SmoothCal.prototype.calInit = function () {
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
  SmoothCal.prototype.getCalMonth = function (date, weekStart) {
    // TODO: add weekstart option.
    weekStart = weekStart || 0;

    const dayOfWeek = moment(date).day();
    const year = moment(date).year();
    const month = moment(date).month();
    const lastMonth = month - 1 > 1 ? month - 1 : 12;
    const lastMonthYear = month - 1 > 1 ? year : year - 1;
    const daysInMonth = this._daysInMonth(month, year);
    const daysInLastMonth = this._daysInMonth(lastMonth, lastMonthYear);
    const weeksInMonth = Math.ceil(daysInMonth / 7);
    const calendar = new Array(weeksInMonth);

    let totalIterations = 0;

    // Iterate over weeks...
    for (let i = 0; i < calendar.length; i++) {
      let week = [];

      // Iterate over days of week...
      for (let j = 0; j < 7; j++) {
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
  SmoothCal.prototype._daysInMonth = function (m, y) {
    return m === 2 ? y & 3 || !(y % 25) && y & 15 ? 28 : 29 : 30 + (m + (m >> 3) & 1);
  };

  // Call smoothCal
  window.smoothCal = SmoothCal;
  var cal = new smoothCal();
})();
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90YW5uZXIvU2l0ZXMvc2FuZGJveC9zbW9vdGhDYWwvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy90YW5uZXIvU2l0ZXMvc2FuZGJveC9zbW9vdGhDYWwvc3JjL2pzL2Zha2VfODc4ZmRjN2YuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIjsoZnVuY3Rpb24gKCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBmdW5jdGlvbiBTbW9vdGhDYWwoKSB7XG4gICAgdGhpcy5jYWxJbml0KCk7XG4gIH1cblxuICBTbW9vdGhDYWwucHJvdG90eXBlLmNhbEluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5XRUVLREFZUyA9ICdTVU4gTU9OIFRVRSBXRUQgVEhVIEZSSSBTQVQnLnNwbGl0KCcgJyk7XG4gICAgbGV0IGN1cnJlbnRNb250aCA9IHRoaXMuZ2V0Q2FsTW9udGgoKTtcblxuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRNb250aCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBjYWxlbmRhciBvYmplY3Qgd2l0aCBhZGRpdGlvbmFsIG1ldGFkYXRhLlxuICAgKlxuICAgKiBAcGFyYW0gZGF0ZVxuICAgKiBAcGFyYW0gd2Vla1N0YXJ0IEludCAtIFRoZSBkYXkgdGhhdCB3ZWVrcyBzdGFydCBvbi4gZGVmYXVsdHMgdG8gMCAoU3VuZGF5KS5cbiAgICogQHJldHVybnMge3ttb250aDogKGludCksIGRheU9mV2VlazogKGludCksIGRhdGVPZk1vbnRoOiAoaW50KSwgeWVhcjogKGludCksIGRhdGE6IEFycmF5fX1cbiAgICovXG4gIFNtb290aENhbC5wcm90b3R5cGUuZ2V0Q2FsTW9udGggPSBmdW5jdGlvbiAoZGF0ZSwgd2Vla1N0YXJ0KSB7XG4gICAgLy8gVE9ETzogYWRkIHdlZWtzdGFydCBvcHRpb24uXG4gICAgd2Vla1N0YXJ0ID0gd2Vla1N0YXJ0IHx8IDA7XG5cbiAgICBjb25zdCBkYXlPZldlZWsgPSBtb21lbnQoZGF0ZSkuZGF5KCk7XG4gICAgY29uc3QgeWVhciA9IG1vbWVudChkYXRlKS55ZWFyKCk7XG4gICAgY29uc3QgbW9udGggPSBtb21lbnQoZGF0ZSkubW9udGgoKTtcbiAgICBjb25zdCBsYXN0TW9udGggPSBtb250aCAtIDEgPiAxID8gbW9udGggLSAxIDogMTI7XG4gICAgY29uc3QgbGFzdE1vbnRoWWVhciA9IG1vbnRoIC0gMSA+IDEgPyB5ZWFyIDogeWVhciAtIDE7XG4gICAgY29uc3QgZGF5c0luTW9udGggPSB0aGlzLl9kYXlzSW5Nb250aChtb250aCwgeWVhcik7XG4gICAgY29uc3QgZGF5c0luTGFzdE1vbnRoID0gdGhpcy5fZGF5c0luTW9udGgobGFzdE1vbnRoLCBsYXN0TW9udGhZZWFyKTtcbiAgICBjb25zdCB3ZWVrc0luTW9udGggPSBNYXRoLmNlaWwoZGF5c0luTW9udGggLyA3KTtcbiAgICBjb25zdCBjYWxlbmRhciA9IG5ldyBBcnJheSh3ZWVrc0luTW9udGgpO1xuXG4gICAgbGV0IHRvdGFsSXRlcmF0aW9ucyA9IDA7XG5cbiAgICAvLyBJdGVyYXRlIG92ZXIgd2Vla3MuLi5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbGVuZGFyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgd2VlayA9IFtdO1xuXG4gICAgICAvLyBJdGVyYXRlIG92ZXIgZGF5cyBvZiB3ZWVrLi4uXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDc7IGorKykge1xuICAgICAgICB0b3RhbEl0ZXJhdGlvbnMrKztcblxuICAgICAgICBpZiAoaSA9PT0gMCAmJiBqIDwgZGF5T2ZXZWVrKSB7XG4gICAgICAgICAgLy8gQmFjay1maWxsIHRoZSBlbmQgb2YgbGFzdCBtb250aFxuICAgICAgICAgIHdlZWsucHVzaChkYXlzSW5MYXN0TW9udGggLSBkYXlPZldlZWsgKyBqICsgMSk7XG4gICAgICAgIH0gZWxzZSBpZiAodG90YWxJdGVyYXRpb25zID4gZGF5c0luTW9udGgpIHtcbiAgICAgICAgICAvLyBGaWxsIGluIGxhc3Qgd2VlayBvZiBtb250aCBzdGFydGluZyBmcm9tIDEuXG4gICAgICAgICAgd2Vlay5wdXNoKHRvdGFsSXRlcmF0aW9ucyAtIGRheXNJbk1vbnRoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3ZWVrLnB1c2godG90YWxJdGVyYXRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjYWxlbmRhcltpXSA9IHdlZWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIG1vbnRoOiBtb250aCxcbiAgICAgIGRheU9mV2VlazogZGF5T2ZXZWVrLFxuICAgICAgZGF0ZU9mTW9udGg6IG1vbWVudChkYXRlKS5kYXRlKCksXG4gICAgICB5ZWFyOiB5ZWFyLFxuICAgICAgZGF0YTogY2FsZW5kYXJcbiAgICB9O1xuICB9O1xuXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFBSSVZBVEUgRlVOQ1RJT05TXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbnVtYmVyIG9mIGRheXMgaW4gYSBtb250aC5cbiAgICogQHBhcmFtIHtpbnR9IG0gLSBNb250aFxuICAgKiBAcGFyYW0ge2ludH0geSA9IFllYXJcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICovXG4gIFNtb290aENhbC5wcm90b3R5cGUuX2RheXNJbk1vbnRoID0gZnVuY3Rpb24gKG0sIHkpIHtcbiAgICByZXR1cm4gbSA9PT0gMiA/IHkgJiAzIHx8ICEoeSAlIDI1KSAmJiB5ICYgMTUgPyAyOCA6IDI5IDogMzAgKyAobSArIChtID4+IDMpICYgMSk7XG4gIH07XG5cbiAgLy8gQ2FsbCBzbW9vdGhDYWxcbiAgd2luZG93LnNtb290aENhbCA9IFNtb290aENhbDtcbiAgdmFyIGNhbCA9IG5ldyBzbW9vdGhDYWwoKTtcbn0pKCk7Il19
