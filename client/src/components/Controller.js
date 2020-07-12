import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IsLogin } from "./redux/actionCreator";

export function CheckLogin() {
  const { username, password } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && username === user.username && password === user.password) {
      dispatch(IsLogin());
      let a = document.getElementsByClassName("login_logout");
      a[0].style.display = "none";
    }
  }, [dispatch, password, username]);
}
