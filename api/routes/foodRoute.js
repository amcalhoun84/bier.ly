'use strict'

const mongoose   =   require('mongoose'),
	Beer       =   require('../model/beerSchema'),
	Food       =   require('../model/foodSchema'),
	ErrHandle  =   require('./routeErrorHandlers');


exports.list_foods = (req, res) => { 
	Food.find({}, (err, food) => { 
		if(err) ErrHandle.errorEncountered(res, err);
		res.json(food);
	});
};

exports.create_food = (req, res) => { 
	var new_food = new Food(req.body);
	new_food.save((err, food) => { 
		if(err) ErrHandle.errorEncountered(res, err);
		res.json(food);
	});
};

exports.get_food_by_id = (req, res) => { 
	Food.findById({'_id' : req.params.foodId}, (err, food) => { 
		if(err) ErrHandle.errorEncountered(res, err);
		res.json(food);
	});
};

exports.get_food_by_name = (req, res) => { 
	Food.findOne({'name' : { 'regex' : req.params.foodName, '$options' : 'i'} }, (err, food) => {
		if(err) ErrHandle.errorEncountered(res, err);
		res.json(food);
	});
    
};

exports.update_food_by_id = (req, res) => { 
	Food.findOneAndUpdate({_id : req.params.foodId}, req.body, { new: true }, (err, food) => {
		if(err) ErrHandle.errorEncountered(res, err);
		res.json(food);
	});

};
exports.update_food_by_name = (req, res) => { 
	Food.findOneAndUpdate({'name' : req.params.foodName}, req.body, { new: true }, (err, food) => {
		if(err) ErrHandle.errorEncountered(res, err);
		res.json(food);
	});

};

exports.delete_food_by_id = (req, res) => { 
	Food.remove({_id: req.params.foodId}, (err, food) => { 
		if(err) ErrHandle.errorEncountered(res, err);
		res.json(food);        
	});
};

exports.delete_food_by_name = (req, res) => { 
	Food.remove({'name' : req.params.foodName}, (err, food) => { 
		if(err) ErrHandle.errorEncountered(res, err);
		res.json(food);        
	});
};


// This is the simple one, just tells you what beer might go best with what kind / type of food you are eating. 
// The list is SUPER stripped down right now. It will expand.
exports.food_pairs_with_beer_by_type = function(req, res, next) { 
	Food.findOne({'food_type' : req.params.foodType}, (err, food) => {
		if(err) ErrHandle.errorEncountered(res, err);
		console.log('Food: ' + food);
		var dbRef = food.pairs_with;
		console.log(`Database Length: ${dbRef.length} Reference: ${dbRef}\n\n`);
		

	});
};

exports.food_pairs_with_beer_by_name = function(req, res, next) { 
	Food.findOne({'name' : req.params.foodName}, (err, food) => {
		if(err) ErrHandle.errorEncountered(res, err);
		//console.log('Food: ' + food);
		var dbRef = food.pairs_with;
		//console.log(`Database Length: ${dbRef.length} Reference: ${dbRef}\n\n`);
		Beer.find({'beer_type' : dbRef}, (err, beer) => { 
			if(err) ErrHandle.errorEncountered(res, err);
			res.json(beer);			
		});
		
	});
};