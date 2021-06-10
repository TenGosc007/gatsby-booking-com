import React from "react";
import { Moment } from "moment";

interface Props {
  value: Moment;
  setValue: any;
  left?: boolean | undefined;
  right?: boolean | undefined;
  otherVal: any;
}

const CalendarHeader = ({ value, setValue, left, right, otherVal }: Props) => {
  const currMonthName = () => value.locale("pl").format("MMMM");

  const currYearName = () => value.format("YYYY");

  const prevMonth = () => {
    otherVal(value);
    return value.clone().subtract(1, "month");
  };

  const nextMonth = () => {
    otherVal(value);
    return value.clone().add(1, "month");
  };

  const thisMonth = () => value.isSame(new Date(), "month");

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
