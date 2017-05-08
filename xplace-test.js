
const assert = require( "assert" );
const xplace = require( "./xplace.js" );

assert.deepEqual( xplace( { "hello": "world" } ), { "world": "hello" }, "should be deeply equal" );

assert.deepEqual( xplace( { "name": 1 } ), { 1: "name" }, "should be deeply equal" );

assert.deepEqual( xplace( { } ), { }, "should be deeply equal" );

console.log( "ok" );
