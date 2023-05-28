module.exports = {
  url: '/',

  sections: {
    navigation: {
      selector: '.navigation-content',

      sections: {
        nightwatchLogo: {
          selector: '.nightwatch-logo'
        },
        navigationLinks: {
          selector: '#navbarNavDropdown',

          sections: {
            navLinksLeft: {
              selector: '.nav-links-left',

              elements: {
                linkItems: {
                  selector: '.nav-item'
                }
              }
            },
            navLinksRight: {
              selector: '.nav-links-right',

              sections: {
                searchBar: {
                  selector: '#docsearch button'
                },
                discordLink: {
                  selector: 'a[aria-label="Nightwatch on discord"] img'
                },
                githubLink: {
                  selector: 'a[aria-label="Nightwatch on Github"] img'
                },
                versions: {
                  selector: '.nav-item.dropdown',

                  elements: {
                    versionsDropdownLink: {
                      selector: '#navbarDropdown'
                    },
                    versionsDropdownMenu: {
                      selector: 'ul.dropdown-menu li a.dropdown-item'
                    }
                  }
                }
              }
            }
          }
        }
      }
    },

    indexContainer: {
      selector: '#index-container',

      sections: {
        mainHeader: {
          selector: '.brand-message .main-heading h1'
        },

        video: {
          selector: '.youtube-video-place'
        },

        slider: {
          selector: '.integrations-content',

          elements: {
            sliderHeaders: {
              selector: 'ul.nav.nav-tabs'
            },
            sliderContent: {
              selector: '.tab-content'
            }
          }
        },

        community: {
          selector: '.community-section .container .community-content'
        }
      }
    }
  }
};
