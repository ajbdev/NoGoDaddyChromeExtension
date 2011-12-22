chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    console.log(tabId);
    console.log(changeInfo);
    console.log(tab);

});