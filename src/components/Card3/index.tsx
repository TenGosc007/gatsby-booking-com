import React, { useEffect, useState } from "react";

interface Props {
  title: string;
  number: string;
  rest: string;
  imgUrl: string;
  subtitle: string;
  extra: string;
}

const Card3 = ({ title, number, rest, imgUrl, subtitle, extra }: Props) => {
  const [quality, setQuality] = useState("");

  useEffect(() => {
    parseInt(number.split(",").join("")) > 95
      ? setQuality("Wyjątkowy")
      : setQuality("Znakomity");
  }, []);

  return (
    <div className="card3">
      <div
        className="card3__img"
        style={{
          backgroundImage: `url("${imgUrl}")`,
        }}
      ></div>
      <div className="card3__content">
        <p className="card3__link">{title}</p>
        <p className="card3__text-second">{extra}</p>

        <h3>{subtitle}</h3>
        <div className="card3__footer">
          <div className="card3__score">{number}</div>
          <p className="card3__text">{quality}</p>
          <p className="card3__text-second">{rest}</p>
        </div>
      </div>
    </div>
  );
};

export default Card3;
