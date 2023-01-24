const setUser = ( user ) => {
  return ( dispatch ) => {
    dispatch( {
      type: "LOGIN_USER",
      user: user
    } );
  };
}

export {
  setUser
}
