import React, {useState, useEffect} from 'react'
import ProductTable from '../../components/ProductTable'
import {getAllProduct, getProductById} from '../../api/Api'
import { Link } from 'react-router-dom'
import Back from '../../components/Back'
import axios from 'axios';


export default function AllProduct(props) {

  const [user, setUser] = useState([])
  

  const fetchUser = async () => {
    let result = await getAllProduct()
    console.log(result)
    setUser(result.data)
  }

  useEffect(() => {
    fetchUser()
}, [])





    return (
        <div>
            <h1 style={{textAlign:'center'}}>All Product</h1> 
            <hr/>
            <ProductTable user={user}/>
        </div>
    )
}
