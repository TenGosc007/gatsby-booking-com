import React, { useEffect, useState } from "react";
import moment, { Moment } from "moment";

import Popup from "components/Popup";
import Calendar from "components/Calendar";

import iconCallendar from "assets/callendar.svg";

const InputDate = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [value1, setValue1] = useState<Moment>(moment());
  const [value2, setValue2] = useState(moment());

  useEffect(() => {
    setValue2(value2.clone().add(1, "month"));
  }, []);

  return (
    <div className="input-date">
      <img
        src={iconCallendar}
        alt="callendar"
        onClick={() => setIsClicked(!isClicked)}
      />
      <div
        className="input-date__content"
        onClick={() => setIsClicked(!isClicked)}
      >
        <div className="input-date__date">{value1.format("ddd D MMM")}</div>
        <div className="input-date__separator"></div>
        <div className="input-date__date">{value2.format("ddd D MMM")}</div>
      </div>

      {isClicked && (
        <Popup setIsClicked={setIsClicked}>
          <div>
            <div className="input-date__calendar">
              <Calendar
                value={value1}
                onChange={setValue1}
                otherVal={setValue2}
                left
              />
              <Calendar
                value={value2}
                onChange={setValue2}
                otherVal={setValue1}
                right
              />
            </div>
          </div>
        </Popup>
      )}
    </div>
  );
};

export default InputDate;
