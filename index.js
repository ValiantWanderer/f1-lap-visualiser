const express = reqiuire('express')
const app = express()
const port = 3000



app.get('/', (req, res) => {
    res.send('Deez Nutz')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})