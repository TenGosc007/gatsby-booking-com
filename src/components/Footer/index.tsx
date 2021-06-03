import React from "react";

import partner1 from "assets/partner1.png";
import partner2 from "assets/partner2.png";
import partner3 from "assets/partner3.png";
import partner4 from "assets/partner4.png";
import partner5 from "assets/partner5.png";
import partner6 from "assets/partner6.png";

const Footer = ({ nav = false }) => {
  return (
    <div className="footer">
      <div className="footer__container">
        {nav && (
          <>
            <div className="footer__nav">
              <ul className="footer__list">
                <li> Kraje</li>
                <li> Regiony</li>
                <li> Miasta</li>
                <li> Dzielnice</li>
                <li> Lotniska</li>
                <li> Hotele</li>
                <li> Ciekawe miejsca</li>
              </ul>

              <ul className="footer__list">
                <li>Domy</li>
                <li>Apartamenty</li>
                <li>Ośrodki wypoczynkowe</li>
                <li>Wille</li>
                <li>Hostele</li>
                <li>Obiekty B&B</li>
                <li>Pensjonaty</li>
              </ul>

              <ul className="footer__list">
                <li>Wyjątkowe miejsca na pobyt</li>
                <li>Wszystkie cele podróży</li>
                <li>Opinie</li>
                <li>Artykuły</li>
                <li>Społeczności podróżujących</li>
                <li>Oferty sezonowe i wakacyjne</li>
              </ul>

              <ul className="footer__list">
                <li>Wypożyczalnia samochodów</li>
                <li>Wyszukiwarka lotów</li>
                <li>Rezerwacja restauracji</li>
                <li>Booking.com dla Biur Podróży</li>
              </ul>

              <ul className="footer__list">
                <li>
                  Często zadawane pytania dotyczące koronawirusa (COVID-19)
                </li>
                <li>O Booking.com</li>
                <li>Skontaktuj się z obsługą klienta</li>
                <li>Centrum pomocy</li>
                <li>Careers</li>
                <li>Zrównoważony rozwój</li>
                <li>Informacje prasowe</li>
                <li>Centrum zasobów bezpieczeństwa</li>
                <li>Relacje z inwestorami</li>
                <li>Ogólne Warunki Handlowe</li>
                <li>Rozstrzyganie sporów</li>
                <li>Zasady współpracy</li>
                <li>Oświadczenie o ochronie prywatności i plikach cookies</li>
                <li>Zarządzaj ustawieniami dotyczącymi prywatności</li>
                <li>Kontakt dla firm</li>
              </ul>
            </div>
            <div className="footer__link">Logowanie do Extranetu</div>
          </>
        )}

        <div className="footer__copyright">
          Prawa autorskie © 1996-2021 Booking.com. Wszystkie prawa zastrzeżone.
        </div>
        <div className="footer__text">
          Booking.com jest częścią Booking Holdings Inc. – światowego lidera w
          internetowej branży turystycznej.
        </div>

        <div className="footer__partners">
          <img className="footer__img" src={partner1} alt="partner" />
          <img className="footer__img" src={partner2} alt="partner" />
          <img className="footer__img" src={partner3} alt="partner" />
          <img className="footer__img" src={partner4} alt="partner" />
          <img className="footer__img" src={partner5} alt="partner" />
          <img className="footer__img" src={partner6} alt="partner" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
