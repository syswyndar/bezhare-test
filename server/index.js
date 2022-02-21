const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors')
const Controller = require('./controllers/index')

app.use(cors());

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.get('/allBusiness', Controller.fetchAllBusiness)
app.get('/allBusiness/search/:name', Controller.filtering)
app.get('/categories', Controller.fetchCategories)

app.listen(port, () => {
    console.log('listening on port ' + port);
})