

// import React, { createContext, useState } from "react";

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const login = (userInfo) => {
//     // Mock user database
//     const mockUserDatabase = {
//       email: "test@example.com",
//       password: "password123",
//     };

//     // Simulate authentication
//     if (
//       userInfo.email === mockUserDatabase.email &&
//       userInfo.password === mockUserDatabase.password
//     ) {
//       setUser(userInfo); // Set the user if credentials match
//       console.log("Login successful:", userInfo);
//     } else {
//       console.log("Login failed: Invalid credentials");
//       alert("Invalid email or password. Please try again.");
//     }
//   };

//   return (
//     <UserContext.Provider value={{ user, login }}>
//       {children}
//     </UserContext.Provider>
//   );
// };



import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("loggedInUser");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (loginInfo) => {
    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (
      registeredUser &&
      loginInfo.email === registeredUser.email &&
      loginInfo.password === registeredUser.password
    ) {
      setUser(registeredUser);
      localStorage.setItem("loggedInUser", JSON.stringify(registeredUser));
      console.log("Login successful:", registeredUser);
    } else {
      console.log("Login failed: Invalid credentials");
      alert("Invalid email or password. Please try again.");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("loggedInUser");
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
