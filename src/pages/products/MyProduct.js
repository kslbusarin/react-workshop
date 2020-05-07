import React, {useState, useEffect} from 'react'
import Back from '../../components/Back'
import ProductTable from '../../components/myProductTable'
import {getAllProduct, deleteProduct} from '../../api/Api'
import { Link } from 'react-router-dom'


export default function MyProduct(props) {

    const [user, setUser] = useState([])

  const fetchUser = async () => {
    let result = await getAllProduct()
    console.log(result)
    setUser(result.data)
  }

  useEffect(() => {
    fetchUser()
}, [])

const removeProduct = async (id) => {
    let check = window.confirm("คุณต้องการลบหรือไม่ ?")
     if(check === true) {
       let result = await deleteProduct(id)
       console.log(result)
       if (result.data.status === "success") {
         fetchUser()
       }
     }
   }

    return (
        <div>
            <h1 style={{textAlign:'center'}}>My Product</h1> 
            <div class="row">
                <div class="col" style={{textAlign:'left'}}>
                <form className="form-inline my-2 my-lg-0 mb-3 ">
                <input  className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search"/>
               </form>
                </div>
                <div class="col" style={{textAlign:'right'}}>
                <Link type="button" to='/product' className="btn btn-outline-success my-2 my-sm-0">
                      All Product
                </Link>
                </div>
            </div>
            <hr/>
            <div>
            {/* <Back url="/product" history={props.history}/> */}
            <ProductTable user={user} delete={removeProduct}/>

            </div>
        </div>
    )
}
