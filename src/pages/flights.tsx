import React from "react";

import Layout from "components/Layout/layout";
import InputDate from "components/InputDate";
import InputDouble from "components/InputDouble";
import Button from "components/Button";
import Accordion from "components/Accordion";
import BarSimple from "components/BarSimple";
import Checkbox from "components/Checkbox";
import Radio from "components/Radio";

import iconWorld from "assets/world.svg";
import iconMagnifing from "assets/magnifing.svg";
import iconFlight from "assets/flight.svg";

const Flights = () => {
  return (
    <Layout pageTitle="Flights - Booking.com" number={2}>
      <Accordion
        title="Koronawirus (COVID-19) - wsparcie"
        link={{
          to: "https://www.gov.pl/web/koronawirus",
          text: "Dowiedz się więcej",
        }}
      >
        <>
          Sprawdź ograniczenia dotyczące podróżowania. Podróżowanie może być
          dozwolone tylko w określonych celach, a podróżowanie zwłaszcza w
          celach turystycznych może nie być dozwolone.
        </>
      </Accordion>

      <div className="flights">
        <div className="input-area">
          <div className="input-area__container">
            <h2 className="input-area__header">
              Wyszukaj i zarezerwuj swój kolejny lot
            </h2>
            <p className="input-area__sub-header">
              Gdy nadejdzie odpowiedni moment, będziemy tutaj
            </p>

            <div className="input-area__radio">
              <Radio>W obie strony</Radio>
              <Radio>W jedną stronę</Radio>
              <Radio>Kilka miast</Radio>

              <div className="input-area__column">
                <select
                  className="input-area__select"
                  name="flight-class"
                  id="flightClass"
                >
                  <option value="Ekonomiczna">Ekonomiczna</option>
                  <option value="Premium">Ekonomiczna Premium</option>
                  <option value="Biznesowa">Biznesowa</option>
                  <option value="Pierwsza">Pierwsza klasa</option>
                </select>
              </div>
            </div>

            <div className="input-area__area">
              <InputDouble />
              <InputDate />
              <Button>Szukaj</Button>
            </div>

            <div className="input-area__check">
              <Checkbox>Tylko loty bezpośrednie</Checkbox>
            </div>
          </div>
        </div>

        <div className="flights__info">
          <div className="flights__segment">
            <img src={iconWorld} alt="img" />
            <div className="flights__text">
              <div className="flights__text--bold">Znajdź idealny lot</div>
              <div className="flights__text--normal">
                Łączymy loty z różnych linii lotniczych, aby przedstawić Ci
                świetne oferty
              </div>
            </div>
          </div>
          <div className="flights__segment">
            <img src={iconMagnifing} alt="img" />
            <div className="flights__text">
              <div className="flights__text--bold">Brak ukrytych opłat</div>
              <div className="flights__text--normal">Wiesz, za co płacisz</div>
            </div>
          </div>
          <div className="flights__segment">
            <img src={iconFlight} alt="img" />
            <div className="flights__text">
              <div className="flights__text--bold">Większa swoboda</div>
              <div className="flights__text--normal">
                Zachowaj swobodę wyboru terminu podróży dzięki możliwościom,
                jakie daje bilet elastyczny
              </div>
            </div>
          </div>
        </div>
      </div>

      <BarSimple />
    </Layout>
  );
};

export default Flights;
