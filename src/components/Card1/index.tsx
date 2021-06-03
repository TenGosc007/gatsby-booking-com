import React from "react";

import iconPoland from "assets/poland.png";

interface Props {
  title: string;
  number: string;
  rest: string;
  imgUrl: string;
  subtitle: string;
}

const Card1 = ({ title, number, rest, imgUrl, subtitle }: Props) => {
  return (
    <div
      className="card1"
      style={{
        backgroundImage: `url("${imgUrl}")`,
      }}
    >
      <div className="card1__content">
        <div className="card1__header">
          <span>{title}</span> <img src={iconPoland} alt="PL" />
        </div>
        <p className="card1__sub-header">
          {number} {rest}
        </p>

        <div className="card1__footer">
          <h4>Średnia cena</h4>
          <p>{subtitle} zł</p>
        </div>
      </div>
    </div>
  );
};

export default Card1;
