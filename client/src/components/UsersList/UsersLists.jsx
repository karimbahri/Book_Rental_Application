import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { updateUsers } from "../../redux/actions";

import UserItem from "../../components/UserItem/UserItem";
import server from "../../apis/server";
import { socket } from "../../pages/registration/Registration";

const UsersList = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  let renderListUser;

  socket.on("addUser", (res) => {
    // console.dir(res);
    fetchUsers();
    socket.off("on");
  });

  const fetchUsers = () => {
    server
      .get("api/users")
      .then((res) => dispatch(updateUsers(res.data.data)))
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    // console.log("fetch users");
    fetchUsers();
  }, []);

  renderListUser = users.map((item, idx) => {
    return <UserItem item={item} idx={idx} key={idx} />;
  });

  return renderListUser;

  //   return !renderListUser ? (
  //     <td colSpan={6} style={{ textAlign: "center" }}>
  //       no users found
  //     </td>
  //   ) : (
  //     renderListUser
  //   );
};

export default UsersList;
