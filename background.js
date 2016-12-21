// A generic onclick callback function.
function genericOnClick(info, tab) {
    console.log("item " + info.menuItemId + " was clicked");
    console.log("info: " + JSON.stringify(info));
    console.log("tab: " + JSON.stringify(tab));

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {type: "summerize"}, function(response) {});
    });
}

//var summarizeMenu = chrome.contextMenus.create({"title": "summerize", "contexts":["selection"], "onclick": genericOnClick});
var highlightMenu = chrome.contextMenus.create({"title": "highlight", "contexts":["selection"], "onclick": genericOnClick});

