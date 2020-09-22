module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/admin/' : '/',
    outputDir: __dirname + '/../server/admin'
}