const express = require('express');
const cors = require('cors')
const app = express();
const path = require('path');
const fs = require('fs')
const port = 3000;
const corsOptions = {
    origin: ['https://fareskouki.com', 'http://localhost:8080'],
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.post('/visit', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.ip;

    const filePath = path.join(__dirname, 'visits.json');


    let data = {};
    if (fs.existsSync(filePath)) {
        data = JSON.parse(fs.readFileSync(filePath));
    }

    data[ip] = (data[ip] || 0) + 1;

    fs.writeFileSync(filePath, JSON.stringify(data));

    res.status(200).send('Visite enregistrée');
});


app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
