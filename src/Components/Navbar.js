import React, { useState, useEffect } from "react";
import logo from "../Assets/metapass transparent.png";
import "../Styles/Navbar.css";
import GradientButton from "./GradientButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box, Flex } from "@chakra-ui/react";

const MenuItems = [
  {
    title: "Join Community",
    url: "https://discord.gg/CBQ5YNnFXx",
    cName: "nav-link",
  },
  {
    title: "Launch App",
    url: "https://app.metapasshq.xyz/",
    cName: "gradient-button",
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
    <Flex
      alignItems="center"
      justify="space-between"
      w="full"
      shadow="sm"
      pb="2"
      mt="-2"
    >
      <nav className="NavbarItems" data-aos="fade-down">
        <img className="navbar-logo" src={logo} alt="Logo" />
        <Flex>
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
                  <a className={item.cName} href={item.url} target={"_blank"}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </Flex>
      </nav>
    </Flex>
  );
};

export default Navbar;
