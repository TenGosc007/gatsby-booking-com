import React from "react";

import Header from "components/Header";

interface LayoutInterface {
  pageTitle?: string;
  children: React.ReactNode;
}

const Layout = ({ pageTitle, children }: LayoutInterface) => {
  return (
    <>
      <title>{pageTitle}</title>
      <Header />

      {children}
    </>
  );
};

export default Layout;
