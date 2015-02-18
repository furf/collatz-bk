module.exports = function() {
  
function collatz(t) {
  var a = 1,
      b = 0,
      c = 0,
      o = {};
  function x(a) {
    var l = 0,
        d = a;
    while (d > 1) {
      if (o[d] === undefined) {
        if (d % 2 === 0) {
          d = d / 2;
          l++;
        } else {
          d = (3 * d) + 1;
          l++;
        }
      } else {
        l = l + o[d];
        d = 0;
      }
    }
    o[a] = l;
  }
  while(a <= t) {
    if (o[a] === undefined) {
      x(a);
    }
    if (o[a] > b) {
      b = o[a] + 1;
      c = a;
    }
    a++;
  }
  console.log(c, b);
}
collatz(999999);

};
