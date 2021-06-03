import React from "react";

interface Props {
  title: string;
  imgUrl: string;
  subtitle: string;
  extra: string;
}

const Card5 = ({ title, imgUrl, subtitle, extra }: Props) => {
  return (
    <div className="card5">
      <div
        className="card5__img"
        style={{
          backgroundImage: `url("${imgUrl}")`,
        }}
      >
        <div className="card5__content">
          <div className="card5__header">
            <span>{title}</span>
          </div>
          <p className="card5__sub-header">{subtitle}</p>
        </div>
      </div>

      <div className="card5__text">
        {JSON.parse(extra).map((element: string, index: number) => (
          <p key={index} className="card5__link">
            {element},
          </p>
        ))}
      </div>
    </div>
  );
};

export default Card5;
