
'use strict';

function checked() {
	var ckbox = document.getElementById("cus_checkauto");
	
	/*chrome.tabs.executeScript(null,
      {code:"localStorage['cus_checkauto']=" + ckbox.checked.toString()});
    chrome.tabs.executeScript(null,
      //{file:"popup_detail.js"});
      {code:"console.log(\"fuck1\")"});
    */
    localStorage['cus_checkauto']=ckbox.checked;
    console.log("checked");
    //window.close();
}


document.addEventListener("DOMContentLoaded", function(){ //use to load script after domcontent element     
    var ckbox = document.getElementById("cus_checkauto");
    /*chrome.tabs.executeScript(null,{code:"console.log(\"fuck\")"});
    chrome.storage.sync.get(['cus_checkauto'], function(result) {
    	console.log(result);
    	if (result.cus_checkauto === null){
			chrome.storage.sync.set({"cus_checkauto": true}, function() {
        		ckbox.checked = true;
        	});
        	chrome.tabs.executeScript(null,{code:"console.log(\"fuck2\")"});
		} else {
			chrome.tabs.executeScript(null,{code:"console.log(\"" + result.cus_checkauto + "\")"});
			ckbox.checked = result.cus_checkauto;
			chrome.tabs.executeScript(null,{code:"console.log(\"fuck3\")"});
		}
		ckbox.addEventListener("change",checked,false);
     });*/
	
	//chrome.tabs.executeScript(null,
      //{file:"popup_detail.js"});
      //{code:"console.log(\"fuck2\")"});
	if (localStorage.getItem('cus_checkauto') === null){
        localStorage['cus_checkauto'] = true;
        console.log("checked");
      }
    console.log(localStorage['cus_checkauto']);
    ckbox.checked = (localStorage['cus_checkauto'] === 'true');
    document.getElementById("cus_checkauto").addEventListener("change",checked,false);
});

