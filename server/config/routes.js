var restaurants = require('./../controllers/restaurants.js');
var path = require('path');

module.exports = function(app){
    app.get('/api/restaurants',restaurants.index);
    app.post('/api/restaurants/new', restaurants.create);
    app.get('/api/restaurants/:id', restaurants.show);
    app.get('/api/restaurants/:id/review', restaurants.show);
    app.post('/api/restaurants/:id/review', restaurants.addReview);
    app.put('/api/restaurants/:id/edit', restaurants.update);
    app.delete('/api/delete/:id', restaurants.delete);


    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
        });
}