import React, { useEffect, useState } from "react";
import { Moment } from "moment";

import buildCalendar from "./build";
import dayStyles, { beforeToday, isNotThisMonth } from "./styles";
import Header from "./header";

interface Props {
  value: Moment;
  onChange: any;
  left?: boolean;
  right?: boolean;
  otherVal: any;
}

const Calendar = ({ value, onChange, left, right, otherVal }: Props) => {
  const [calendar, setCalendar] = useState<Moment[][]>([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  return (
    <div className="calendar">
      <Header
        value={value}
        setValue={onChange}
        left={left}
        right={right}
        otherVal={otherVal}
      />
      <div className="calendar__body">
        <div className="calendar__day-names">
          {["Pn", "Wt", "Śr", "Cz", "Pt", "So", "Nd"].map(
            (d: string, i: number) => (
              <div key={i} className="calendar__week">
                {d}
              </div>
            )
          )}
        </div>
        {calendar.map((week: Moment[], i: number) => (
          <div key={i} className="calendar__container">
            {week.map((day: Moment, i: number) => (
              <div
                key={i}
                className="calendar__day"
                onClick={() => {
                  if (!isNotThisMonth(day, value) && !beforeToday(day)) {
                    setIsClicked(true);
                    return onChange(day);
                  }
                }}
              >
                <div className={dayStyles(day, value, isClicked)}>
                  {day.format("D")}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
