/* for input field */
import React, { useState } from "react";
import validator from "validator";
import './style.css'
function Input(props) {
  const [error, setError] = useState()
  return (
    <>
      <input className="login" onChange={(e) => handleChange(e.target.value, props?.type, setError)}
        type={props?.type} disabled={false}
        placeholder={props?.placeholder}
        style={error}
      ></input>
    </>
  )
}
function handleChange(value, type, setError) {
  const invalid = {
    border: "2px solid red",
    color: "red"
  }
  const valid = {
    border: "2px solid green",
    color: "green"
  }
  var play = validateFileld(type, value)
  console.log(play, "play", type)
  if (!play) {
    console.log("error occured")
    setError(invalid)
  } else {
    setError(valid)
  }
}
/**
check validations for different field type
 */
var correct = false;
function validateFileld(type, value) {
  console.log("validate started")
  switch (type) {
    case "input":
      if (value) {
        if (validator.isAlphanumeric(value)) {
          correct = true;
        } else {
          correct = false;
        }
      }
      break;
    case "password":
      var passPatt = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
      var passRes = passPatt.test(value);
      if (passRes) {
        correct = true;
      } else {
        correct = false;
      }
      break;
    case "required":
      if (!value || value.isEmpty(value)) {
        correct = true;
      } else {
        correct = false;
      }
      break;
    case "phone":
      var pattern = /^[0-9]{10}$/;
      console.log(value)
      var res = pattern.test(value);
      console.log("res", res)
      if (res) {
        correct = true;
      } else {
        correct = false;
      }
      break;
    case "email":
      if (value) {
        if (validator.isEmail(value)) {
          correct = true;
        } else {
          correct = false;
        }
      }
      break;
    default:
  }
  return correct;
}
export default Input