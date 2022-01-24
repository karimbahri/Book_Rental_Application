import { useState } from "react";
import { connect } from "react-redux";
import { updateUsers } from "../../redux/actions";

import "./Users.css";
import UsersList from "../../components/UsersList/UsersLists";
import InviteUser from "../../components/InviteUser/inviteUser";

const Users = ({ users, updateUsers }) => {
  const [openModel, setOpenModal] = useState(false);

  return (
    <div className="users-body">
      {openModel && <InviteUser setOpenModal={setOpenModal} />}

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
                <UsersList />
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

export default connect(mapStateToProps, { updateUsers })(Users);
