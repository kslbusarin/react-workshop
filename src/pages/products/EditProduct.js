import React, {useState, useEffect} from 'react'
import {editProductById, getAllProduct} from '../../api/Api'
import CreateForm from '../../components/CreateForm'

export default function EditProduct(props) {
    const [user, setUser] = useState();
    var id = localStorage.getItem('Id');

    const fetchApi = async () => {
        await getAllProduct().then((res) => {
          let data = res.data.filter((item) => {
            return item._id === props.match.params.id;
          });
          setUser(data[0]);
        });
      };

      useEffect(() => {
        fetchApi();
      }, []);
  
    const edit = async (user) => {
      let edit = await editProductById(props.match.params.id, user)
      if (edit.status === "success") {
        props.history.push(`/myproduct/${id}`)
      } else {
        alert(edit.message)
      }
    }
  
    return (
      <div>
        <h1>Edit Product</h1>
        <hr />
        { user && <CreateForm check="Edit" user={user} edit={edit} />}
      </div>
    );
}
