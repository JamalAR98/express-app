const express = module.require('express')
const app = express()
const PORT = 3000

app.get('/add', (req, res) => {
    res.json({msg : "Hello World!"})
})

app.listen(PORT, () => {
    console.log('server is ON');
})


