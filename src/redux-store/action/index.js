const setUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: "LOGIN_USER",
      user: user
    });
  };
}

const setMyList = (list) => {
  return (dispatch) => {
    dispatch({
      type: "MY_LIST",
      list: list
    })
  }
}

const setSearch = (search) => {
  return (dispatch) => {
    dispatch({
      type: "SEARCH",
      search: search
    })
  }
}

export {
  setUser,
  setMyList,
  setSearch
}
