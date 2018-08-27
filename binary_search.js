var BinarySearch = require("../fizz_buzz.js").BinarySearch;

describe("BinarySearch", function() {
  it('should return true if n is root node', function() {
    var data = [0,1,2,3,4,5,6,7,8];

    expect(new BinarySearch(data).find(4)).toEqual(true)
  });

  it('should return true if n is in left part of tree', function() {
    var data = [0,1,2,3,4,5,6,7,8];

    expect(new BinarySearch(data).find(1)).toEqual(true)
  });

  it('should return true if n is in right part of tree', function() {
    var data = [0,1,2,3,4,5,6,7,8];

    expect(new BinarySearch(data).find(7)).toEqual(true)
  });

  it('should return false if n is not in tree', function() {
    var data = [0,1,2,3,4,5,6,7,8];

    expect(new BinarySearch(data).find(9)).toEqual(false)
  });
};