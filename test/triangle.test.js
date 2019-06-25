// const { triangleCalculator } = require('../src/triangleCalculator');
const { assert } = require('chai');
const { calculate3thAngle } = require('../src/triangleCalculator');

describe('Calculate angles for a well formed triangle.', () => {
  it('90 degrees triangle.', () => {
    assert.equal(calculate3thAngle(90, 45), 45, 'The third angle isn\'t as expected.');
  });
});


