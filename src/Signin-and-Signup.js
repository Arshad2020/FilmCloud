import React from "react";

import UseInput from "./UseInput";
import { useHistory } from "react-router-dom";

function SigninAndSignup({ setIsLogedIn, setUser }) {
  const [loginValue, handleLoginOnChange, resetLogin] = UseInput({
    email: "",
    password: "",
  });
  const history = useHistory();
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem("signedUpUsers")) || [];

    let user = users.find(
      (savedUser) =>
        savedUser.email === loginValue.email &&
        savedUser.password === loginValue.password
    );
    resetLogin();
    if (user) {
      setIsLogedIn(true);
      history.push("/home");
      setUser(user);
    }
  };

  const [signUpValue, handleSignUpOnChange, resetSignUp] = UseInput({
    username: "",
    email: "",
    password: "",
  });

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    const signedUpList =
      JSON.parse(localStorage.getItem("signedUpUsers")) || [];
    const updatedSignedUpList = [...signedUpList, signUpValue];
    localStorage.setItem("signedUpUsers", JSON.stringify(updatedSignedUpList));
    resetSignUp();
  };

  return (
    <div className="signin-and-signup-container">
      <div className="sign-in-div">
        <h2 className="sign-in-title">I already have an account</h2>
        <span className="sign-in-sub-title">
          Sign in with your email and password
        </span>
        <form className="form" onSubmit={handleLoginSubmit}>
          <label>Email</label>
          <input
            className="form-input"
            name="email"
            type="email"
            value={loginValue.email}
            onChange={handleLoginOnChange}
            label="email"
            required
          />
          <label>Password</label>
          <input
            className="form-input"
            name="password"
            type="password"
            value={loginValue.password}
            label="password"
            onChange={handleLoginOnChange}
            required
          />

          <input className="submit-button" type="submit" value="Log in" />
        </form>
      </div>
      <div className="sign-up-div">
        <h2 className="sign-up-title">Create a new account</h2>
        <span className="sign-up-dub-title">
          Sign up with you email and password
        </span>
        <form className="form" onSubmit={handleSignUpSubmit}>
          <label>Username</label>
          <input
            className="form-input"
            type="text"
            id="username"
            name="username"
            type="text"
            placeholder="Display Name"
            value={signUpValue.username}
            onChange={handleSignUpOnChange}
            required
          />
          <label>Email</label>
          <input
            className="form-input"
            name="email"
            type="email"
            value={signUpValue.email}
            onChange={handleSignUpOnChange}
            required
          />
          <label>Password</label>
          <input
            className="form-input"
            name="password"
            type="password"
            value={signUpValue.password}
            onChange={handleSignUpOnChange}
            required
          />

          <input className="submit-button" type="submit" value="Sign Up" />
        </form>
      </div>
    </div>
  );
}

export default SigninAndSignup;
