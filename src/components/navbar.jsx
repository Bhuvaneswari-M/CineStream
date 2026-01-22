
import {Link} from "react-router-dom";
import "../style/navbar.css";
import logo from "../assets/cinestream.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="CineStream Logo" className="navbar-logo" />
        <span className="navbar-title">CineStream</span>
      </div>

      <div className="navbar-right">
            <Link to="/" className="nav-btn"> Movies</Link>
            <Link to ="/My-list" className="nav-btn">My List</Link>
            <Link to ="/payments" className="nav-btn">Subscribe</Link>
            <Link to="/login" className="nav-btn login">Login</Link>
        </div>
    </nav>
  );
};

export default Navbar;
