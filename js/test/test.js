var selection = require('../selection');
var assert = require('assert');

describe('Selection Sort', function(){

	describe('#inital sort', function(){
		it('should return [1,2,3]', function(){
			assert.deepEqual([ 1, 2, 3 ], selection.sort([3,2,1]));
		});
	});

	describe('#random sort', function(){
		var x = [];
		for(var i = 0; i < 100; i++){ x.push(Math.floor(Math.random() * 1000)) }
		var y = x.sort(function(a,b){return a - b});
		it('should return ' + y, function(){
			assert.deepEqual(y, selection.sort(x));
		});
	});
});
