'use strict';

// MODULES //

var isObject = require( 'validate.io-object' );
var isString = require( 'validate.io-string-primitive' );


// VALIDATE //

/**
* FUNCTION: validate( opts, options )
*	Validates function options.
*
* @param {Object} opts - destination object
* @param {Object} options - function options
* @param {String} options.package - package name
* @param {String} [options.style] - badge style
* @param {String} [options.format] - badge format
* @returns {Error|Null} error object or null
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( 'invalid argument. Options argument must be an object. Value: `' + options + '`.' );
	}
	opts.package = options.package;
	if ( !isString( opts.package ) ) {
		return new TypeError( 'invalid option. Package option must be a string. Option: `' + opts.package + '`.' );
	}
	if ( options.hasOwnProperty( 'style' ) ) {
		opts.style = options.style;
		if ( !isString( opts.style ) ) {
			return new TypeError( 'invalid option. Style option must be a string. Option: `' + opts.style + '`.' );
		}
	}
	if ( options.hasOwnProperty( 'format' ) ) {
		opts.format = options.format;
		if ( !isString( opts.format ) ) {
			return new TypeError( 'invalid option. Format option must be a string. Option: `' + opts.format + '`.' );
		}
	}
	return null;
} // end FUNCTION validate()


// EXPORTS //

module.exports = validate;
