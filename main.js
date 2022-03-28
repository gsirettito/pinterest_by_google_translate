chrome.action.onClicked.addListener(function(tab) {
  //console.log(tab.id);
  //console.log(tab.url);
  url = tab.url;
  urlParts = /^(?:\w+\:\/\/)?([^\/]+)([^\?]*)\??(.*)$/.exec(url);
  hostname = urlParts[1];
  path = urlParts[2];
  if(/^www.pinterest\..*$/.exec(hostname) == null) {
    chrome.tabs.create({ url: "https://www-pinterest-com.translate.goog/?_x_tr_sl=es&_x_tr_tl=en&_x_tr_hl=es&_x_tr_pto=wapp" });
    return;
  }
  newURL = "https://www-pinterest-com.translate.goog" + path + "?_x_tr_sl=es&_x_tr_tl=en&_x_tr_hl=es&_x_tr_pto=wapp";
  //chrome.tabs.create({ openerTabId: tab.id, url: newURL });
  chrome.tabs.update( tab.id, { url: newURL } );
});

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'loading') {
    console.log(tab.id);
    console.log(tab.url);
    url = tab.url;
    urlParts = /^(?:\w+\:\/\/)?([^\/]+)([^\?]*)\??(.*)$/.exec(url);
    hostname = urlParts[1];
    path = urlParts[2];
    if(/^www.pinterest\..*$/.exec(hostname) == null) {
      return;
    }
    newURL = "https://www-pinterest-com.translate.goog" + path + "?_x_tr_sl=es&_x_tr_tl=en&_x_tr_hl=es&_x_tr_pto=wapp";
    chrome.tabs.update( tab.id, { url: newURL } );
  }
})