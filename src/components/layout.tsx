import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "gatsby";

import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./layout.module.scss";
import { selectValue, increment } from "state/counter";

interface LayoutInterface {
  pageTitle?: string;
  children: React.ReactNode;
}

const Layout = ({ pageTitle, children }: LayoutInterface) => {
  const count = useSelector(selectValue);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(increment());
  };

  return (
    <main className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className={heading}>{pageTitle}</h1>
      {children}

      <br />
      <hr />

      <div>
        <p>Count: {count}</p>
        <button onClick={handleClick}>Increment</button>
      </div>
    </main>
  );
};

export default Layout;
