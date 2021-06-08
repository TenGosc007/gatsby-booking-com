import React, { useState } from "react";
import { useSelector } from "react-redux";

import { selectAdult, selectChildren, selectRooms } from "state/counter";
import Options from "./options";

import iconPerson from "assets/person.svg";
import iconArrows from "assets/arrows.svg";

const InputPeople = () => {
  const adult = useSelector(selectAdult);
  const children = useSelector(selectChildren);
  const rooms = useSelector(selectRooms);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="input-people">
      <img
        src={iconPerson}
        alt="callendar"
        onClick={() => setIsClicked(!isClicked)}
      />
      <div
        className="input-people__content"
        onClick={() => setIsClicked(!isClicked)}
      >
        <div className="input-people__count">{adult} dorosłych</div>
        <div className="input-people__separator"></div>
        <div className="input-people__count">{children} dzieci</div>
        <div className="input-people__separator"></div>
        <div className="input-people__count">{rooms} pokój</div>
      </div>
      <img src={iconArrows} alt="more" />

      <Options isClicked={isClicked} setIsClicked={setIsClicked} />
    </div>
  );
};

export default InputPeople;
