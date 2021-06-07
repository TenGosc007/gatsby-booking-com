import React, { useEffect, useState } from "react";

import Button from "components/Button";

import iconHeart from "assets/heart.svg";
import iconLike from "assets/like.svg";

interface Props {
  imgUrl: string;
  title: string;
  score: string;
  address: string;
  description: string;
  opinions: string;
}

const ResultCard = ({
  imgUrl,
  title,
  score,
  address,
  description,
  opinions,
}: Props) => {
  const [info, setInfo] = useState({ area: "", city: "", des: "" });

  useEffect(() => {
    if (address) {
      const arr = address.split(",");
      const des = description.split("\n")[1];
      setInfo({ area: arr[1], city: arr[2].split(" ")[2], des: des });
    }
  }, []);

  return (
    <div className="result-card">
      <div className="result-card__img">
        <div
          className="result-card__bg-img"
          style={{
            background: `url("${imgUrl}")`,
          }}
        ></div>
        <div className="result-card__favourite">
          <img src={iconHeart} alt="ulubione" />
        </div>
      </div>

      <div className="result-card__container">
        <div className="result-card__header">
          <div>
            <div className="result-card__flex">
              <h3>{title}</h3>
              <img src={iconLike} alt="like" />
            </div>
            <div>
              <span className="result-card__link">
                {info.area}, {info.city}
              </span>
              <span className="result-card__link">Pokaż na mapie</span>
              1,6 km od centrum
            </div>
          </div>

          <div className="result-card__rating">
            <div>
              <h4>Dobry</h4>
              <p>{opinions} opinii</p>
            </div>
            <div className="result-card__score">{score}</div>
          </div>
        </div>

        <div className="result-card__content">
          <p>{info.des}</p>
          <Button>Pokaż ceny</Button>
        </div>

        <div className="result-card__footer">
          Zarezerwowany 3 razy w ciągu ostatnich 24 godzin
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
