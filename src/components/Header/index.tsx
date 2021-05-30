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
  simplebtn,
  img_circle,
  btn_inverted,
  btn_primary,
} from "./header.module.scss";

import logo from "assets/booking_logo.svg";
import iconPoland from "assets/poland.png";
import iconBed from "assets/bed.svg";
import iconPlane from "assets/plane.svg";
import iconCar from "assets/car.svg";
import iconRollercoster from "assets/rollercoster.svg";
import iconTaxi from "assets/taxi.svg";
import iconQuestion from "assets/question.svg";

const Header = () => {
  return (
    <div className={header}>
      <div className={header__bar}>
        <div className={header__main}>
          <img src={logo} alt="Booking.com" />
        </div>

        <div className={header__group}>
          <div className={header__item}>
            <button className={simplebtn}>PLN</button>
          </div>
          <div className={header__item}>
            <button className={simplebtn}>
              <img className={img_circle} src={iconPoland} alt="pl" />
            </button>
          </div>
          <div className={header__item}>
            <button className={simplebtn}>
              <img src={iconQuestion} alt="?" />
            </button>
          </div>
          <div className={header__item}>
            <button className={btn_inverted}>Udostępnij obiekt</button>
          </div>
          <div className={header__item}>
            <button className={btn_primary}>Zarejestruj się</button>
          </div>
          <div className={header__item}>
            <button className={btn_primary}>Zaloguj się</button>
          </div>
        </div>
      </div>

      <div className={header__tab}>
        <ul className={header__nav}>
          <li className={header__nav__item}>
            <img src={iconBed} alt="icon"></img>
            <span>Pobyty</span>
          </li>
          <li className={header__nav__item}>
            <img src={iconPlane} alt="icon"></img>
            <span>Loty</span>
          </li>
          <li className={header__nav__item}>
            <img src={iconCar} alt="icon"></img>
            <span>Wynajem samochodów</span>
          </li>
          <li className={header__nav__item}>
            <img src={iconRollercoster} alt="icon"></img>
            <span>Atrakcje</span>
          </li>
          <li className={header__nav__item}>
            <img src={iconTaxi} alt="icon"></img>
            <span>Taksówki lotniskowe</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
