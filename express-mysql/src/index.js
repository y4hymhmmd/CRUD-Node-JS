const express = require('express');

const usersRoutes = require('./routes/users.js');

const app = express();

// app.use("/", (req, res, next) => {
//     res.send('hello world');
// })

app.use('/users', usersRoutes);

app.get("/", (req, res) => {
    res.json({
        nama: "yahya",
        email: "yahya@gmail.com"
    });
})

app.post("/", (req, res) => {
    res.send('hello post method');
})

app.listen(4000, () => {
    console.log('server berhasil di running di port: 4000');
})