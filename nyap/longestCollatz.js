module.exports = function() {
	
var longestCollatz = function(min,max){

	var cache = {},
		seqCount = 1,
		longest,
		i;

	while (min <= max) {

		cache[min] = 1;
		i = min;


		while (i != 1) {

			if (i%2 === 0) {
				i/=2;

			} else {
				i = 3*i + 1;
			}

			if (cache[i] !== undefined) {
				cache[min]+= cache[i];
				break;
			}

			cache[min]+= 1;
		}

		if (seqCount < cache[min]) {
			seqCount = cache[min];
			longest = min;
		}

		min++;
	}

	return longest;
};

console.log( longestCollatz(1,1000000) );

};
