import {useState} from 'react';
import "../styles/navbar.css";
import mylogo from "../assets/mylogo.png";
import menu from "../assets/menu.jpg"
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";


const Navbar = () => {
  const [showMenu, setShowMenu]= useState(false)
  return (
    <nav className="navbar">
      <img src={mylogo} alt="logo" className="logo" />
      <div className="menu">
        <Link to='/'className="menuListItem">Home</Link>
        <Link to='/about'className="menuListItem">About</Link>
        <Link to='/portfolio' className="menuListItem">Portfolio</Link>
        
      </div>
      <Link to='/contact'><button className="menuBtn">
        <RxAvatar className="imageBtn" />
        Contact me
     </button> </Link>
     <img src={menu} alt="logo" className="mobileLogo" onClick={()=>setShowMenu(!showMenu)} />
      <div className="hiddenMenu" style={{display:showMenu? "flex" : "none"}}>
        <Link to='/'className="ListItem" onClick={()=>setShowMenu(false)}>Home</Link>
        <Link to='/about'className="ListItem" onClick={()=>setShowMenu(false)}>About</Link>
        <Link to='/portfolio' className="ListItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
        <Link to='/contact'  className="ListItem" onClick={()=>setShowMenu(false)}>Contact</Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
