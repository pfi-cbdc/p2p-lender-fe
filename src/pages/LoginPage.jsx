import { useState } from "react";
import { signin } from "../api";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage({ setTokens }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    const res = await signin(username, password);
    if (res.access && res.refresh) {
      setTokens(res.access, res.refresh);
      setMessage("Signed in successfully!");
      navigate("/dashboard");
    } else {
      setMessage(res.detail || JSON.stringify(res));
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form className="login-form" onSubmit={handleSignin}>
        <label>Username</label>
        <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
        <label>Password</label>
        <input placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required type="password" />
        <button type="submit">Sign In</button>
      </form>
      <div style={{ marginTop: 20 }}>{message}</div>
    </div>
  );
}

export default LoginPage; 