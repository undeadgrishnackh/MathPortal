// features/support/steps.js
const { Given, When, Then } = require("cucumber");
const { expect } = require("chai");
const TriangleAPI = require('../../src/triangleAPI');

let triangle;

Given('a triangle without any angle', function () {
  return 'pending';
});

When("the student insert the first angle {int}", function (number) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When("after it the second angle {int}", function (number) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When("ask for calculate", function (number){
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
})

Then("the last angle should contain {int}", function (number) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('the student insert an angle {int}', function (int) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('the sum of them is equal or more than {int} degrees', function (int) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the last angle should contain ERROR', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('one of them is equal or less than {int} degrees', function (int) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});