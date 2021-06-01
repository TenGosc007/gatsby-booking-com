import React from "react";

const Card6 = () => {
  return (
    <div className="card6">
      <div
        className="card6__img"
        style={{
          backgroundImage: `url("https://cf.bstatic.com/images/city/360x240/689/689587.jpg")`,
        }}
      >
        <div className="card6__content">
          <p className="card6__header">
            Podczas wyjazdu do kraju Stany Zjednoczone Ameryki skorzystaj z
            atrakcji takich, jak: relaks, restauracje i zakupy!
          </p>
        </div>
      </div>
      <div className="card6__text">Stany Zjednoczone Ameryki</div>
    </div>
  );
};

export default Card6;
