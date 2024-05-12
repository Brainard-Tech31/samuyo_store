const express = require('express');
const path = require('path');
const app = express()
const port = 3000;
const fs = require('fs')
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'client', 'views'));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client/public')));
const homeRouter = require('./backend/router/home')
const uploadRouter = require('./backend/router/upload')
const linkRouter = require('./backend/router/links')
const searchRouter = require('./backend/router/search')
const loginRouter = require('./backend/router/login')
const signupRouter = require('./backend/router/signup')
const mailRouter = require('./backend/router/mailer')
const blog = require('./backend/router/blog')

app.use(homeRouter)
app.use(uploadRouter)
app.use(linkRouter)
app.use(searchRouter)
app.use(loginRouter)
app.use(signupRouter)
app.use(mailRouter)
app.use(blog)

// Serve sitemap file
app.get('/sitemap.xml', (req, res) => {
    const sitemapPath = path.join(__dirname, 'sitemap1.xml');
    fs.readFile(sitemapPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading sitemap file');
            return;
        }
        res.header('Content-Type', 'application/xml');
        res.send(data);
    });
});
app.get('/', (req, res) => res.render('pages/home',{}))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))