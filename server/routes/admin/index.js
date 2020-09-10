module.exports = app => {
    const express = require('express')
    const router = express.Router()
    const Category = require('../../models/Category')

    router.post('/categories', async (req, res) => {
        console.log('创建帖子')
        const model = await Category.create(req.body)
        res.send({
            status: true,
            message: '创建成功',
            model:model
        })
    })
    app.use('/admin/api', router)
}