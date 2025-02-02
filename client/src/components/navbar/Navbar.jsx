import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user,dispatch } = useContext(AuthContext);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="Netflix"
          />
          <Link to="/" className="link">
            <span>Homepage</span>
          </Link>
          <Link to="/series" className="link">
            <span className="navbarmainLinks">Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span className="navbarmainLinks">Movies</span>
          </Link>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <FaSearch className="icon" />
          <span>{user ? user.username : "Guest"}</span>
          <IoIosNotifications className="icon" />
          <img
            src="https://plus.unsplash.com/premium_photo-1669648870565-829ea58d7a05?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="profile">
            <IoMdArrowDropdown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span onClick={() => dispatch(logout())}>Logout</span>
              <span>Design By Abhinav</span>
            </div>
          </div>
          <IoMenuOutline className="menu-icon" onClick={toggleMenu} />
        </div>
      </div>
      <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
        <IoMenuOutline className="close-icon" onClick={toggleMenu} />
        <Link to="/" className="link" onClick={toggleMenu}>
          <span>Homepage</span>
        </Link>
        <Link to="/series" className="link" onClick={toggleMenu}>
          <span>Series</span>
        </Link>
        <Link to="/movies" className="link" onClick={toggleMenu}>
          <span>Movies</span>
        </Link>
        <span>New and Popular</span>
        <span>My List</span>
        <span onClick={() => dispatch(logout())}>Logout</span>
      </div>
    </div>
  );
};

export default Navbar;
