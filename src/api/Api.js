import axios from 'axios'

const rgt = 'http://203.154.59.14:3000/api/v1/register'
const log = 'http://203.154.59.14:3000/api/v1/login'
const prd = 'http://203.154.59.14:3000/api/v1/products'
const gpf = 'http://203.154.59.14:3000/api/v1/users/:id'
const epf = 'http://203.154.59.14:3000/api/v1/users/:id'
const url = "http://203.154.59.14:3000/api/v1";

export const register = (user) => {
    return new Promise((resolve, reject) => {
      axios.post(rgt , user).then(res => {
        resolve(res.data)
      })
    })
  }

  export const loginuser = ( user) => {
    return new Promise((resolve, reject) => {
      axios.post(log  , user).then(res => {
        resolve(res.data)
      })
    })
  }

  export const getAllProduct = () => {
    return new Promise((resolve, reject) => {
      axios.get(prd ).then(res => {
        resolve(res.data)
      })
    })
  }

  export const getProfile = (id,data) => {
    return new Promise((resolve, reject) => {
      axios.get(gpf+id,data).then(res => {
        resolve(res.data)
      })
    })
  }

  export const editProfile = (id, user) => {
    return new Promise((resolve, reject) => {
      axios.put(epf + id, user).then(res => {
        resolve(res.data)
      })
    })
  }

  export const getUserById = (id) => {
    return new Promise((resolve, reject) => {
      axios.get(url + '/users/' + id).then((res) => {
        resolve(res.data);
      });
    });
  };

  export const registerUser = (user) => {
    return new Promise((resolve, reject) => {
      axios.post(url + '/register', user).then((res) => {
        resolve(res.data);
      });
    });
  };

  export const editUserById = (id, data) => {
    return new Promise((resolve, reject) => {
      axios.put(url + '/users/' + id, data).then((res) => {
        resolve(res.data);
      });
    });
  };

  export const editProductById = (id, data) => {
    return new Promise((resolve, reject) => {
      axios.put(url + '/products/' + id, data).then((res) => {
        resolve(res.data);
      });
    });
  };

  export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
      axios.get(url + '/products/' + id).then((res) => {
        resolve(res.data);
      });
    });
  };

  export const deleteProduct = (id) => {
    return new Promise((resolve, reject) => {
      axios.delete(url + '/products/' + id).then(res => {
        resolve(res)
      })
    })
  }

