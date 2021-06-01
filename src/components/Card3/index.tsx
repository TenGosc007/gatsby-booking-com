import React from "react";

const Card3 = () => {
  return (
    <div className="card3">
      <div
        className="card3__img"
        style={{
          backgroundImage: `url("https://cf.bstatic.com/xdata/images/hotel/max500/103951224.jpg?k=03736dd4e1e89c1132e4957149e394d01ac6e8f64f4b09e30ade97a6176f0640&o=")`,
        }}
      ></div>
      <div className="card3__content">
        <p className="card3__link">Aparthotel Stare Miasto</p>
        <p className="card3__text-second">Kraków</p>

        <h3>Ceny od 347 zł</h3>
        <div className="card3__footer">
          <div className="card3__score">9,0</div>
          <p className="card3__text">Znakomity</p>
          <p className="card3__text-second">3 432 opinii</p>
        </div>
      </div>
    </div>
  );
};

export default Card3;
