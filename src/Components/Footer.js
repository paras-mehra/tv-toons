import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {

  return (
    <div className="bg-white py-4">
      <div className="container">
        <footer className="d-flex flex-lg-nowrap flex-wrap-reverse  justify-content-between align-items-center">
          <p className="mx-lg-0 mx-auto mx-md-auto">TvToonsIndia @2022</p>
          <ul className="d-flex flex-wrap list-unstyled justify-content-center align-items-center mx-lg-0 mx-auto mx-md-auto gap-3 fs-5 px-2">
            <li>
              <NavLink to="/request" className="text-decoration-none">
                CONTACT US
              </NavLink>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                PRIVACY
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                DMCA
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                COPYRIGHT
              </a>
            </li>
            <li>
              <a href="#" className="text-decoration-none">
                DISCLAIMER
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
