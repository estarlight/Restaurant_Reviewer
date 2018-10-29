var mongoose = require('mongoose');
var Restaurant = mongoose.model('Restaurant');
var Review = mongoose.model('Review');

module.exports={
    index: (req,res)=>{
        Restaurant.find({}, function(err, restaurants){
            console.log('got restaurants', restaurants);
            res.json(restaurants);
        })
    },

    create: (req,res)=>{
        var newRestaurant = new Restaurant();
        newRestaurant.name = req.body.name;
        newRestaurant.cuisine = req.body.cuisine;
        newRestaurant.save(function(err){
            if(err){
                res.json(err);
            } else {
                res.json(newRestaurant);
            }
        })
    },

    show: (req, res) => {
        Restaurant.findOne({_id:req.params.id}, function (err, restaurant){
            if(err){
                res.json(err);
            }else{

                res.json(restaurant);
            }
        })
    },

    update: (req, res) => {
        
        Restaurant.findOne({_id: req.params.id}, function(err, restaurant){
            restaurant.name = req.body.name;
            restaurant.cuisine = req.body.cuisine;
            restaurant.save(function(err){
                if (err){
                    res.json(err);
                }else{
                    res.json(restaurant);
                }
            })
        })
    },

    addReview: (req, res) => {
        var newReview = new Review();
        newReview.name = req.body.name;
        newReview.stars = req.body.stars;
        newReview.review = req.body.review;
        newReview.save(function(err){
            if(err){
                return res.json(err);
            } 
            else {
                Restaurant.findOne({_id: req.params.id}, function(err, restaurant){
                    restaurant.reviews.push(newReview);
                    restaurant.save(function(error){
                        if(error){
                            return res.json(err);
                        }
                     
                    })
                })
                return res.json(newReview);
            }
        })
        
       


        // Restaurant.findOne({_id: req.params.id}, function(err, restaurant){
        //     var newReview = new Review();
        //     newReview.name = req.body.name;
        //     newReview.stars = req.body.stars;
        //     newReview.review = req.body.review;
        //     newReview.save(function(error){
        //         if(error){
        //             res.json(error);
        //         }

        //     })
        //     restaurant.reviews.push(newReview);
        //     restaurant.save(function(err){
        //         if (err){
        //             res.json(err);
        //         }
        //     })
        // })


    },

    delete: (req, res) => {
        Restaurant.remove({_id: req.params.id}, function(err){
            console.log(req.params.id);
           if(err){
               console.log("error in deleting");
               res.json(err);
           } else {
               console.log("successfully deleted");
               res.json({message: "Restaurant deleted"});
           }
           })
    }
}