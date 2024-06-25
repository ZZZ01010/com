const form = document.querySelector('form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (usernameInput.value === '') {
    errorMessage.textContent = '请输入用户名';
    return;
  }

  if (passwordInput.value === '') {
    errorMessage.textContent = '请输入密码';
    return;
  }

  // 假设正确的用户名是 'admin'，密码是 '123456'
  if (usernameInput.value !== 'admin' || passwordInput.value !== '123456') {
    errorMessage.textContent = '用户名或密码错误';
    return;
  }

  // 如果验证通过，可以跳转到相应的页面
  window.location.href = './index.html';
});