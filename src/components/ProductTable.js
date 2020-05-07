import React from 'react'
import { Link } from "react-router-dom";


export default function ProductTable(props) {
    return (
        <div>
            <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Title</th>
            <th scope="col">Detail</th>
            <th scope="col">Stock</th>
            <th scope="col">Price</th>
            {/* <th scope="col">Action</th> */}


          </tr>
        </thead>
        <tbody>
          {
            props.user.map((item, index) => (
              <tr>
              <th scope="row">{ index + 1 }</th>
              <td>{item.title}</td>
              <td>{item.detail}</td>
              <td>{item.stock}</td>
              <td>{item.price}</td>

              <td>
                {/* <Link to={`/productDetail/${item._id}`}>
                  <span style={{ color: "green" }}>Detail</span>
                </Link> */}
                {/* | */}
                {/* <span onClick={() => props.delete(item._id)} style={{ color: "red", cursor: 'pointer' }}>Delete</span> */}
              </td>

            {/* <td>
                <button type="submit" class="btn btn-success" >Detail</button>
                
            </td> */}
            </tr>
            ))
          }
        </tbody>
      </table>
        </div>
    
    )
}
