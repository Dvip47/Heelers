import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
function NavBar() {
  const navigate = useNavigate();
  return (
    <div>
      <header className="header-bottom" id="header">
        <div className="container">
          <nav className="navbar navbar-expand-xl navbar-light">
            <NavLink className="navbar-brand logo" to="/">
              {/* <img src="assets/images/home-01/logo.png" alt="" />{" "} */}
              <img
                src="assets/images/home-01/tagline.jpg"
                alt=""
                style={{ height: "60px", width: "280px" }}
              />
            </NavLink>
            <button
              className="navbar-toggler header-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span id="hiddenNav">
                <i className="las la-bars"></i>
              </span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav nav-menu ms-auto">
                <li className="nav-item dropdown">
                  <div
                    className="nav-link"
                    // role="button"
                    // data-bs-toggle="dropdown"
                    // aria-expanded="false"
                  >
                    <a href="#" onClick={() => navigate("/")}>
                      Home
                    </a>
                    {/* <NavLink to="/" className="icon-add-1">
                      {" "}
                      Home
                    </NavLink> */}
                  </div>
                </li>

                <li className="nav-item">
                  <div className="nav-link">
                    <a href="#about" onClick={() => navigate("/")}>
                      {" "}
                      About
                    </a>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <div className="nav-link">
                    <a href="chat" onClick={() => navigate("/")}>
                      Team
                    </a>
                  </div>
                </li>

                <li className="nav-item">
                  <div className="nav-link">
                    <a href="#gellery" onClick={() => navigate("/")}>
                      Gellery
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link">
                    <a href="#Contact" onClick={() => navigate("/")}>
                      {" "}
                      Contact
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
