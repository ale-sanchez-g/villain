var express = require("express");
const path = require('path');

var app = express();
// Default Port 3000 unless specified at start
const port = process.argv.slice(2)[0] || 3000;

app.listen(port, () => {
 console.log(`Server running on port ${port}`);
});

app.get("/villain", (req, res, next) => {
    console.log('Returning villain list');
    res.json([
        {
            "id": 1,
            "type": "covid19",
            "displayName": "CORONA",
            "images": [
                {
                    "id": 1,
                    "name": "covid19_1.jpg",
                    "credit": "https://unsplash.com/@cdc"
                },
                {
                    "id": 2,
                    "name": "covid19_2.jpg",
                    "credit": "https://unsplash.com/@cdc"
                },
            ]
        }
    ]);
   });

app.use('/img', express.static(path.join(__dirname,'img')));
