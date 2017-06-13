var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var multer = require('multer')

// var storage = multer.diskStorage({
// 	destination: './public/assets/img/uploads/',
// 	// filename(req, file, cd) {
// 	// 	cd(null, file.filename+ '-' + Date.now() + '.' + file.originalname.split('.')[file.originalname.split('.').length-1]);
// 	// }
// });

const upload = multer({dest: './public/assets/images/uploads/'});
// const upload = multer({storage});
const Profile = require('../models/profiles')

router.post('/insert', upload.single('photo'),function(req, res) {
	// res.json({
	// 	error: false,
	// 	result: req.file.filename
	// })
	// console.log('res........', res);
	// console.log('res.1.......', res.body);
	// var profile = new Profile(req.body, req.file.filename);
	var profile = new Profile({
		name: req.body.name,
		college: req.body.college,
		field: req.body.field,
		semester: req.body.semester,
		phone_number: req.body.phone_number,
		facebook_link: req.body.facebook_link,
		photo: "/assets/images/uploads/" + req.file.filename,

	});
	profile.save(function(err, doc) {
		if(err) throw err
		res.redirect('/');
	});
	console.log('profile...,,,,,,,,,', profile);
})

module.exports = router;
