export const currentUser = (userData) => {
  return {
    type: "CURRENT_USER",
    payload: userData,
  };
};

export const updateBooks = (books) => {
  return { type: "UPDATE_BOOKS", payload: books };
};

export const updateUsers = (users) => {
  return { type: "UPDATE_USERS", payload: users };
};

export const upadteOrders = (orders) => {
  return { type: "UPDATE_ORDERS", payload: orders };
};
