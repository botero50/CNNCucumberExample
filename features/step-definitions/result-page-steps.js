const expect = require('chai').expect;
var {Then} = require('cucumber');
var resultsPage = require('../../pages/results.page');
var page = require('../../pages/page');

Then(/^I should see some results in the search grid/, function () {
  expect(resultsPage.getTotalCountOfResults).to.be.greaterThan(0);
});

Then(/^I should see "([^"]*)" in the search grid/, function ( errorMessage) {
  expect(resultsPage.getErrorMessage.getText()).to.be.equal(errorMessage);
});
