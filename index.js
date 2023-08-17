import React, { useState } from "react";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [name, setName] = useState("");
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== rePassword) {
      setPasswordMismatch(true);
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError(true);
      return;
    }

    console.log("Registration submitted:", name, email, password);
  };

  const validatePassword = (password) => {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/;
    return passwordPattern.test(password);
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Full Name"
          id="name"
          name="name"
        />
        <label htmlFor="email">Email/Phone No</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email/Phone No"
          id="email"
          name="email"
        />
        {/* ... other fields */}
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
          required
        />
        {passwordError && (
          <p className="password-error">
            Password should be 6-20 characters long and include at least one
            uppercase letter, one lowercase letter, one digit, and one special
            character.
          </p>
        )}
        {/* ... other fields */}
        <label htmlFor="rePassword">Re-Enter Password</label>
        <input
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
          type="password"
          placeholder="********"
          id="rePassword"
          name="rePassword"
          required
        />
        {passwordMismatch && (
          <p className="password-mismatch">Passwords do not match.</p>
        )}
        <button type="submit" className="login-btn">
          Submit
        </button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login here.
      </button>
    </div>
  );
};

export default Register;
