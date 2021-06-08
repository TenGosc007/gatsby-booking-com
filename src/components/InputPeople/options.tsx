import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectAdult,
  selectChildren,
  selectRooms,
  addAdult,
  addChild,
  addRoom,
  removeAdult,
  removeChild,
  removeRoom,
} from "state/counter";
import Popup from "components/Popup";

const Options = ({ isClicked, setIsClicked }: any) => {
  const adult = useSelector(selectAdult);
  const children = useSelector(selectChildren);
  const rooms = useSelector(selectRooms);
  const dispatch = useDispatch();

  return (
    <>
      {isClicked && (
        <Popup setIsClicked={setIsClicked}>
          <div className="counter">
            <div className="counter__element">
              <div className="counter__text">Dorośli</div>
              <div className="counter__container">
                <button
                  className="counter__btn"
                  onClick={() => dispatch(removeAdult())}
                >
                  -
                </button>
                <div className="counter__num">{adult}</div>
                <button
                  className="counter__btn"
                  onClick={() => dispatch(addAdult())}
                >
                  +
                </button>
              </div>
            </div>

            <div className="counter__element">
              <div className="counter__text">
                Dzieci <p>w wieku od 0 do 17 lat</p>
              </div>
              <div className="counter__container">
                <button
                  className="counter__btn"
                  onClick={() => dispatch(removeChild())}
                >
                  -
                </button>
                <div className="counter__num">{children}</div>
                <button
                  className="counter__btn"
                  onClick={() => dispatch(addChild())}
                >
                  +
                </button>
              </div>
            </div>

            <div className="counter__element">
              <div className="counter__text">Pokoje</div>
              <div className="counter__container">
                <button
                  className="counter__btn"
                  onClick={() => dispatch(removeRoom())}
                >
                  -
                </button>
                <div className="counter__num">{rooms}</div>
                <button
                  className="counter__btn"
                  onClick={() => dispatch(addRoom())}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </Popup>
      )}
    </>
  );
};

export default Options;
