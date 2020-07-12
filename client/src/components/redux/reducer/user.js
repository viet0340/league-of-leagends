const defaultState = {
  isLogin: false,
  username: "admin",
  password: "admin",
};

const user = (state = defaultState, action) => {
  switch (action.type) {
    case "IS_LOGIN":
      return { ...state, isLogin: true };
    case "IS_LOGOUT":
      return { ...state, isLogin: false };
    default:
      break;
  }
  return state;
};

export default user;
