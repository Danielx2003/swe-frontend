import React from 'react';

export default function Nav() {
    return (
        <nav class="navbar navbar-fixed-top">
            <div class="nav-container">
                <div class="nav-group">
                    <a class="navbar-text-logo" href="/login">Garden App</a>
                </div>
                <div class="nav-group">
                    <a class="nav-group-element">Login</a>
                    <a class="">Register</a>
                </div>
            </div>
        </nav>
    )

}