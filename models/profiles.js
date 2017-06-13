var mongoose = require('mongoose')

// create schema

var profileSchema = mongoose.Schema({
	name: String,
	college: String,
	field: String,
	semester: String,
	phone_number: String,
	facebook_link: String,
	photo: {type: String},
})

var Profile = module.exports = mongoose.model('Profile', profileSchema)

// getGenre function
module.exports.getProfile = function(callback, limit) {
	Profile.find(callback).limit(limit)
}
