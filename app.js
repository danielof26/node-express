const express = require('express');

let app = express();

app.use(express.static("public"))

app.get('/', (req, res) => {
    res.send("Hello")
})

app.listen(8081, () => {
    console.log("Server in 8081")
})