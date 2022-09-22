const express = require('express')
const cors = require('cors');
require('dotenv').config()
const SslController = require('./controller/SslController')


const app = express()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

    
    // SSL Commerz Payment's
    app.post('/ssl-init', SslController.initSSL);
    app.post("/success", SslController.successSSL)
    app.post("/fail", SslController.failSSL)
    app.post("/cancel", SslController.cancalSSL)


    app.get('/',async(req,res) => {
        res.send('Soft It Care Task')
    })


app.listen(port, () => {
    console.log(`Test app listening at http://localhost:${port}`)
})