import React from "react";

interface Props {
  title: string;
  imgUrl: string;
  subtitle: string;
}

const Card6 = ({ title, imgUrl, subtitle }: Props) => {
  return (
    <div className="card6">
      <div
        className="card6__img"
        style={{
          backgroundImage: `url("${imgUrl}")`,
        }}
      >
        <div className="card6__content">
          <p className="card6__header">{subtitle}</p>
        </div>
      </div>
      <div className="card6__text">{title}</div>
    </div>
  );
};

export default Card6;
