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
              */var _keys = require("babel-runtime/core-js/object/keys");var _keys2 = _interopRequireDefault(_keys);var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var empt = require("empt");
var falzy = require("falzy");

var xplace = function xplace(object) {
	/*;
                                      	@meta-configuration:
                                      		{
                                      			"object:required": "object"
                                      		}
                                      	@end-meta-configuration
                                      */

	if (falzy(object) || (typeof object === "undefined" ? "undefined" : (0, _typeof3.default)(object)) != "object") {
		throw new Error("invalid object");
	}

	if (empt(object)) {
		return {};
	}

	return (0, _keys2.default)(object).reduce(function (clone, key) {
		clone[object[key]] = key;

		return clone;
	}, {});
};

module.exports = xplace;

//# sourceMappingURL=xplace.support.js.map