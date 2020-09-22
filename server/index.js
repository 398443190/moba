const express = require('express')
const app = express()

app.use('/admin', express.static(__dirname + '/admin'))
app.use('/', express.static(__dirname + '/web'))
app.use('/uploads', express.static(__dirname + '/uploads'))
app.use(express.json())
app.use(require('cors')())
require('./routes/admin')(app)
require('./routes/web')(app)
require('./plugins/mongodb')(app)
app.set('privite_key', 'huanglu')
app.set('expire_time', 60*60*24)

app.listen(4000, () => {
    console.log('http://localhost:4000')
});