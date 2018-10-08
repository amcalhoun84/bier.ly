'use strict';

exports.errorEncountered = (res, err) => {
	console.error('Problem encountered: ' + err);
	res.send(err);
};