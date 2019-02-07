var data = require("../data.json");

exports.addFriend = function(req, res) {    
	var friendAdd = {
		"name" : req.query.name,
		"description" : req.query.description,
		"imageURL" : "http://lorempixel.com/400/400/people"
	}
	data.friends.push(friendAdd);
	console.log(data);
	res.render('index',data);
 }