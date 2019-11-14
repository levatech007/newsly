export const userService = {
  login,
  logout
};

function login(email, token) {
  let user = { email: email, token: token };
  localStorage.setItem('user', JSON.stringify(user));
  return user;
}

function logout() {
  localStorage.removeItem('user');
}
