const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
	bcrypt.hash(password, salt, (err, hash) => {
		console.log(hash);
	});
});

var hashedPassword = '$2a$10$HQPBRnjBOALztD/WzkqEeuA4511BKQaBDpEDA1j5/O/9JDR/c.GFi';

bcrypt.compare(password, hashedPassword, (err, res) => {
	console.log(res);
});