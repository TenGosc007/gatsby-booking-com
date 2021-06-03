import React from "react";

const BarSimple = () => {
  return (
    <div className="bar">
      <div className="bar__container">
        <div className="bar__content center">
          <p className="bar__text bar__text--light">O Booking.com</p>
          <p className="bar__text bar__text--light">Warunki</p>
          <p className="bar__text bar__text--light">
            Oświadczenie o ochronie prywatności i plikach cookie
          </p>
          <p className="bar__text bar__text--light">Pomoc w zakresie lotów</p>
        </div>
      </div>
    </div>
  );
};

export default BarSimple;
