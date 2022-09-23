import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
export default function Signup() {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  let time = new Date().toString();
  let Users = {
    email,
    password,
    time,
  };
  console.log(time);

  function handleSubmit() {
    Users.email = email.current.value;
    Users.password = password.current.value;
    Users.time = time;
    navigate("/login");
    localStorage.setItem("user", JSON.stringify(Users));
  }
  return (
    <div className="text-center hello">
      <main className="form-signin w-100 m-auto">
        <form>
          <h1 className="h3 mb-5 fw-normal">Please sign up</h1>
          <div className="form-floating">
            <input
              ref={email}
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              ref={password}
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button
            className="w-100 mt-3 btn btn-lg btn-primary"
            type="submit"
            onClick={handleSubmit}
          >
            Sign up
          </button>
          <p className="mt-2">
            Already have an account? <Link to="/login"> Log in </Link>
          </p>
          <p className="mt-5 mb-3 text-muted">© By Asilbek Haydarov 2022</p>
        </form>
      </main>
    </div>
  );
}
