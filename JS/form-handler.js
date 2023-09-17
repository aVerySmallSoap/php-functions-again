let form = document.querySelector("#form");
form.addEventListener("submit", onSubmit);
function onSubmit(e){
    e.preventDefault();
    let choice = document.querySelector("#selection").value;
    let num1 = document.querySelector("#input1").value;
    let num2 = document.querySelector("#input2").value;
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "function.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onload = function () {
        createAlert(choice, xhr);
        document.querySelector("#choice-out").innerText = choice;
        document.querySelector("#total-out").innerText = xhr.responseText;
    }
    xhr.send("choice="+choice+"&num1="+num1+"&num2="+num2);
}

function createAlert(choice, xhr){
    let div = document.createElement("div");
    if(document.querySelector(".alert") != null){
        document.querySelector("#choice-out").innerText = choice;
        document.querySelector("#total-out").innerText = xhr.responseText;
        setInterval(() => div.remove(), 5000);
        return undefined;
    }
    div.className = "alert";
    div.innerHTML = "<div class=\"alert-body\">\n" +
        "            <div id=\"output\">" +
        "               <div class='inner-text'>"+
        "                <span id=\"choice-out\"></span>\n" +
        "                :\n" +
        "                <span id=\"total-out\"></span>" +
        "               </div>"+
        "            </div>\n" +
        "        </div>";
    div.style.transition = "2s ease-in"
    div.style.animation = "2s slideIn";
    setInterval(() => {
        div.style.transition = "2s ease-in"
        div.style.animation = "2s slideOut ease-out";
        setInterval(() => div.remove(), 2000);
    }, 5000)
    return document.body.prepend(div);
}