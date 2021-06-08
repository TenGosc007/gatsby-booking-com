import React from "react";
import { Link } from "gatsby";

interface Props {
  children: JSX.Element | string;
  toPage?: string;
}

const index = ({ children, toPage }: Props) => {
  return (
    <button className="button">
      {toPage ? <Link to={toPage}>{children}</Link> : <> {children}</>}
    </button>
  );
};

export default index;
