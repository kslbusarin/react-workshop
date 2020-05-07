import React, {useState, useEffect} from 'react'
import ProfileForm from '../../pages/profile/ProfileFrom'
import {Link} from 'react-router-dom'
import { getProfile, editProfile } from '../../api/Api'

export default function Profile(props) {

//     const [user, setUser] = useState([])

//   const fetchUser = async () => {
//     let result = await getProfile()
//     console.log(result)
//     setUser(result.data)
//   }

//   useEffect(() => {
//     fetchUser()
// }, [])




    return (
        <div>
            <h1>My Profile</h1>
            <hr/>
            <ProfileForm/>
            <br/>
            {/* <Link type="button" class="btn btn-primary" to="/setting">Setting Profile</Link> */}
        </div>
    )
}
