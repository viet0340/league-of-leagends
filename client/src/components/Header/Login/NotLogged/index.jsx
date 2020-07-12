import React, { useState } from "react";
import PropTypes from "prop-types";
import "./index.scss";

NotLogged.propTypes = {
  onSubmit: PropTypes.func,
};

NotLogged.defaultProps = {
  onSubmit: null,
};

function NotLogged(props) {
  const { onSubmit } = props;
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  function handleOnChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(user);
  }
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>
          Tên đăng nhập: admin <br />
          Password: admin
        </h1>
        <label htmlFor="username">Tên đăng nhập</label>
        <input
          type="text"
          name="username"
          id="username"
          value={user.username}
          onChange={handleOnChange}
        />
        <label htmlFor="password">Mật khẩu</label>
        <input
          type="password"
          name="password"
          id="password"
          value={user.password}
          onChange={handleOnChange}
        />
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
}

export default NotLogged;
