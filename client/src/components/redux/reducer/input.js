const defaultState = {
  input: "",
};

const input = (state = defaultState, action) => {
  if (action.type === "SEARCH_INPUT") {
    return {
      ...state,
      input: action.input,
    };
  }
  return state;
};

export default input;
