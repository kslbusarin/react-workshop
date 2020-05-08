import React, {useState} from 'react'
import { Link } from "react-router-dom";


export default function ProductTable(props) {
  const [keyword, setKeyword] = useState("");
  var id = localStorage.getItem('Id');

    return (
        <div>
            <div>
            <div class="row">
                <div class="col" style={{textAlign:'left'}}>
                <form className="form-inline my-2 my-lg-0 mb-3 ">
                <input onChange={(event) =>setKeyword(event.target.value)} className="form-control mr-sm-2 " type="search" placeholder="Search" aria-label="Search"/>
               </form>
                </div>
                <div class="col" style={{textAlign:'right'}}>
                <Link type="button" to='/product' className="btn btn-outline-success my-2 my-sm-0">
                      All Product
                </Link>
                </div>
            </div>
            </div><br/>
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
            props.user
            .filter((item) => {
                return (
                  item.title == keyword ||
                  item.detail == keyword ||
                  item.stock == keyword ||
                  item.price == keyword
                );
              })
            .map((item, index) => (
              <tr>
              <th scope="row">{ index + 1 }</th>
              <td>{item.title}</td>
              <td>{item.detail}</td>
              <td>{item.stock}</td>
              <td>{item.price}</td>

              <td>
                <Link to={`/editproduct/${item._id}`}>
                  <span style={{ color: "green" }}>Edit</span>
                </Link>
                |
                <span onClick={() => props.delete(item._id)} style={{ color: "red", cursor: 'pointer' }}>Delete</span>
              </td>

            
            </tr>
            ))
          }
        </tbody>
      </table>
        </div>
    
    )
}
