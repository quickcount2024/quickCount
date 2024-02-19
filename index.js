const express = require("express");
const cors = require("cors");
const axios = require('axios');
const app = express();
const PORT = 5000;
var bodyParser = require("body-parser");
require('dotenv').config();
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
const server = require("http").createServer(app);
server.listen(PORT);

const hitungPersentase = (nilaiDicari, total) => {
    const persentase = (nilaiDicari / total) * 100;
    return parseFloat(persentase.toFixed(2));
  };

app.get("/", async (req, res) => {
    try {
        res.status(200).json({
            status: 200,
            data: "OFF"
        });
    } catch (error) {
        console.error('Proxy error:', error);
        res.status(500).send('Server error');
    }
});

app.get("/caleg", async (req, res) => {
    try {
        res.status(200).json({
            status: 200,
            data: "OFF"
            });
        } catch (error) {
        console.error('Proxy error:', error);
        res.status(500).send('Server error');
    }
});

app.post("/", async (req, res) => {
    const giveAccess = req.body.authorization
    if (!giveAccess == "adminasdipasdipo") {
        return res.json({
            status: 400,
            message: "Invalid Access"
        })
    }
    try {
        const response = await axios.get('https://kf.kobotoolbox.org/api/v2/assets/a3xiJCPGKXhs5oy6ocrYXB/data.json');
        res.status(200).json({
            status: 200,
            data: response.data,
            });
        } catch (error) {
        console.error('Proxy error:', error);
        res.status(500).send('Server error');
    }
});

app.post("/caleg", async (req, res) => {
    const giveAccess = req.body.authorization
    if (!giveAccess == "adminasdipasdipo") {
        return res.json({
            status: 400,
            message: "Invalid Access"
        })
    }
    try {
        const response = await axios.get('https://kf.kobotoolbox.org/api/v2/assets/aT6sTvRwH39CH55VAqBh39/data.json');
        res.status(200).json({
            status: 200,
            data: response.data,
            });
        } catch (error) {
        console.error('Proxy error:', error);
        res.status(500).send('Server error');
    }
});
