import React, { useState, useEffect } from 'react'
import { getUserById, editUserById } from '../../api/Api'
import Back from '../../components/Back'

export default function EditProfile(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [salary, setSalary] = useState();


  const editProfile = async (e) => {
    e.preventDefault();
    let dataUpdate = {
      username: username,
      password: password,
      name: name,
      age: age,
      salary: salary,
    };

    await editUserById(props.match.params.id, dataUpdate).then((res) => {
      if (res.status === "success") {
        // props.history.push("/profile");
        props.history.push(`/profile/${props.match.params.id}`)
      }
    });
  };


  

  const fetchUser = async () => {
    await getUserById(props.match.params.id).then((res) => {
      if (res.status === "success") {
        setUsername(res.data.username);
        setPassword(res.data.password);
        setName(res.data.name);
        setAge(res.data.age);
        setSalary(res.data.salary);
      }
    });
  };
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div style={{}}>
      <div className="editp-area pt-4">
        <div className="card" style={{ width: "50rem", margin: "0 auto" }}>
          <div className="card-body">
            <div className="content-top">
              <h1>Edit Profile</h1>
            </div>
            <div className="content-center text-left">
              <form onSubmit={editProfile}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}
                    className="form-control" id="username" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                    className="form-control" id="password"/>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                    className="form-control" id="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="age">Age</label>
                  <input type="number" value={age} onChange={(e) => setAge(e.target.value)}
                    className="form-control" id="age" />
                </div>
                <div className="form-group">
                  <label htmlFor="salary">Salary</label>
                  <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)}
                    className="form-control" id="salary" />
                </div>
                <button type="submit" className="btn btn-primary">
                  UPDATE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
