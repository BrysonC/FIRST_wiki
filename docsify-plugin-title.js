(function () {
  var setFirstWikiTitle = function (hook, vm) {
    // Invoked on each page load after new HTML has been appended to the DOM
    hook.doneEach(function () {
      document.title = "FIRST wiki";
    });
  };

  // Add plugin to docsify's plugin array
  $docsify = $docsify || {};
  $docsify.plugins = [].concat(setFirstWikiTitle, $docsify.plugins || []);
})();
