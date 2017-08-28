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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInhwbGFjZS5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImVtcHQiLCJyZXF1aXJlIiwiZmFsenkiLCJ4cGxhY2UiLCJvYmplY3QiLCJFcnJvciIsInJlZHVjZSIsImNsb25lIiwia2V5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlEQSxJQUFNQSxPQUFPQyxRQUFTLE1BQVQsQ0FBYjtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkOztBQUVBLElBQU1FLFNBQVMsU0FBU0EsTUFBVCxDQUFpQkMsTUFBakIsRUFBeUI7QUFDdkM7Ozs7Ozs7O0FBUUEsS0FBSUYsTUFBT0UsTUFBUCxLQUFtQixRQUFPQSxNQUFQLHVEQUFPQSxNQUFQLE1BQWlCLFFBQXhDLEVBQWtEO0FBQ2pELFFBQU0sSUFBSUMsS0FBSixDQUFXLGdCQUFYLENBQU47QUFDQTs7QUFFRCxLQUFJTCxLQUFNSSxNQUFOLENBQUosRUFBb0I7QUFDbkIsU0FBTyxFQUFQO0FBQ0E7O0FBRUQsUUFBTyxvQkFBYUEsTUFBYixFQUFzQkUsTUFBdEIsQ0FBOEIsVUFBRUMsS0FBRixFQUFTQyxHQUFULEVBQWtCO0FBQ3RERCxRQUFPSCxPQUFRSSxHQUFSLENBQVAsSUFBeUJBLEdBQXpCOztBQUVBLFNBQU9ELEtBQVA7QUFDQSxFQUpNLEVBSUosRUFKSSxDQUFQO0FBS0EsQ0F0QkQ7O0FBd0JBRSxPQUFPQyxPQUFQLEdBQWlCUCxNQUFqQiIsImZpbGUiOiJ4cGxhY2Uuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwieHBsYWNlXCIsXG5cdFx0XHRcInBhdGhcIjogXCJ4cGxhY2UveHBsYWNlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ4cGxhY2UuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwieHBsYWNlXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy94cGxhY2UuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJ4cGxhY2UtdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRTd2l0Y2gga2V5IGFuZCB2YWx1ZS5cblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiZW1wdFwiOiBcImVtcHRcIixcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGVtcHQgPSByZXF1aXJlKCBcImVtcHRcIiApO1xuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcblxuY29uc3QgeHBsYWNlID0gZnVuY3Rpb24geHBsYWNlKCBvYmplY3QgKXtcblx0Lyo7XG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcblx0XHRcdHtcblx0XHRcdFx0XCJvYmplY3Q6cmVxdWlyZWRcIjogXCJvYmplY3RcIlxuXHRcdFx0fVxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdCovXG5cblx0aWYoIGZhbHp5KCBvYmplY3QgKSB8fCB0eXBlb2Ygb2JqZWN0ICE9IFwib2JqZWN0XCIgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBvYmplY3RcIiApO1xuXHR9XG5cblx0aWYoIGVtcHQoIG9iamVjdCApICl7XG5cdFx0cmV0dXJuIHsgfTtcblx0fVxuXG5cdHJldHVybiBPYmplY3Qua2V5cyggb2JqZWN0ICkucmVkdWNlKCAoIGNsb25lLCBrZXkgKSA9PiB7XG5cdFx0Y2xvbmVbIG9iamVjdFsga2V5IF0gXSA9IGtleTtcblxuXHRcdHJldHVybiBjbG9uZTtcblx0fSwgeyB9ICk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHhwbGFjZTtcbiJdfQ==
//# sourceMappingURL=xplace.support.js.map
