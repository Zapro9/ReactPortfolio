import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";


const Navbar = (props) => {
    return (
<>
<nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Zachary Proctor</a>
      <a href="index.html" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down" id="menuList">
        <li><Link to={"/home"} id="linkTags">Home</Link></li>
        <li><Link to={"/Portfolio"} id="linkTags">Portfolio</Link></li>
        <li><Link to={"/AboutMe"} id="linkTags">About Me</Link></li>
        <li><Link to={"/Contact"} id="linkTags">Contact Me</Link></li>
      </ul>
    </div>
  </nav>
  
</>
    )
}

export default Navbar;
