const TOKEN_KEY = "user_id";
const USER_NAME = "user_name";

export const setTokenLogin = (id) => {
  localStorage.setItem(TOKEN_KEY, id);
};

export const isLogout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_NAME);
};

export const isLogin = () => {
  if (localStorage.getItem(TOKEN_KEY)) {
    return true;
  }
  return false;
};
