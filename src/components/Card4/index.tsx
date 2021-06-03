import React from "react";

interface Props {
  title: string;
  imgUrl: string;
  subtitle: string;
}

const Card4 = ({ title, imgUrl, subtitle }: Props) => {
  return (
    <div className="card4">
      <div
        className="card4__img"
        style={{
          backgroundImage: `url("${imgUrl}")`,
        }}
      ></div>

      <div className="card4__content">
        <div className="card4__header">
          <span>{title}</span>
        </div>
        <p className="card4__sub-header">{subtitle}</p>
      </div>
    </div>
  );
};

export default Card4;
