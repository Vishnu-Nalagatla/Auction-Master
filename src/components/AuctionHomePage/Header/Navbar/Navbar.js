import React from 'react'
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import './navbar.css'
import AMLogo from '../../../../Assets/AMLogo.png'

function Navbar() {
    return (
            <div className="nav-header">         
          <img className="am_logo" alt="" src={AMLogo} />
          <ul className="nav-list">
            <li className="list products-services">PRODUCTS & SERVICES</li>
            <li className="list customer-cases">CUSTOMER CASES</li>
            <li className="list company">COMPANY</li>
           
            
            <button className="book-a-demo"> <Link to='/SignUp' >SignUp </Link></button>
          </ul>
        </div>

    )
}

export default Navbar
