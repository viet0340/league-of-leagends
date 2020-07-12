import Filter from "components/Filter";
import Main from "components/Main";
import React from "react";
import { useSelector } from "react-redux";
function Home() {
  const { data } = useSelector((state) => state.champions);

  const allChampions = Object.keys(data).length;

  return (
    <div className="home">
      <div className="home_title">
        <h1>
          ALL LEAGUE OF LEGENDS CHAMPIONS
          <br />
          BUILDS AND STATS AT YOUR FINGERTIPS
        </h1>
        <div>Có tất cả {allChampions} trong liên minh huyền thoại</div>
      </div>
      <Filter />
      <Main />
    </div>
  );
}

export default Home;
