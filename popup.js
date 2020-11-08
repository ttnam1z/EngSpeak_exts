
'use strict';

function checked() {
	var ckbox = document.getElementById("cus_checkauto");
	
	/*chrome.tabs.executeScript(null,
      {code:"localStorage['cus_checkauto']=" + ckbox.checked.toString()});
    chrome.tabs.executeScript(null,
      //{file:"popup_detail.js"});
      {code:"console.log(\"fuck1\")"});
    */
    chrome.storage.local.set({"cus_checkauto":ckbox.checked.toString()},function (){
          console.log("checked");
          window.close();
        });      
    //localStorage.setItem("cus_checkauto",ckbox.checked.toString() );
    //console.log("checked");
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
	
	
    //Set some content from browser action
    
    chrome.storage.local.get(['cus_checkauto'],function (obj){ 
    	if (typeof(obj["cus_checkauto"])==='undefined'){
        chrome.storage.local.set({"cus_checkauto":"true"},function (){
          console.log("Storage Succesful");
          ckbox.checked = true;
    	  document.getElementById("cus_checkauto").addEventListener("change",checked,false);
        });      
        
      } else {
      	console.log(obj['cus_checkauto']);
    	ckbox.checked = (obj["cus_checkauto"].toString() === 'true');
    	document.getElementById("cus_checkauto").addEventListener("change",checked,false);
      }
      	
    });

    


	//if (localStorage.getItem('cus_checkauto') === null){
    //    localStorage.setItem("cus_checkauto", "true");
    //    console.log("checked");
    //  }
    
    //console.log(localStorage['cus_checkauto']);
    //ckbox.checked = (localStorage.getItem('cus_checkauto') === 'true');
    //document.getElementById("cus_checkauto").addEventListener("change",checked,false);
});

