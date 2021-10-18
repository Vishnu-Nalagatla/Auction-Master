import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import AMLogo from "../../../../Assets/AMLogo.png";

function Navbar() {
  return (
    <div className="nav-header">
      <Link to="/" >
      <img className="am_logo" alt="" src={AMLogo} />
      </Link>
      <ul className="nav-list">
        <Link to="/products&services" className="products-services">
        <li className="list products-services">PRODUCTS & SERVICES</li>
        </Link>
        <li className="list customer-cases">CUSTOMER CASES</li>
        <li className="list company">COMPANY</li>
        <Link to="/signup">
          <button className="book-a-demo"> SignUp </button>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
