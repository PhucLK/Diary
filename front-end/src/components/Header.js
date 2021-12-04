import React from "react";
import { Link } from "react-router-dom";

import "../css/Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">
        {/* forward to url without reloading page */}
        <Link to="/">Diary</Link>
      </h1>
      <nav className="nav">
        <ul className="main-nav">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <span className="user-name">Hello</span>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
