import Link from "next/link";

// const Navbar = () => {
//   return (
//     <div className="nav-container">
//       <div className="logo">
//         <ul>
//           <li>
//             <p>
//   <Link href="/ambroise">
//     Who am i ?
//   </Link>
// </p>
// <p>
//   <Link href="/skills">
//     Skills
//   </Link>
// </p>
// <p>
//   <Link href="/projects">
//     Projects
//   </Link>
// </p>
// <p>
//   <Link href="/contact">
//     Contact
//   </Link>
//             </p>
//           </li>
//         </ul>

//       </div>
//       <hr />
//       {/* <a href="" className="cta-btn">Resume</a> */}
//     </div>
//   )
// }

// export default Navbar;


const Navbar = () => {
  return (
    <div className="nav-container">
      <ul>
        <li>
          <Link href="/ambroise">
            Who am i ?
          </Link>
        </li>
        <li>
          <Link href="/skills">
            Skills
          </Link>
        </li>
        <li>
          <Link href="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;