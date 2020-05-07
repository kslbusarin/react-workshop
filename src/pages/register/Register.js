import React from 'react'
import RegisterForm from '../../pages/register/RegisterForm'
import {register} from '../../api/Api'
import { registerUser } from "../../api/Api";


export default function Register(props) {

    const save = async (user) => {
        // let result = await register(user)
        // console.log(user)
        let res = await registerUser(user);

        props.history.push('/login')
        console.log(res);
      }

    return (
         <div>
            <div style={{textAlign:'center'}}>
            <h1>Register</h1>
            </div>
            <hr/>
            <RegisterForm save={save}/>
        </div>
    )
}
