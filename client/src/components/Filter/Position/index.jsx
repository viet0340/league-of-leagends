import Images from "components/images";
import { UpPositionSearchToStore } from "components/redux/actionCreator";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Position() {
  const inputPosition = useSelector((state) => state.position.position);

  const [checked, setChecked] = useState(inputPosition);
  const dispatch = useDispatch();
  function handleClick(e) {
    dispatch(UpPositionSearchToStore(e.target.id));
    setChecked(e.target.id);
  }

  return (
    <div className="radio-button">
      <div>
        <label>
          <input
            type="radio"
            name="position"
            id="ALL"
            checked={checked === "ALL"}
            onChange={handleClick}
          />
          <img src={Images.ALL} alt="" />
        </label>
        <label>
          <input
            type="radio"
            name="position"
            id="TOP"
            checked={checked === "TOP"}
            onChange={handleClick}
          />
          <img src={Images.TOP} alt="" />
        </label>
        <label>
          <input
            type="radio"
            name="position"
            id="JUNGLE"
            checked={checked === "JUNGLE"}
            onChange={handleClick}
          />
          <img src={Images.JUNGLE} alt="" />
        </label>
        <label>
          <input
            type="radio"
            name="position"
            id="MIDDLE"
            checked={checked === "MIDDLE"}
            onChange={handleClick}
          />
          <img src={Images.MID} alt="" />
        </label>
        <label>
          <input
            type="radio"
            name="position"
            id="BOTTOM"
            checked={checked === "BOTTOM"}
            onChange={handleClick}
          />
          <img src={Images.BOT} alt="" />
        </label>
        <label>
          <input
            type="radio"
            name="position"
            id="UTILITY"
            checked={checked === "UTILITY"}
            onChange={handleClick}
          />
          <img src={Images.SUPPORT} alt="" />
        </label>
      </div>
    </div>
  );
}

export default Position;
