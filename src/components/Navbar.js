import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img
        className="navbar_logo"
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
        alt="navbar_logo"
      />
      <div className="navbar_search">
        <input className="navbar_searchInputs" type="text" />
      </div>
    </div>
  );
};

export default Navbar;
