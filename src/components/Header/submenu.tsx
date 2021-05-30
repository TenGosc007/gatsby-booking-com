import React from "react";

import iconPoland from "assets/poland.png";
import iconClose from "assets/close.svg";
import iconBalance from "assets/balance.svg";
import iconBook from "assets/book.svg";
import iconCookie from "assets/cookie.svg";
import iconForum from "assets/forum.svg";
import iconHands from "assets/hands.svg";
import iconHome from "assets/home.svg";
import iconInfo from "assets/info.svg";
import iconInfoDark from "assets/infoDark.svg";
import iconMobile from "assets/mobile.svg";
import iconOffer from "assets/offer.svg";
import iconPaper from "assets/paper.svg";
import iconPartner from "assets/partner.svg";
import iconPercents from "assets/percents.svg";
import iconRules from "assets/rules.svg";

interface SummenuInterface {
  handleClick: () => void;
}

const Submenu = ({ handleClick }: SummenuInterface) => {
  return (
    <div className="submenu show">
      <div className="submenu__close">
        <img src={iconClose} alt="X" onClick={handleClick} />
      </div>

      <h2 className="submenu__title">Więcej</h2>

      <ul className="submenu__list">
        <li className="submenu__element">
          <span className="submenu__custom">PLN</span>
          <span>Złoty polski</span>
        </li>
        <li className="submenu__element">
          <img className="img_circle" src={iconPoland} alt="PL" />
          <span>Polski</span>
        </li>
        <li className="submenu__element">
          <img src={iconMobile} alt="mobile" />
          <span>Pobierz aplikację na iPhone'a</span>
        </li>
        <li className="submenu__element">
          <img src={iconHome} alt="add" />
          <span>Zarejestruj swój obiekt</span>
        </li>
      </ul>

      <h3 className="submenu__subtitle">Pomoc i wsparcie</h3>
      <ul className="submenu__list">
        <li className="submenu__element">
          <img src={iconInfoDark} alt="?" />
          <span>Skontaktuj się z obsługą klienta</span>
        </li>
        <li className="submenu__element">
          <img src={iconHands} alt="conflicts" />
          <span>Rozstrzyganie sporów</span>
        </li>
      </ul>

      <h3 className="submenu__subtitle">Inspiracje</h3>
      <ul className="submenu__list">
        <li className="submenu__element">
          <img src={iconPercents} alt="%" />
          <span>Oferty</span>
        </li>
        <li className="submenu__element">
          <img src={iconBook} alt="articles" />
          <span>Artykuły podróżnicze</span>
        </li>
        <li className="submenu__element">
          <img src={iconForum} alt="forum" />
          <span>Społeczności podróżująceych</span>
        </li>
      </ul>

      <h3 className="submenu__subtitle">Ustawienia i informacje prawne</h3>
      <ul className="submenu__list">
        <li className="submenu__element">
          <img src={iconInfo} alt="i" />
          <span>O Booking.com</span>
        </li>
        <li className="submenu__element">
          <img src={iconOffer} alt="work" />
          <span>Oferty pracy</span>
        </li>
        <li className="submenu__element">
          <img src={iconPartner} alt="" />
          <span>Zostań Partnerem Afiliacyjnym</span>
        </li>
        <li className="submenu__element">
          <img src={iconPaper} alt="news" />
          <span>Informacje prasowe</span>
        </li>
        <li className="submenu__element">
          <img src={iconCookie} alt="cookie" />
          <span>Prywatność i ciasteczka</span>
        </li>
        <li className="submenu__element">
          <img src={iconRules} alt="rule" />
          <span>Warunki</span>
        </li>
        <li className="submenu__element">
          <img src={iconBalance} alt="balance" />
          <span>Informacje prawne</span>
        </li>
      </ul>
    </div>
  );
};

export default Submenu;
