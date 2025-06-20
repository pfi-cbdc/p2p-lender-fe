import { useState } from "react";
import Sidebar from "../components/Sidebar";

function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div style={{ flex: 1, padding: "2rem" }}>
        {!sidebarOpen && (
          <div style={{ position: "fixed", top: 70, left: 20, zIndex: 1000, display: "flex", flexDirection: "column", gap: 12 }}>
            <button
              style={{ fontSize: 24, background: "#f8f9fa", border: "none", borderRadius: 8, cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", marginBottom: 8 }}
              onClick={() => setSidebarOpen(true)}
              title="Open Sidebar"
            >
              {">"}
            </button>
            <button
              style={{ fontSize: 24, background: "#fff", border: "none", borderRadius: 8, cursor: "pointer", marginBottom: 8 }}
              title="Chat Mode"
            >
              💬
            </button>
            <button
              style={{ fontSize: 24, background: "#fff", border: "none", borderRadius: 8, cursor: "pointer" }}
              title="Voice Mode"
            >
              🎤
            </button>
          </div>
        )}
        <h1>Dashboard</h1>
        <p>Welcome! You are logged in.</p>
      </div>
    </div>
  );
}

export default DashboardPage; 