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
        console.log(xhr.responseText);
    }
    xhr.send("choice="+choice+"&num1="+num1+"&num2="+num2);
}