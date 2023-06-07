// 模拟用户登录接口
Mock.mock('/api/login', 'post', (options) => {
    // 解析请求参数
    let { username, password } = JSON.parse(options.body);
  
    // 判断用户名和密码是否正确
    if (username === 'admin' && password === '123456') {
      // 登录成功，返回用户信息
      return {
        code: 0,
        data: {
          id: 1,
          username: 'admin',
          nickname: '管理员',
          token: 'abcdefg'
        }
      };
    } else {
      // 登录失败，返回错误信息
      return {
        code: 1,
        message: '用户名或密码错误'
      };
    }
  });
  
  // 模拟用户信息获取接口
  Mock.mock('/api/userinfo', 'get', {
    code: 0,
    data: {
      id: 1,
      username: 'admin',
      nickname: '管理员',
      email: 'admin@example.com'
    }
  });