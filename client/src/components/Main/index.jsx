import Images from "components/images";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ListChampion from "./ListChampion";

function Main() {
  const data = useSelector((state) => state.champions.data);
  const version = useSelector((state) => state.champions.version);

  const dataPosition = useSelector((state) => state.position.data);
  const inputPosition = useSelector((state) => state.position.position);

  const input = useSelector((state) => state.input.input);
  const tags = useSelector((state) => state.tags.tags);

  const UrlChampion = `https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/`;
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    function handleOnSearchTags(e) {
      if (tags !== "ALL") {
        return e.tags[0] === tags;
      }
      return true;
    }

    function handleOnSearchPosition(e) {
      let data = Object.entries(dataPosition);

      // data = [ [ 1 , { TOP , UTILITY } ] , [ 2 , {...} ] ]
      // data.filter = [ 1 , { TOP , UTILITY } ]
      // Object.keys(data[1]) = [TOP,UTILITY]
      // beta = mảng chứa key có vị trí giống position [ [ 1 , { TOP , UTILITY } ],..... ]

      if (inputPosition !== "ALL") {
        let beta = data.filter((data) =>
          Object.keys(data[1]).some((some) => some === inputPosition)
        );
        return beta.map((beta) => beta[0]).some((some) => some === e.key);
      }

      return true;
    }
    setFilterData(() => {
      return inputPosition === "ALL" && tags === "ALL" && input === ""
        ? Object.values(data)
        : Object.values(data).filter((e) => {
            return (
              e.name.toLowerCase().includes(input.toLowerCase()) &&
              handleOnSearchTags(e) &&
              handleOnSearchPosition(e)
            );
          });
    });
  }, [input, tags, data, inputPosition, dataPosition]);

  //Sử lý tags rồi trả lại ảnh theo tags
  function handleOnTags(e) {
    switch (e.tags[0]) {
      case "Fighter":
        return Images.DAUSI;
      case "Tank":
        return Images.DODON;
      case "Mage":
        return Images.PHAPSU;
      case "Assassin":
        return Images.SATTHU;
      case "Marksman":
        return Images.XATHU;
      case "Support":
        return Images.KIEMSOAT;
      default:
        break;
    }
  }
  //Sử lý search Position vì dữ liệu ở file khác lên k dùng chung với handleOnPosition

  //Sử lý Position
  function handleOnPosition(e) {
    let data = Object.entries(dataPosition);
    //Kiểm tra
    const alpha = data.filter((data) => data[0] === e.key);
    //Đưa Position vào mảng
    const beta = Object.keys(alpha[0][1]);

    //Kiểm tra position rồi trả lại ảnh theo position
    const delta = beta.map((beta) => {
      if (beta === "TOP") {
        return Images.TOP;
      }
      if (beta === "BOTTOM") {
        return Images.BOT;
      }
      if (beta === "MIDDLE") {
        return Images.MID;
      }
      if (beta === "JUNGLE") {
        return Images.JUNGLE;
      }
      return Images.SUPPORT;
    });

    return delta;
  }
  return (
    <div>
      <ListChampion
        data={filterData}
        UrlChampion={UrlChampion}
        onTags={handleOnTags}
        onPosition={handleOnPosition}
      />
    </div>
  );
}

export default Main;
