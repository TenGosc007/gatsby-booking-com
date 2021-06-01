import React from "react";

const Bar = () => {
  return (
    <div className="bar">
      <button className="bar__btn">Udostępnij obiekt</button>

      <div className="bar__container">
        <div className="bar__content">
          <p className="bar__text">Wersja na telefon</p>
          <p className="bar__text">Twoje konto</p>
          <p className="bar__text">Wprowadzaj zmiany w rezerwacji online</p>
          <p className="bar__text">Skontaktuj się z obsługą klienta</p>
          <p className="bar__text">Zostań naszym Partnerem Afiliacyjnym</p>
          <p className="bar__text">Booking.com dla Biznesu</p>
        </div>
      </div>
    </div>
  );
};

export default Bar;
