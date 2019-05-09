/**
 * Module that represents the page object pattern for the results page.
 */
var page = require('./page');
var RESULTS_PAGE = require('../selectors/resultPage');

var ResultsPage = Object.create(page, {
  getTotalCountOfResults: {
    get: function() {
      page.waitForElementEnabled(RESULTS_PAGE.results);
      var results = $$(RESULTS_PAGE.results).filter(function (link) {
        return link.isVisible();
      });
      return results.length;
    },
  },

  getErrorMessage: {
    get: function() {
      page.waitForElementEnabled(RESULTS_PAGE.errorMessage);
      return browser.element(RESULTS_PAGE.errorMessage);
    },
  },
});

module.exports = ResultsPage;
