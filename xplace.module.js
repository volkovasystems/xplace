"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"package": "xplace",
			"path": "xplace/xplace.js",
			"file": "xplace.js",
			"module": "xplace",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/xplace.git",
			"test": "xplace-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Switch key and value.
	@end-module-documentation

	@include:
		{
			"empt": "empt",
			"falzy": "falzy"
		}
	@end-include
*/

const empt = require( "empt" );
const falzy = require( "falzy" );

const xplace = function xplace( object ){
	/*;
		@meta-configuration:
			{
				"object:required": "object"
			}
		@end-meta-configuration
	*/

	if( falzy( object ) || typeof object != "object" ){
		throw new Error( "invalid object" );
	}

	if( empt( object ) ){
		return { };
	}

	return Object.keys( object ).reduce( ( clone, key ) => {
		clone[ object[ key ] ] = key;

		return clone;
	}, { } );
};

module.exports = xplace;
