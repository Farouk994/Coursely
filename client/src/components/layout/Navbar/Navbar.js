import { NavLink } from "react-router-dom";
import React from "react";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className='navbar'>
        <div className='nav-container container'>
          <NavLink exact to='/' className='nav-logo nav_link'>
           Coursel<span className='dot'>y</span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className='nav-item'>
              <NavLink
                exact
                to='/'
                activeClassName='active'
                className='nav-links'
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                exact
                to='/school'
                activeClassName='active'
                className='nav-links'
                onClick={handleClick}
              >
                Schools
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                exact
                to='/schoolreport'
                activeClassName='active'
                className='nav-links'
                onClick={handleClick}
              >
                Become a member
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                exact
                to='/login'
                activeClassName='active'
                className='nav-links'
                onClick={handleClick}
              >
                Profile
              </NavLink>
            </li>
          </ul>
          <div className='nav-icon' onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
