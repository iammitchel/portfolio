import React from 'react'
import './Sidebar.css'
// import {
//   AiOutlineHome,
//   AiOutlineInfoCircle,
//   AiOutlineContacts,
// } from "react-icons/ai";
// import { GiPaperBagCrumpled } from "react-icons/gi";

const Sidebar = ({open, click}) => {
  const navLinks = [
    {
      display: "Home",
      url: "#home",
    },

    {
      display: "About",
      url: "#about",
    },

    {
      display: "Portfolio",
      url: "#portfolio",
    },

    {
      display: "Contact",
      url: "#contact",
    },
  ];

  const handleClick = (e) => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 70,
    });
  };
  return (
    <div className={open ? "sidebar" : "!sidebar"}>
      {/* <li><AiOutlineHome/>Home</li>
      <li> <AiOutlineInfoCircle/>About</li>
      <li> <GiPaperBagCrumpled/>Portfolio</li>
      <li> <AiOutlineContacts/>Contact</li> */}
      <ul className="">
        {navLinks.map((item, index) => (
          <li className="" key={index}>
            <a
              className=''
              href={item.url}
              onClick={(handleClick, click)}
              style={{ textDecoration: "none" }}
            >
              {item.display}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar