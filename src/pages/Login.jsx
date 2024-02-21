import React, { useState } from 'react';

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleClick(e) {
        e.preventDefault()
        alert("TRYING TO LOGIN")
    }

    function handleUsername(e) {
        setUsername(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }



    return (
        <div class="login-container">
            <div class="form-container">
                <form class="" action="POST">
                    <h4 class="form-title">LOGIN</h4>
                    <div class="form-group">
                        <label for="uname" id="label--login">Email</label>
                        <input
                            class="form-control"
                            type="text"
                            id="uname"
                            value={username}
                            onChange={handleUsername}
                            placeholder="Enter username here..." />
                    </div>
                    <div class="form-group">
                        <label for="password" id="label--login">Password</label>
                        <input
                            class="form-control"
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePassword}
                            placeholder="Enter password here..." />
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="remember" value="" placeholder="Enter password here..." />
                        <label class="form-check-label pl-2 mb-3" for="remember" id="label--login">Remember me?</label>
                    </div>
                    <button
                        class="btn btn-login"
                        type="submit"
                        id="btn--override"
                        onClick={handleClick}
                    >LOGIN</button>
                    <small class="float-right mt-2"><a class="text-muted mt-3" href="/forgot">Forgotten your password?</a></small>
                </form>
                <hr />
                <span class="text-center">Need an account? <strong><a class="text-capitalize" id="a--login">SIGN UP</a></strong></span>
            </div>
        </div>

    )
}