# ButterCal Usage Goals

## Create a new calendar data object

Default initialization can use any format defined by MomentJS.

```js
var cal = buttercal.month('now')
  .day('tuesday', '1')
  .time('1:00 PM');

// or...

cal.date('Monday, October 12, 2018');
```

## Define a UI

```js
// Set a UI
cal.datepickerUI({
  el: '.myDatepicker',
  monthsToShow: 2,
  weekstart: 1
});

// or maybe a different one
cal.clockUI({
  el: '.myclock'
});
```

## Change the date with relative methods

```js
cal.month('next')
  .day('next')
  .update();
```

You'll notice the 'update' method at the end. All UI's should watch for the `update` method and refresh the display accordingly. This allows you to change the calendar programatically at any point after initialization.

## Define a second end date UI

```js
var endcal = buttercal.date('now +1');

endcal.datePickerUI({
  el: '.enddatepicker',
  monthsToShow: 2,
  weekstart: 1
});
```

Right now, the end date UI isn't tied to the first one. We can restrict the start date from being greater than the end date with the `restrict` module.

## Restricting calendars

```js
// using a date...
cal.restrict('now', '<'); // restrict to dates in the past

// Using an existing calendar object...
cal.restrict(endcal, "<"); // cal must be less than endcal
endcal.restrict(cal, '>='); // endcal must be greater than or equal to cal

```

## Events

Events can be defined by any module.

```js
// Add some events
cal.on('change', function(e, calendar) {
  console.log('Something has changed!');
});

cal.on('nextMonth', function() {
  console.log('Change to next month.');
});

```
