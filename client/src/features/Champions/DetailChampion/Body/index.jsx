import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

Body.propTypes = {
  data: PropTypes.object,
  version: PropTypes.string,
};

Body.defaultProps = {
  data: null,
  version: "",
};

function Body(props) {
  const { data, version } = props;

  if (!data) {
    return <div></div>;
  }
  return (
    <div className="detail_champion--body">
      <div className="detail_lore">
        <div className="title">Mô tả</div>
        <div>{data.lore}</div>
      </div>
      <div className="detail_ability">
        <div className="title">Kỹ năng</div>
        <div className="passive">
          <div className=" image">
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/passive/${data.passive.image.full}`}
              alt=""
            />
          </div>
          <div className="passive_description">
            <div className="name">Nội Tại</div>
            <div
              dangerouslySetInnerHTML={{ __html: data.passive.description }}
            />
          </div>
        </div>
        <div className="spells">
          {data.spells.map((e, i) => (
            <div className="spells_items" key={e.id}>
              <div className="image">
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/spell/${e.image.full}`}
                  alt=""
                />
                <div className="skill">
                  {(i === 0 && "Q") ||
                    (i === 1 && "W") ||
                    (i === 2 && "E") ||
                    (i === 3 && "R")}
                </div>
              </div>
              <div className="spells_description">
                <div className="name">{e.name}</div>
                <div dangerouslySetInnerHTML={{ __html: e.description }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="detail_combo">
        <div className="title">Lên trang bị</div>
        <h2>Sắp ra mắt ...</h2>
      </div>
      <div className="detail_stats">
        <div className="title">Thông số cơ bản</div>
        <ul>
          <li>
            Sức mạnh công kích:{" "}
            <strong>{Math.round(data.stats.attackdamage)}</strong>
          </li>
          <li>
            Giáp: <strong>{Math.round(data.stats.armor)}</strong>
          </li>
          <li>
            Kháng phép: <strong>{Math.round(data.stats.spellblock)}</strong>
          </li>
          <li>
            Tầm đánh: <strong>{data.stats.attackrange}</strong>
          </li>
          <li>
            Máu: <strong>{data.stats.hp}</strong>
          </li>
          <li>
            Tốc độ di chuyển: <strong>{data.stats.movespeed}</strong>
          </li>
          <li>
            Tốc độ đánh: <strong>{data.stats.attackspeed}</strong>
          </li>
        </ul>
      </div>
      <div className="detail_tips">
        <div className="ally_tips">
          <div className="title">
            Tips khi sử dụng <strong>{data.name}</strong>
          </div>
          <ul>
            {data.allytips.map((e, x) => (
              <li key={x}>{e}</li>
            ))}
          </ul>
        </div>
        <div className="enemy_tips">
          <div className="title">
            Khi đối đầu với <strong>{data.name}</strong>
          </div>
          <ul>
            {data.enemytips.map((e, x) => (
              <li key={x}>{e}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Body;
