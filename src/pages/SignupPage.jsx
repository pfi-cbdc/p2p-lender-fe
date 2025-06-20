import { useState } from "react";
import { signup } from "../api";
import { useNavigate } from "react-router-dom";
import "./SignupPage.css";

function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    const res = await signup(username, email, password);
    setMessage(res.message || JSON.stringify(res));
    if (res.message) {
      navigate("/login");
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Signup</h2>
      <form className="signup-form" onSubmit={handleSignup}>
        <label>Username</label>
        <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
        <label>Email</label>
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required type="email" />
        <label>Password</label>
        <input placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required type="password" />
        <button type="submit">Sign Up</button>
      </form>
      <div style={{ marginTop: 20 }}>{message}</div>
    </div>
  );
}

export default SignupPage; 