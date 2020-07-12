import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Body from "./Body";
import Filter from "./Filter";
import "./index.scss";

function Items() {
  const [data, setData] = useState("");
  const [filterData, setFilterData] = useState([]);
  const version = useSelector((state) => state.champions.version);
  const { isLogin } = useSelector((state) => state.user);
  useEffect(() => {
    let isMounted = true;
    async function getData() {
      try {
        const requestUrl = `https://ddragon.leagueoflegends.com/cdn/${version}/data/vn_VN/item.json`;

        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        if (isMounted) {
          setData(Object.entries(responseJSON.data));
          setFilterData(Object.entries(responseJSON.data));
        }
      } catch (error) {
        console.log("Error: " + error);
      }
    }
    getData();

    return () => {
      isMounted = false;
    };
  }, [version]);

  if (!data) return <div></div>;

  if (!isLogin) {
    alert("Vui lòng đăng nhập để sử dụng tính năng này.!");
    return <Redirect to="/login" />;
  }
  function handleChange(e) {
    const alpha = [...data];
    const beta = alpha.filter((filter) => {
      let a = [];
      e.some((some) => {
        filter[1].tags.some((even) => {
          //Kiểm tra tags có chứa even nếu có push vào a
          if (even === some) {
            return a.push(even === some);
          }
          return false;
        });
        return false;
      });
      //Khi a & e cùng chiều dài thì in ra filter
      if (a.length === e.length) {
        return filter;
      }
      return false;
    });
    //Khi không chọn in ra tất cả

    if (e.length === 0 || e === "All") {
      return setFilterData(alpha);
    }
    return setFilterData(beta);
  }

  return (
    <div className="items">
      <Filter onChange={handleChange} />
      <Body data={filterData} version={version} />
    </div>
  );
}

export default Items;
