import React from "react";

import iconBed from "assets/bed.svg";
import iconCallendar from "assets/callendar.svg";

const Input = () => {
  return (
    <div className="input">
      <img src={iconBed} alt="bed" />
      <input type="text" placeholder="Dokąd się wybierasz?" />
    </div>
  );
};

export default Input;
