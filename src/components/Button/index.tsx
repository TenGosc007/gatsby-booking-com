import React from "react";

interface Props {
  children: JSX.Element | string;
}

const index = ({ children }: Props) => {
  return <button className="button">{children}</button>;
};

export default index;
