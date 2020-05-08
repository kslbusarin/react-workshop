import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home'
import {Route, Switch, Redirect} from 'react-router-dom'
import Header from './components/Header'
import Register from './pages/register/Register'
import Loginpage from './pages/login/Login'
import AllProduct from './pages/products/AllProduct'
import Profile from './pages/profile/ProfileFrom'
import EditProfile from './pages/profile/EditProfile'
import PrivateRoute from './helper/PrivateRoute'
import MyProduct from './pages/products/MyProduct'
import EditProduct from './pages/products/EditProduct'
import ProductDetail from './pages/products/ProductDetail'

const route = {
  home: '/home',
  register: '/register',
  login: '/login',
  product: '/product',
  profile: '/profile/:id',
  setting: '/setting',
  edit: '/edit/:id',
  myproduct: '/myproduct/:id',
  editproduct: '/editproduct/:id',
  productDetail: '/productDetail/:id'
}

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <Switch>
          <Redirect exact from="/" to={route.login}></Redirect>
          <PrivateRoute path ={route.home} component={Home}></PrivateRoute>
          <Route path ={route.register} component={Register}></Route>
          <Route path ={route.login} component={Loginpage}></Route>
          <PrivateRoute path ={route.product} component={AllProduct}></PrivateRoute>
          <PrivateRoute path ={route.profile} component={Profile}></PrivateRoute>
          <PrivateRoute path ={route.edit} component={EditProfile}></PrivateRoute>
          <PrivateRoute path ={route.myproduct} component={MyProduct}></PrivateRoute>
          <PrivateRoute path ={route.editproduct} component={EditProduct}></PrivateRoute>
          <PrivateRoute path ={route.productDetail} component={ProductDetail}></PrivateRoute>

        </Switch>
      </div>
    </div>
  );
}

export default App;
