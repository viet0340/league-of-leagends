import React, { useState } from "react";
import Images from "../images";
import "./index.scss";
import ToggleButton from "./ToggleButton";
import { CheckLogin } from "components/Controller";

function Header() {
  CheckLogin();
  const [menu, setMenu] = useState(false);
  const [hide, setHide] = useState(true);

  function toggleNav() {
    setMenu(!menu);
    setHide(!hide);
  }
  function handleHideMenu() {
    setMenu(false);
    setHide(true);
  }
  const style = menu ? { right: "30%" } : { right: "100%" };
  const styleHide = hide ? { display: "none" } : { display: "block" };
  return (
    <div className="header">
      
      <div>
        <div className="header_img">
          <a href="/">
            <img src={Images.LOGO} alt="logo" />
          </a>
        </div>
        <div className="header_body" style={style}>
          <ToggleButton onHide={handleHideMenu} />
        </div>
        <div className="menu" onClick={toggleNav}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
      <div
        onClick={handleHideMenu}
        style={styleHide}
        className="beHideScreen"
      ></div>
    </div>
  );
}

export default Header;
