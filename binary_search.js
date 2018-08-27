var exports = module.exports={};

exports.BinarySearch = class BinarySearch {
  constructor(data) {
    this.data = data;
    this.found = false;
  }

  find(n, i_start, i_end) {
    var i_start = i_start || 0;
    var i_end = i_end || this.data.length - 1;
    var i_mid = (i_start + i_end) / 2;

    if (this.data[i_mid] && (this.data[i_mid] === n)) {
      this.found = true;
    } else if (this.data[i_mid] && (this.data[i_mid] > n)) {
      this.find(n, i_start, i_mid--);
    } else if (this.data[i_mid] && (this.data[i_mid] < n)) {
      this.find(n, i_mid++, i_end);
    }

    return this.found;
  }
};
