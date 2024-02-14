// import React, { useState } from "react";
// import {
//   FaTh,
//   FaBars,
//   FaUserAlt,
//   FaRegChartBar,
//   FaCommentAlt,
//   FaShoppingBag,
//   FaThList,
// } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
// import "./SideBar.css";

// const SideBar = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = () => setIsOpen(!isOpen);
//   const menuItem = [
//     {
//       path: "/",
//       name: "Dashboard",
//       icon: <FaTh />,
//     },
//     {
//       path: "/patient",
//       name: "Patient",
//       icon: <FaUserAlt />,
//     },
//     {
//       path: "/analytics",
//       name: "Analytics",
//       icon: <FaRegChartBar />,
//     },
//     {
//       path: "/comment",
//       name: "Comment",
//       icon: <FaCommentAlt />,
//     },
//     {
//       path: "/product",
//       name: "Product",
//       icon: <FaShoppingBag />,
//     },
//     {
//       path: "/productList",
//       name: "Product List",
//       icon: <FaThList />,
//     },
//   ];
//   return (
//     <div className="container sidebar-container">
//       <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
//         <div className="top-section">
//           <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
//             Logo
//           </h1>
//           <div
//             style={{
//               marginLeft: isOpen ? "50px" : "0px",
//               //   marginRight: isOpen ? "200px" : "0px",
//             }}
//             className="bars"
//           >
//             <FaBars onClick={toggle} />
//           </div>
//         </div>
//         {menuItem.map((item, index) => (
//           <NavLink
//             to={item.path}
//             key={index}
//             className="link"
//             activeclassName="active"
//           >
//             <div className="icon">{item.icon}</div>
//             <div
//               style={{ display: isOpen ? "block" : "none" }}
//               className="link_text"
//             >
//               {item.name}
//             </div>
//           </NavLink>
//         ))}
//       </div>
//       <main>{children}</main>
//     </div>
//   );
// };

// export default SideBar;
import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./SideBar.css";

const SideBar = ({ children }) => {
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/patient",
      name: "Patient",
      icon: <FaUserAlt />,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <FaRegChartBar />,
    },
    {
      path: "/comment",
      name: "Comment",
      icon: <FaCommentAlt />,
    },
    {
      path: "/product",
      name: "Product",
      icon: <FaShoppingBag />,
    },
    {
      path: "/productList",
      name: "Product List",
      icon: <FaThList />,
    },
  ];
  return (
    <div className="container sidebar-container">
      <div className="sidebar">
        <div className="top-section">
          <h1 className="logo">Logo</h1>
          {/* <div className="bars">
            <FaBars />
          </div> */}
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default SideBar;
