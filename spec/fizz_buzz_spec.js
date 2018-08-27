var FizzBuzz = require("../fizz_buzz.js").FizzBuzz;

describe("FizzBuzz", function() {
  it("should return Fizz for n=1", function() {
    expect(FizzBuzz(1)).toEqual("Fizz");
  });

  it("should return Fizz Fizz for n=2", function() {
    expect(FizzBuzz(2)).toEqual("Fizz Fizz");
  });

  it("should return Fizz Fizz Buzz for n=3", function() {
    expect(FizzBuzz(3)).toEqual("Fizz Fizz Buzz");
  });

  it("should return correct for large number", function() {
    expect(FizzBuzz(9)).toEqual("Fizz Fizz Buzz Fizz Fizz Buzz Fizz Fizz Buzz");
  });
});
