import React from "react";

import "./UserAcount.css";

const UserAcount = () => {
  return (
    <div className="login">
      <div className="heading">
        <h2>Sign in</h2>
        <form action="">
          <div className="input-group input-group-lg">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
            />
          </div>
          <div className="input-group input-group-lg">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default UserAcount;
