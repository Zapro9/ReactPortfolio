
import {Link} from "react-router-dom";
import React, { useEffect } from "react";
import M from  'materialize-css/dist/js/materialize.min.js';
import "./Navbar.css";

const Navbar = (props) => {
    useEffect(() => {
      let sidenav = document.querySelector('#slide-out');
      M.Sidenav.init(sidenav, {});
  }, []);
    return (
<>
<nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo1">Zachary Proctor</a>
      <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down desktop" id="menuList">
        <li><Link to={"/home"}id="linkTags">Home</Link></li>
        <li><Link to={"/Portfolio"} id="linkTags">Portfolio</Link></li>
        <li><Link to={"/AboutMe"} id="linkTags">About Me</Link></li>
        <li><Link to={"/Contact"} id="linkTags">Contact Me</Link></li>
      </ul>
    </div>
    <div className="sideContainer">
    <ul id="slide-out" className="sidenav">
      <li><Link to={"/home"} id="sideRoutes">Home</Link></li>
      <li><Link to={"/Portfolio"} id="sideRoutes">Portfolio</Link></li>
      <li><Link to={"/AboutMe"} id="sideRoutes">About Me</Link></li>
      <li><Link to={"/Contact"} id="sideRoutes">Contact Me</Link></li>
    </ul>
    </div>

  </nav>
  
</>
    )
}

export default Navbar;
