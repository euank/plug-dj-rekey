let apiKey = '';

function setApiKey(key) {
  apiKey = key;
}


browser.webRequest.onBeforeRequest.addListener(
  function(details) {
    const url = new URL(details.url);
    // Only redirect once
    if (url.searchParams.get('pdj-redirected') !== null) {
      return;
    }
    if (url.searchParams.get('key') !== undefined && apiKey != '') {
      url.searchParams.set('key', apiKey);
      url.searchParams.set('pdj-redirected', true);
      return {
        redirectUrl: url.toString(),
      };
    }
  },
  {urls: ["https://content.googleapis.com/youtube/*"]},
  ["blocking"]
);
