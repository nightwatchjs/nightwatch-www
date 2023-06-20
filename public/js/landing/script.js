docReady(function () {
  // Copy Button
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
  addCopyEventListeners(
    '.call-to-action-content-action-copy-command-button',
    '.call-to-action-content-action-copy-command-text'
  );

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

  const breakpoint = window.matchMedia('(min-width: 769px)');

  let testimonialSwiper;

  if (window.innerWidth <= 768) {
    addStylesheet('https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css');
    addScript('https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js', null, function () {
      const testimonialSwiper = new Swiper('.swiper', {
        spaceBetween: 100,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 5000
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        a11y: {
          enabled: true
        }
      });

      const integrationSwiper = new Swiper('.integration-swiper', {
        spaceBetween: 100,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 5000
        },

        pagination: {
          el: '.swiper-pagination-integrations',
          clickable: true
        },
        a11y: {
          enabled: true
        }
      });
    });
  }

  addScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.0/gsap.min.js', null, function () {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenuContent = document.getElementsByClassName('mobile-navbar-content')[0];
    const body = document.getElementsByTagName('body')[0];

    var menuBar = gsap.timeline({paused: true});

    menuBar.to(
      '.bar-1',
      0.5,
      {
        attr: {d: 'M8,2 L2,8'},
        x: 1,
        ease: Power2.easeInOut
      },
      'start'
    );

    menuBar.to(
      '.bar-2',
      0.5,
      {
        autoAlpha: 0
      },
      'start'
    );

    menuBar.to(
      '.bar-3',
      0.5,
      {
        attr: {d: 'M8,8 L2,2'},
        x: 1,
        ease: Power2.easeInOut
      },
      'start'
    );

    menuBar.reverse();

    mobileMenuToggle.addEventListener('click', function () {
      menuBar.reversed(!menuBar.reversed());

      if (!mobileMenuContent.classList.contains('active')) {
        TweenLite.fromTo(mobileMenuContent, 0.3, {opacity: 0}, {opacity: 1, display: 'block'});
        mobileMenuContent.classList.add('active');
      } else {
        TweenLite.fromTo(mobileMenuContent, 0.3, {opacity: 1}, {opacity: 0, display: 'none'});
        mobileMenuContent.classList.remove('active');
      }
      body.classList.toggle('overflow-hidden');
    });
  });
});
