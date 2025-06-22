// 登录功能模块
function login(username, password) {
  console.log('登录中...', username);
}
function validateCaptcha(code) {
  console.log('验证码校验:', code);
}
function login(username, password) {
  if (!username || !password) {
    console.log('登录失败：用户名或密码不能为空');
    return;
  }
  console.log('登录中...', username);
}