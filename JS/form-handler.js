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
        if(xhr.responseText === "INVALID"){
            console.log("ERROR");
            createAlert("ERROR", "Please fill out all fields!");
            document.querySelector("#choice-out").innerText = "ERROR";
            document.querySelector("#total-out").innerText = "Please fill out all fields!";
        }else{
            createAlert(choice, xhr);
            document.querySelector("#choice-out").innerText = choice;
            document.querySelector("#total-out").innerText = xhr.responseText;
        }
    }
    xhr.send("choice="+choice+"&num1="+num1+"&num2="+num2);
}

function createAlert(choice, res){
    let div = document.createElement("div");
    if(document.querySelector(".alert") != null){
        document.querySelector("#choice-out").innerText = choice;
        document.querySelector("#total-out").innerText = res.responseText;
        setInterval(() => div.remove(), 5000);
    }else{
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
        }, 5000);
        document.body.prepend(div);
    }
}