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
      if (localStorage.getItem('cus_checkauto') === null){
        localStorage['cus_checkauto'] = true;
        console.log("fuck");
      }
      console.log("fucka");
      var autospeak=localStorage["cus_checkauto"];
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