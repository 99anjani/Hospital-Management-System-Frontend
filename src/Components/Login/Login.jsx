import React from "react";
import "./Login.css";

import { FcHome } from "react-icons/fc";
import { FcLock } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div>
      <div className="login-page">
        <form className="login-form card">
          <div className="medical-hub-name">
            CarePulse Medical Hub <FcHome />
          </div>
          <div className="login-title">Login Here</div>
          <div>
            <FcBusinessman className="input-icon" />
            <input
              className="input-item"
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              required
            />
          </div>
          <div>
            <FcLock className="input-icon" />
            <input
              className="input-item"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <Link className="forget-password">Forget Password?</Link>
          <div>
            <button className="btn login-btn">Login</button>
          </div>
          <div className="create-account">
            Don't have an account?{" "}
            <Link to={"/createAccount"}>Create account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;


