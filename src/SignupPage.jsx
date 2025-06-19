import { useState } from "react";
import { signup } from "./api";
import { useNavigate } from "react-router-dom";

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
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required type="email" />
        <input placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required type="password" />
        <button type="submit">Sign Up</button>
      </form>
      <div style={{ marginTop: 20 }}>{message}</div>
    </div>
  );
}

export default SignupPage; 