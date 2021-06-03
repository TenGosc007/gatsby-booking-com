import React from "react";

interface Props {
  big?: boolean;
  title: string;
  number: string;
  rest: string;
  imgUrl: string;
  subtitle?: string;
}

const Card2 = ({
  title,
  number,
  rest,
  imgUrl,
  subtitle = "",
  big = false,
}: Props) => {
  return (
    <div className="card2">
      <div
        className={`card2__img ${big && "card2__img--big"}`}
        style={{
          backgroundImage: `url("${imgUrl}")`,
        }}
      ></div>

      <div className="card2__content">
        <h3>{title}</h3>
        <p>
          {number} {rest}
        </p>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Card2;
