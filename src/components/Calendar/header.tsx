import React from "react";

const CalendarHeader = ({ value, setValue, left, right, otherVal }: any) => {
  function currMonthName() {
    return value.locale("pl").format("MMMM");
  }

  function currYearName() {
    return value.format("YYYY");
  }

  function prevMonth() {
    otherVal(value);
    return value.clone().subtract(1, "month");
  }

  function nextMonth() {
    otherVal(value);
    return value.clone().add(1, "month");
  }

  function thisMonth() {
    return value.isSame(new Date(), "month");
  }

  return (
    <div className="calendar__header">
      <div
        className="calendar__arrow calendar__arrow--left"
        onClick={() => !thisMonth() && setValue(prevMonth())}
      >
        {left && !thisMonth() ? String.fromCharCode(10094) : null}
      </div>
      <div>
        {currMonthName()} {currYearName()}
      </div>
      <div
        className="calendar__arrow calendar__arrow--right"
        onClick={() => setValue(nextMonth())}
      >
        {right ? String.fromCharCode(10095) : null}
      </div>
    </div>
  );
};

export default CalendarHeader;
