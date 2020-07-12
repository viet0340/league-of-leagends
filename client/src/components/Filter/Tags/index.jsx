import { HERO_TAGS } from "components/global";
import { UpTagsSearchToStore } from "components/redux/actionCreator";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";

function Tags() {
  const dispatch = useDispatch();
  const inputTags = useSelector((state) => state.tags.tags);
  const [items, setItems] = useState(() => {
    return HERO_TAGS.filter((filter) => filter.value === inputTags)[0];
  });
  const [isShow, setIsShow] = useState(false);
  const image = HERO_TAGS;

  const styleIsShow = isShow ? { display: "block" } : { display: "none" };

  function handleShowItems() {
    let data = !isShow;
    setIsShow(data);
  }

  function handleSetValue(image, label, tags) {
    dispatch(UpTagsSearchToStore(tags));
    setItems({ image, label, value: tags });
    setIsShow(false);
  }

  return (
    <div className="custom_select">
      <div className="custom_select--input" onClick={handleShowItems}>
        <img src={items.image} alt="" />
        <span className="select-title">{items.label}</span>
      </div>
      <div className="custom_select--list" style={styleIsShow}>
        {HERO_TAGS.map((e, x) => (
          <div
            className="select-items"
            key={x}
            onClick={() =>
              handleSetValue(image[x].image, image[x].label, image[x].value)
            }
          >
            <img src={e.image} alt="" />
            <div className="select-title">{e.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tags;
