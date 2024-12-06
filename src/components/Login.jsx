import React from "react";
import { useState } from "react";

const Login = ({onLogin}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const usernameHandler = (event) => {
        setUsername(event.target.value)
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value)
    }
    
    

const handleLogin = () => {

    

    const users = JSON.parse(import.meta.env.VITE_USERS);


    
    const user = users.find(
        (u) => u.username === username && u.password === password
    );

    if(user) {
        onLogin(user);
    } else {
        alert("Invalid username or password");
        setUsername("")
        setPassword("")
    }
    
    

};

return (
    <div>
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

        <button onClick={handleLogin}>Login</button>
    </div>
)
};

export default Login;