docReady(function () {

  // Copy button script
  // const copyButton = document.querySelector('.hero__action-copy-command-button');

  // copyButton.addEventListener('click', function () {
  //   const copyText = document.querySelector('.hero__action-copy-command-text');

  //   navigator.clipboard.writeText(copyText.textContent).then(() => {
  //     copyButton.innerHTML = 'Copied!';
  //   });
  //   setTimeout(() => {
  //     copyButton.innerHTML = 'Copy';
  //   }, 2000);
  // });

  function addCopyEventListeners(buttonSelector, textSelector) {
    const copyButton = document.querySelector(buttonSelector);

    copyButton.addEventListener('click', async function () {
      const copyText = document.querySelector(textSelector);

      try {
        await navigator.clipboard.writeText(copyText.textContent);
        copyButton.innerHTML = 'Copied!';
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }

      setTimeout(() => {
        copyButton.innerHTML = 'Copy';
      }, 2000);
    });
  }


  addCopyEventListeners('.hero__action-copy-command-button', '.hero__action-copy-command-text');
  addCopyEventListeners('.call-to-action-content-action-copy-command-button', '.call-to-action-content-action-copy-command-text');

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
      debug: false
    });
  });
});
