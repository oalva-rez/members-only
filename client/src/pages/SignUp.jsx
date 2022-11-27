import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }
  return (
    <div>
      <h1>members only.</h1>
      <fieldset>
        <legend>Create Member Profile</legend>
        <form action="">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            required
          />
          <label htmlFor="confirm">Confirm Password</label>
          <input
            type="password"
            name="confirm"
            id="confirm"
            onChange={handleChange}
            required
          />
          <button>Sign Up</button>
        </form>
      </fieldset>
      <p>
        Want to become a member? <Link to="/signup">Join now.</Link>
      </p>
    </div>
  );
}
