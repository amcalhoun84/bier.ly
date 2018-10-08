'use strict';

const mongoose      = require('mongoose'),
	User          = require('../model/userSchema'),
	ErrHandle     = require('./routeErrorHandlers');

exports.list_users = (req, res) => { 
	User.find({}, (err, user) => { 
		if(err) ErrHandle.errorEncountered(res, err);
		res.json(user);
	});

};

exports.create_user = (req, res) => { 
	var new_user = new User(req.body);
	new_user.save((err, user) => { 
		if(err) ErrHandle.errorEncountered(res, err);
		res.json(user);
	});
};

exports.get_user_by_id = (req, res) => { 
	User.findOne({_id: req.params.userId}, (err, user) => { 
		if(err) ErrHandle.errorEncountered(res, err);
		res.json(user);
	});
};

exports.get_user_by_name = (req, res) => { 
	User.findOne({'firstName' : req.params.firstName, 'lastName' : req.params.lastName}, (err, user) => { 
		if(err) ErrHandle.errorEncountered(res, err);
		res.json(user);
	});
};

exports.update_user_by_id = (req, res) => { 
	User.findByIdAndUpdate(req.params.userId, req.body, { new: true}, (err, user) => { 
		if(err) ErrHandle.errorEncountered(res, err);
		res.json(user);
	});
};

exports.delete_user_by_id = (req, res) => { 
	User.findByIdAndRemove(req.params._id, (err, user) => {
		if(err) ErrHandle.errorEncountered(res, err);
		res.json(user);
	});

};


