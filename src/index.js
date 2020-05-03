'use strict'

const fibonacci = () => {
    let results = [];
    let value = 0;
    for(let i = 0; value < 350 ;i++) {
      if (results.length < 2) {
        results.push(i)
        } else {
        value = results[i - 2] + results[i - 1]
        results.push(value)
      }
    }
    return results;
  }

const isFibonacci = num => fibonacci().includes(num);

module.exports = {
    fibonacci,
    isFibonacci
}
