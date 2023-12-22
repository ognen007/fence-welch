import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    // Send a POST request to the Node.js backend to authenticate the user
    const response = await fetch("http://localhost:5005/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.status === 200) {
      // Authentication successful
      alert("Login successful!");
      setLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
      navigate("/home")
    } else {
      // Authentication failed
      alert("Login failed. Check your credentials.");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h3>Enter Login Details</h3>
        <label>
          <input
            placeholder="Enter Your Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          <input
            placeholder="Enter Your Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button className="button" type="submit">Login</button>
      </form>
    </div>
  );
}


export default Login;
