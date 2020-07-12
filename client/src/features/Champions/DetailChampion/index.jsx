import Images from "components/images";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Body from "./Body";
import Title from "./Title";
import "./index.scss";

function DetailChampion() {
  const { name } = useParams();
  const version = useSelector((state) => state.champions.version);
  console.log(name);
  const [detailChampion, setDetailChampion] = useState({});

  useEffect(() => {
    try {
      async function dataChampion() {
        const requestUrl = `https://ddragon.leagueoflegends.com/cdn/${version}/data/vn_VN/champion/${name}.json`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();

        setDetailChampion(Object.values(responseJSON.data));
      }
      dataChampion();
    } catch (error) {
      console.log("Error: " + error);
    }
  }, [name, version]);

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
  if (!detailChampion[0]) {
    return <div></div>;
  }

  return (
    <div>
      <div className="detail_champion">
        <Title
          data={detailChampion[0]}
          version={version}
          onTags={handleOnTags}
        />
        <Body data={detailChampion[0]} version={version} />
      </div>
      <div className="champion--background">
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${detailChampion[0].id}_0.jpg`}
          alt=""
        />
      </div>
    </div>
  );
}

export default DetailChampion;
