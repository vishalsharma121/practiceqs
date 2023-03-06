import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logoimg from "../../assets/logo.png"


function Registration() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm();
    if (errors.length === 0) {
      // Submit the form data to the server
      console.log('Submitting form:', { firstname, lastname, password });
      setFirstname('');
      setLastname('');
      setPassword('');
      setFormErrors([]);
    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = () => {
    const errors = [];
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W\s]).{8,}$/;

    if (!firstname) {
      errors.push('First name is required');
    }
    if (!lastname) {
      errors.push('Last name is required');
    }
    if (!password) {
      errors.push('Password is required');
    } else if (!passwordRegex.test(password)) {
      errors.push('Password must be at least 8 characters long, contain at least one lowercase letter, one uppercase letter, one number or symbol');
    }

    return errors;
  };

  return (
    <>
      <div className="formouter">
        <div className="lgoimg">
          <img src={logoimg} alt="" />
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="form-label" htmlFor="firstname">First name:</label>
            <input
              className="form-control"
              type="text"
              id="firstname"
              value={firstname}
              onChange={(event) => setFirstname(event.target.value)}
              required
            />
          </div>
          <div>
            <label className="form-label" htmlFor="lastname">Last name:</label>
            <input
              className="form-control"
              type="text"
              id="lastname"
              value={lastname}
              onChange={(event) => setLastname(event.target.value)}
              required
            />
          </div>
          <div>
            <label className="form-label" htmlFor="password">New password:</label>
            <input
              className="form-control"
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              minLength={8}
              required
              pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W\s]).{8,}$"
              title="Password must be at least 8 characters long, contain at least one lowercase letter, one uppercase letter, one number or symbol."
            />
          </div>
          {formErrors.length > 0 && (
            <ul>
              {formErrors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          )}
          <button className="btn btn-success my-3" type="submit">Continue</button>
        </form>
        <NavLink to="/login">Already registered? Login</NavLink>
      </div>
    </>
  );
}

export default Registration;
