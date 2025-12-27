const express = require('express');

let app = express();

app.get('/', (req, res) => {
    res.send("Hello")
})

app.listen(8081, () => {
    console.log("Server in 8s081")
})