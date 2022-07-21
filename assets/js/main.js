/*
  Spectral by HTML5 UP
  html5up.net | @ajlkn
  Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {
  var $window = $(window),
    $body = $("body"),
    $wrapper = $("#page-wrapper"),
    $banner = $("#banner"),
    $header = $("#header");

  // Breakpoints.
  breakpoints({
    xlarge: ["1281px", "1680px"],
    large: ["981px", "1280px"],
    medium: ["737px", "980px"],
    small: ["481px", "736px"],
    xsmall: [null, "480px"],
  });
  
  // Load language
  WebsiteInternationalization.loadLanguage()

  // Load avaliable languuages
  WebsiteInternationalization.getAvaliableLanguages().forEach((language) => {
    let langItem = $(`<li></li>`)
      .addClass(`language-${language.lang}`)
      .append($('<a></a>').text(language.name))
      .click(() => {
        localStorage.setItem('selectedLang', language.lang)
        window.location.reload()
      })
    $('#languageMenu').append(langItem)
  })

  // Play initial animations on page load and send request to Github API.
  $window.on("load", function () {
    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);
  });

  // Get Minecraft BDS latest version (from official LiteLoaderBDS repo)
  fetch('https://raw.githubusercontent.com/LiteLDev/LiteLoaderBDS/main/Scripts/LINK.txt')
    .then(response => response.text())
    .then(bdsurl => {
      let BdsVersionInfo = $('#latest_bdsver')

      let BdsVersionInfoLanguage = BdsVersionInfo.data('language')

      let BdsVersion = bdsurl.split('/')
      BdsVersion = BdsVersion[BdsVersion.length - 1].split('-')
      BdsVersion = BdsVersion[BdsVersion.length - 1].replace('.zip', '')

      BdsVersionInfo.text(`BDS: ${BdsVersion}`)
    })

  // Get information about official repository LiteLoaderBDS
  // fetch('https://api.github.com/repos/LiteLDev/LiteLoaderBDS')
  //   .then(response => response.json())
  //   .then(information => {
  //     let IssuesCounter = $('#issues_count')
  //     let StarCounter = $('#star_count')

  //     let IssuesCounterLanguage = IssuesCounter.data('language')
  //     let StarCounterLanguage = StarCounter.data('language')

  //     switch (IssuesCounterLanguage) {
  //       case "en":
  //         IssuesCounter.text(`${information.open_issues} issues`)
  //         break;
  //       case "ru":
  //         IssuesCounter.text(`${information.open_issues} ишью.`)
  //         break;
  //       case "ch":
  //         IssuesCounter.text(`${information.open_issues} 个`)
  //         break;
  //     }

  //     switch (StarCounterLanguage) {
  //       case "en":
  //         StarCounter.text(`${information.stargazers_count} stars`)
  //         break;
  //       case "ru":
  //         StarCounter.text(`${information.stargazers_count} звезд(-ы)`)
  //         break;
  //       case "ch":
  //         StarCounter.text(`${information.stargazers_count} 颗星`)
  //         break;
  //     }
  //   });

  // Get latest version LiteLoaderBDS
  fetch("https://api.github.com/repos/LiteLDev/LiteLoaderBDS/tags")
    .then(response => response.json())
    .then(information => {
      let LatestTag = $('#latest_tag')
      LatestTag.text(`LiteLoader: ${information[0].name}`)
    });

  // Get running server count
  fetch("https://bstats.org/api/v1/plugins/15847/charts/servers/data")
    .then(response => response.json())
    .then(information => {
      let ServerCount = $('#server_count')
      switch (localStorage.getItem('selectedLang')) {
        case "en":
          ServerCount.text(`${information[information.length - 1][1]} Servers`)
          break;
        case "ru":
          ServerCount.text(`${information[information.length - 1][1]} серверы`)
          break;
        case "zh":
          ServerCount.text(`${information[information.length - 1][1]} 台服务器`)
          break;
      }
    });
    fetch("https://bstats.org/api/v1/plugins/15847/charts/players/data")
      .then(response => response.json())
      .then(information => {
        let PlayerCount = $('#player_count')
      switch (localStorage.getItem('selectedLang')) {
        case "en":
          PlayerCount.text(`${information[information.length - 1][1]} Players`)
          break;
        case "ru":
          PlayerCount.text(`${information[information.length - 1][1]} игроки`)
          break;
        case "zh":
          PlayerCount.text(`${information[information.length - 1][1]} 名玩家`)
          break;
      }
      });

  // Mobile?
  if (browser.mobile) $body.addClass("is-mobile");
  else {
    breakpoints.on(">medium", function () {
      $body.removeClass("is-mobile");
    });

    breakpoints.on("<=medium", function () {
      $body.addClass("is-mobile");
    });
  }

  // Scrolly.
  $(".scrolly").scrolly({
    speed: 1500,
    offset: $header.outerHeight(),
  });

  // Menu.
  $("#menu")
    .append('<a href="#menu" class="close"></a>')
    .appendTo($body)
    .panel({
      delay: 500,
      hideOnClick: true,
      hideOnSwipe: true,
      resetScroll: true,
      resetForms: true,
      side: "right",
      target: $body,
      visibleClass: "is-menu-visible",
    });

  // Header.
  if ($banner.length > 0 && $header.hasClass("alt")) {
    $window.on("resize", function () {
      $window.trigger("scroll");
    });

    $banner.scrollex({
      bottom: $header.outerHeight() + 1,
      terminate: function () {
        $header.removeClass("alt");
      },
      enter: function () {
        $header.addClass("alt");
      },
      leave: function () {
        $header.removeClass("alt");
      },
    });
  }
})(jQuery);
