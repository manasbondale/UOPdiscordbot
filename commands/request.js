const request = require('request')
module.exports = {
	name: 'request',
	description: 'Request test!',
	execute(message, args) {
		request('https://www.leetcode.com/kuelf', { json: false }, (err, res, body) => {
            if (err) { return console.log(err); }
            console.log(body);
        });
	},
};