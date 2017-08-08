
const assert = require( "assert" );
const xplace = require( "./xplace.js" );

assert.deepEqual( xplace( { "hello": "world" } ), { "world": "hello" }, "should be equal to { 'world': 'hello' }" );

assert.deepEqual( xplace( { "name": 1 } ), { 1: "name" }, "should be equal to { 1: 'name' }" );

assert.deepEqual( xplace( { } ), { }, "should be equal to { }" );

console.log( "ok" );
