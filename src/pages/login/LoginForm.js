import React, { useState } from 'react'

export default function LoginForm(props) {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const login = async (e) => {
        e.preventDefault()
        let user = {
            username: username,
            password: password
        }
        props.login(user)
    }

    return (
        <div>
            <div className="login-area d-flex align-items-center justify-content-center">
            <form onSubmit={login} >
                <div>
                    <label for="username">Username</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} class="form-control" id="username"></input>
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} class="form-control" id="password"></input>
                </div>
                <br/>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
            </div>
        </div>
    )
}
