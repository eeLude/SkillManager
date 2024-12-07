import React, { useState } from 'react';
import styles from './Login.module.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const processLogin = () => {
    const users = JSON.parse(import.meta.env.VITE_USERS);

    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      onLogin(user);
    } else {
      alert("Invalid username or password");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className={styles.Login}>
      <button onClick={processLogin}>Login</button>

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

    </div>
    
  );
};

export default Login;
