import React, {useState, useEffect} from 'react'
import { NavLink , Link} from 'react-router-dom'
import { getUserById } from '../../api/Api'


// const fur ={
//     textAlign: 'center',
//     backgroundColor: '#dce775',
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     width: '100vw',
//     height: '100vh'
//   }

export default function Home(props) {
//   const [userProfile, setUserProfile] = useState([])
var id = localStorage.getItem('Id');


//   const goToProfile = async () => {
//     await getUserById(props.match.params.id).then((res) => {
//       if (res.status === "success") {
//         setUserProfile(res.data);
//         props.history.push(`/profile/${userProfile._id}`)
       
//       }
//     });
//   };

    return (
       <div>

        <div className="home" style={{textAlign: 'center'}}>
            <h1>Furniture</h1>
            <div style={{textAlign: 'right'}}>
            <Link type="button" class="btn btn-success" to={`/profile/${id}`}>My Profile</Link>

            </div><br/>
            <div class="container">
                
                <div class="row">
                    <div class="col-sm">
                        <img src = {process.env.PUBLIC_URL+ 'img/home1.jpg'} width="300" height="200"></img>
                    </div>
                    <div class="col-sm">
                        <img src = {process.env.PUBLIC_URL+ 'img/home2.jpg'} width="300" height="200"></img>
                    </div>
                    <div class="col-sm">
                        <img src = {process.env.PUBLIC_URL+ 'img/home4.jpg'} width="300" height="200"></img>
                    </div>
                </div><br/>
            </div>
            {/* <NavLink activeStyle={{color:'green'}} className="nav-link" to="/product">All Product</NavLink> */}
            <Link type="button" to="/product" class="btn btn-success">All Product</Link>

        </div>
    </div>
        
    )
}
