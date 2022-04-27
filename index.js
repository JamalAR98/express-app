const express = module.require('express')
const app = express()
const PORT = 3000

app.get('/add', (req, res) => {
    res.json({msg : "Hello Jamal"})
})

app.listen(PORT, () => {
    console.log('server is ON');
})


