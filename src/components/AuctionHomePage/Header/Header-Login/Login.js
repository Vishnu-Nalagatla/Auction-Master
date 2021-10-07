import React from 'react'
import './headerLogin.css'

function Login() {
    function message() {
    return alert("Hello!... Vishnu");
  }
    return (

            <div className="header-body-login-form">
            <form onSubmit={message} className="form-validate">
              <div className="header-body-login">
                <div className="grid-container">
                  <input className="input-name" required type="text" placeholder="Your Name"/>
                  <input className="input-email" required type="email" placeholder="Email" /> 
                  <input className="input-phone" required type="tel" placeholder="Phone" pattern="[0-9]{10}" minLength="10" maxLength="10" /> 
                  <textarea className="input-tellUs" required type="text" placeholder="Tell us more..." />
                  <button type="submit" className="btn-writeUs"> Write us </button>
                  <button className="btn-login"> Login </button>
                </div>
              </div>
            </form>
          </div>

    )
}

export default Login
