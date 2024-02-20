import React from 'react';

export default function Splash() {
    function handleClick(e) {
        alert("CHANGE PAGE")
    }

    return (
        <div className="jumbotron">
            <div className="jumbotron-container">
                <h1 id="h1--override">Welcome</h1>
                <p id="p--override">Stuff</p>
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={handleClick}
                    id="btn--override"
                >Sign in</button>

            </div>
        </div>

    )
}