import React, { useState, useEffect } from "react";
import logo from "../Assets/metapass transparent.png";
import "../Styles/Navbar.css";
import GradientButton from "./GradientButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const MenuItems = [
  {
    title: "Join Community",
    url: "/Home",
    cName: "nav-link",
  },
];

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <nav className="NavbarItems" data-aos="fade-down">
      <img className="navbar-logo" src={logo} alt="Logo" />
      <div className="menu-icon" onClick={handleClick}>
        {clicked ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </div>
      <ul className={clicked ? "nav-links active" : "nav-links"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
        <li>
          <GradientButton>Launch App</GradientButton>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
