import Images from "components/images";
import PropTypes from "prop-types";
import React, { useState } from "react";
import DetailItems from "./DetailItems";

Body.propTypes = {
  data: PropTypes.array,
  version: PropTypes.string,
};

Body.defaultProps = {
  data: null,
  version: "",
};

function Body(props) {
  const { data, version } = props;
  const [key, setKey] = useState();
  const [isShow, setIsShow] = useState(false);

  if (!data) return <div></div>;

  function handleClick(x) {
    setKey(x);
  }
  function handleIsShow(e) {
    setIsShow(e);
  }

  return (
    <div className="items_body">
      {data.map((data) => (
        <div
          className="items_body--detail"
          key={data[0]}
          onClick={() => {
            handleClick(data[0]);
            setIsShow(true);
          }}
        >
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${data[1].image.full}`}
            alt=""
          />
          <div className="description_mota">
            <div className="name">{data[1].name}</div>

            <div className="price">
              <img src={Images.GOLD} alt="" />
              {data[1].gold.base}
            </div>
          </div>
        </div>
      ))}
      <DetailItems
        keys={key}
        data={data}
        isShow={isShow}
        handleIsShow={handleIsShow}
      />
    </div>
  );
}

export default Body;
