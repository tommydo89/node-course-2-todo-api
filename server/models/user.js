var mongoose = require('mongoose');

var User = mongoose.model('User', {
	email: {
		type: String,
		required: true,
		minlength: 1,
		//removes leading and trailing white space
		trim: true
	}
});

module.exports = {
	User
};