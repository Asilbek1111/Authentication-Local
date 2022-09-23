import React from "react";
import "./Dashboard.css";

const Dashbard = () => {
  let user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="wrapper">
      <table className="w-100">
        <tr className="bigname">
          <td>ID</td>
          <td>Email</td>
          <td>Password</td>
          <td>Login time</td>
        </tr>

        <tr>
          <td>1</td>
          <td>{user.email}</td>
          <td>{user.password}</td>
          <td>{user.time}</td>
        </tr>
      </table>
    </div>
  );
};

export default Dashbard;
