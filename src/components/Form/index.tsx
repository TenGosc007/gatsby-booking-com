import React from "react";

import Button from "components/Button";

import iconSearch from "assets/search.svg";
import iconCallendar from "assets/callendar.svg";
import iconQuestion from "assets/question.svg";

const Form = () => {
  return (
    <div className="form">
      <h2 className="form__header">Szukaj</h2>

      <label className="form__label" htmlFor="city">
        Cel podróży / nazwa obiektu:{" "}
      </label>
      <div className="form__input-box">
        <img src={iconSearch} alt="search" />
        <input
          className="form__input"
          type="text"
          id="city"
          placeholder="Miasto"
        />
      </div>

      <label className="form__label" htmlFor="city">
        Od
      </label>
      <div className="form__input-box">
        <img src={iconCallendar} alt="callendar" />

        <input
          className="form__input"
          type="text"
          id="city"
          placeholder="Data zameldowania"
        />
      </div>

      <label className="form__label" htmlFor="city">
        Do
      </label>
      <div className="form__input-box">
        <img src={iconCallendar} alt="callendar" />

        <input
          className="form__input"
          type="text"
          id="city"
          placeholder="Data zameldowania"
        />
      </div>

      <div className="form__select-container">
        <select className="form__input-box form__select">
          <option value="1">1 dorosły</option>
          <option value="2">2 dorosłych</option>
          <option value="3">3 dorosłych</option>
          <option value="4">4 dorosłych</option>
          <option value="5">5 dorosłych</option>
          <option value="6">6 dorosłych</option>
          <option value="7">7 dorosłych</option>
          <option value="8">8 dorosłych</option>
        </select>

        <div className="form__input-container">
          <select className="form__input-box form__select">
            <option value="1">1 dorosły</option>
            <option value="2">2 dorosłych</option>
            <option value="3">3 dorosłych</option>
            <option value="4">4 dorosłych</option>
            <option value="5">5 dorosłych</option>
            <option value="6">6 dorosłych</option>
            <option value="7">7 dorosłych</option>
            <option value="8">8 dorosłych</option>
          </select>

          <select className="form__input-box form__select">
            <option value="1">1 dorosły</option>
            <option value="2">2 dorosłych</option>
            <option value="3">3 dorosłych</option>
            <option value="4">4 dorosłych</option>
            <option value="5">5 dorosłych</option>
            <option value="6">6 dorosłych</option>
            <option value="7">7 dorosłych</option>
            <option value="8">8 dorosłych</option>
          </select>
        </div>
      </div>

      <div className="form__checkbox">
        <input type="checkbox" id="info" />
        <label className="form__label" htmlFor="info">
          Podróżuję służbowo
        </label>
        <img src={iconQuestion} alt="?" />
      </div>

      <Button>Szukaj</Button>
    </div>
  );
};

export default Form;
