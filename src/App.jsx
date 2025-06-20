import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import { logout } from "./api";

function App() {
  const [access, setAccess] = useState(localStorage.getItem("access") || "");
  const [refresh, setRefresh] = useState(localStorage.getItem("refresh") || "");

  useEffect(() => {
    if (access) localStorage.setItem("access", access);
    else localStorage.removeItem("access");
    if (refresh) localStorage.setItem("refresh", refresh);
    else localStorage.removeItem("refresh");
  }, [access, refresh]);

  const handleLogout = async () => {
    if (refresh) await logout(refresh);
    setAccess("");
    setRefresh("");
  };

  const setTokens = (accessToken, refreshToken) => {
    setAccess(accessToken);
    setRefresh(refreshToken);
  };

  const isLoggedIn = !!access;

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage setTokens={setTokens} />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={isLoggedIn ? <DashboardPage /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
