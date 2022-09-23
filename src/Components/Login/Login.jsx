import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../../Contexts/MyContext";
import "../Signup/Signup.css";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const Navigate = useNavigate();
  const { open, setOpen } = useContext(MyContext);
  if (open) {
    Navigate("/dashboard");
  }
  let currentUser = JSON.parse(localStorage.getItem("user"));
  console.log(currentUser.email);
  function handleOpen(e) {
    e.preventDefault();
    if (
      email.current.value === currentUser.email &&
      password.current.value === currentUser.password
    ) {
      setOpen(!open);
    }
  }

  return (
    <div className="text-center hello">
      <main className="form-signin w-100 m-auto">
        <form>
          <h1 className="h3 mb-5 fw-normal">Please Log in</h1>
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
            onClick={handleOpen}
          >
            Sign in
          </button>
          <p className="mt-2">
            Don't have an account? <Link to="/"> Sign up </Link>
          </p>
          <p className="mt-5 mb-3 text-muted">© By Asilbek Haydarov 2022</p>
        </form>
      </main>
    </div>
  );
}
