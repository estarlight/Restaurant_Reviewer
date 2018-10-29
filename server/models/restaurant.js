
let mongoose = require('mongoose');

var ReviewSchema = new mongoose.Schema({
    name: {type: String, required: [true, "User name is required"], minlength: [3, "Name must be 3 or more characters"]},
    stars: {type: Number, required: [true, "Must select number of stars"]},
    review: {type: String, required: [true, "Review description is required"], minlength: [3, "Review must be 3 or more characters"]}
}, {timestamps: true})

var RestaurantSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Restaurant name is required"], minlength: [3, "Restaurant name must be 3 or more characters"] },
    cuisine: { type: String, required: [true, "Cuisine type is required"], minlength: [3, "Cuisine type must be 3 or more characters"] },
    reviews: [ReviewSchema]
}, { timestamps: true })

mongoose.model('Restaurant', RestaurantSchema);
mongoose.model('Review', ReviewSchema);