module.exports = {
  before: function (browser) {
    this.apiPage = browser.page.api.page();
    this.apiMethodPage = browser.page.api.method.index();
  },

  startApiPage: function () {
    this.apiPage.navigate();

    this.apiPage.expect.section('@apiContainer').to.be.visible;

    this.apiContainerSection = this.apiPage.section.apiContainer;
  },

  'Testing ApiPage Sidebar': function () {
    this.apiContainerSection
      .assert.visible('@apiSidebar')
      .assert.textContains('@apiSidebar', 'Browser');
  },

  'Testing ApiPage Content': function () {
    this.apiContainerSection
      .assert.visible('@apiMainContent')
      .assert.textContains('@apiMainContent', 'Nightwatch APIs');
  },

  startApiMethodPage: function () {
    this.apiMethodPage.navigate({apiMethod: 'clear'});

    this.apiMethodPage.expect.url().to.contain('/api/#clear');
    this.apiMethodPage.expect.section('@container').to.be.visible;

    this.apiMethodContainerSection = this.apiMethodPage.section.container;
  },

  'Testing ApiMethodPage Content': function () {
    this.apiMethodContainerSection.expect.element('@header').text.to.equal('.clear()');
  },

  after: function (browser) {
    browser.quit();
  }
};
