var express = require('express');
var router = express.Router();

const Profile = require('../models/profiles')


/* GET home page. */
router.get('/', function(req, res, next) {
	Profile.getProfile(function(err, profiles) {
		if(err) throw err
		res.render('index', {title: 'WLiT Bootcamp 2017', profiles});
	})
});

router.get('/add', function(req, res) {
	res.render('add', {title: 'Add', action: 'add'});
})

router.get('/edit/:id', function(req, res) {
	Profile.findOne({ _id: req.params.id }, function(err, profile) {
		res.render('edit', {title: 'Edit', profile});
		if(err) throw err
	})
})

router.get('/profile/:id', function(req, res) {
	Profile.findOne({ _id: req.params.id }, function(err, profile) {
		console.log('profile123...........', profile);
		res.render('profile', {profile});
		if(err) throw err
	})
})

module.exports = router;
