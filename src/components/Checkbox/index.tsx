import React from "react";

interface Props {
  children: JSX.Element | string;
}

const Checkbox = ({ children }: Props) => {
  return (
    <label className="checkbox">
      {children}
      <input type="checkbox" />
      <span className="checkbox__checkmark"></span>
    </label>
  );
};

export default Checkbox;
