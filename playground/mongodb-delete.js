// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// deleteMany
	// db.collection('Users').deleteMany({name: 'Tommy'}).then((res) => {
	// 	console.log(res);
	// });
	// deleteOne
	// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// });
	//findOneAndDelete
	db.collection('Users').findOneAndDelete({_id: new ObjectID('5bb2c11fa3a20838b84aef31')}).then((res) => {
		console.log(res);
	});
	// db.close();
});


