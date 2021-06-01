import React from "react";

import Input1 from "components/Input1";
import Button from "components/Button";

const NewsLetter = () => {
  return (
    <div className="news-letter">
      <h2 className="news-letter__header">Oszczędzaj czas i pieniądze!</h2>
      <p className="news-letter__sub-header">
        Zaprenumeruj nasz biuletyn, a będziemy przesyłać Ci najlepsze oferty{" "}
      </p>

      <div className="news-letter__input">
        <Input1 />
        <Button />
      </div>

      <div className="news-letter__check">
        <input id="confirm" name="confirm" type="checkbox" />
        <label htmlFor="confirm">
          Wyślij mi link do pobrania BEZPŁATNEJ aplikacji Booking.com!
        </label>
      </div>
    </div>
  );
};

export default NewsLetter;
