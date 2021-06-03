import React from "react";

const Breadcrumb = () => {
  return (
    <div className="breadcrumb">
      <div className="breadcrumb__nav">
        <ul>
          <li className="breadcrumb--active">Regiony </li>
          <li>Miasta </li>
          <li>Ciekawe miejsca </li>
        </ul>
      </div>

      <div className="breadcrumb__content">
        {
          <ul>
            <li>
              Zalew Zegrzyński
              <span>29 obiektów</span>
            </li>
            <li>
              dolnośląskie
              <span>4 863 obiekty</span>
            </li>
            <li>
              lubuskie
              <span>586 obiektów</span>
            </li>
            <li>
              wielkopolskie
              <span>2 008 obiektów</span>
            </li>
            <li>
              Kaszuby
              <span>4 176 obiektów</span>
            </li>
            <li>
              Pieniny Mountains
              <span>494 obiekty</span>
            </li>
            <li>
              Morze Bałtyckie
              <span>11 569 obiektów</span>
            </li>
            <li>
              Góry Stołowe
              <span>535 obiektów</span>
            </li>
            <li>
              Mazury
              <span>2 691 obiektów</span>
            </li>
            <li>
              warmińsko-mazurskie
              <span>2 957 obiektów</span>
            </li>
            <li>
              Kraków-Częstochowa Upland
              <span>164 obiekty</span>
            </li>
            <li>
              Żywiec Beskids
              <span>177 obiektów</span>
            </li>
            <li>
              Majorka
              <span>10 780 obiektów</span>
            </li>
            <li>
              Kornwalia
              <span>5 275 obiektów</span>
            </li>
            <li>
              Bali
              <span>12 681 obiektów</span>
            </li>
            <li>
              Tuchola Forest
              <span>325 obiektów</span>
            </li>
            <li>
              Mierzeja Wiślana
              <span>573 obiekty</span>
            </li>
            <li>
              podlaskie
              <span>1 236 obiektów</span>
            </li>
            <li>
              Szklarska Poręba i okolice
              <span>614 obiektów</span>
            </li>
            <li>
              Bieszczady
              <span>935 obiektów</span>
            </li>
          </ul>
        }
      </div>
    </div>
  );
};

export default Breadcrumb;
