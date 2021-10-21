import React, { useState, useRef} from 'react'
import './SignUp.css'

import { validFirstName, validLastName, validEmail, validPassword , validPhoneNumber} from './Regex'

function SignUp() {

  const [styles, setStyles] = useState()


  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')




  
  const validate = (e) => {
    e.preventDefault()
    const valid = {
      border: "2px solid green",
    }
    const invalid = {
      border: "2px solid red",
    }
if(validEmail.test(email)) {
  // setStyles(valid)

  document.getElementsByClassName('signUp-email')[0].classList.add('border-green')
}else {
  // setStyles(invalid)
  document.getElementsByClassName('signUp-email')[0].classList.remove('border-green')
  document.getElementsByClassName('signUp-email')[0].classList.add('border-red')

}

// if((validFirstName).test(firstName)) {
//   setStyles(valid)
// }else {
//   setStyles(invalid)
// }

  //   const handleFirstName = () => {
   
  //     if (validFirstName.test(firstName)) {
  //       setStyles(valid)
  //     } else {
  //       setStyles(invalid)
  //     }
  //   }



  //   const handleLastName = () => {
   
  //     if (validLastName.test(lastName)) {
  //       setStyles(valid)
  //     } else {
  //       setStyles(invalid)
  //     }
  //   }

  //   const handleEmail = () => {
   
  //    if (validEmail.test(email)) {
  //      setStyles(valid)
  //    } else {
  //      setStyles(invalid)
  //    }
  //  }


  //  const handlePassword = () => {
   
  //   if (validPassword.test(password)) {
  //     setStyles(valid)
  //   } else {
  //     setStyles(invalid)
  //   }
  // }



  // const handleConfirmPassword = () => {
   
  //   if (password === confirmPassword) {
  //     setStyles(valid)
  //   } else {
  //     setStyles(invalid)
  //   }
  // }



  // const handlePhoneNumber = () => {
   
  //   if (validPhoneNumber.test(phoneNumber)) {
  //     setStyles(valid)
  //   } else {
  //     setStyles(invalid)
  //   }
  // }


  }




    return (
        <>
      
            <div className="form">
            <form onSubmit={validate} className="form-validate"  
            // action="http://localhost:8080/registe" 
            // method="post"
            >
              <div className="signUp-login">
                <div className="signUp-grid-container">
                  <input className="first-name" type="text" style={styles} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name"/>
                  <input className="last-name" type="text" style={styles} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name"/>
                  <input className="signUp-email" type="text" style={styles} onChange={(e) => setEmail(e.target.value)} placeholder="Email" /> 
                  <input className="signUp-password" type="password" style={styles} onChange={(e) => setPassword(e.target.value)} placeholder="Password" /> 
                  <input className="signUp-confirm-password" type="password" style={styles} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" /> 
                  <select className="signUp-gender" name="category">
                   <option value="Male" name="grp1"  >Male</option>
                   <option value="Female" name="grp1" >Female</option>
               </select>
                  <input className="signUp-phone" type="tel" style={styles} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone"
                  //  pattern="[0-9]{10}" minLength="10" maxLength="10" 
                   /> 
                  <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
                  <button className="btn-signUp" type="submit"> Sign Up </button>
                </div>
              </div>
            </form>
          </div>




{/* 
          <div id="div1">
      <div id="div2">
        <form id="fid" onsubmit={validate()} action="welcome.html">
          <h1>REGISTRATION FORM</h1>

          Name:<br /><input
            id="name"
            type="text"
            onChange={checkName()}
            placeholder="Type Name"
            required
          /><label id="s1"> *Name should have minimum 4 Letters</label
          ><br /><br />

          Address:<br /><input
            id="address"
            type="text"
            onChange="checkAddress(this.id)"
            placeholder="Type Address"
            required
          /><label
            id="s2"
            title="Address should have HNO: at beginning eg- HNO: 23-6/56 area"
          >
            *invalid address</label
          ><br /><br />

          G-mail Address:<br /><input
            id="email"
            type="email"
            onChange="checkMail(this.id)"
            placeholder="Type Gmail"
            required
          /><label id="s3" title="Email should have @gmail.com">
            *invalid email</label
          ><br /><br />

          Password:<br /><input
            id="pass"
            type="password"
            onChange="checkPassword(this.id)"
            placeholder="Type Password"
            required
          /><label id="s4" title="Password should be minimum 8 characters">
            *invalid password</label
          ><span onclick="togglePass()" id="ipass"
            ><img id="eye" src="close.png" /></span
          ><br /><br />

          Mobile Number:<br /><input
            id="number"
            type="text"
            onChange="checkPhone(this.id)"
            placeholder="Type Mobile Number"
            required
          /><label id="s5" title="Number should have 10 digits">
            *invalid number</label
          ><br /><br />
          <input class="btn" id="b1" type="submit" value="Submit" />
          <input
            class="btn"
            type="button"
            value="reset"
            onclick={resetFields()}
          />
        </form>
      </div>
    </div>
 */}




        </>
    )
}


export default SignUp

