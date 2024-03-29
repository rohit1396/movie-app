import React, { useEffect, useState } from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { GlobalMovie } from "../MovieContext";

const Navbar = () => {
  const { query, setQuery } = GlobalMovie();
  const [show, setShow] = useState(false);
  // const [input, setInput] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          setShow(true);
        } else setShow(false);
      });
    };
  }, []);

  return (
    <>
      <div className={`navbar ${show && "navbar_black"}`}>
        <Link to="/home">
          <img
            className="navbar_logo"
            src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
            alt="navbar_logo"
          />
        </Link>
        <div className="navbar_search">
          <input
            className="navbar_searchInput"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Link to="/searchpage">
            <SearchIcon className="searchIcon" />
          </Link>
        </div>
      </div>
      <div className="nav_footbar">
        <Link to="/home">
          <HomeIcon className="homeIcon" />
        </Link>
        <Link to="/searchpage">
          <SearchIcon className="searchIcon" />
        </Link>
      </div>
    </>
  );
};

export default Navbar;
