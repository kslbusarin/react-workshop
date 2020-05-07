import React, {useState} from 'react'

export default function RegisterForm(props) {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [salary, setSalary] = useState()

    const save = async (e) => {
        e.preventDefault()
        let user = {
            username: username,
            password: password,
            name: name,
            age: age,
            salary: salary
        }
        props.save(user)
    }
    return (
        <div>
            <div className="login-area d-flex align-items-center justify-content-center">
            <form onSubmit={save} >
                <div>
                    <label for="username">Username</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} class="form-control" id="username"></input>
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} class="form-control" id="password"></input>
                </div>
                <div>
                    <label for="name">Name</label>
                    <input type="text" value={name} onChange={(e)=> setName(e.target.value)} class="form-control" id="name"></input>
                </div>
                <div>
                    <label for="age">Age</label>
                    <input type="number" value={age} onChange={(e)=> setAge(e.target.value)} class="form-control" id="age"></input>
                </div>
                <div>
                    <label for="salary">Salary</label>
                    <input type="number" value={salary} onChange={(e)=> setSalary(e.target.value)} class="form-control" id="salary"></input>
                </div><br/>
                <button type="submit" class="btn btn-primary">Create</button>
            </form>
            </div>
        </div>
    )
}
