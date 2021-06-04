import React from "react";

import iconCallendar from "assets/callendar.svg";

const InputDate = () => {
  return (
    <div className="input-date">
      <img src={iconCallendar} alt="callendar" />
      <div className="input-date__content">
        <div className="input-date__date">sob 5 CZE</div>
        <div className="input-date__separator"></div>
        <div className="input-date__date">sob 6 LIP</div>
      </div>
    </div>
  );
};

export default InputDate;
