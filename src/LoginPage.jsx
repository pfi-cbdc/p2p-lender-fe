import { useState } from "react";
import { signin } from "./api";
import { useNavigate } from "react-router-dom";

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
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h2>Login</h2>
      <form onSubmit={handleSignin}>
        <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
        <input placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required type="password" />
        <button type="submit">Sign In</button>
      </form>
      <div style={{ marginTop: 20 }}>{message}</div>
    </div>
  );
}

export default LoginPage; 