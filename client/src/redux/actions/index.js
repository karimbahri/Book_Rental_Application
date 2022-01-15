export const currentUser = (userData) => {
  return {
    type: "CURRENT_USER",
    payload: userData,
  };
};

// export const fetchUsers = () => async (dispatch) => {
//   const respone = await server.get("api/users");
//   dispatch({ type: "GET_USERS", payload: respone.data.data });
// };

export const updateUsers = (users) => {
  return { type: "UPDATE_USERS", payload: users };
};

export const addUser = (user) => {
  return { type: "ADD_USER", payload: user };
};
