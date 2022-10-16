const express = require('express')
const path = require('path')


const app = express()
const port = 4000

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res  ) => {
    res.sendFile(path.resolve(__dirname, 'public', 'main.html'))
})

app.listen(port, () => {
    console.log(`Calculator app listening on port ${port}`)
})

