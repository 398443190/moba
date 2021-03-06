module.exports = app => {
    const express = require('express')
    const jwt = require('jsonwebtoken')
    const AdminUser = require('../../models/AdminUser')
    const assert = require('http-assert')

    const router = express.Router({
        mergeParams: true
    })


    // 登陆校验中间件
    const authMiddleware = require('../../middleware/auth')
    // 资源中间件
    const resourceMiddleware = require('../../middleware/resource')

    router.post('/', async (req, res) => {
        console.log('创建分类')
        const model = await req.Model.create(req.body)
        res.send({
            status: true,
            message: '创建成功',
            model: model
        })
    })
    app.use('/user/reg', async (req, res) => {
        console.log(req.body, 'req.body')
        const model = await AdminUser.create(req.body)
        res.send({
            status: true,
            message: 'zhucechenggong',
            model
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
    router.get('/',
        async (req, res) => {
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
    app.use('/admin/api/rest/:resource', authMiddleware(), resourceMiddleware(), router)

    const multer = require('multer')
    const upload = multer({ dest: __dirname + '/../../uploads' })
    app.post('/admin/api/upload', authMiddleware(), upload.single('file'), async (req, res,) => {
        const file = req.file
        file.url = `http://localhost:4000/uploads/${file.filename}`
        res.send(file)
    })
    app.use('/admin/api/login', async (req, res, next) => {
        const { username, password } = req.body
        const user = await AdminUser.findOne({ username }).select('+password')
        assert(user, 422, '用户不存在')

        const isValid = require('bcrypt').compareSync(password, user.password)
        assert(isValid, 422, '密码错误')
        const token = jwt.sign({ id: user._id }, app.get('privite_key'))
        res.send({ token })
    })
    app.use(async (err, req, res, next) => {
        res.status(err.statusCode || 500).send({
            message: err.message
        })
    })
}
// $$('.hero-nav > li').map((li, i)=>{ return { name: li.innerText, heroes:$$('li', $$('.hero-list')[i]).map(el =>{
//     return {name: $$('h3', el)[0].innerHTML,avatar: $$('img', el)[0].src}
// })} })