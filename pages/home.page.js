/**
 * Module that represents the page object pattern for the home page.
 */
var Page = require('./page');
var  HOME_PAGE = require('../selectors/homePage');

var HomePage = Object.create(Page, {
  searchBox: {
    get: function() {
      return browser.element(HOME_PAGE.inputSearch);
    },
  },
  
  searchButton: {
    get: function() {
      return browser.element(HOME_PAGE.searchButton);
    },
  },

  submitSearchButton: {
    get: function() {
      return browser.element(HOME_PAGE.submitButton);
    },
  }, 
});

module.exports = HomePage;
