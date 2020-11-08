/*function highlightHandler(e) {
    // get the highlighted text
    chrome.tabs.executeScript(null,
      {code:"document.body.style.backgroundColor='" + e.target.id + "'"});
};
*/

// Unique ID for the className.
var MOUSE_VISITED_CLASSNAME = 'crx_mouse_visited';

// Previous dom, that we want to track, so we can remove the previous styling.
var prevDOM = null;

// Mouse listener for any move event on the current document.
document.addEventListener('mouseup', function (e) {
  console.log("catch event\n");
  if (window.getSelection) {
    chrome.storage.local.get(['cus_checkauto'],function (obj){ // storage has problem of sync so cant use
      
      //console.log(typeof(obj["cus_checkauto"])==='undefined');
      console.log(obj["cus_checkauto"]);
      //chrome.tabs.executeScript(null,
        //{code:"console.log(\"aa "+ JSON.stringify(obj).toString()+"\")"});

      if (typeof(obj["cus_checkauto"])==='undefined'){
        chrome.storage.local.set({"cus_checkauto":"true"},function (){
          console.log("Storage Succesful");
        });      
        obj["cus_checkauto"] = "true";
        console.log("fuck");
      }

      console.log("fucka");
      var autospeak=obj["cus_checkauto"].toString();
      if(autospeak === "true"){
        var  text = window.getSelection().toString();
        var msg = new SpeechSynthesisUtterance();
        var voices = window.speechSynthesis.getVoices();
        //console.log(voices);
        msg.text = text;
        msg.rate= 1;
        msg.volume=100;
        msg.pitch=1;
        msg.voice=voices[4];//english UK male
        window.speechSynthesis.speak(msg);
      }
    });

      
      
      
      
  // Lets check if our underlying element is a DIV.
  /*if (srcElement.nodeName == 'DIV') {

    // For NPE checking, we check safely. We need to remove the class name
    // Since we will be styling the new one after.
    if (prevDOM != null) {
      prevDOM.classList.remove(MOUSE_VISITED_CLASSNAME);
    }

    // Add a visited class name to the element. So we can style it.
    srcElement.classList.add(MOUSE_VISITED_CLASSNAME);

    // The current element is now the previous. So we can remove the class
    // during the next iteration.
    prevDOM = srcElement;
    
  }*/
    
  }
}, false);