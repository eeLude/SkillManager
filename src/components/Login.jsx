//API LOGIN

import React, { useState } from "react";
import styles from "./Login.module.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameHandler = (event) => setUsername(event.target.value);
  const passwordHandler = (event) => setPassword(event.target.value);

  const processLogin = async () => {
    try {
      // Send login request to the serverless function
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid username or password");
      }

      const user = await response.json();
      onLogin(user); // Pass the logged-in user to the parent component
    } catch (error) {
      alert(error.message);
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className={styles.Login}>
      <div className={styles.loginBox}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={usernameHandler}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={passwordHandler}
        />
        <button onClick={processLogin}>Login</button>
        <h3>
          Demo credentials:
          <br />
          <br /> Admin:
          <br /> Username: admin
          <br /> Password: admin123
          <br />
          <br /> Consultant:
          <br /> Username: Liisa Virtanen
          <br /> Password: test
        </h3>
      </div>
    </div>
  );
};

export default Login;
