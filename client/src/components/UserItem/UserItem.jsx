import avatar from "../../assets/Users/user_avatar.svg";

const UserItem = ({ item: { fullName, email, isAdmin, createdAt }, idx }) => {
  return (
    <tr>
      <td>{idx}</td>
      <td>
        <img src={avatar} className="avatar" alt="Avatar" />
        {fullName}
      </td>
      <td>{email}</td>
      <td>{isAdmin ? "Admin" : "Guest"}</td>
      <td>{createdAt}</td>
      <td>
        <a href="/" className="settings" title="Settings">
          <ion-icon name="create"></ion-icon>
        </a>
        <a href="/" className="delete" title="Delete">
          <ion-icon name="trash-bin"></ion-icon>
        </a>
      </td>
    </tr>
  );
};

export default UserItem;
