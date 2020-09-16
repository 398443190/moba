const { populate } = require('../models/Article.js')

module.exports = app => {
    const router = require('express').Router()
    const mongoose = require('mongoose')
    // const Category = mongoose.model('Category')
    const Article = require('../models/Article.js')
    const Category = require('../models/Category.js')
    router.get('/news/init', async(req, res) => {
        const parent = await Category.findOne({
            name: '新闻分类'
        })
        const cats = await Category.find().where({
            parent
        }).lean()
        const newsTitle = ["9月17日抢先服版本更新公告", "9月16日部分iOS用户登录异常修复完成公告", "9月16日体验服停机更新公告", "9月16日部分iOS用户登录异常说明", "9月王者荣耀先锋团招募公告", "【皮肤爆料】狂想玩偶喵！是你要的蒙犽皮肤吗~", "露娜英雄及皮肤特效优化&amp;最新bug修复进展【老亚瑟的答疑时间】", "郑爽张继科空降QQ名人赛，互动观赛赢好礼", "《天天酷跑》七周年福利嗨翻，初心不改、携跑未来！", "王者零距离 | 满满都是“料”！你关注的问题，策划现场回复了！", "2020年秋冬赛事战令全新升级，终极奖励韩信星元皮肤等你拿！", "2020年KPL秋季赛9月16日热血开赛，主场地域化全面升级", "2020年KPL秋季赛热血来袭，线下售票9月7日12:00开启！", "2020年KGL秋季赛选手大名单公布，9月13日该我上场！", "2020年KPL秋季赛大名单公布"]
        const newList = newsTitle.map(title => {
            const randomcats = cats.slice(0).sort((a, b)=> Math.random() - 0.5)
            return {
                category: randomcats.slice(0, 2),
                title: title,
                description: '重回主场，听我呐喊！2020年KPL王者荣耀之职业联赛秋季赛9月16日战火重燃，大家期待的赛事战令也将全面升级！2020年9月16日—2021年2月28日一共165天，召唤师们可以免费开启秋冬赛事战令，通过看赛事直播、参与预测、赛事助威等方式升级赛事战令经验、赢取赛事战令币，免费拿永久英雄、钻石夺宝抵用券、新品英雄抽奖券等海量好礼，在进阶战令后（进阶版:188荣耀币【18.8元RMB】、高级进阶版:888荣耀币【88.8元RMB】）更有韩信再战一场赛事战令专属星元皮肤部件、秋冬赛事战令专属头像框、荣耀播报等更多定制奖励！'
            }
        })
        await Article.deleteMany({})
        await Article.insertMany(newList)
        res.send(newList)
    })
    router.get('/news/list', async (req, res) => {
        // const parent = await Category.findOne({
        //     name: '新闻分类'
        // }).populate({
        //     path: 'children',
        //     populate: {
        //         path: 'newsList'
        //     }
        // }).lean()
        const parent = await Category.findOne({
            name: '新闻分类'
        })
        const cats = await Category.aggregate([
            {$match: {parent: parent._id}},
            {
                $lookup: {
                    from: 'articles',
                    localField: '_id',
                    foreignField: 'category',
                    as: 'newsList'
                }
            },
            {
                $addFields: {
                    newsList: {$slice: ['$newsList', 5]}
                }
            }
        ])
        const subCats = cats.map(v => v._id)
        cats.unshift({
            name: '热门',
            newsList: await Article.find().where({
                category: { $in: subCats }
            }).populate('category').limit(5).lean()
        })
        cats.map(cat => {
            cat.newsList.map(news => {
                news.categoryName = cat.name==='热门' ? news.category[0].name : cat.name
                return news
            })
            return cat
        })
        res.send(cats)
    })

    app.use('/web/api', router)
}