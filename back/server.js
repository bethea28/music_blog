const express = require('express');
const app = express();
const mongoose = require ('mongoose');

const postModel = require ('./posts/posts_model')
const Music = mongoose.model('Music')

mongoose.connect('mongodb://localhost/musicblog_database');

const db = mongoose.connection;

	app.get('/', function (req, res) {
	   
    //Find all posts and log to console
	    Music.find({}, (err, data) => {
	      
		  res.send({data:data});

		})  

	});

	app.get('/post', function (req, res) {
	  res.send('it works man damn');
	});
	
	app.get('/post2', function (req, res) {
	  res.send('3rd post');
	});

db.on('error', console.error.bind(console, 'connection error:'));

db.on('open', () => {
	console.log('db connection opened!')

	app.listen(3000, function () {
	  console.log('Example app listening on port 3000!');

		Music.create({title:'1ST POST'},(err,data)=>{
			if(err) console.log('error')
			// else console.
		})

		// Music.create({title:'2ND POST'},(err,data)=>{
		// 	if(err) console.log('error')
		// 	else console.log('post created')
		// })

		// Music.create({title:'3RD POST'},(err,data)=>{
		// 	if(err) console.log('error')
		// 	else console.log('post created')
		// })

		// Music.create({title:'4th POST'},(err,data)=>{
		// 	if(err) console.log('error')
		// 	else console.log('post created')
		// })
	});

})

