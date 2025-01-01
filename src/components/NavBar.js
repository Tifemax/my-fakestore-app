// import { NavLink } from 'react-router-dom'
// import { TbAtom2Filled, TbShoppingCart, TbUser, TbUserCheck} from "react-icons/tb";
// import { TiShoppingCart } from "react-icons/ti";
// import { useState, useContext } from 'react';
// import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
// import { Dropdown } from 'react-bootstrap';
// import {
//   FaInstagram,
//   FaYoutube,
//   FaFacebook,
//   FaTwitter,
//   FaShoppingCart,
//   FaHeart,
//   FaUser,
// } from "react-icons/fa";



// function NavBar() {
//   const { user, logout } = useContext(UserContext);
//   // const { user, login, logout } = useContext(UserContext);
//   // const [name, setName] = useState("");
//   // const handleChange = (e) => {
//   //   setName(e.target.value);
//   // };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   login(name);
//   //   setName("");
//   // };
//   const navData = [
//    { name: 'Home', path: '/'},
//    { name: 'Wears', path: '/wears'},
//    { name: 'Electronics', path: '/electronics'},
//    { name: 'Jewelry', path: '/jewelry'},
//    { name: "Men's Clothing", path: '/mensclothing' },
//    { name: "Woman's Clothing", path: '/womansclothing'},
//   //  { name: "Login", path: '/login'},
//   //  { name: "Signup", path: '/signup'},
   
//   ];

//   return (
//     <>
//    <nav className="navbar navbar-expand-lg bg-danger navbar-dark">
//       <div className="container-fluid">
//       <Navbar.Brand href="#home">FakeStore</Navbar.Brand>
//         <NavLink className="navbar-brand" to="/">
//         <TbAtom2Filled size={32} color="yellow" />
//         </NavLink>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav">
//             {navData.map(({ name, path }, i) => (
//               <li className="nav-item" key={i}>
//                 <NavLink className="nav-link" aria-current="page" to={path}>
//                   {name}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//           <ul className="navbar-nav ms-auto"> {/* Align items to the right */}
//           <li className="nav-item">
//             <NavLink className="nav-link" to="/cart">
//               <TbShoppingCart size={24} color="white" />
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <Dropdown>
//               <Dropdown.Toggle variant="link" id="user-dropdown">
//                 <TbUser size={24} color="white" />
//               </Dropdown.Toggle>

//               <Dropdown.Menu>
//                 <Dropdown.Item as={NavLink} to="/login">Login</Dropdown.Item>
//                 <Dropdown.Item as={NavLink} to="/signup">Sign Up</Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//           </li>
//         </ul>
//         </div>
//       </div>
//     </nav>
//     </>
    
//   )
// }

// export default NavBar;

import { NavLink } from 'react-router-dom';
import { TbAtom2Filled, TbDoorEnter, TbInbox, TbShoppingCart, TbUser } from "react-icons/tb";
import { useContext } from 'react';
import { Navbar, Dropdown } from "react-bootstrap";
import { UserContext } from "../contexts/userContext";

function NavBar() {
  const { user, logout } = useContext(UserContext);

  const navData = [
    { name: 'Home', path: '/' },
    // { name: 'Wears', path: '/wears' },
    { name: 'Electronics', path: '/electronics' },
    { name: 'Jewelry', path: '/jewelry' },
    { name: "Men's Clothing", path: '/mensclothing' },
    { name: "Woman's Clothing", path: '/womansclothing' },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-danger navbar-dark sticky-top">
        <div className="container-fluid">
          <Navbar.Brand href="#home">FakeStore</Navbar.Brand>
          <NavLink className="navbar-brand" to="/">
            <TbAtom2Filled size={32} color="yellow" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {navData.map(({ name, path }, i) => (
                <li className="nav-item" key={i}>
                  <NavLink className="nav-link" aria-current="page" to={path}>
                    {name}
                  </NavLink>
                </li>
              ))}
             <div>
              <input type='text' placeholder='Search...' style={{borderRadius: '2%', marginLeft: '40px'}}/>
                <button type='button' class='btn btn-primary' style={{borderRadius: '50px'}}>Search</button>
             </div>
                
              
            </ul>
            <ul className="navbar-nav ms-auto"> {/* Align items to the right */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/cart">
                  <TbShoppingCart size={24} color="white" />
                </NavLink>
              </li>
              <li className="nav-item">
                <Dropdown>
                  <Dropdown.Toggle variant="link" id="user-dropdown">
                    <TbUser size={24} color="white" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {user ? (
                      <Dropdown.Item onClick={logout}>
                        Logout
                      </Dropdown.Item>
                    ) : (
                      <>
                        <Dropdown.Item as={NavLink} to="/login">
                          Login <TbDoorEnter />
                        </Dropdown.Item>
                        <Dropdown.Item as={NavLink} to="/signup">
                          Sign Up <TbInbox />
                        </Dropdown.Item>
                      </>
                    )}
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
