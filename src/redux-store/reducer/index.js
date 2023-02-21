const initialState = {
  user: {},
  list: [],
  search: []
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

    case "SEARCH":
      return {
        ...state,
        search: action.search
      }

    default:
      return state;
  }
}

export default reducer;
