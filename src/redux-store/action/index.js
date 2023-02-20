const setUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: "LOGIN_USER",
      user: user
    });
  };
}

const setMyList = (item) => {
  return (dispatch) => {
    dispatch({
      type: "MY_LIST",
      list: item
    })
  }
}

export {
  setUser,
  setMyList
}
