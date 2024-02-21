import React, { useState } from 'react';

export default function Forgot() {
    const [username, setUsername] = useState("")

    function handleClick(e) {
        e.preventDefault()
        alert("EMAIL SENT")
    }

    function handleUsername(e) {
        setUsername(e.target.value);
    }

    return (
        <div class="login-container">
            <div class="form-container">
                <form class="" action="POST">
                    <h4 class="form-title">Forgotten Your Password?</h4>
                    <div class="form-group">
                        <label for="uname" id="label--login">Email</label>
                        <input
                            class="form-control"
                            type="text"
                            id="uname"
                            value={username}
                            onChange={handleUsername}
                            placeholder="Enter email here..." />
                    </div>
                    <button
                        class="btn btn-login"
                        type="submit"
                        id="btn--override"
                        onClick={handleClick}
                    >Reset Password</button>
                </form>
                <hr />
                <span class="text-center">Need an account? <strong><a class="text-capitalize" id="a--login">SIGN UP</a></strong></span>
            </div>
        </div>

    )
}