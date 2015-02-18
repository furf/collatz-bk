module.exports = function() {
  
function findBiggest(n) {
 
  var maxSteps = 0,
      maxInteger = 0,
      steps,
      i = 1,
      cache = {};

  function count (a, steps) {
    var b = a & 1 ? 3 * a + 1 : a / 2;
    steps = steps + 1;
    return b > 1 ? cache[b] ? cache[b] + steps : count(b, steps) :  steps;
  }
 
  for (; i < n; ++i) {
    cache[i] = steps = count(i, 0);
    if (steps > maxSteps) {
      maxSteps = steps;
      maxInteger = i;
    }
  }
  
  return maxInteger;
}
 
var biggest = findBiggest(1000000); // 837799
 
console.log(biggest);

};
