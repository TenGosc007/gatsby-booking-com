import React from "react";

interface Props {
  children: JSX.Element | string;
}

const Radio = ({ children }: Props) => {
  return (
    <label className="radio">
      {children}
      <input type="radio" name="radio" />
      <span className="radio__checkmark"></span>
    </label>
  );
};

export default Radio;
