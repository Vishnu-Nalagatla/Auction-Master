import React from "react";
import ProductsServices from "../../AuctionProductsServices/ProductsServices";
import SellerLoginPage from "../../SellerHomePage/SellerLoginPage/SellerLoginPage";
import Login from "./Header-Login/Login";
import "./header.css";
// import {  }

function Header() {
  return (
    <div className="header-container">

        {/* <div className="auction-product-data">
        <ProductsServices></ProductsServices>
        </div>
       */}
      <div className="header-body">
        <div className="header-body-content">
          <p>
            Sign up for a <b>Virtual demonstration</b> with one of our Senior
            Sourcing Consultants to see for yourself how easily Scan market
          </p>
        </div>
        <div className="header-body-login-container">
          <Login></Login>

          {/* <SellerLoginPage /> */}
        </div>
      </div>
      <div className="header-footer"></div>
    </div>
  );
}

export default Header;
