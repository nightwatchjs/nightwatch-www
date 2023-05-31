docReady(function () {
  addScript('https://cdn.jsdelivr.net/npm/@docsearch/js@3', 'docsearch-script', function () {
    docsearch({
      //appId: 'H6WO0X38VS',
      //apiKey: '5784b55341d8e08305fc280817fbda21',
      indexName: 'nightwatchjs',
      container: '#docsearch',
      apiKey: '37c74f46d0eab021bc430dc17ebfc089',
      // indexName: 'nightwatchjs',
      transformItems: function (items) {
        return items.map(function (item) {
          if (!item.content) {
            item.content = item.url.replace('#apimethod-page', '');
          }
          if (item.hierarchy && !item.hierarchy.lvl1) {
            item.hierarchy.lvl1 = item.content.replace('https://nightwatchjs.org/', '');
            item.type = 'lvl1';
          }
          return item;
        });
      },
      debug: false,
    });
  });
});
