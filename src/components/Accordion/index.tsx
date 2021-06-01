import React, { useState } from "react";

import iconInfo from "assets/infoWarning.svg";
import iconArrowUp from "assets/arrowUp.svg";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion__container">
        <img className="accordion__img" src={iconInfo} alt="i" />
        <div className="accordion__content">
          <div className="accordion__header" onClick={handleClick}>
            <span>Koronawirus (COVID-19) - wsparcie</span>
            <img
              className={`${isOpen && "rotate"}`}
              src={iconArrowUp}
              alt="^"
            />
          </div>
          {isOpen && (
            <>
              <p className="accordion__text">
                Sprawdź ograniczenia dotyczące podróżowania. Podróżowanie może
                być dozwolone tylko w określonych celach, a podróżowanie
                zwłaszcza w celach turystycznych może nie być dozwolone.
              </p>

              <a className="accordion__link" href="/">
                Dowiedz się więcej
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
