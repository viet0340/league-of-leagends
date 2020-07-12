import PropTypes from "prop-types";
import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
ListChampion.propTypes = {
  data: PropTypes.array,
  UrlChampion: PropTypes.string,
  onTags: PropTypes.func,
  onPosition: PropTypes.func,
};

ListChampion.defaultProps = {
  data: null,
  UrlChampion: "",
  onTags: null,
  onPosition: null,
};

function ListChampion(props) {
  const { data, UrlChampion, onPosition, onTags, onSearchPosition } = props;

  //Gửi loại tags của Tướng ra Main
  function classes(e) {
    if (!onTags) return;
    if (!onPosition) return;
    if (!onSearchPosition) return;
    onTags(e);
    onPosition(e);
    onSearchPosition(e);
  }

  return (
    <div className="list_champion">
      {data.map((e) => (
        <Link
          to={`/champions/${e.id}`}
          className="list_champion_items"
          key={e.id}
          send={classes(e)}
        >
          <div className="items_tags">
            <img src={onTags(e)} alt="" />
          </div>
          <div className="items_position">
            {onPosition(e).map((position, x) => (
              <img src={position} key={x} alt="" />
            ))}
          </div>
          <img
            className="list_champion-image"
            src={`${UrlChampion}${e.image.full}`}
            alt=""
          />
          <div className="list_champion-name">{e.name}</div>
          <div className="list_champion-title">{e.title}</div>
        </Link>
      ))}
    </div>
  );
}

export default ListChampion;
