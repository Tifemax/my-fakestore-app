// import React, { useContext, useState } from "react";
// import { UserContext } from "../contexts/userContext";
// import Home from "./Home";

// function Login() {
//   const { user, login } = useContext(UserContext);
//   const [loginInfo, setLoginInfo] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLoginInfo((loginInfo) => ({ ...loginInfo, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     login(loginInfo);
//     setLoginInfo({ username: "", email: "", password: "" });
//   };

//   // If the user is logged in, don't display the login form
//   if (user) {
//     return (
//       <div className="container-fluid bg-dark">
//         <div className="row text-center">
//           <div className="col-12">
//             <h2 style={{ color: "skyblue" }}>Welcome, {user.username}! <Home /></h2>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container-fluid bg-dark">
//       <div className="row text-center">
//         <div className="col-6 ">
//           <form
//             onSubmit={handleSubmit}
//             style={{ margin: "100px 0", textAlign: "center", color: "skyblue" }}
//           >
//             <div className="form-group my-3">
//               <label htmlFor="email">Email:</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={loginInfo.email}
//                 onChange={handleChange}
//                 className="form-control"
//                 id="email"
//                 required
//               />
//             </div>
//             <div className="form-group mb-3">
//               <label htmlFor="password">Password:</label>
//               <input
//                 type="password"
//                 name="password"
//                 value={loginInfo.password}
//                 onChange={handleChange}
//                 className="form-control"
//                 id="password"
//                 required
//               />
//             </div>
//             <button type="submit" className="btn btn-danger px-3 rounded-pill">
//               Login Now!
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/userContext";
import { useNavigate } from "react-router-dom";
import { TbDoorEnter } from "react-icons/tb";

function Login() {
  const { user, login } = useContext(UserContext);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((loginInfo) => ({ ...loginInfo, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(loginInfo);

    if (user) {
      navigate("/");
    }
  };

  if (user) {
    navigate("/");
  }

  return (
    <div className="container-fluid bg-dark">
      <div className="row text-center">
        <div className="col-6">
          <form
            onSubmit={handleSubmit}
            style={{ margin: "100px 0", textAlign: "center", color: "skyblue" }}
          >
            <div className="form-group my-3">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                value={loginInfo.email}
                onChange={handleChange}
                className="form-control"
                id="email"
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                value={loginInfo.password}
                onChange={handleChange}
                className="form-control"
                id="password"
                required
              />
            </div>
            <button type="submit" className="btn btn-danger px-3 rounded-pill">
              Login Now! <TbDoorEnter />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
