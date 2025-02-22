import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header>
      <Link className="link" to="/">
        Logo
      </Link>
      <nav>
        <ul>
          <li to="/">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="link" to="/booking">
              Book
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
