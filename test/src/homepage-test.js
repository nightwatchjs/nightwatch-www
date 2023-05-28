const {NIGHTWATCH_VERSION} = require('../../app.conf.json');

module.exports = {
  before: function (browser) {
    this.homepage = browser.page.home();
  },

  startHomePage: function () {
    this.homepage.navigate();

    this.homepage.expect.section('@navigation').to.be.visible;
    this.homepage.expect.section('@indexContainer').to.be.visible;

    this.navigationSection = this.homepage.section.navigation;
    this.contentSection = this.homepage.section.indexContainer;
  },

  'Testing HomePage Navigation': function (browser) {
    // Testing Nightwatch Logo
    this.navigationSection.expect.section('@nightwatchLogo').to.be.visible;

    this.navigationSection.section.nightwatchLogo
      .getAttribute('img', 'src', function (result) {
        const logoSrc = 'mini_logo.svg';

        this.assert.ok(result.value.includes(logoSrc), `Nightwatch logo contains "${logoSrc}"`);
      });

    // Testing Nightwatch Navigation Links
    this.navigationSection.expect.section('@navigationLinks').to.be.present;

    this.navigationLinksSection = this.navigationSection.section.navigationLinks;

    // Testing Nightwatch Navigation Links Left Side
    this.navigationLinksSection.expect.section('@navLinksLeft').to.be.visible;

    this.navigationLinksLeft = this.navigationLinksSection.section.navLinksLeft;

    this.navigationLinksLeft
      .waitForElementVisible('@linkItems')
      .findElements('@linkItems', function ({value}) {
        const promises = value.map(el =>
          new Promise((resolve) =>
            browser.elementIdText(el.getId(), (textResult) => resolve(textResult.value.trim()))
          )
        );

        Promise.all(promises).then((actualTexts) => {
          const expectedTexts = ['Guide', 'API', 'Community', 'Blog'];

          browser.assert.deepEqual(actualTexts, expectedTexts, 'Verify the nav items have the expected text');
          browser.assert.equal(value.length, 4, 'Verify there are 4 nav items');
        });
      });

    // Testing Nightwatch Navigation Links Right Side
    this.navigationLinksSection.expect.section('@navLinksRight').to.be.visible;

    this.navigationLinksRight = this.navigationLinksSection.section.navLinksRight;

    this.navigationLinksRight.expect.section('@searchBar').to.be.visible;
    this.navigationLinksRight.expect.section('@discordLink').to.be.visible;
    this.navigationLinksRight.expect.section('@githubLink').to.be.visible;
    this.navigationLinksRight.expect.section('@versions').to.be.visible;

    this.navigationVersionsSection = this.navigationLinksRight.section.versions;

    this.navigationVersionsSection
      .assert.visible('@versionsDropdownLink')
      .assert.textEquals('@versionsDropdownLink', NIGHTWATCH_VERSION)
      .click('@versionsDropdownLink');

    this.navigationVersionsSection
      .assert.elementPresent('ul.dropdown-menu')
      .findElements('@versionsDropdownMenu', function ({value}) {
        const promises = value.map(el =>
          new Promise((resolve) =>
            browser.elementIdText(el.getId(), (textResult) => resolve(textResult.value.trim()))
          )
        );

        Promise.all(promises).then((actualTexts) => {
          const expectedTexts = [`Latest ${NIGHTWATCH_VERSION}`, 'Version 1.7', 'Version 0.9', 'All Versions'];

          browser.assert.deepEqual(actualTexts, expectedTexts, 'Verify the version items have the expected text');
          browser.assert.equal(value.length, 4, 'Verify there are 4 version items');
        });
      });
  },

  'Testing HomePage Main Content': function () {
    // Testing Nightwatch Main Content
    this.contentSection.expect.section('@mainHeader').to.be.visible;
    this.contentSection.expect.section('@video').to.be.visible;
    this.contentSection.expect.section('@slider').to.be.visible;
    this.contentSection.expect.section('@community').to.be.visible;

    // Testing Nightwatch Slider in Main Content
    this.contentSection.section.slider
      .assert.visible('@sliderHeaders')
      .assert.visible('@sliderContent')
      .assert.elementsCount('.nav-item', 4)
      .assert.textEquals('.nav-item:first-child', 'Test Runners')
      .assert.elementsCount('.tab-pane', 4);
  },

  after: function (browser) {
    browser.quit();
  }
};
