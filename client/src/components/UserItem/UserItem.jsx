import avatar from "../../assets/Users/user_avatar.svg";

const UserItem = ({ item: { fullName, email, role, created_at }, idx }) => {
  return (
    <tr>
      <td>{idx}</td>
      <td>
        <img src={avatar} className="avatar" alt="Avatar" />
        {fullName}
      </td>
      <td>{email}</td>
      <td>{role}</td>
      <td>{created_at}</td>
      <td>
        <a
          href="/"
          className="settings"
          title="Settings"
          // data-toggle="tooltip"
        >
          <ion-icon name="create"></ion-icon>
        </a>
        <a
          href="/"
          className="delete"
          title="Delete"
          // data-toggle="tooltip"
        >
          <ion-icon name="trash-bin"></ion-icon>
        </a>
      </td>
    </tr>
  );
};

export default UserItem;
