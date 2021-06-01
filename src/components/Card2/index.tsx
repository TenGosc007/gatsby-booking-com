import React from "react";

const Card2 = ({ big = false }) => {
  return (
    <div className="card2">
      <div
        className={`card2__img ${big && "card2__img--big"}`}
        style={{
          backgroundImage: `url("https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=")`,
        }}
      ></div>

      <div className="card2__content">
        <h3>Hotele</h3>
        <p>778 666 hoteli</p>
        <p>test</p>
      </div>
    </div>
  );
};

export default Card2;
