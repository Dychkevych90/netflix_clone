const initialState = {
  user: {},
  list: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        user: action.user,
      };

    case "MY_LIST":
      return {
        ...state,
        list: action.list
      }

    default:
      return state;
  }
}

export default reducer;
