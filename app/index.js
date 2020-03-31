var express = require("express");

var app = express();
// Default Port 3000 unless specified at start
const port = process.argv.slice(2)[0] || 3000;

app.listen(port, () => {
 console.log(`Server running on port ${port}`);
});

app.get("/villain", (req, res, next) => {
    res.json([{
        id: 1,
        type: 'covid19',
        displayName: 'CORONA',
        img: 'covid19.jpg'
    }]);
   });