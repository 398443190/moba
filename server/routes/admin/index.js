module.exports = app => {
    const express = require('express')
    const router = express.Router({
        mergeParams: true
    })

    router.post('/', async (req, res) => {
        console.log('创建分类')
        const model = await req.Model.create(req.body)
        res.send({
            status: true,
            message: '创建成功',
            model: model
        })
    })
    router.put('/:id', async (req, res) => {
        console.log('修改分类')
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
        res.send({
            status: true,
            message: '修改成功',
            model: model
        })
    })
    router.get('/', async (req, res) => {
        console.log('查询帖子')
        let queryOptions = {}
        if (req.Model.modelName === 'Category') {
            queryOptions.populate = 'parent'
        }
        const data = await req.Model.find().setOptions(queryOptions)
        res.send({
            status: true,
            message: '查询成功',
            data: data
        })
    })
    router.get('/:id', async (req, res) => {
        console.log('通过id查询帖子')
        const data = await req.Model.findById(req.params.id)
        res.send({
            status: true,
            message: '通过id查询成功',
            data: data
        })
    })
    router.delete('/:id', async (req, res) => {
        console.log('删除帖子')
        await req.Model.findByIdAndDelete(req.params.id)
        res.send({
            status: true,
            message: '删除成功'
        })
    })
    app.use('/admin/api/rest/:resource', async (req, res, next) => {
        const modelName = require('inflection').classify(req.params.resource)
        req.Model = require(`../../models/${modelName}`)
        next()
    }, router)
    const multer = require('multer')
    const upload = multer({ dest: __dirname + '/../../uploads' })
    app.post('/admin/api/upload', upload.single('file'), async (req, res,) => {
        const file = req.file
        file.url = `http://localhost:4000/uploads/${file.filename}`
        res.send(file)
    })
}