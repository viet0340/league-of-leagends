import PropTypes from "prop-types";
import React from "react";
import "./index.scss";

Title.propTypes = {
  data: PropTypes.object,
  version: PropTypes.string,
  onTags: PropTypes.func,
};

Title.defaultProps = {
  data: null,
  onTags: null,
  version: "",
};

function Title(props) {
  const { data, version, onTags } = props;

  if (!data) {
    return <div></div>;
  }

  return (
    <div className="detail_champion--title">
      <div className="detail_champion--title-image">
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/${data.image.group}/${data.image.full}`}
          alt=""
        />
      </div>
      <div className="detail_champion--title-body">
        <div className="title_name">{data.name}</div>
        <div className="title_tags">
          <img src={onTags(data)} alt="" />
          <div>{data.tags[0]}</div>
        </div>
        <div className="title_description">{data.title}</div>
      </div>
    </div>
  );
}

export default Title;
