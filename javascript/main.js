const spclChar = ["@","#","$","%","^","&","*","!"]

function generatePass(){
    var alphaNum = Math.random().toString(36).slice(2);
    var spcl1 = spclChar[Math.abs(Math.ceil(Math.random()*10) - 4)]
    var spcl2 = spclChar[Math.abs(Math.ceil(Math.random()*10) - 4)]

    var password = spcl1+alphaNum+spcl2
    document.getElementById('pass-gen').innerHTML = password;
}

function copyToClipboard(id){
    var text = document.getElementById(id).innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);

    //show toast message on click after copying
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}