import React from "react";

import iconPoland from "assets/poland.png";
import image1 from "assets/img1.webp";

const Card1 = () => {
  return (
    <div
      className="card1"
      style={{
        backgroundImage: `url("https://cf.bstatic.com/xdata/images/city/540x270/653080.webp?k=389326fef4805a4bdb9aa6ea47fbd93de32f2eb0a54a1c31044e237284f52492&o=")`,
      }}
    >
      <div className="card1__content">
        <div className="card1__header">
          <span>Warszawa</span> <img src={iconPoland} alt="PL" />
        </div>
        <p className="card1__sub-header">4652 obiekty</p>

        <div className="card1__footer">
          <h4>Średnia cena</h4>
          <p>227 zł</p>
        </div>
      </div>
    </div>
  );
};

export default Card1;
