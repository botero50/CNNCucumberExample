const expect = require('chai').expect;
var {Given, When, Then} = require('cucumber');
var homePage = require('../../pages/home.page');
var page = require('../../pages/page');


Given(/^I open up the application "([^"]*)"$/, function (url) {
 page.open(url);
 
});
When(/^I search "([^"]*)"$/, function (textToSearch) {
  homePage.searchButton.click();
  homePage.searchBox.setValue(textToSearch);
  homePage.submitSearchButton.click();
});