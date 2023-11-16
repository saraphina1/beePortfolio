import { useState } from "react";
import "../styles/navbar.css";
import mylogo from "../assets/mylogo.png";
import menu from "../assets/menu.png";
import { NavLink, Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={mylogo} alt="logo" className="logo" />
      <div className="menu">
        <NavLink to="/" className="menuListItem">
          Home
        </NavLink>
        <NavLink to="/about" className="menuListItem">
          About
        </NavLink>
        <NavLink to="/portfolio" className="menuListItem">
          Portfolio
        </NavLink>
      </div>
      <Link to="/contact">
        <button className="menuBtn">
          <RxAvatar className="imageBtn" />
          Contact me
        </button>{" "}
      </Link>
      <img
        src={menu}
        alt="logo"
        className="mobileLogo"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div
        className="hiddenMenu"
        style={{ display: showMenu ? "flex" : "none" }}
      >
        <NavLink to="/" activeClass="active" className="ListItem" onClick={() => setShowMenu(false)}>
          Home
        </NavLink>
        <NavLink
          to="/about"
          activeClass="active"
          className="ListItem"
          onClick={() => setShowMenu(false)}
        >
          About
        </NavLink>
        <NavLink
          to="/portfolio"
          activeClass="active"
          className="ListItem"
          onClick={() => setShowMenu(false)}
        >
          Portfolio
        </NavLink>
        <NavLink
          to="/contact"
          activeClass="active"
          className="ListItem"
          onClick={() => setShowMenu(false)}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
