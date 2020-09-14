module.exports = options => {
    const jwt = require('jsonwebtoken')
    const AdminUser = require('../models/AdminUser')
    const assert = require('http-assert')
    return async (req, res, next) => {
        const token = String(req.headers.authorization || '').split(' ').pop()
        assert(token, 401, '请提供JWT-TOKEN（请先登录哦！）')
        const { id } = jwt.verify(token, req.app.get('privite_key'))
        assert(id, 401, '无效的JWT-TOKEN（请先登录哦！）')
        req.user = await AdminUser.findById(id)
        assert(req.user, 401, '请先登录哦！')
        await next()
    }
}