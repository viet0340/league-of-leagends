import React, { useState } from "react";
import PropTypes from "prop-types";
import "./index.scss";
Filter.propTypes = {
  onChange: PropTypes.func,
};
Filter.defaultProps = {
  onChange: null,
};

function Filter(props) {
  const { onChange } = props;
  const [input, setInput] = useState([]);
  function handleClick(e) {
    const value = e.target.value;
    if (input.some((some) => some === value)) {
      let a = input.filter((filter) => filter !== value);
      setInput(a);
      onChange(a);
    } else {
      let a = [...input];
      a.push(value);
      setInput(a);
      onChange(a);
    }
  }

  return (
    <div className="items_filter">
      <form>
        <div style={{ cursor: "pointer" }}>Tất cả trang bị</div>
        <div className="khoidau filter_items">
          <div>Trang bị khởi đầu</div>
          <label>
            Đi đường
            <input
              type="checkbox"
              name="Lane"
              value="Lane"
              onClick={handleClick}
            />
          </label>
          <label>
            Đi rừng
            <input
              type="checkbox"
              name="Jungle"
              value="Jungle"
              onClick={handleClick}
            />
          </label>
        </div>
        <div className="dungcu filter_items">
          <div>Dụng cụ</div>
          <label>
            Tiêu thụ
            <input
              type="checkbox"
              name="Consumable"
              value="Consumable"
              onClick={handleClick}
            />
          </label>
          <label>
            Tầm nhìn và phụ kiện
            <input
              type="checkbox"
              name="Vision"
              value="Vision"
              onClick={handleClick}
            />
          </label>
        </div>
        <div className="phongthu filter_items">
          <div>Phòng thủ</div>
          <label>
            Giáp
            <input
              type="checkbox"
              name="Armor"
              value="Armor"
              onClick={handleClick}
            />
          </label>
          <label>
            Máu
            <input
              type="checkbox"
              name="Health"
              value="Health"
              onClick={handleClick}
            />
          </label>
          <label>
            Hồi máu
            <input
              type="checkbox"
              name="HealthRegen"
              value="HealthRegen"
              onClick={handleClick}
            />
          </label>
          <label>
            Kháng phép
            <input
              type="checkbox"
              name="SpellBlock"
              value="SpellBlock"
              onClick={handleClick}
            />
          </label>
        </div>
        <div className="tancong filter_items">
          <div>Tấn công</div>
          <label>
            Tốc dộ đánh
            <input
              type="checkbox"
              name="AttackSpeed"
              value="AttackSpeed"
              onClick={handleClick}
            />
          </label>
          <label>
            Đánh chí mạng
            <input
              type="checkbox"
              name="CriticalStrike"
              value="CriticalStrike"
              onClick={handleClick}
            />
          </label>
          <label>
            Sát thương
            <input
              type="checkbox"
              name="Damage"
              value="Damage"
              onClick={handleClick}
            />
          </label>
          <label>
            Hút máu
            <input
              type="checkbox"
              name="LifeSteal"
              value="LifeSteal"
              onClick={handleClick}
            />
          </label>
        </div>
        <div className="phepthuat filter_items">
          <div>Phép thuật</div>
          <label>
            Giảm thời gian hồi chiêu
            <input
              type="checkbox"
              name="CooldownReduction"
              value="CooldownReduction"
              onClick={handleClick}
            />
          </label>
          <label>
            Năng lượng
            <input
              type="checkbox"
              name="Mana"
              value="Mana"
              onClick={handleClick}
            />
          </label>
          <label>
            Hồi năng lượng
            <input
              type="checkbox"
              name="ManaRegen"
              value="ManaRegen"
              onClick={handleClick}
            />
          </label>
          <label>
            Sức mạnh phép thuật
            <input
              type="checkbox"
              name="SpellDamage"
              value="SpellDamage"
              onClick={handleClick}
            />
          </label>
        </div>
        <div className="dichuyen filter_items">
          <div>Di chuyển</div>
          <label>
            Giày
            <input
              type="checkbox"
              name="Boots"
              value="Boots"
              onClick={handleClick}
            />
          </label>
          <label>
            Đồ tăng tốc khác
            <input
              type="checkbox"
              name="NonbootsMovement"
              value="NonbootsMovement"
              onClick={handleClick}
            />
          </label>
        </div>
      </form>
    </div>
  );
}

export default Filter;
