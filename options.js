// on load, restore it

browser.storage.sync.get("apiKey")
  .then(function(val) {
    if (val.apiKey !== undefined) {
      document.querySelector("#apiKey").value = val.apiKey;
      browser.extension.getBackgroundPage().setApiKey(val.apiKey);
    }
  }, function(error) {
    console.log(`could not restore apiKey: ${error}`);
  })

document.querySelector("form").onsubmit = function(ev) {
  ev.preventDefault();
  let apiKey = document.querySelector("#apiKey").value.trim();
  if (apiKey !== '') {
    browser.extension.getBackgroundPage().setApiKey(apiKey);
  }
  browser.storage.sync.set({
    apiKey: document.querySelector("#apiKey").value.trim(),
  });
};
