import React from 'react'
import './SignUpYoutube.css'

function SignUpYoutube() {
    return (
        <div className="react-form">
            <h1 className="react-form">React- Form</h1>

            <form action="#">
                <div className="inputBox">
                    <input type="text" className="email" name="name" placeholder="Enter Your Email" />
                    <span className="error-text"></span>
                </div>
            </form>
        </div>
    )
}

export default SignUpYoutube
