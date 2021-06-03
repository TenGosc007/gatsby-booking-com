import React from "react";

import Header from "components/Header";
import Footer from "components/Footer";

interface LayoutInterface {
  pageTitle?: string;
  children: React.ReactNode;
  nav?: boolean;
  number: number;
}

const Layout = ({ pageTitle, children, nav, number }: LayoutInterface) => {
  return (
    <>
      <title>{pageTitle}</title>
      <Header number={number} />
      {children}
      <Footer nav={nav} />
    </>
  );
};

export default Layout;
