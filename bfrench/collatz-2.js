module.exports = function() { 

  console.log((function(s){var a=1,c={};function z(n){var t=n;if(c[n])return c[n];if(t==1){return 1}else{t=n%2==0?n/2:3*n+1;c[t]=z(t);return a+c[t]}}return(function(n){var m=0,l,x;for(var i=1;i++<=n;){l=z(i);if(l>m)m=l,x=i;a=1}return{s:x,l:m}})(s);})(1000000))

};
