/**
 * Module that represents the page object pattern for the portal.
 * Common operations for automation in the web site.
 */
function Page() {}
Page.prototype.open = function(path) {
  browser.url(path);
};

Page.prototype.waitForElementVisible = function(locator) {
  browser.waitForVisible(locator);
};
Page.prototype.waitForElementEnabled = function(locator) {
  browser.waitForEnabled(locator);
};

module.exports = new Page();
