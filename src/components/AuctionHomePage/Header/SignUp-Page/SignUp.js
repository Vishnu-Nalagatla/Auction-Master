import React, { useState, useRef} from 'react'
import './SignUp.css'

function SignUp() {
    function message() {
        return alert("Hello!... Vishnu");
      }

    return (
        <>
      
            <div className="form">
            <form onSubmit={message} className="form-validate"  action="http://localhost:8080/register" method="post">
              <div className="signUp-login">
                <div className="signUp-grid-container">
                  {/* <label>First Name</label> */}
                  <input className="first-name" required type="text" placeholder="First Name" name="firstName"/>
                  <input className="last-name" required type="text" placeholder="Last Name" name="lastName"/>
                  <input className="signUp-email" required type="email" placeholder="Email" name="username" /> 
                  <input className="signUp-password" required type="password" placeholder="Password" name ="password"/> 
                  <input className="signUp-confirm-password" required type="password" placeholder="Confirm Password" /> 
                  {/* <input className="signUp-dateOfBirth" required type="date" placeholder="" />  */}
                  <select className="signUp-gender" name="gender" required>
                   <option value="Male" name="grp1"  >Male</option>
                   <option value="Female" name="grp1" >Female</option>
               </select>
                  <input className="signUp-phone" required type="tel" placeholder="Phone" pattern="[0-9]{10}" minLength="10" maxLength="10" name="phone" /> 
                  <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
                  <button className="btn-signUp"> Sign Up </button>
                </div>
              </div>
            </form>
          </div>
        </>
    )
}


export default SignUp

