import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import server from "../../apis/server";

import avatar from "../../assets/Users/user_avatar.svg";

const UserItem = ({
  item: { fullName, email, isAdmin, created_at, _id },
  idx,
}) => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [deleted, setDeleted] = useState({});

  const deleteUser = (id) => {
    return server.delete(`/api/users/${id}`);
  };

  const delUser = (id) => {
    console.log(`delete btn active ${id}`);
    deleteUser(id).then((res) => {
      setDeleted(res.data.data);
      console.log(deleted);
    });
    console.log("clicked delete ");
  };
  useEffect(() => {
    let newUsers = users.filter((user) => {
      if (user._id !== deleted._id) return user;
    });
    dispatch({ type: "UPDATE_USERS", payload: newUsers });
  }, [deleted]);

  return (
    <tr>
      <td>{idx}</td>
      <td>
        <img src={avatar} className="avatar" alt="Avatar" />
        {fullName}
      </td>
      <td>{email}</td>
      <td>{isAdmin ? "Admin" : "Guest"}</td>
      <td>{created_at}</td>
      <td>
        <div className="settings" title="Settings">
          <ion-icon name="create"></ion-icon>
        </div>
        <div className="delete" title="Delete" onClick={() => delUser(_id)}>
          <ion-icon name="trash-bin" className="del-btn"></ion-icon>
        </div>
      </td>
    </tr>
  );
};

export default UserItem;
