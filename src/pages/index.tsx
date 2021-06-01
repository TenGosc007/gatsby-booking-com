import React from "react";

import Layout from "components/Layout/layout";
import Input from "components/Input";
import Button from "components/Button";
import Accordion from "components/Accordion";
import Card1 from "components/Card1";
import Card2 from "components/Card2";
import Card3 from "components/Card3";
import Card4 from "components/Card4";
import Card5 from "components/Card5";
import Card6 from "components/Card6";
import NewsLetter from "components/NewsLetter";
import Bar from "components/Bar";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <Accordion />
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

      <div className="card1-area">
        <Card1 />
        <Card1 />
      </div>
      <div className="card1-area">
        <Card1 />
        <Card1 />
        <Card1 />
      </div>

      <div className="card1-area">
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
      </div>

      <div className="card1-area">
        <Card3 />
        <Card3 />
        <Card3 />
        <Card3 />
      </div>

      <div className="card1-area">
        <Card4 />
        <Card4 />
      </div>
      <div className="card1-area">
        <Card4 />
        <Card4 />
        <Card4 />
      </div>

      <div className="card1-area">
        <Card5 />
        <Card5 />
        <Card5 />
        <Card5 />
      </div>

      <div className="card1-area">
        <Card6 />
        <Card6 />
        <Card6 />
        <Card6 />
        <Card6 />
      </div>

      <NewsLetter />

      <Bar></Bar>
    </Layout>
  );
};

export default IndexPage;
