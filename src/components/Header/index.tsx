import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { useDispatch, useSelector } from "react-redux";

import { toggle, setNum, selectIsShow, selectActiveNum } from "state/header";
import Submenu from "./submenu";

import logo from "assets/booking_logo.svg";
import iconPoland from "assets/poland.png";
import iconBed from "assets/bed.svg";
import iconPlane from "assets/plane.svg";
import iconCar from "assets/car.svg";
import iconRollercoster from "assets/rollercoster.svg";
import iconTaxi from "assets/taxi.svg";
import iconQuestion from "assets/question.svg";
import iconLogin from "assets/login.svg";
import iconHamburger from "assets/hamburger.svg";

interface Props {
  number: number;
}

const Header = ({ number }: Props) => {
  const isShow = useSelector(selectIsShow);
  const activeNum = useSelector(selectActiveNum);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNum(number));
  }, [number]);

  return (
    <div className="header">
      <div className="header__bar">
        <div className="header__main">
          <Link to="/">
            <img src={logo} alt="Booking.com" />
          </Link>
        </div>

        <div className="header__group">
          <div className="header__item">
            <button className="simplebtn">PLN</button>
          </div>
          <div className="header__item">
            <button className="simplebtn">
              <img className="img_circle" src={iconPoland} alt="pl" />
            </button>
          </div>
          <div className="header__item">
            <button className="simplebtn">
              <img src={iconQuestion} alt="?" />
            </button>
          </div>
          <div className="header__item">
            <button className="btn_inverted">Udostępnij obiekt</button>
          </div>
          <div className="header__item">
            <Link to="/login">
              <button className="btn_primary">Zarejestruj się</button>
            </Link>
          </div>
          <div className="header__item">
            <Link to="/login">
              <button className="btn_primary">Zaloguj się</button>
            </Link>
          </div>
        </div>

        <div className="header__mobile">
          <div className="header__item">
            <Link to="/login">
              <button className="simplebtn">
                <img className="img_circle" src={iconLogin} alt="login" />
              </button>
            </Link>
          </div>
          <div className="header__item">
            <button className="simplebtn" onClick={() => dispatch(toggle())}>
              <img src={iconHamburger} alt="menu" />
            </button>
          </div>
        </div>
      </div>

      {!!activeNum && (
        <div className="header__tab">
          <ul className="header__nav">
            <Link to="/">
              <li
                className={`header__nav__item ${activeNum === 1 && "active"}`}
              >
                <img src={iconBed} alt="icon"></img>
                <span>Pobyty</span>
              </li>
            </Link>
            <Link to="/flights">
              <li
                className={`header__nav__item ${activeNum === 2 && "active"}`}
              >
                <img src={iconPlane} alt="icon"></img>
                <span>Loty</span>
              </li>
            </Link>
            <Link to="/">
              <li
                className={`header__nav__item ${activeNum === 3 && "active"}`}
              >
                <img src={iconCar} alt="icon"></img>
                <span>Wynajem samochodów</span>
              </li>
            </Link>
            <Link to="/">
              <li
                className={`header__nav__item ${activeNum === 4 && "active"}`}
              >
                <img src={iconRollercoster} alt="icon"></img>
                <span>Atrakcje</span>
              </li>
            </Link>
            <Link to="/">
              <li
                className={`header__nav__item ${activeNum === 5 && "active"}`}
              >
                <img src={iconTaxi} alt="icon"></img>
                <span>Taksówki lotniskowe</span>
              </li>
            </Link>
          </ul>
        </div>
      )}

      {isShow && <Submenu />}
    </div>
  );
};

export default Header;
