const loadingImg = "https://mir-s3-cdn-cf.behance.net/project_modules/disp/04de2e31234507.564a1d23645bf.gif"

function waitForElm(selector) {
  return new Promise(resolve => {
      if (document.querySelector(selector)) {
          return resolve(document.querySelector(selector));
      }

      const observer = new MutationObserver(mutations => {
          if (document.querySelector(selector)) {
              observer.disconnect();
              resolve(document.querySelector(selector));
          }
      });

      observer.observe(document.body, {
          childList: true,
          subtree: true
      });
  });
}

waitForElm('.dashboard-loading-screen').then((element) => {
    element.innerHTML = `<img style="margin:auto;" src="${loadingImg}" />`;
});
prism.on('dashboardunloaded', (ev, args) => {
    waitForElm('.dashboard-loading-screen').then((element) => {
        element.innerHTML = `<img style="margin:auto;" src="${loadingImg}" />`;
    });
});