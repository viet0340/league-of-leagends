const defaultState = {
    tags: "ALL",
  };
  
  const input = (state = defaultState, action) => {
    if (action.type === "SEARCH_TAGS") {
      return {
        ...state,
        tags: action.tags,
      };
    }
    return state;
  };
  
  export default input;
  