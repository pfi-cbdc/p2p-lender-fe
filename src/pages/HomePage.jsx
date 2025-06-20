import "./HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to pfi</h1>
      <p className="home-description">Peer-to-peer lending made simple, secure, and accessible for everyone.</p>
      <Link to="/signup" className="home-cta">Get Started</Link>
    </div>
  );
}

export default HomePage; 