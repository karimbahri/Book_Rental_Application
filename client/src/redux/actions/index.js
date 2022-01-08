import server from "../../apis/server";

export const currentUser = (userData) => {
  return {
    type: "CURRENT_USER",
    payload: userData,
  };
};

export const getUsers = () => async (dispatch) => {
  const respone = await server.get("api/users");
  dispatch({ type: "GET_USERS", payload: respone.data.data });
};
