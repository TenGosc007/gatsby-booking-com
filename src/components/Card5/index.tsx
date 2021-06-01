import React from "react";

const Card5 = () => {
  return (
    <div className="card5">
      <div
        className="card5__img"
        style={{
          backgroundImage: `url("https://cf.bstatic.com/xdata/images/city/400x300/972796.webp?k=04caac6b2ef3881fab9c96114b63f44a16782a19d297b5f1c0371d39aff13485&o=")`,
        }}
      >
        <div className="card5__content">
          <div className="card5__header">
            <span>Gdańsk</span>
          </div>
          <p className="card5__sub-header">Polska</p>
        </div>
      </div>

      <div className="card5__text">
        <p className="card5__link">2 740 obiektów na wynajem sezonowy, </p>
        <p className="card5__link">2 618 apartamentów, </p>
        <p className="card5__link">121 kwater prywatnych, </p>
        <p className="card5__link">65 obiektów B&B, </p>
        <p className="card5__link">51 hosteli</p>
      </div>
    </div>
  );
};

export default Card5;
