import React from "react";

import Header from "components/Header";
import Footer from "components/Footer";

interface LayoutInterface {
  pageTitle?: string;
  children: React.ReactNode;
  nav?: boolean;
}

const Layout = ({ pageTitle, children, nav }: LayoutInterface) => {
  return (
    <>
      <title>{pageTitle}</title>
      <Header />
      {children}
      <Footer nav={nav} />
    </>
  );
};

export default Layout;
