const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

const users = [];

app.use(express.static('public'));

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});
app.get('/api/christmas', (req, res) => {
    console.log('merry called!')
    res.json({
        isItChristmasYet: false
    });
});
app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
