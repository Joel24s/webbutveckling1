let intervalId = null;
let isBlue = false; 

function körDiskret() {

    document.body.style.backgroundColor="lightblue"
  }
  document.getElementById("inlineButton").addEventListener("click", körDiskret)

function fintext() {
    let facitTack = document.createElement("p");
    facitTack.textContent = "hej Jacob iskaffen smakade bra, du måste titta på videon https://www.youtube.com/watch?v=DbAGrJv1CSQ";
    document.body.appendChild(facitTack);

    facitTack.removeEventListener("click", fintext);  
}
if (facitTack) {
    facitTack.addEventListener("click", fintext);
}



function AndreasFavorit() {
    if (intervalId) {
        clearInterval(intervalId); 
        intervalId = null; 
    } else {
        intervalId = setInterval(() => {
            document.body.style.backgroundColor = isBlue ? "black" : "white";
            isBlue = !isBlue; 
        }, 10); 
    }
}

document.getElementById("salladslök").addEventListener("click", AndreasFavorit);



