import React, { Fragment } from "react";

const Navbar = () => {
  return (
    <Fragment>
      <div className="top-header">
        <p>left</p>
        <p>Gummy Up</p>
        <p>right</p>
      </div>
      <nav className="main-header">
        <div className="header-logo">
          <img src="Bounce-Logo.png" alt="bounce" />
        </div>
        <div className="middle-header">
          <ul>
            <li>pre-workout gummies</li>
            <li>about us</li>
            <li>ambassadors</li>
            <li>wholesale</li>
            <li>contact us</li>
          </ul>
        </div>
        <div className="right-header">
          <p>profile</p>
          <p>cart</p>
          <p>search</p>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
