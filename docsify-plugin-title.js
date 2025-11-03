(function () {
  var setPageTitle = function (hook, vm) {
    // Invoked on each page load after new HTML has been appended to the DOM
    hook.doneEach(function () {
      document.title = "FIRST wiki";
    });
  };

  // Add plugin to docsify's plugin array
  window.$docsify = window.$docsify || {};
  $docsify.plugins = [setPageTitle, ...($docsify.plugins || [])];
})();
