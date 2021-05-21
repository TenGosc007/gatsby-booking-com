import React from "react";

import {
  header,
  header__bar,
  header__main,
  header__group,
  header__item,
  header__tab,
  header__nav,
  header__nav__item,
} from "./header.module.scss";
import logo from "assets/booking_logo.svg";

const Header = () => {
  return (
    <div className={header}>
      <div className={header__bar}>
        <div className={header__main}>
          <img src={logo} alt="Booking.com" />
        </div>

        <div className={header__group}>
          <div className={header__item}>
            <button>PLN</button>
          </div>
          <div className={header__item}>
            <button>PLN</button>
          </div>
          <div className={header__item}>
            <button>?</button>
          </div>
          <div className={header__item}>
            <button>Udostępnij obiekt</button>
          </div>
          <div className={header__item}>
            <button>Zarejestruj się</button>
          </div>
          <div className={header__item}>
            <button>Zaloguj się</button>
          </div>
        </div>
      </div>

      <div className={header__tab}>
        <ul className={header__nav}>
          <li className={header__nav__item}>Pobyty</li>
          <li className={header__nav__item}>Loty</li>
          <li className={header__nav__item}>Wynajem samochodów</li>
          <li className={header__nav__item}>Atrakcje</li>
          <li className={header__nav__item}>Taksówki lotniskowe</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
