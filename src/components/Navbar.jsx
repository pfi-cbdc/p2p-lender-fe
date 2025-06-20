import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ isLoggedIn, onLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to={isLoggedIn ? "/dashboard" : "/"} className="navbar-logo">pfi</Link>
      </div>
      <div className="navbar-center">
        {!isLoggedIn && (
          <>
            <Link to="/lender" className="navbar-link">Lender</Link>
            <Link to="/borrower" className="navbar-link">Borrower</Link>
          </>
        )}
      </div>
      <div className="navbar-right">
        {isLoggedIn ? (
          <>
            <Link to="/profile" className="navbar-link">Profile</Link>
            <button className="navbar-link navbar-logout" onClick={onLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="navbar-link">Login</Link>
            <Link to="/signup" className="navbar-link">Signup</Link>
            <Link to="/talk" className="navbar-link navbar-talk">Talk to Team</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar; 