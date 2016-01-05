'use strict';

var list = require( 'npm-list-author-packages' );
var urls = require( './../lib' );

// Generate badge URLs for all of an author's packages...
list( {'username': 'kgryte'}, onList );

function onList( error, list ) {
	var badge;
	var opts;
	var i;
	if ( error ) {
		throw error;
	}
	if ( !list.length ) {
		return;
	}
	opts = {
		'packages': list
	};
	for ( i = 0; i < list.length; i++ ) {
		badge = urls({
			'package': list[ i ]
		});
		console.log( badge );
	}
}
