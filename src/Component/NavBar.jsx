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
              <img src="assets/images/home-01/tagline.jpg" alt="" />
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
                    <a href="#Home" onClick={() => navigate("/")}>
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
                    <a href="#AboutService" onClick={() => navigate("/")}>
                      Services
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
                {/* <li className="header-login ms-xl-3 mt-xl-0 mt-4 mb-xl-0 mb-3">
                  <ul className="login-items-wrapper d-flex align-items-center">
                    <li className="nav-item">
                      <div className="nav-link">
                        <NavLink to="/login">Login</NavLink>
                      </div>
                    </li>
                    <li className="login-items-wrapper__item">
                      <div className="button-wrapper">
                        <div className="btn--base bg-one">
                          <NavLink to="/registation">Register Now</NavLink>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li> */}
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
