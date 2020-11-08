/*chrome.tabs.executeScript( {
	    code: "window.getSelection().toString();"
	}, function(selection) {
	    document.getElementById("output").value = selection;    // get selected
});



chrome.declarativeContent.onPageChanged.removeRules(undefined, function() { // show popup in navigation bar
  chrome.declarativeContent.onPageChanged.addRules([{
    conditions: [new chrome.declarativeContent.PageStateMatcher({
      pageUrl: {hostEquals: ''},
    })
    ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
  }]);
});

*/
