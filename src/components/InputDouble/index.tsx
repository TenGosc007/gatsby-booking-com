import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectValue, setValue, clear } from "state/input";

import iconPlaneHover from "assets/planeHover.svg";
import iconArrows from "assets/arrowsHor.svg";

const InputDouble = () => {
  const value = useSelector(selectValue);
  const dispatch = useDispatch();

  return (
    <div className="input-double">
      <div className="input-double__container">
        <img src={iconPlaneHover} alt="bed" />
        <input
          type="text"
          placeholder="Dokąd się wybierasz?"
          value={"WRO Lotnisko we Wrocławiu"}
        />
      </div>

      <div className="input-double__separator">
        <img src={iconArrows} alt="<>" />
      </div>

      <div className="input-double__container">
        <img src="" alt="" />
        <input
          type="text"
          placeholder="Dokąd się wybierasz?"
          value={value}
          onChange={(e) => dispatch(setValue(e.target.value))}
        />
      </div>
    </div>
  );
};

export default InputDouble;
