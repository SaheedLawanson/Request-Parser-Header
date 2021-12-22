const express = require('express')
const app = express();

const bodyParser = require('body-parser')

// Render HTML & CSS
app.use('/', express.static('.'))
app.get('/', (req, res) => {
    res.sendFile(__dirname+"/index.html")
})

// A get request that shows an example of what a typical result
// should look like
app.get('/api/example', (req, res) => {
    res.json({
    "ipaddress":"::1",
    "language":"en-US,en;q=0.9",
    "software":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"})
})


app.get('/api/whoami', (req, res) => {
    // initiate an empty object
    let responseObj = {}
    // Save the user's ip to the object
    responseObj["ipaddress"] = req.ip
    // Save the user's language to the object
    responseObj["language"] = req.get("accept-language")
    // Save the user's software to the object
    responseObj["software"] = req.get('User-Agent')

    // Return the object containing the user's ip, language and software
    res.json(responseObj)
})

// Listen for requests
const port = 3000;
app.listen(port, () => {
    console.log(`App is listening on port: ${port} ...`)
})