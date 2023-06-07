function createUserList() {
    return [
        {
            userId: 1,
            avatar: 'https://www.github.com',
            username: 'admin',
            password: '111111',
            desc: '平台管理员',
            roles: ['平台管理员'],
            buttons: ['cuser.detail'],
            routes: ['home'],
            token: 'Admin Token'
        },
        {
            userId: 2,
            avatar: 'https://www.baidu.com',
            username: 'system',
            password: '111111',
            desc: '系统管理员',
            roles: ['系统管理员'],
            buttons: ['cuser.detail', 'cuser.user'],
            routes: ['home'],
            token: 'System Token'
        }
    ]
}

export default [
    {
        url: '/api/user/login',
        method: 'post',
        response: ({body}) => {
            const {username,password} = body
            const checkUser = createUserList().find(
                (item) => item.username === username && item.password === password
            )
            if (!checkUser) {
                return {code: 201, data: {message: '账号或密码不正确'}}
            }
            const {token} = checkUser
            return {code: 200, data: {token}}
        }
    },
    {}
]