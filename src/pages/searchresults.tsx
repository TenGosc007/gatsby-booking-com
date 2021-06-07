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
import Checkbox from "components/Checkbox";

import myData from "utils/booking-hotel-scraper-04-Jun-2021.json";

import iconMore from "assets/more.svg";

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
                <Checkbox>
                  <>
                    Mniej niż 1 km <span>320</span>
                  </>
                </Checkbox>
              </div>
              <div>
                <Checkbox>
                  <>
                    kryty basen <span>7</span>
                  </>
                </Checkbox>
              </div>
              <div>
                <Checkbox>
                  <>
                    Hotele <span>98</span>
                  </>
                </Checkbox>
              </div>
              <div>
                <Checkbox>
                  <>
                    plaża <span>1</span>
                  </>
                </Checkbox>
              </div>
              <div>
                <Checkbox>
                  <>
                    wanna z hydromasażem / jacuzzi <span>13</span>
                  </>
                </Checkbox>
              </div>
              <div>
                <Checkbox>
                  <>
                    4 gwiazdki <span>50</span>
                  </>
                </Checkbox>
              </div>
              <div>
                <Checkbox>
                  <>
                    Znakomity: ponad <span>9 336</span>
                  </>
                </Checkbox>
              </div>
              <div>
                <Checkbox>
                  <>
                    Kwatery prywatne <span>22</span>
                  </>
                </Checkbox>
              </div>
              <div>
                <Checkbox>
                  <>
                    plac zabaw dla dzieci <span>75</span>
                  </>
                </Checkbox>
              </div>
              <div>
                <Checkbox>
                  <>
                    Ratusz <span>328</span>
                  </>
                </Checkbox>
              </div>
              <div>
                <Checkbox>
                  <>
                    sauna <span>29</span>
                  </>
                </Checkbox>
              </div>
              <div>
                <Checkbox>
                  <>
                    Ostrów Tumski <span>213</span>
                  </>
                </Checkbox>
              </div>
              <div>
                <Checkbox>
                  <>
                    Kempingi <span>2</span>
                  </>
                </Checkbox>
              </div>
              <div>
                <Checkbox>
                  <>
                    Ogród Japoński <span>9</span>
                  </>
                </Checkbox>
              </div>
              <div>
                <Checkbox>
                  <>
                    Hala Stulecia <span>12</span>
                  </>
                </Checkbox>
              </div>
              <div>
                <Checkbox>
                  <>
                    Panorama Racławicka <span>228</span>
                  </>
                </Checkbox>
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
