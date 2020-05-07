import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getUserById } from "../../api/Api"

export default function Profile(props) {
  const [userProfile, setUserProfile] = useState([])

//   useEffect(() => {
//     fetchUser();
//   }, []);

//   const fetchUser = async () => {
//     await getUserById("5eb11bbc4b35ac0011bb35a7").then((res) => {
//       if (res.status === "success") {
//         setUserProfile(res.data);
//       }
//     });
//   };

 

const fetchUser = async () => {
    await getUserById(localStorage.getItem("user_id")).then((res) => {
      if (res.status === "success") {
        setUserProfile(res.data);
       
      }
    });
  };


  useEffect(() => {
    fetchUser();
  }, []);


 

  return (
    <div>
        <h1>My Profile</h1>
            <hr/>
        <div className="container">
          {
            <div>
              <div className="row">
                <div className="col-12 d-flex ">
                  <h2>Name: {userProfile.name}</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <p><strong>Age: </strong> {userProfile.age}{" "}</p>
                  <p><strong>Salary: </strong> {userProfile.salary}</p>
                </div>
              </div>
              <div className="btn-edit">
                    <Link to={`/edit/${userProfile._id}`} className="btn btn-outline-light text-black-50 border">
                      Edit Profile
                    </Link>
                   </div>
            <div className="btn-edit">
                    <Link to={`/myproduct/${userProfile._id}`} className="btn btn-outline-light text-black-50 border">
                      My Product
                    </Link>
                  </div>
            </div>
          }
        </div>
      
    </div>
  );
}