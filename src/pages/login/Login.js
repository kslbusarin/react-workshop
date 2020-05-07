import React, { useState, useEffect} from 'react'
import Loginpage from '../../pages/login/LoginForm'
import {loginuser} from '../../api/Api'
import { setTokenLogin, isLogin } from "../../utils/AuthToken";

 
export default function Login(props) {

    //   const login = async (user) => {
    //     let result = await loginuser(user)
    //     props.history.push('/home')
    //     console.log(loginuser(user))
    //   }
      
      const login = async (user) => {
        let result = await loginuser(user)
        if(result.status === "success"){
        //   localStorage.setItem('Id', result.data._id);
          setTokenLogin(result.data._id);
        //  props.history.push('/profile')
        props.history.push(`/profile/${result.data._id}`)
        //  console.log(result.data.name)
         
        }
        else{
            alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง')
            console.log(result.status );
            }
    }       

    return (
        <div>
           <div style={{textAlign:'center'}}>
            <h1>Login</h1>
            </div>
            <hr/>
            <Loginpage login={login}/>
        </div>
    )
}
