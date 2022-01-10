import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import "./Registration.css";
import useToken from "../../useToken";
import { _useForm } from "./_useForm";
import server from "../../apis/server";

const Registration = () => {
  const { token, setToken } = useToken();
  const { sessonId } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = _useForm();
  const [failed, setFailed] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  localStorage.removeItem("token");

  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(4, "Password length should be at least 4 characters"),
    passwordConfirm: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords must and should match"),
  });

  const validationOpt = { resolver: yupResolver(formSchema) };

  const { register, handleSubmit, formState } = useForm(validationOpt);

  const { errors } = formState;

  function onFormSubmit(data) {
    console.log(JSON.stringify(data, null, 4));

    console.log(sessonId);
    if (!token) {
      setToken(sessonId);
      console.log(form);

      server
        .post("/api/signup", form)
        .then((rep) => {
          const newUser = rep.data.data;
          // dispatch({ type: "UPDATE_USERS", payload: [...users, newUser] });
          console.log("user created");
          navigate("/", { replace: true });
        })
        .catch((err) => {
          setFailed(true);
        });
    }
  }

  useEffect(() => {
    const btnInput = document.querySelectorAll("input");
    btnInput.forEach((btn) =>
      btn.addEventListener("click", () => setFailed(false))
    );
  }, []);

  return (
    <div className="reg-body">
      <div className="reg-container">
        <div className="title">Create New Account</div>
        <div className="content">
          <form
            action="/"
            className="reg-form"
            onSubmit={handleSubmit(onFormSubmit)}
          >
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your name"
                  onChange={(e) => setForm(e)}
                  autoComplete="on"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Username</span>
                <input
                  type="text"
                  name="userName"
                  placeholder="Enter your username"
                  pattern="[A-Za-zÀ-ž\s0-9]{3,}"
                  maxLength="40"
                  autoComplete="on"
                  onChange={(e) => setForm(e)}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input
                  type="text"
                  name="email"
                  placeholder="e.g. youremail@gmail.com"
                  pattern="[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  maxLength="35"
                  autoComplete="on"
                  onChange={(e) => setForm(e)}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="e.g 98765432"
                  maxLength="8"
                  pattern="[0-9]{8}"
                  onChange={(e) => setForm(e)}
                  required
                />
              </div>
              <div className="input-box pwd">
                <span className="details">Password</span>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  {...register("password")}
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  onChange={(e) => setForm(e)}
                  autoComplete="on"
                  required
                />
                <div className="invalid-feedback">
                  {errors.password?.message}
                </div>
              </div>
              <div className="input-box pwd">
                <span className="details">Confirm Password</span>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  {...register("passwordConfirm")}
                  className={`form-control ${
                    errors.passwordConfirm ? "is-invalid" : ""
                  }`}
                  autoComplete="on"
                  required
                />
                <div className="invalid-feedback">
                  {errors.passwordConfirm?.message}
                </div>
              </div>
              <div className="input-box">
                <span className="details">Address</span>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter your Address"
                  onChange={(e) => setForm(e)}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Postal Code</span>
                <input
                  type="text"
                  name="zipCode"
                  pattern="[0-9]{4}"
                  placeholder="Enter your Postal Code e.g. 80**"
                  onChange={(e) => setForm(e)}
                  required
                />
              </div>
            </div>
            {/* <div className="gender-details">
              <input type="radio" name="__gender__" id="dot-1" />
              <input type="radio" name="__gender__" id="dot-2" />
              <input type="radio" name="__gender__" id="dot-3" />
              <span className="gender-title">Gender</span>
              <div className="category">
                <label htmlFor="dot-1">
                  <span className="r-dot d-one"></span>
                  <span className="__gender__">Male</span>
                </label>
                <label htmlFor="dot-2">
                  <span className="r-dot d-two"></span>
                  <span className="__gender__">Female</span>
                </label>
                <label htmlFor="dot-3">
                  <span className="r-dot d-three"></span>
                  <span className="__gender__">Prefer not to say</span>
                </label>
              </div>
            </div> */}
            <div className="button">
              <input type="submit" value="Register" />
            </div>
            {failed && (
              <div className="server-failed">
                Server not responding, Please try again in a few seconds{" "}
                <b>...</b>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
