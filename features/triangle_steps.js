/* eslint-disable no-console */
// features/support/steps.js
const { Given, When, Then } = require('cucumber');
var { calculate3thAngle } = require('../src/triangleCalculator');
var { assert } = require('chai');

var nock = require('nock');
var rp = require('request-promise');

var alpha;
var beta;
var delta;

Given('a triangle without any angle', function () {
});

When('the student insert the first angle {int}', function (number) {
  alpha = number;
});

When('after it the second angle {int}', function (number) {
  beta = number;
});

When('ask for calculate', function (){
});

Then('the last angle should contain {int}', function (number) {
  delta = undefined;
  var api = nock('http://localhost:8888')
    .post('/api/MathPortal/triangle/3thAngle/1.0.0', { alpha: alpha, beta: beta })
    .reply(200, calculate3thAngle(alpha, beta));

  var requestOptions = {
    method: 'POST',
    uri: 'http://localhost:8888/api/MathPortal/triangle/3thAngle/1.0.0',
    json: true,
    body: {alpha: alpha,beta: beta}
  };

  rp(requestOptions)
    .then(function (parsedBody) {
      // console.log(parsedBody);
      delta = parsedBody;
      assert.equal(number, delta, 'Delta isn\'t as expected');
    })
    .catch(function (err) {
      console.log(err);
      console.log('pending mocks: %j', api.pendingMocks());
      assert.fail('Mock API isn\'t called.');      
    });
});

When('the student insert an angle {int}', function (number) {
  alpha = number;
});

When('the sum of them is equal or more than {int} degrees', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the last angle should contain ERROR', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('one of them is equal or less than {int} degrees', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});