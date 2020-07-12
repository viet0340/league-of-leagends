import React from "react";
import "./index.scss";
import Position from "./Position";
import Search from "./Search";
import Tags from "./Tags";


function Filter() {
  return (
    <div className="filter">
      <div className="filter_body">
        <Search />
        <Position />
        <Tags />
      </div>
    </div>
  );
}

export default Filter;
