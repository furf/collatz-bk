var tests = [{
  name: 'bill',
  collatz: require('./bfrench/collatz-2')
}, {
  name: 'juan',
  collatz: require('./jprado/collatz')
}, {
  name: 'ning',
  collatz: require('./nyap/longestCollatz')
}, {
  name: 'tom',
  collatz: require('./tharrison/sync-cache')
}, {
  name: 'furf',
  collatz: require('./furf/collatz')
}];


// 1. Shuffle testing order for "fairness"
// 2. Run tests
// 3. Sort winners by score
// 4. Create leaderboard
var results = tests.sort(shuffle).map(test).sort(byScore).map(toLeaderboard).join('\n');

console.log(results);

function shuffle() {
  return .5 - Math.random();
}

function test(test, order) {

  // Mute logging for testing purposes.
  var log = console.log;
  console.log = function() {};
  
  // Start timer.
  var time = process.hrtime();

  // Run function.
  test.collatz();

  // Calculate high-res difference.
  var diff = process.hrtime(time);
  var nano = diff[0] * 1e9 + diff[1];

  // Unmute log.
  console.log = log;

  return {
    order: order,
    name: test.name,
    score: nano / 1e9
  };
}

function byScore(a, b) {
  return a.score - b.score;
}

function toLeaderboard(test, i) {
  return [
    '#' + (i + 1),
    test.name,
    test.score,
    '(' + test.order + ')'
  ].join('\t');
}