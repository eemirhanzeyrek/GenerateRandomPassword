const express = require('express')

const app = express()

app.use(express.static('public'))

const PORT = 8000
app.listen(PORT, (err) => {
    if(err) {
        console.log("an error was encountered while running the server")
    } else {
        console.log("server is running on port 8000")
    }
})