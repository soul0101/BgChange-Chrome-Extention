let changeColor = document.getElementById('changeColor');

changeColor.addEventListener("input", () =>{
    setPageBackgroundColor(`body {
        background-color: ${changeColor.value};
    }`);
});

function setPageBackgroundColor(css){
    chrome.tabs.query({active: true, currentWindow: true}, ([tab]) => {
        if(!tab) return;
        chrome.scripting.insertCSS({
            target: {tabId: tab.id},
            css,        
        });
    });
}