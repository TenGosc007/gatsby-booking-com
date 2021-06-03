import React from "react";

import Layout from "components/Layout/layout";
import NewsLetter from "components/NewsLetter";
import Bar from "components/Bar";
import Button from "components/Button";

const NotFound = () => {
  return (
    <Layout
      pageTitle="Booking.com | Oficjalna strona | Najlepsze hotele i nie tylko"
      nav={true}
      number={1}
    >
      <div className="not-found">
        <h2 className="not-found__header">Nie znaleziono strony</h2>
        <p className="not-found__sub-header">
          Zdarza się! Teraz spróbujmy to naprawić.
        </p>

        <div className="not-found__form">
          <label htmlFor="name">Miejsce, nazwa obiektu lub adres: </label>
          <input
            type="text"
            id="name"
            placeholder="np. miasto, region, dzielnica lub konkretny hotel"
          />

          <div className="not-found__date">
            <div className="not-found__column">
              <label htmlFor="from">Od</label>
              <input type="date" id="from" />
            </div>
            <div className="not-found__column">
              <label htmlFor="to">Do</label>
              <input type="date" id="to" />
            </div>
          </div>

          <div className="not-found__btn">
            <Button>Szukaj</Button>
          </div>
        </div>

        <div className="not-found__footer">
          <h3>Inne opcje</h3>

          <p className="not-found__link">Przejdź do strony głównej</p>
          <p className="not-found__link">Lista miejsc</p>
          <p className="not-found__link">Zgłoś błąd</p>
        </div>
      </div>

      <NewsLetter />
      <Bar />
    </Layout>
  );
};

export default NotFound;
