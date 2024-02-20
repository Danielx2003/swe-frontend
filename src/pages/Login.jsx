import React, { useState } from 'react';

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleClick(e) {
        alert("TRYING TO LOGIN")
    }

    function handleUsername(e) {
        setUsername(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }



    return (
        <div className="jumbotron">
            <div className="jumbotron-container">
                <input
                    className="input--username"
                    value={username}
                    onChange={handleUsername}
                />
                <input
                    className="input--password"
                    value={password}
                    onChange={handlePassword}
                />
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={handleClick}
                    id="btn--override"
                >Login</button>

            </div>
        </div>

    )
}