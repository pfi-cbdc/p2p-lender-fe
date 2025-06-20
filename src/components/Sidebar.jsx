import "./Sidebar.css";

function Sidebar({ open, setOpen }) {
  return (
    <div className={`sidebar${open ? " open" : ""}`}>
      <button className="sidebar-close" onClick={() => setOpen(false)}>{"<"}</button>
      <div className="sidebar-content">
        <div className="sidebar-option">Chat Mode</div>
        <div className="sidebar-option">Voice Mode</div>
      </div>
    </div>
  );
}

export default Sidebar; 