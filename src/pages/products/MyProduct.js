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

   

  const [title, setTitle] = useState()
  const [detail, setDetail] = useState()
  const [stock, setStock] = useState()
  const [price, setPrice] = useState()



  const save = async (e) => {
    e.preventDefault()
    let user = {
        // user_id: props.params.id,
        title: title,
        detail: detail,
        stock: stock,
        price: price
    }
    await createProduct(user).then((res) => {
      if (res.status === "success") {
        fetchUser();
      }
    });
  }


    return (
        <div>
            <h1 style={{textAlign:'center'}}>My Product</h1> 
            <hr/>
            <div>
                <h3>Add Product</h3>
                {/* <AddForm  check="Create" save={save}/> */}

                <form onSubmit={save}>
        {/* <div class="form-group">
          <label for="userid">userid</label>
          <input type="text" value={userid} onChange={(e) => setUserid(e.target.value)} class="form-control" id="userid" aria-describedby="emailHelp"/>
        </div> */}
        <div class="form-group">
          <label for="title">title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} class="form-control" id="title"/>
        </div>
        <div class="form-group">
          <label for="detail">detail</label>
          <input type="text" value={detail} onChange={(e) => setDetail(e.target.value)} class="form-control" id="detail"/>
        </div>
        <div class="form-group">
          <label for="stock">stock</label>
          <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} class="form-control" id="stock"/>
        </div>
        <div class="form-group">
          <label for="price">price</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} class="form-control" id="price"/>
        </div>
        <button type="submit" class="btn btn-success">Save</button>
      </form>
                
            </div>
            <hr/>
            <div>
            {/* <Back url="/product" history={props.history}/> */}
            <ProductTable user={user} delete={removeProduct}/>
            </div>
        </div>
    )
}
