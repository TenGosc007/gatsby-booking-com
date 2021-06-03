import React from "react";
import { Link } from "gatsby";

import Button from "components/Button";

import logo from "assets/booking_logo.svg";
import iconPoland from "assets/poland.png";
import iconApple from "assets/apple.svg";
import iconGoogle from "assets/google.svg";
import iconFacebook from "assets/facebook.svg";

const Login = () => {
  return (
    <div className="login">
      <div className="header">
        <div className="header__bar">
          <div className="header__main">
            <Link to="/">
              <img src={logo} alt="Booking.com" />
            </Link>
          </div>

          <div className="header__group">
            <div className="header__item">
              <button className="simplebtn">
                <img className="img_circle" src={iconPoland} alt="pl" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="login__container">
        <div className="login__header">Zaloguj się lub stwórz konto</div>
        <div className="login__form">
          <label htmlFor="email" className="login__text">
            Adres e-mail
          </label>
          <input type="email" />
          <Button>Kontynuuj za pomocą e-maila</Button>
        </div>

        <div className="login__socialmedia">
          <div className="login__text title">
            lub skorzystaj z jednej z tych opcji
          </div>
          <img src={iconFacebook} alt="F" />
          <img src={iconGoogle} alt="G" />
          <img src={iconApple} alt="A" />
        </div>

        <div className="login__info">
          Zalogowanie się na swoje konto lub utworzenie go jest równoznaczne z
          akceptacją <span>Warunków</span> oraz{" "}
          <span>Oświadczenia o ochronie prywatności</span>.
        </div>

        <div className="login__footer">
          <p>Wszelkie prawa zastrzeżone.</p>
          <p>Prawa autorskie (2006 – 2021) – Booking.com™</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
