import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { isLogout } from '../utils/AuthToken'



export default function Header(props) {
var id = localStorage.getItem('Id')

    const goToLogout = () => {
        isLogout()
      };
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="nav-link" to="/home">Home</NavLink>
            <NavLink className="nav-link" to={`/profile/${id}`}>My Profile</NavLink>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ml-auto">
                <NavLink activeStyle={{color:'green'}} className="nav-link" to="/login">Login</NavLink>
                <NavLink activeStyle={{color:'green'}} className="nav-link" to="/register">Register</NavLink>
                <NavLink activeStyle={{color:'green'}} className="nav-link" onClick={goToLogout} to="/login">Logout</NavLink>
            </div>
            </div>
            </nav>
        </div>
    )
}
