module.exports = {
  url: '/api/',

  sections: {
    apiContainer: {
      selector: '#api-container',

      elements: {
        apiSidebar: {
          selector: '#doc-sidebar-nav .nav.bs-sidenav'
        },

        apiMainContent: {
          selector: '.docs-section .page-content'
        }
      }
    }
  }
};
