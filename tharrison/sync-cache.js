module.exports = function() {
	
// Tom Harrison

var cache = {};

function generate(i) {
	if (i == 1) {
		return 1;
	}
	if ((i & 1) !== 0) {
		i = (3 * i) + 1;
	} else {
		i = i / 2;
	}
	var s = cache[i];
	if (!s) {
		s = generate(i);
		cache[i] = s;
	}
	return 1 + s;
}

var largestN = [], largestS = 0;
for (var curr = 1; curr <= 999999; curr++) {
	var s = generate(curr);
	if (s > largestS) {
		largestS = s;
		largestN = [curr];
	} else if (s === largestS) {
		largestN.push(curr);
	}
}

console.log(largestN, '=', largestS);

};
