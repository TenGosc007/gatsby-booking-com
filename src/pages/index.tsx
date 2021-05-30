import React from "react";

import Layout from "components/Layout/layout";
import Input from "components/Input";
import Button from "components/Button";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <div className="input-area">
        <div className="input-area__container">
          <h2 className="input-area__header">
            Znajdź oferty hoteli, domów i wielu innych obiektów...
          </h2>
          <p className="input-area__sub-header">
            Od przytulnych domków wiejskich po modne apartamenty w mieście
          </p>

          <div className="input-area__area">
            <Input />
            <Input />
            <Input />
            <Button />
          </div>

          <div className="input-area__check">
            <input id="trip" name="trip" type="checkbox" />
            <label htmlFor="trip">Podróżuję służbowo </label>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
