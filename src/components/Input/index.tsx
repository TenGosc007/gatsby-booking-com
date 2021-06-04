import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectValue, setValue, clear } from "state/input";

import iconBed from "assets/bed.svg";
import iconClose from "assets/close.svg";

const Input = () => {
  const value = useSelector(selectValue);
  const dispatch = useDispatch();

  return (
    <div className="input">
      <img src={iconBed} alt="bed" />
      <input
        type="text"
        placeholder="Dokąd się wybierasz?"
        value={value}
        onChange={(e) => dispatch(setValue(e.target.value))}
      />
      {value && (
        <div className="input__clear" onClick={() => dispatch(clear())}>
          <img src={iconClose} alt="X" />
        </div>
      )}
    </div>
  );
};

export default Input;
