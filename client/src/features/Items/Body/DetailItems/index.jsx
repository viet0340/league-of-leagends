import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import "./index.scss";

DetailItems.propTypes = {
  data: PropTypes.array,
  keys: PropTypes.string,
  isShow: PropTypes.bool,
  handleIsShow: PropTypes.func,
};
DetailItems.defaultProps = {
  data: "",
  keys: "",
  isShow: false,
  handleIsShow: null,
};

function DetailItems(props) {
  const { data, keys, isShow, handleIsShow } = props;

  const version = useSelector((state) => state.champions.version);

  let style = isShow ? { display: "block" } : { display: "none" };
  if (!data || !keys) return <div></div>;

  return (
    <div className="items_description" style={style}>
      <span
        onClick={() => {
          handleIsShow(false);
        }}
      >
        X
      </span>
      {data
        .filter((filter) => filter[0] === keys)
        .map((map) => (
          <div className="items_show--detail" key={map[0]}>
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${map[1].image.full}`}
              alt=""
            />
            <div className="name">{map[1].name}</div>
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: map[1].description }}
            />
          </div>
        ))}

      <div className="items_description--bg"></div>
    </div>
  );
}

export default DetailItems;
