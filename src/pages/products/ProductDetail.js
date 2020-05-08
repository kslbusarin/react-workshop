import React, {useState, useEffect} from 'react'
import {getAllProduct} from '../../api/Api'
import {Link} from 'react-router-dom'

export default function ProductDetail(props) {

    const [product, setProduct] = useState([])
  useEffect(() => {
    fetchAllProducts()
  }, [])

  const fetchAllProducts = async () => {
    await getAllProduct().then((res) => {
      if (res.status === "success") {
        let data = res.data.filter((item) => {
          return item._id === props.match.params.id
        })
        setProduct(data[0])
      }
    });
  };

    return (
        <div style={{textAlign:'center'}}>
            <h1>Product Datail</h1>
            <hr/>
            <div class="card" style={{ textAlign:'center'}}>
            <h2>{product.title}</h2>
            <hr/>
                <div class="card-body">
                <h5>Detail: {product.detail}</h5>
                <h5>Stock: {product.stock}</h5>
                <h5>Price: {product.price}</h5>
                </div>
            </div><br/>
            <Link type="button" to="/product" class="btn btn-success">Back</Link>

        </div>
    )
}
