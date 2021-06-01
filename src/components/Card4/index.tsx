import React from "react";

import iconPoland from "assets/poland.png";

const Card4 = () => {
  return (
    <div className="card4">
      <div
        className="card4__img"
        style={{
          backgroundImage: `url("https://cf.bstatic.com/xdata/images/xphoto/540x405/23277800.webp?k=937be7b50e2d6082f5e4da748463e7243474c68dffb82142613c0838f40f7b3e&o=")`,
        }}
      ></div>

      <div className="card4__content">
        <div className="card4__header">
          <span>Wspaniałe podróże pociągiem: Ekspres Lodowcowy</span>
        </div>
        <p className="card4__sub-header">
          Daj się oczarować magicznym krajobrazom Szwajcarii.
        </p>
      </div>
    </div>
  );
};

export default Card4;
