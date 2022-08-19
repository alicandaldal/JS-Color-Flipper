const btn = document.getElementById("btn");
const copyBtn = document.getElementById("myCopy");
const body = document.querySelector("body");
const hex = [0,1,2,3,4,5,6,7,8,9, "A","B","C","D","E","F"];
const hex_value = document.getElementById("hex");
const input = document.getElementById('myHex');

body.style.backgroundColor ="#000000";
hex_value.innerHTML ="#000000";
btn.addEventListener("click",function(){
    let hex_key = "#";
    for(let i=0; i<6; i++){
        hex_key = hex_key + hex[Math.floor(Math.random()*hex.length)];
    }
    hex_value.innerHTML = hex_key;
    document.getElementById("myHex").value = hex_key;
    body.style.backgroundColor = hex_key;
    body.style.transition ="1s";
})

copyBtn.addEventListener("click",function(){
<<<<<<< HEAD
    var copyText = document.getElementById("myHex");s
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the color: " + copyText.value);
  });
=======
    input.type = 'text';
    input.select();
    document.execCommand("copy");
    input.type = 'hidden';
    alert("Copied the color: " + input.value);
});
>>>>>>> fda6e67654ff40446416829b77ac1246552a16ef
