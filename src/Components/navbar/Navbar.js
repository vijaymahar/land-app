import React from "react";
import { NavLink, NavNavLink, BrowserRouter } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <BrowserRouter>
        <nav>
          <div className='nav-wrapper'>
            <div className='logo-main'>
              <div href='#' className='brand-logo'>
                Land <span>Docs</span>
              </div>
              <div className='logo_sub-text'>something small text here</div>
            </div>
            <div className='links-wrapper'>
              <ul id='nav-mobile' className=''>
                <li>
                  <NavLink className='navLink' to={{}}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className='navLink' to={{}}>
                    Land Dictionary
                    <i className='bx bxs-chevron-down'></i>
                  </NavLink>
                </li>
                <li>
                  <NavLink className='navLink' to={{}}>
                    FAQs
                  </NavLink>
                </li>
                <li>
                  <NavLink className='navLink' to={{}}>
                    Ask a Legal Expert
                  </NavLink>
                </li>
                <li>
                  <NavLink className='navLink' to={{}}>
                    Login
                  </NavLink>
                </li>
                <li>
                  <button className='craete-account-btn'>create Account</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </BrowserRouter>
    </>
  );
};

export default Navbar;
