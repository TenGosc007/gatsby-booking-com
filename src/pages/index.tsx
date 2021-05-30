import React from "react";

import Layout from "components/Layout/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <div className="input-area">
        <h2 className="input-area__header">
          Znajdź oferty hoteli, domów i wielu innych obiektów...
        </h2>
        <span className="input-area__sub-header">
          Od przytulnych domków wiejskich po modne apartamenty w mieście
        </span>
      </div>
    </Layout>
  );
};

export default IndexPage;
