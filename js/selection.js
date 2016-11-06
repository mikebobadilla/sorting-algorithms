module.exports = (function(){

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
