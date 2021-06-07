import React from "react";
import { Link } from "gatsby";

import Layout from "components/Layout/layout";
import Accordion from "components/Accordion";
import NewsLetter from "components/NewsLetter";
import Bar from "components/Bar";
import Path from "components/Path";
import Form from "components/Form";
import Button from "components/Button";
import ResultCard from "components/ResultCard";

import myData from "utils/booking-hotel-scraper-04-Jun-2021.json";

import iconMore from "assets/more.svg";

console.log(myData);

const Searchresults = () => {
  return (
    <Layout pageTitle="Booking.com : Hotele w: Wrocław" number={1} nav={true}>
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

      <div className="results">
        <Path
          args={["Polska", "dolnośląskie", "Wrocław", "Wyniki wyszukiwania"]}
        />

        <div className="results__container">
          <div className="results__sidebar">
            <Form />

            <div className="results__side-filters">
              <h4>Popularne filtry</h4>
              <div>
                <input type="checkbox" id="ch1" />
                <label htmlFor="ch1">
                  Mniej niż 1 km <span>320</span>
                </label>
              </div>
              <div>
                <input type="checkbox" id="ch2" />
                <label htmlFor="ch2">
                  kryty basen <span>7</span>
                </label>
              </div>
              <div>
                <input type="checkbox" id="ch3" />
                <label htmlFor="ch3">
                  Hotele <span>98</span>
                </label>
              </div>
              <div>
                <input type="checkbox" id="ch4" />
                <label htmlFor="ch4">
                  plaża <span>1</span>
                </label>
              </div>
              <div>
                <input type="checkbox" id="ch5" />
                <label htmlFor="ch5">
                  wanna z hydromasażem / jacuzzi <span>13</span>
                </label>
              </div>
              <div>
                <input type="checkbox" id="ch6" />
                <label htmlFor="ch6">
                  4 gwiazdki <span>50</span>
                </label>
              </div>
              <div>
                <input type="checkbox" id="ch7" />
                <label htmlFor="ch7">
                  Znakomity: ponad <span>9 336</span>
                </label>
              </div>
              <div>
                <input type="checkbox" id="ch8" />
                <label htmlFor="ch8">
                  Kwatery prywatne <span>22</span>
                </label>
              </div>
              <div>
                <input type="checkbox" id="ch9" />
                <label htmlFor="ch9">
                  plac zabaw dla dzieci <span>75</span>
                </label>
              </div>
              <div>
                <input type="checkbox" id="ch10" />
                <label htmlFor="ch10">
                  Ratusz <span>328</span>
                </label>
              </div>
              <div>
                <input type="checkbox" id="ch11" />
                <label htmlFor="ch11">
                  sauna <span>29</span>
                </label>
              </div>
              <div>
                <input type="checkbox" id="ch12" />
                <label htmlFor="ch12">
                  Ostrów Tumski <span>213</span>
                </label>
              </div>
              <div>
                <input type="checkbox" id="ch13" />
                <label htmlFor="ch13">
                  Kempingi <span>2</span>
                </label>
              </div>
              <div>
                <input type="checkbox" id="ch14" />
                <label htmlFor="ch14">
                  Ogród Japoński <span>9</span>
                </label>
              </div>
              <div>
                <input type="checkbox" id="ch15" />
                <label htmlFor="ch15">
                  Hala Stulecia <span>12</span>
                </label>
              </div>
              <div>
                <input type="checkbox" id="ch16" />
                <label htmlFor="ch16">
                  Panorama Racławicka <span>228</span>
                </label>
              </div>
            </div>
          </div>

          <div className="results__content">
            <div className="results__header-container">
              <h2 className="results__header">
                Wrocław: znaleziono 775 obiektów
              </h2>
              <div className="results__map">
                <Button>Pokaż na mapie</Button>
              </div>
            </div>

            <div className="results__filter">
              <button className="inside acitve">Wybrane przez nas</button>
              <button className="inside">Całe domy i apartamenty</button>
              <button className="inside">
                Gwiazdki (od największej liczby gwiazdek)
              </button>
              <button className="box">
                <img src={iconMore} alt="..." />
              </button>
            </div>

            {myData &&
              [...myData].map((e: any, index: number) => (
                <ResultCard
                  key={index}
                  imgUrl={e["Image URL"]}
                  title={e["Name"]}
                  address={e["Address"]}
                  description={e["Description"]}
                  opinions={e["Reviews"]}
                  score={e["Grade"]}
                />
              ))}
          </div>
        </div>
      </div>

      <NewsLetter />
      <Bar />
    </Layout>
  );
};

export default Searchresults;
