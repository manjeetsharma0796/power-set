const {describe,it} = require('node:test');
const {deepStrictEqual} = require('assert');

const {getPowerSet} = require('../src/set.js');

describe('getPowerSet', () => {
  it('should give 1 empty subset for empty set', () => {
    deepStrictEqual(getPowerSet([]), [[]]);
  });
});