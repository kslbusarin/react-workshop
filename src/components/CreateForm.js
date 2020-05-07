import React, { useState, useEffect } from 'react'

export default function CreateForm(props) {
  const [userid, setUserid] = useState('')
  const [title, setTitle] = useState(0)
  const [detail, setDetail] = useState(0)
  const [stock, setStock] = useState(0)
  const [price, setPrice] = useState(0)



  const save = async (e) => {
    e.preventDefault()
    let user = {
        user_id: userid,
        title: title,
        detail: detail,
        stock: stock,
        price: price
    }
  props.save(user)
  console.log(props.user)
  }

  const edit = async (e) => {
    e.preventDefault()
    let user = {
        user_id: userid,
        title: title,
        detail: detail,
        stock: stock,
        price: price
    }
  props.edit(user)
  }

  useEffect(() => {
    if (props.check === "Edit") {
        setUserid(props.user.user_id)
        setTitle(props.user.title)
        setDetail(props.user.detail)
        setStock(props.user.stock)
        setPrice(props.user.price)
        
    }
  }, [])

  return (
    <div>
      <form onSubmit={props.check === "Edit" ? edit : save}>
        <div class="form-group">
          <label for="userid">userid</label>
          <input type="text" value={userid} onChange={(e) => setUserid(e.target.value)} class="form-control" id="userid" aria-describedby="emailHelp"/>
        </div>
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
        <button type="submit" class="btn btn-success btn-block">Save</button>
      </form>
    </div>
  )
}
