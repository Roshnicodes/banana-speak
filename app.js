var btntranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
function clickHandler(){
    outputDiv.innerText = "fdfdsfsdgs" + txtInput.value;
    
};


btntranslate.addEventListener("click", clickHandler())
    
