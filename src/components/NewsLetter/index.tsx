import React from "react";

import Input1 from "components/Input1";
import Button from "components/Button";
import Checkbox from "components/Checkbox";

const NewsLetter = () => {
  return (
    <div className="news-letter">
      <h2 className="news-letter__header">Oszczędzaj czas i pieniądze!</h2>
      <p className="news-letter__sub-header">
        Zaprenumeruj nasz biuletyn, a będziemy przesyłać Ci najlepsze oferty{" "}
      </p>

      <div className="news-letter__input">
        <Input1 />
        <Button>Zaprenumeruj</Button>
      </div>

      <div className="news-letter__check">
        <Checkbox>
          Wyślij mi link do pobrania BEZPŁATNEJ aplikacji Booking.com!
        </Checkbox>
      </div>
    </div>
  );
};

export default NewsLetter;
