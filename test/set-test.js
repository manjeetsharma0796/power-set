const { describe, it } = require('node:test');
const { deepStrictEqual } = require('assert');

const { getPowerSet } = require('../src/set.js');

describe('getPowerSet', () => {
  it('should give 1 empty subset for empty set', () => {
    deepStrictEqual(getPowerSet([]), [[]]);
  });

  it('should give 2 subsets for single element set', () => {
    deepStrictEqual(getPowerSet([1]), [[], [1]]);
  });

  it('should give 4 subsets for set of 2 elements', () => {
    deepStrictEqual(getPowerSet([1, 2]), [[], [1], [2], [1, 2]]);
  });
});