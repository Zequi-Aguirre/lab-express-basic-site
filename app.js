const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.set("views", __dirname + "/views");
app.set("view engine", "hbs");


// ================== ROUTES ======================

app.get('/', (req, res, next) => {
    res.render('index');
});

app.get('/article', (req, res, next) => {
    res.render('article');

    });

app.get('/contact', (req, res, next) => {
    res.render('contact');

});


// =================================================


app.listen(PORT || 3000, () => console.log(`Listen on port ${PORT}`));