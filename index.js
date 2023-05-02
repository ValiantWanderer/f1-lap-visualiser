const express = require('express')
const app = express()
const port = 3000



app.get('/', (req, res) => {
    res.sendFile('./app/index.html', {root: __dirname})
})

app.post('/', (req, res) => {
    let year = req.body.year;
    let circuit = req.body.circuit;
    let driver = req.body.driver;
    let lap = req.body.lap;
    getLap(year, circuit, driver, lap);
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})


async function getLap(year, circuit, driver, lap) {

}