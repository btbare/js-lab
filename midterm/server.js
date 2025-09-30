const express = require('express')
const app = express()
const port = 3000

const api = {
    key: 'fa0e9aab6b78b942c7753bdd4faf778b',
    base: 'https://api.openweathermap.org/data/2.5/weather',
};

app.get('/weather', async (req, res) => {
    const city = req.query.city
    console.log("City received:", city)
    const url = `${api.base}?q=${encodeURIComponent(city)}&appid=${api.key}&units=imperial`
    const respond = await fetch(url)
    const data = await respond.json()
    res.json(data)
})

app.listen(port, () => {
    console.log(`running @ http://localhost:${port}`)
})