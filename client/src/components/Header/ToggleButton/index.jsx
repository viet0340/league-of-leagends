import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./index.scss";
import User from "../Login/User";

ToggleButton.propTypes = {
  onHide: PropTypes.func,
};
ToggleButton.defaultProps = {
  onHide: null,
};

function ToggleButton(props) {
  const { onHide } = props;
  const { isLogin } = useSelector((state) => state.user);
  const user = isLogin ? <User /> : "";
  return (
    <div>
      <NavLink exact to="/" onClick={() => onHide()}>
        Trang chủ
      </NavLink>
      <NavLink to="/champions" onClick={() => onHide()}>
        Tướng
      </NavLink>
      <NavLink to="/items" onClick={() => onHide()}>
        Trang bị
      </NavLink>
      <NavLink to="/login" className="login_logout" onClick={() => onHide()}>
        Login
      </NavLink>
      {user}
    </div>
  );
}

export default ToggleButton;
