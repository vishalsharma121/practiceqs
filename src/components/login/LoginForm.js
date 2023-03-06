import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logoimg from "../../assets/logo.png";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = {};
    if (!email) {
      errors.email = "Email is required";
    }
    if (!password) {
      errors.password = "Password is required";
    }

    // If there are no errors, log the input values and reset the form
    if (Object.keys(errors).length === 0) {
      console.log(`Email: ${email}, Password: ${password}`);
      setEmail("");
      setPassword("");
      setErrors({});
    } else {
      setErrors(errors);
    }
  };

  return (
    <>
      <div className="formouter">
        <div className="lgoimg">
          <img src={logoimg} alt="" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="my-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-control"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div className="errors">{errors.email}</div>}
          </div>
          <div className="my-3">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              className="form-control"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <div className="errors">{errors.password}</div>
            )}
          </div>
          <button className="btn btn-success my-3" type="submit">
            Submit
          </button>
        </form>
        <div className="my-3">
          <NavLink to="/registration">
            Not yet registered? Register Now
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
