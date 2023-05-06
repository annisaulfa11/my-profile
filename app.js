const express = require("express");
const app = express();
const PORT = 8000;
//const HOST = '0.0.0.0';
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT)
console.log(`Running on ${PORT}`)