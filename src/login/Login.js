import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Login.css"
export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState("");

     const handleSubmit = (event) => {
       event.preventDefault();
     };
  return (
    <form onSubmit={handleSubmit} className="form1">
      <div className="d1">
        <label htmlFor="username" className="label1">
          Username:
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div className="d1">
        <label htmlFor="password" className="label2">
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <Link to="/home">
        <button type="submit" className="submit1">
          Log In
        </button>
      </Link>
    </form>
  );
}
