import React from "react";
import axios from "axios";

const Signup = () => {
  const submitForm = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/auth/register").then((res) => {
      console.log(res);
    });
    console.log("Signed up!");
  };

  return (
    <div>
      <h2>Signup Page</h2>;
      <form onSubmit={submitForm}>
        <input type="email" placeholder="Your Email" />
        <input type="password" placeholder="Your Password" />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Signup;
