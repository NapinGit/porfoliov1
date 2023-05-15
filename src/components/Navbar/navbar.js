import Link from "next/link";


import React, { useState } from "react";
import NavItem from "../NavItem/navitem";

const MENU_LIST = [
  {
    id: 1,
    text: "Who am i ?",
    href: "/ambroise",
  },
  {
    id: 2,
    text: "Projects",
    href: "/projects",
  },
  {
    id: 3,
    text: "Skills",
    href: "/skills",
  },
  {
    id: 4,
    text: "Contact",
    href: "/contact",
  },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav-container`}
        >
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          <ul>
            {MENU_LIST.map((menu, idx) => (
              <li key = {menu.id}>
                <div
                  onClick={() => {
                    setActiveIdx(idx);
                    setNavActive(false);
                  }}
                  key={menu.text}
                >
                  <NavItem active={activeIdx === idx} {...menu} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
