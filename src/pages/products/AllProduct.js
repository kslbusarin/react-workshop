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

const searchproduct = async () => {
    await getProductById(props.match.params.title).then((res) => {
      if (res.status === "success") {
        setUser(res.data);
       
      }
    });
  };

  async function search (keyword) {
    console.log(keyword)
      const pushSearchData = {"keyword":keyword}    
      await axios
      .post(`http://203.154.59.14:3000/api/v1/products`, pushSearchData)
      .then(res => {
      console.log(res.data)
      setUser(res.data)
      })
      .catch(err => {
        console.log(err);
      });
    }


    return (
        <div>
            <h1 style={{textAlign:'center'}}>All Product</h1> 
            <div class="row">
                <div class="col" style={{textAlign:'left'}}>
                <form className="form-inline my-2 my-lg-0 mb-3 ">
                <input onChange={(event) =>search(event.target.value)} className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search"/>
                </form>
                </div>
                <div class="col" style={{textAlign:'right'}}>
                <Link type="button" to={`/myproduct/${user._id}`} className="btn btn-outline-success my-2 my-sm-0">
                      My Product
                </Link>
                </div>
            </div>

            <hr/>
            <ProductTable user={user}/>
        </div>
    )
}
