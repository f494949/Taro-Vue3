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
            roles: ['']
        }
    ]
}

export default {}