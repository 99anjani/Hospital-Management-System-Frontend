import React, { Component, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import CallIcon from "@mui/icons-material/Call";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import KeyIcon from "@mui/icons-material/Key";
import EmailIcon from "@mui/icons-material/Email";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  let navigate = useNavigate();

  const [PatientDetails, setPatientDetails] = useState({
    name: "",
    email: "",
    gender: "-1",
    mobile: "",
    password: "",
    rePassword: "",
  });

  const { name, email, gender, mobile, password, rePassword } = PatientDetails;

  const onInputChange = (e) => {
    setPatientDetails({
      ...PatientDetails,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== rePassword) {
      alert("Passwords do not match!");
      return;
    }

    await axios.post("http://localhost:8080/patients", PatientDetails);
    navigate("/");
  };

  return (
    <div>
      <div className="sign-up-page">
        <div className="form-board-body card">
          <form action="/" onSubmit={(e) => onSubmit(e)}>
            <div className="info-set">
              <div className="info-item">
                <label className="icon">
                  <PersonIcon />
                </label>
                <input
                  className="input-tags"
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  placeholder="Name"
                  onChange={(e) => onInputChange(e)}
                  required
                />
              </div>
              <div className="info-item">
                <label className="icon">
                  <EmailIcon />
                </label>
                <input
                  className="input-tags"
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => onInputChange(e)}
                  required
                />
              </div>
              <div className="info-item">
                <label className="icon">
                  <CallIcon />
                </label>
                <input
                  className="input-tags"
                  type="text"
                  name="mobile"
                  id="mobile"
                  value={mobile}
                  placeholder="Mobile"
                  onChange={(e) => onInputChange(e)}
                  required
                />
              </div>
              <div className="info-item">
                <label className="icon">
                  <PersonOutlineIcon />
                </label>
                <select
                  name="gender"
                  className="input-tags"
                  value={gender}
                  onChange={(e) => onInputChange(e)}
                >
                  <option value="-1">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="info-item">
                <label className="icon">
                  <KeyIcon />
                </label>
                <input
                  className="input-tags"
                  type="password"
                  name="password"
                  value={password}
                  id="password"
                  placeholder="Password"
                  onChange={(e) => onInputChange(e)}
                  required
                />
              </div>
              <div className="info-item">
                <label className="icon">
                  <KeyIcon />
                </label>
                <input
                  className="input-tags"
                  type="password"
                  name="rePassword"
                  id="rePassword"
                  placeholder="Re-Password"
                  
                  required
                />
              </div>
            </div>
            <div>
              <button type="submit" className="register-button">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
