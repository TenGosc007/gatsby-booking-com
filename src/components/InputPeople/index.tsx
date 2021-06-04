import React from "react";

import iconPerson from "assets/person.svg";
import iconArrows from "assets/arrows.svg";

const InputPeople = () => {
  return (
    <div className="input-people">
      <img src={iconPerson} alt="callendar" />
      <div className="input-people__content">
        <div className="input-people__count">2 dorosłych</div>
        <div className="input-people__separator"></div>
        <div className="input-people__count">0 dzieci</div>
        <div className="input-people__separator"></div>
        <div className="input-people__count">1 pokój</div>
      </div>
      <img src={iconArrows} alt="more" />
    </div>
  );
};

export default InputPeople;
