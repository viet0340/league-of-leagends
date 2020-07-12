import { IsLogin } from "components/redux/actionCreator";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import NotLogged from "./NotLogged";

function Login() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const { isLogin } = userState;
  let history = useHistory();
  function handleSubmit(e) {
    if (
      e.username === userState.username &&
      e.password === userState.password
    ) {
      localStorage.setItem("user", JSON.stringify(e));
      dispatch(IsLogin());
      alert("Đăng nhập thành công");
      history.push("/");
      window.location.reload();
    } else {
      alert("Tên đăng nhập hoặc mật khẩu không đúng");
    }
  }

  if (isLogin) {
    return <div></div>;
  }
  return (
    <div>
      <NotLogged onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
