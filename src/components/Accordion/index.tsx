import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectIsOpen, toggle } from "state/accordion";

import iconInfo from "assets/infoWarning.svg";
import iconArrowUp from "assets/arrowUp.svg";

interface Props {
  children: JSX.Element;
  title: string | JSX.Element;
  link: { to: string; text: string };
}

const Accordion = ({ title, link, children }: Props) => {
  const isOpen = useSelector(selectIsOpen);
  const dispatch = useDispatch();

  return (
    <div className="accordion">
      <div className="accordion__container">
        <img className="accordion__img" src={iconInfo} alt="i" />
        <div className="accordion__content">
          <div className="accordion__header" onClick={() => dispatch(toggle())}>
            <span>{title}</span>
            <img
              className={`${isOpen && "rotate"}`}
              src={iconArrowUp}
              alt="^"
            />
          </div>
          {isOpen && (
            <>
              <p className="accordion__text">{children}</p>

              <a className="accordion__link" href={link.to} target="_blank">
                {link.text}
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
