var exports = module.exports={};

exports.FizzBuzz = (n) => {
  output = '';

  for(i=1; i <= n; i++) {
    if(i%3 == 0) {
      output += " Buzz"
    } else {
      output += " Fizz"
    }
  }

  return output.trim();
};
