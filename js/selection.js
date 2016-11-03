var selection = (function(){

    var smallest;
	var index;
    var sorted;

    var sortElements = function(elements){
        // Create a copy so we arent mutating the original array
        sorted = elements.slice(0, elements.length);

        var i, j;
        for(i = 0; i < sorted.length; i++){
            smallest = sorted[i];
			index = i;
            for(j = i; j < sorted.length; j++){
                if(sorted[j] < smallest){
					smallest = sorted[j];
					index = j;
				}
            }
			var temp = sorted[i];
			sorted[index] = temp;
			sorted[i] = smallest;
        }
    };

    return {
        sort: function(elements){
            sortElements(elements);
            return sorted;
        }
    };

})();

var x = [];
for(var i = 0; i < 100; i++){ x.push(Math.floor(Math.random() * 10)) }
console.time('selection');
for(var i = 0; i < 1000000; i++){selection.sort(x)};
console.timeEnd('selection');

// ~200ms for 1 million iterations of array size 6 = .0002 ms per iteration
// ~13000ms for 1 million iterations of array size 100 = .01 ms per iteration
