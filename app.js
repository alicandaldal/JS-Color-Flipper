const btn = document.getElementById("btn");
const copyBtn = document.getElementById("myCopy");
const body = document.querySelector("body");
const hex = [0,1,2,3,4,5,6,7,8,9, "A","B","C","D","E","F"];
const hex_value = document.getElementById("hex");
const cpy = document.getElementById("myCopy");

body.style.backgroundColor ="#000000";
hex_value.innerHTML ="#000000";
btn.addEventListener("click",function(){

    let hex_key = "#";
    for(let i=0; i<6; i++){
    const index = Math.floor(Math.random()*hex.length)
    hex_key = hex_key + hex[index];
    }
    
    hex_value.innerHTML = hex_key;
    document.getElementById("myHex").value = hex_key;
    body.style.backgroundColor = hex_key;
    body.style.transition ="1s";
})

copyBtn.addEventListener("click",function(){
    var copyText = document.getElementById("myHex");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the color: " + copyText.value);
  });