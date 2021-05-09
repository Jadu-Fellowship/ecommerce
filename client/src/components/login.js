import React from "react";
import axios from "axios";

const Login = () => {
  const submitForm = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/auth/login").then((res) => {
      console.log(res);
    });
    console.log("Logged in!");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={submitForm}>
        <input type="email" placeholder="Your Email" />
        <input type="password" placeholder="Your Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
