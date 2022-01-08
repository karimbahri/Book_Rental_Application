import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../redux/actions";

import "./Users.css";
import UserItem from "../../components/UserItem/UserItem";
import InviteUser from "../../components/InviteUser/inviteUser";

const list_of_users = [
  {
    fullName: "Cherie E. James",
    email: "CherieEJames@jourrapide.com",
    role: "Guest",
    createdAt: "01/01/2021",
  },
  {
    fullName: "Howard R. Felix",
    email: "HowardRFelix@armyspy.com",
    role: "Guest",
    createdAt: "25/07/2021",
  },
  {
    fullName: "Joann M. Fultz",
    email: "JoannMFultz@jourrapide.com",
    role: "Guest",
    createdAt: "17/12/2021",
  },
  {
    fullName: "Cherie E. James",
    email: "CherieEJames@jourrapide.com",
    role: "Guest",
    createdAt: "01/01/2021",
  },
];
const renderListUser = list_of_users.map((item, idx) => {
  return <UserItem item={item} idx={idx} key={idx} />;
});

// console.log(renderListUser);
const Users = ({ users, getUsers }) => {
  const [openModel, setOpenModal] = useState(false);
  useEffect(() => {
    getUsers();
  }, []);

  const test = users.map((user, idx) => {
    return <UserItem item={user} idx={idx} key={idx} />;
  });
  return (
    <div className="users-body">
      {openModel && <InviteUser setOpenModal={setOpenModal} />}
      {console.log(openModel)}
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-5">
                  <h2>
                    User <b>Management</b>
                  </h2>
                </div>
                <div className="col-sm-7">
                  <div
                    className="btn btn-secondary"
                    onClick={() => setOpenModal(!openModel)}
                  >
                    <ion-icon name="add-circle"></ion-icon>
                    <span>Add New User</span>
                  </div>
                </div>
              </div>
            </div>

            <table className="table table-striped table-hover">
              <thead className="table-head">
                <tr>
                  <th>#</th>
                  <th>Full Name</th>
                  <th>E-mail</th>
                  <th>Role</th>
                  <th>Date Created</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="table-rows">
                {!renderListUser ? (
                  <td colSpan={6} style={{ textAlign: "center" }}>
                    no users found
                  </td>
                ) : (
                  renderListUser
                )}
                {test}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, { getUsers })(Users);
