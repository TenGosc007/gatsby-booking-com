import React from "react";

interface Props {
  children: JSX.Element;
  setIsClicked: (e: boolean) => void;
}

const Popup = ({ children, setIsClicked }: Props) => {
  return (
    <>
      <div className="popup">{children}</div>
      <div className="popup-bg" onClick={() => setIsClicked(false)}></div>
    </>
  );
};

export default Popup;
