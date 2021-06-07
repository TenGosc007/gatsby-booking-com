import React from "react";

const Path = ({ args }: any) => {
  const arr = Array.from([...args]);

  return (
    <div className="path">
      <div className="path__text">Strona główna</div>

      {[...args].map((e: string, index: number) => (
        <div key={index} className="path__flex">
          <div className="path__separator">&#10095;</div>
          <div className="path__text">{e}</div>
        </div>
      ))}
    </div>
  );
};

export default Path;
