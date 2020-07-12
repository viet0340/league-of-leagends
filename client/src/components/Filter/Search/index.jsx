import { UpInputSearchToStore } from "components/redux/actionCreator";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Search() {
  //Gán giá trị ô search khi quay lại từ trang chi tiết tướng
  const [input, setInput] = useState(useSelector((state) => state.input.input));
  const typingSearch = useRef(null);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleSearchTempChange(e) {
    const value = e.target.value;

    if (typingSearch.current) {
      clearTimeout(typingSearch.current);
    }

    typingSearch.current = setTimeout(() => {
      dispatch(UpInputSearchToStore(value));
    }, 300);
    setInput(value);
  }


  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={input}
        onChange={handleSearchTempChange}
      />
    </form>
  );
}

export default Search;
