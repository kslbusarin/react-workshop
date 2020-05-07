import React, {useState, useEffect} from 'react'
import Back from '../../components/Back'
import ProductTable from '../../components/myProductTable'
import {getAllProduct, deleteProduct, createProduct} from '../../api/Api'
import { Link } from 'react-router-dom'
import AddForm from '../../components/CreateForm'


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

   

  const save = async (product) => {
    await createProduct(product).then((res) => {
      if (res.status === "success") {
        fetchUser();
      }
    });
  };

    return (
        <div>
            <h1 style={{textAlign:'center'}}>My Product</h1> 
            <hr/>
            <div>
                <h3>Add Product</h3>
                <AddForm  check="Create" save={save}/>
            </div>
            <hr/>
            <div>
            {/* <Back url="/product" history={props.history}/> */}
            <ProductTable user={user} delete={removeProduct}/>
            </div>
        </div>
    )
}
