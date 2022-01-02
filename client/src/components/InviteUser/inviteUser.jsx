import { useState, useEffect } from "react";
import "./inviteUser.css";

const InviteUser = ({ setOpenModal }) => {
  console.log(setOpenModal);
  useEffect(() => {
    const inputs = document.querySelectorAll(".input");

    function addcl() {
      let parent = this.parentNode.parentNode;
      parent.classList.add("focus");
    }

    function remcl() {
      let parent = this.parentNode.parentNode;
      if (this.value === "") {
        parent.classList.remove("focus");
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("focus", addcl);
      input.addEventListener("blur", remcl);
    });
  }, []);

  const [email, setEmail] = useState("");
  return (
    <div className="modal-container">
      <div id="add-user" className="login-content">
        <form action="#" className="inv-form">
          <div
            className="close"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <i className="far fa-times-circle"></i>
          </div>
          <h2 className="_title_">Add New User</h2>
          <div className="input-div">
            <div className="i">
              <i className="far fa-envelope"></i>
            </div>
            <div className="div">
              <h5>Email</h5>
              <input
                type="email"
                name="email"
                className="input"
                required
                onChange={null}
                autoComplete="on"
              />
            </div>
          </div>
          <input
            type="submit"
            value="Send"
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              setOpenModal(false);
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default InviteUser;
