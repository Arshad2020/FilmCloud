import React from "react";

import { Link } from "react-router-dom";
import Logo from "./logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Nav(props) {
  return (
    <nav>
      <div className="logo">
        <Link style={{ textDecoration: "none" }} to="/home">
          <img className="logo-image" src={Logo} alt="logo-image" />
        </Link>
      </div>

      <div className="nav-links-container">
        <ul className="nav-links">
          <Link style={{ textDecoration: "none" }} to="/home">
            <li>Home</li>
          </Link>
          <div className="search-area">
            <form action="" onSubmit={props.handleSubmit}>
              <input
                className="search-field"
                placeholder="Search.."
                spellCheck={false}
                type="text"
                value={props.searchTerm}
                onChange={props.handleChange}
              />
            </form>
          </div>

          <Link style={{ textDecoration: "none" }} to="/rentlist">
            <li>Rentlist</li>
          </Link>

          {props.isLogedIn ? (
            <Link
              className="user-div"
              onClick={() => props.setIsLogedIn(false)}
            >
              <span className="user-span-exit">Log out</span>
              <span className="user-span-icon">
                <FontAwesomeIcon style={{ color: "#5799ef" }} icon={faUser} />
              </span>

              <span>{props.user.username}</span>
            </Link>
          ) : (
            <Link style={{ textDecoration: "none" }} to="/login">
              <li>Log in</li>
            </Link>
          )}
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
