import Link from "next/link";


import React, { useState } from "react";
import NavItem from "../NavItem/navitem";

const MENU_LIST = [
  {
    id: 1,
    text: "Home",
    href: "/"
  },
  {
    id: 2,
    text: "Who am i ?",
    href: "/ambroise",
  },
  {
    id: 3,
    text: "Projects",
    href: "/projects",
  },
  {
    id: 4,
    text: "Skills",
    href: "/skills",
  },
  {
    id: 5,
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


// const Navbar = () => {
//   return (
//     <div className="nav-container">
//       <ul>
//         <li>
//           <Link href="/ambroise">
//             Who am i ?
//           </Link>
//         </li>
//         <li>
//           <Link href="/skills">
//             Skills
//           </Link>
//         </li>
//         <li>
//           <Link href="/projects">
//             Projects
//           </Link>
//         </li>
//         <li>
//           <Link href="/contact">
//             Contact
//           </Link>
//         </li>
//       </ul>
//     </div>
//   )
// }

// export default Navbar;