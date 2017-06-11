var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')

const Profile = require('../models/profiles')

router.get('/delete/:id', function(req, res) {
	Profile.findOneAndRemove({ _id: req.params.id }, function(err, doc) {
		if(err) throw err
		res.redirect('/');
	})
})

router.post('/update', function(req,res) {
	Profile.findOneAndUpdate({_id: req.body._id}, {$set: req.body}, (err,doc) => {
		console.log('i am hereeeeeeeeeeeee', req.body);
		if(!err) res.redirect('/')
	})
})

module.exports = router;
