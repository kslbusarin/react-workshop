import React, {useState, useEffect} from 'react'
import Back from '../../components/Back'
import ProductTable from '../../components/myProductTable'
import {getAllProduct, deleteProduct, createProduct} from '../../api/Api'
import { Link } from 'react-router-dom'
import AddForm from '../../components/CreateForm'


export default function MyProduct(props) {

    const [user, setUser] = useState([])
    var id = localStorage.getItem('Id')


  const fetchUser = async () => {
    await getAllProduct().then((res) => {
      if (res.status === "success") {
        let data = res.data.filter((item) => {
          return item.user_id === localStorage.getItem('Id')
          
        });
        setUser(data);
      }
    });
  };


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


  const save = async (user) => {
    await createProduct(user).then((res) => {
      if (res.status === "success") {
        fetchUser();
      }
    });
  };


    return (
        <div>
            <h1 style={{textAlign:'center'}}>My Product</h1> 
            <hr/>
            <h3>Add MyProduct</h3>
            <AddForm save={save}/>
            <div>
              <hr/>
            {/* <Back url="/product" history={props.history}/> */}
            <ProductTable user={user} delete={removeProduct}/>
            </div>
        </div>
    )
}
