// import React from "react";
// import { useState, useEffect } from "react";
// // import { Navbar, Nav, Container } from "react-bootstrap";
// import Logo from '../assets/img/Logo1.png';
// import './NavBar.css'

// import navIcon1 from '../assets/img/nav-icon1.svg';
// import navIcon2 from '../assets/img/nav-icon2.svg';
// import navIcon3 from '../assets/img/nav-icon3.svg';
// import { HashLink } from 'react-router-hash-link';
// import {
//   BrowserRouter as Router
// } from "react-router-dom";
// // import NavBar from NavBar.css

// export const NavBar = () => {

//   // const [activeLink, setActiveLink] = useState('home');
//   // const [scrolled, setScrolled] = useState(false);

//   // useEffect(() => {
//   //   const onScroll = () => {
//   //     if (window.scrollY > 50) {
//   //       setScrolled(true);
//   //     } else {
//   //       setScrolled(false);
//   //     }
//   //   }

//   //   window.addEventListener("scroll", onScroll);

//   //   return () => window.removeEventListener("scroll", onScroll);
//   // }, [])

//   // const onUpdateActiveLink = (value) => {
//   //   setActiveLink(value);
//   // }

//   return (
//     <Router>

//     <div className="nav-container">
//       <div className="wrapper">
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//      <div className="container-fluid">

//     <a className="navbar-brand" href="#" style={{padingRight:"10%"}}>
//       <img src={Logo} alt="RoCham"className="nav1" />
//     </a>
//     <div className="collapse navbar-collapse"  id="navbarNav" className="nav2">
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <a className="nav-link" aria-current="step" href="#">vision</a>
//         </li>
//         <li className="nav-item active">
//           <a className="nav-link" href="#">benifits</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Membership</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Contact</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Feeds</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">polls</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Events</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Notice</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Commitee</a>
//         </li>

//       </ul>

//         </div>
//         <form className="d-flex">

//         <a className="nav-link" href="#">login</a>

//         </form >
//         <form className="d-flex"className="nav3">

//         <button className="btn"className="nav4" style={{background: "linear-gradient(267.02deg, #FDCF17 4.24%, #F58935 94.31%",borderradius:"30px"}} type="submit" >Register</button>

//       </form>

//         </div>

//     </nav>
//       </div>
//     </div>
//     </Router>
//   )
// }

// export default NavBar;

import React from "react";
import Logo from "../../../assets/img/Logo1.png";
import styles from "./navbar.module.css";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const NavBar = () => {
  const history = useHistory();

  return (
    <div className="sticky-top">
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "white", justifyContent: "space-between" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ margin: "0rem 2rem" }}>
            <img
              src={Logo}
              alt="RoCham"
              height="24"
              style={{ width: "12rem", height: "2.5rem" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse d-contents`}
            id="navbarSupportedContent"
          >
            <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles.liAlign}`}>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  vision
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  benifits
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Membership
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/page/contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/page/feeds">
                  feeds
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/page/polls">
                  polls
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/page/events">
                  Events
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/page/events">
                  Notice
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/page/events">
                  Commitee
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <button
                className={`btn btn-outline-success ${styles.loginNav}`}
                type="button"
                onClick={() => console.log("helo")}
                style={{ marginRight: "1rem" }}
              >
                login
              </button>
              <button
                className={`btn btn-outline-success ${styles.navReg}`}
                type="button"
                onClick={() => console.log("helo")}
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
