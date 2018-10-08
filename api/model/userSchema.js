'use strict';

const mongoose        = require('mongoose'),
	Schema            = mongoose.Schema,
	bcrypt            = require('bcrypt'),
	SALT_WORK_FACTOR  = 15;

var ObjectId = Schema.ObjectId;


const userSchema = new Schema({
/* 	_id:
    {
    	type: Number,
    	require : true,
    	index: { unique: true }
    },
 */
	username: {
		type: String,
		require: true,
		index: { unique: true } 
	},

	firstName: { type: String, 
				 require: true
	},

	lastName: { 
		type: String,
		required: true

	},

	email: { 
		type: String,
		require: true,
		unique: true
	},

	password: { type: String, required: true }

});

userSchema.pre('save', function(next)  { 
    
	var user = this;
	if(!user.isModified('password')) return next();
    
	// Generate Salt - go with the tutorial at https://www.mongodb.com/blog/post/password-authentication-with-mongoose-part-1
	bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
		if(err) return next(err);

		bcrypt.hash(user.password, salt, function(err, hash) {
			if(err) return next(err);

			user.password = hash;
			next();
		});

	});
});

userSchema.methods.comparePassword = (candidatePassword, cb) => { 
	bcrypt.compare(candidatePassword, this.password, function(err, isMatch) { 
		if(err) return cb(err);
		cb(null, isMatch);
	});
};

module.exports = mongoose.model('User', userSchema);