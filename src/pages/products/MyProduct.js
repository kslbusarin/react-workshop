import React, {useState, useEffect} from 'react'
import Back from '../../components/Back'
import ProductTable from '../../components/myProductTable'
import {getAllProduct, deleteProduct, createProduct} from '../../api/Api'
import { Link } from 'react-router-dom'
import AddForm from '../../components/CreateForm'


export default function MyProduct(props) {

    const [user, setUser] = useState([])
    var id = localStorage.getItem('Id');


    
    // console.log(id)
  // const fetchUser = async () => {
  //   let result = await getAllProduct()
  //   console.log(result)
  //   setUser(result.data)
  // }

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

  // const fetchUser = async () => {
  //   await getAllProduct().then((res) => {
  //     let data = res.data.filter((item) => {
  //       return item.user_id === props.match.params.id;
  //     });
  //     setUser(data);
  //   });
  // };

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

   

  const [title, setTitle] = useState()
  const [detail, setDetail] = useState()
  const [stock, setStock] = useState()
  const [price, setPrice] = useState()



  // const save = async (e) => {
  //   e.preventDefault()
  //   let user = {
  //       user_id: props.match.params.id,
  //       title: title,
  //       detail: detail,
  //       stock: stock,
  //       price: price
  //   }
  //   await createProduct(user).then((res) => {
  //     if (res.status === "success") {
  //       fetchUser();
  //     }
  //   });
  // }

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
            <AddForm save={save}/>
            <div>
              <hr/>
            {/* <Back url="/product" history={props.history}/> */}
            <ProductTable user={user} delete={removeProduct}/>
            </div>
        </div>
    )
}
