const port = process.env.PORT || 3000
const express = require('express')
const timeRouter = require('./routes/time')
const app = express()
app.use(express.json())
app.use(timeRouter)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})