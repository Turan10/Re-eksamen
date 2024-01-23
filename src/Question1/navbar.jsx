import React, { useState } from "react";
import { NavLink } from "react-router-dom";



const MyNavbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const arrayOfRoutes = [
    { name: "Question 1", path: ["/higherorderfunction", "/navbar.jsx"] },
    { name: "Question 2", path: ["/flex", "/flex/grid", "/profile"] },
    { name: "Question 3", path: ["/"] },
    { name: "Question 4", path: ["/promise"] },
    { name: "Question 5", path: ["/conditionalrendering", "/syncasync"] },
    { name: "Question 6", path: ["/storage", "/useeffect"] },
    { name: "Question 7", path: ["/"] },
    { name: "Question 8", path: ["/eventbubbling"] },
    { name: "Question 9", path: ["/controlleduncontrolled"] },
    { name: "Question 10", path: ["/"] },
    { name: "Question 11", path: ["/"] },
    { name: "Question 12", path: ["/"] },
    { name: "Question 13", path: ["/"] },
  ];

  
  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="#">
          Navbar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            {arrayOfRoutes.map((item, index) => (
              <li
                className={`nav-item dropdown ${
                  activeDropdown === item.name ? "show" : ""
                }`}
                key={index}
              >
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  id={`navbarDropdown-${index}`}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded={activeDropdown === item.name}
                  onClick={() => toggleDropdown(item.name)}
                >
                  {item.name}
                </NavLink>
                <ul
                  className={`dropdown-menu ${
                    activeDropdown === item.name ? "show" : ""
                  }`}
                  aria-labelledby={`navbarDropdown-${index}`}
                >
                  {item.path.map((path, pathIndex) => (
                    <li key={pathIndex}>
                      <NavLink className="dropdown-item" to={path}>
                        {path.substring(1)}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;